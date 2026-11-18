/* Núcleo compartilhado: conexão em tempo real (MQTT público, sem login), utilidades e filtro de nomes. */
(function () {
  const params = new URLSearchParams(location.search);

  // Canal da sala. Pode ser trocado com ?sala=nome (útil para testes).
  const ROOM = (params.get('sala') || 'debate-palestina-3b7k9q').replace(/[^a-z0-9-]/gi, '');
  const BASE = 'dp/' + ROOM;

  // Dois servidores públicos ao mesmo tempo: se um cair, o outro segura.
  const BROKERS = params.get('broker')
    ? [params.get('broker')]
    : ['wss://broker.emqx.io:8084/mqtt', 'wss://broker.hivemq.com:8884/mqtt'];

  const T = {
    react: BASE + '/react',
    hand: BASE + '/hand',
    vote: BASE + '/vote',
    hello: BASE + '/hello',
    team: BASE + '/team',
    state: BASE + '/state', // retido
    queue: BASE + '/queue', // retido
  };

  function rid(n = 10) {
    const a = 'abcdefghijkmnpqrstuvwxyz23456789';
    let s = '';
    const r = crypto.getRandomValues(new Uint8Array(n));
    for (const x of r) s += a[x % a.length];
    return s;
  }

  const store = {
    get(k, d) { try { const v = localStorage.getItem('dp_' + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem('dp_' + k, JSON.stringify(v)); } catch {} },
    del(k) { try { localStorage.removeItem('dp_' + k); } catch {} },
  };

  // Um id por aparelho, para moderação e para contar votos uma vez só.
  let UID = store.get('uid');
  if (!UID) { UID = rid(12); store.set('uid', UID); }

  /* ---------- Barramento ---------- */
  function createBus(role) {
    const handlers = {};
    const seen = new Map();
    const statusCbs = [];
    const clients = [];
    let connectedCount = 0;

    function emitStatus() {
      connectedCount = clients.filter(c => c.connected).length;
      statusCbs.forEach(cb => cb(connectedCount, clients.length));
    }

    function dispatch(topic, payload) {
      let msg;
      try { msg = JSON.parse(payload.toString()); } catch { return; }
      if (!msg || typeof msg !== 'object') return;
      // Mensagens chegam duplicadas (dois servidores): descarta repetidas.
      if (msg._id) {
        if (seen.has(msg._id)) return;
        seen.set(msg._id, Date.now());
        if (seen.size > 3000) {
          const cut = Date.now() - 120000;
          for (const [k, t] of seen) if (t < cut) seen.delete(k);
        }
      }
      (handlers[topic] || []).forEach(h => { try { h(msg); } catch (e) { console.error(e); } });
    }

    BROKERS.forEach(url => {
      let c;
      try {
        c = mqtt.connect(url, {
          clientId: role + '_' + rid(8),
          clean: true,
          keepalive: 30,
          reconnectPeriod: 2500,
          connectTimeout: 8000,
        });
      } catch (e) { console.warn('broker falhou', url, e); return; }
      clients.push(c);
      c.on('connect', () => {
        const subs = Object.keys(handlers);
        if (subs.length) c.subscribe(subs, { qos: 0 });
        emitStatus();
      });
      c.on('close', emitStatus);
      c.on('offline', emitStatus);
      c.on('error', e => console.warn('mqtt', url, e && e.message));
      c.on('message', dispatch);
    });

    return {
      on(topic, fn) {
        if (!handlers[topic]) {
          handlers[topic] = [];
          clients.forEach(c => c.connected && c.subscribe(topic, { qos: 0 }));
        }
        handlers[topic].push(fn);
      },
      send(topic, data, retain = false) {
        const msg = Object.assign({ _id: rid(14), _t: Date.now() }, data);
        const s = JSON.stringify(msg);
        let ok = false;
        clients.forEach(c => { if (c.connected) { c.publish(topic, s, { qos: 0, retain }); ok = true; } });
        return ok;
      },
      onStatus(cb) { statusCbs.push(cb); cb(connectedCount, clients.length); },
      get online() { return clients.some(c => c.connected); },
    };
  }

  /* ---------- Filtro de nomes ---------- */
  // Palavras inteiras proibidas (comparação exata por palavra, para não barrar sobrenomes como Pinto ou Caputo).
  const BAD_WORDS = ['porra','pica','rola','piroca','cacete','merda','bosta','cu','cuzao','fdp','puta','puto','putaria','vadia','viado','viadinho','bicha','traveco','sapatao','macaco','macaca','nazi','nazista','hitler','hamas','foda','fode','fuder','foder','transa','sexo','gozar','gozo','punheta','siririca','boquete','corno','mongol','otario','babaca','imbecil','idiota','escroto','escrota','desgraca','krl','pqp','vsf','tnc','vtnc','kct','crl','fuck','shit','bitch','dick','pussy','cunt','whore','penis','vagina','anus','nude','nudes','porn','lixo','admin','apresentadora','evilayne'];
  // Trechos proibidos em qualquer lugar do nome (só os inconfundíveis).
  const BAD_PARTS = ['caralh','bucet','xoxot','xerec','arrombad','vagabund','filhodaputa','retardad','punhet','nigg','xvideo','onlyfans','pornhub'];

  function normalize(s) {
    return s.toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[@4]/g, 'a').replace(/3/g, 'e').replace(/[1!|]/g, 'i').replace(/0/g, 'o').replace(/[5$]/g, 's').replace(/7/g, 't');
  }

  function nameProblem(raw) {
    const name = (raw || '').replace(/\s+/g, ' ').trim();
    if (name.length < 2) return 'Digite seu nome (pelo menos 2 letras).';
    if (name.length > 22) return 'Nome muito grande (máx. 22 letras).';
    if (/https?:|www\.|\.com/i.test(name)) return 'Nada de links no nome.';
    if (!/^[\p{L}\p{M} .'-]+$/u.test(name)) return 'Use só letras no nome.';
    const n = normalize(name);
    const words = n.split(/[\s.'-]+/);
    const joined = n.replace(/[^a-z]/g, '');
    const msg = 'Esse nome não pode. Use seu nome de verdade.';
    if (words.some(w => BAD_WORDS.includes(w))) return msg;
    if (BAD_PARTS.some(p => joined.includes(p))) return msg;
    return null;
  }

  function cleanName(raw) {
    return (raw || '').replace(/\s+/g, ' ').trim().split(' ')
      .map(w => w ? w[0].toUpperCase() + w.slice(1) : w).join(' ');
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  const REACTIONS = [
    { k: 'fire', e: '🔥', label: 'Foguinho' },
    { k: 'up', e: '👍', label: 'Concordo' },
    { k: 'down', e: '👎', label: 'Discordo' },
    { k: 'clap', e: '👏', label: 'Palmas' },
    { k: 'think', e: '🤔', label: 'Hmm...' },
  ];
  const REACT_MAP = Object.fromEntries(REACTIONS.map(r => [r.k, r]));

  function studentURL() {
    const u = new URL('./', location.href);
    if (params.get('sala')) u.searchParams.set('sala', params.get('sala'));
    if (params.get('broker')) u.searchParams.set('broker', params.get('broker'));
    return u.toString();
  }

  function qrSVG(text, cell = 6) {
    const q = qrcode(0, 'M');
    q.addData(text);
    q.make();
    return q.createSvgTag({ cellSize: cell, margin: 2, scalable: true });
  }

  const DEFAULT_STATE = {
    v: 0,
    slide: 0,
    reactions: true,
    hands: true,
    speaker: null,      // {uid, name, until}
    poll: null,         // {id, q, options:[...], open, show, counts:[...], total}
    banned: [],
    session: 1,
    score: null,       // {pal, isr, played}
    teams: { pal: [], isr: [] },
  };

  /* ---------- Assinatura (só quem tem a senha controla slides e fila) ---------- */
  async function makeSigner(pin) {
    const enc = new TextEncoder();
    const key = await crypto.subtle.importKey('raw', enc.encode('dp-v1:' + pin), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
    const hex = b => [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join('');
    const unhex = h => new Uint8Array((h.match(/../g) || []).map(x => parseInt(x, 16)));
    return {
      async wrap(obj) {
        const body = JSON.stringify(obj);
        const sig = hex(await crypto.subtle.sign('HMAC', key, enc.encode(body)));
        return { body, sig };
      },
      async unwrap(msg) {
        if (!msg || typeof msg.body !== 'string' || typeof msg.sig !== 'string') return null;
        const ok = await crypto.subtle.verify('HMAC', key, unhex(msg.sig), enc.encode(msg.body));
        if (!ok) return null;
        try { return JSON.parse(msg.body); } catch { return null; }
      },
    };
  }

  // Leitura sem verificar (para os celulares, que não têm a senha).
  function peek(msg) {
    if (!msg || typeof msg.body !== 'string') return null;
    try { return JSON.parse(msg.body); } catch { return null; }
  }

  async function sha256hex(t) {
    const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(t));
    return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join('');
  }

  window.DP = { makeSigner, peek, sha256hex, T, UID, rid, store, createBus, nameProblem, cleanName, esc, REACTIONS, REACT_MAP, studentURL, qrSVG, DEFAULT_STATE, params, ROOM };
})();
