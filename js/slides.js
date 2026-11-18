/* Conteúdo dos slides. Cada slide tem: quem fala, título, corpo (HTML) e roteiro para quem apresenta.
   Números verificados em novembro de 2026 (ver slide de fontes). */
window.SLIDES = [
  {
    id: 'capa', speaker: 'Davy', layout: 'cover',
    kicker: 'Debate ao vivo',
    title: 'Palestina: é genocídio?',
    body: `<p class="lead">Escaneie o QR Code, coloque seu nome e participe: reaja, vote e peça a palavra.</p>`,
    notes: 'Boa tarde! Hoje a gente não vai só apresentar: vai ser um debate, tipo programa de TV. Todo mundo pega o celular e escaneia o QR Code. Coloca só o nome, sem login. Dá pra mandar reação, votar e pedir pra falar. Quem comanda é a nossa apresentadora, a Evilayne.'
  },
  {
    id: 'regras', speaker: 'Davy', layout: 'cards',
    kicker: 'Como vai funcionar',
    title: 'Você também está no programa',
    body: `
      <div class="cards c4">
        <div class="card"><div class="big">📱</div><h3>Entre</h3><p>QR Code → seu nome → pronto. Sem login.</p></div>
        <div class="card"><div class="big">🔥👍👎</div><h3>Reaja</h3><p>Suas reações aparecem aqui no telão com seu nome.</p></div>
        <div class="card"><div class="big">📊</div><h3>Vote</h3><p>Em cada rodada a apresentadora abre uma votação.</p></div>
        <div class="card"><div class="big">✋</div><h3>Peça a palavra</h3><p>Você entra na fila e a apresentadora te chama.</p></div>
      </div>
      <p class="rule">Regra de ouro: <b>critique ideias, não pessoas.</b> Use fatos e diga de onde tirou.</p>`,
    notes: 'Explicar as 4 coisas. Reforçar a regra: pode discordar à vontade, mas sem ofender ninguém. E todo argumento é mais forte com fonte. Nome ofensivo ou bagunça é removido pela apresentadora.'
  },
  {
    id: 'onde', speaker: 'Eduardo', layout: 'cards',
    kicker: 'Contexto',
    title: 'Onde fica e quem vive lá',
    body: `
      <div class="cards c3">
        <div class="card stat"><div class="num">2</div><h3>territórios palestinos</h3><p><b>Faixa de Gaza</b> (litoral, na fronteira com o Egito) e <b>Cisjordânia</b> (incluindo Jerusalém Oriental).</p></div>
        <div class="card stat"><div class="num">365 km²</div><h3>tamanho de Gaza</h3><p>Menor que a cidade de São Paulo, com cerca de <b>2,1 milhões</b> de pessoas antes da guerra — uma das áreas mais densas do mundo.</p></div>
        <div class="card stat"><div class="num">2007</div><h3>início do bloqueio</h3><p>O grupo <b>Hamas</b> assumiu o controle de Gaza, e Israel e Egito passaram a controlar quem e o que entra e sai.</p></div>
      </div>`,
    notes: 'Situar a turma: Israel e os territórios palestinos ficam no Oriente Médio. Gaza é pequena e muito populosa. Desde 2007 é governada pelo Hamas e vive sob bloqueio de Israel e do Egito.'
  },
  {
    id: 'historia', speaker: 'Eduardo', layout: 'timeline',
    kicker: 'Contexto',
    title: 'Como a gente chegou aqui',
    body: `
      <ol class="timeline">
        <li><b>1947</b><span>A ONU propõe dividir a região em um Estado judeu e um Estado árabe.</span></li>
        <li><b>1948</b><span>Israel é criado. Na guerra que segue, cerca de 700 mil palestinos fogem ou são expulsos — os palestinos chamam isso de <i>Nakba</i> ("catástrofe").</span></li>
        <li><b>1967</b><span>Guerra dos Seis Dias: Israel passa a ocupar Gaza, Cisjordânia e Jerusalém Oriental.</span></li>
        <li><b>2005</b><span>Israel retira colonos e soldados de Gaza.</span></li>
        <li><b>2007</b><span>Hamas toma Gaza; começa o bloqueio. Várias guerras curtas acontecem nos anos seguintes.</span></li>
        <li><b>2023</b><span>7 de outubro: começa a guerra atual.</span></li>
      </ol>`,
    notes: 'Não precisa decorar datas. A ideia: é um conflito de mais de 75 anos, com disputa por terra, refugiados e ocupação. Os dois lados contam essa história de jeitos diferentes.'
  },
  {
    id: 'out7', speaker: 'Luis Eduardo', layout: 'cards',
    kicker: '7 de outubro de 2023',
    title: 'O ataque que iniciou a guerra',
    body: `
      <div class="cards c2">
        <div class="card stat"><div class="num">~1.200</div><h3>mortos em Israel</h3><p>O Hamas e outros grupos atacaram o sul de Israel. A maioria dos mortos era civil.</p></div>
        <div class="card stat"><div class="num">251</div><h3>reféns levados para Gaza</h3><p>Entre eles crianças e idosos. Os últimos reféns vivos foram libertados no cessar-fogo de 2025.</p></div>
      </div>
      <p class="rule">Israel declarou guerra ao Hamas com o objetivo de destruir o grupo e trazer os reféns de volta.</p>`,
    notes: 'É importante mostrar esse lado: foi o dia mais mortal para judeus desde o Holocausto. Isso é central no argumento de Israel de que age em legítima defesa.'
  },
  {
    id: 'numeros', speaker: 'Luis Eduardo', layout: 'cards',
    kicker: 'A guerra em Gaza',
    title: 'Dois anos de guerra em números',
    body: `
      <div class="cards c4">
        <div class="card stat red"><div class="num">74.600+</div><h3>mortos</h3><p>Segundo o Ministério da Saúde de Gaza (nov. 2026).</p></div>
        <div class="card stat"><div class="num">175 mil+</div><h3>feridos</h3><p>Mais de 43 mil com lesões que mudam a vida, segundo a OMS.</p></div>
        <div class="card stat"><div class="num">~90%</div><h3>deslocados</h3><p>A maior parte da população teve que deixar sua casa, muitos várias vezes.</p></div>
        <div class="card stat"><div class="num">2025</div><h3>fome confirmada</h3><p>Em agosto, o sistema IPC (ligado à ONU) confirmou fome na Cidade de Gaza.</p></div>
      </div>
      <p class="note">⚠️ O Ministério da Saúde de Gaza é controlado pelo Hamas e não separa civis de combatentes. Israel contesta os números; a ONU e vários estudos independentes consideram os dados confiáveis.</p>`,
    notes: 'Ler os números com calma. Explicar a polêmica dos dados: quem conta é o ministério de Gaza, ligado ao Hamas. Israel diz que estão inflados; ONU e pesquisadores independentes costumam considerar confiáveis e alguns estudos estimam até mais mortes.'
  },
  {
    id: 'definicao', speaker: 'Gustavo', layout: 'definition',
    kicker: 'Antes de discutir',
    title: 'O que é genocídio, afinal?',
    body: `
      <blockquote>Atos cometidos <b>com a intenção de destruir</b>, no todo ou em parte, um grupo nacional, étnico, racial ou religioso.</blockquote>
      <p class="src">Convenção da ONU para a Prevenção e Punição do Crime de Genocídio, 1948 — criada depois do Holocausto.</p>
      <div class="cards c5 small">
        <div class="card"><b>1</b><p>Matar membros do grupo</p></div>
        <div class="card"><b>2</b><p>Causar danos físicos ou mentais graves</p></div>
        <div class="card"><b>3</b><p>Impor condições de vida para destruir o grupo</p></div>
        <div class="card"><b>4</b><p>Impedir nascimentos</p></div>
        <div class="card"><b>5</b><p>Transferir crianças à força</p></div>
      </div>
      <p class="rule">A parte mais difícil de provar é a <b>intenção</b>. Muitas mortes, sozinhas, não bastam: precisa mostrar que o objetivo era destruir o grupo.</p>`,
    notes: 'Este slide é a chave do debate. Genocídio não é sinônimo de "muita gente morreu". É um crime com definição jurídica, e o ponto central é a intenção. Guerra com muitas mortes civis pode ser crime de guerra sem ser genocídio, e o debate é justamente esse.'
  },
  {
    id: 'acusam', speaker: 'Kaiky', layout: 'versus', side: 'a',
    kicker: 'Um lado',
    title: 'Quem diz que é genocídio',
    body: `
      <ul class="points">
        <li><b>África do Sul</b> processou Israel na Corte Internacional de Justiça (CIJ) em dez/2023. O Brasil e mais de 10 países entraram no caso.</li>
        <li><b>Comissão de Inquérito da ONU</b> (set/2025): concluiu que Israel cometeu 4 dos 5 atos de genocídio e que falas de líderes mostram intenção.</li>
        <li><b>Associação Internacional de Estudiosos do Genocídio</b> (2025) e <b>Anistia Internacional</b> (2024) chegaram à mesma conclusão.</li>
        <li>Argumentos: escala das mortes de civis, destruição de casas e hospitais, bloqueio de comida e ajuda, e declarações de autoridades israelenses.</li>
      </ul>`,
    notes: 'Apresentar com neutralidade, como um jornalista. A comissão é independente e não fala oficialmente pela ONU inteira, mas é o relatório mais forte de um órgão ligado à ONU até agora.'
  },
  {
    id: 'negam', speaker: 'Kaiky', layout: 'versus', side: 'b',
    kicker: 'O outro lado',
    title: 'Quem diz que não é',
    body: `
      <ul class="points">
        <li><b>Governo de Israel</b> rejeita a acusação e chamou o relatório da ONU de "distorcido e falso".</li>
        <li><b>Legítima defesa:</b> a guerra seria contra o Hamas, não contra o povo palestino, depois do 7 de outubro.</li>
        <li><b>Escudos humanos:</b> o Hamas operaria em túneis e prédios civis, o que aumentaria as mortes de civis.</li>
        <li><b>Avisos e ajuda:</b> Israel diz que avisou civis antes de ataques e permitiu a entrada de ajuda.</li>
        <li>Os <b>Estados Unidos</b> entraram no caso da CIJ em defesa de Israel (2026).</li>
      </ul>`,
    notes: 'Mesmo tom do slide anterior. A defesa de Israel se apoia em três pontos: autodefesa, falta de intenção de destruir os palestinos e culpa do Hamas pelas mortes de civis.'
  },
  {
    id: 'tribunais', speaker: 'Guilherme', layout: 'timeline',
    kicker: 'Na Justiça',
    title: 'O que os tribunais já decidiram',
    body: `
      <ol class="timeline">
        <li><b>Jan 2024</b><span>A CIJ diz que o pedido da África do Sul é <i>plausível</i> e manda Israel prevenir atos de genocídio e permitir ajuda. <u>Ainda não é a sentença final.</u></span></li>
        <li><b>Nov 2024</b><span>O Tribunal Penal Internacional (TPI) pede a prisão de Netanyahu e do ex-ministro da Defesa Gallant por crimes de guerra e contra a humanidade — e também de um líder do Hamas.</span></li>
        <li><b>Mar 2026</b><span>Israel entrega sua defesa na CIJ e questiona se a corte pode julgar o caso.</span></li>
        <li><b>2027–2029</b><span>Novos prazos: a decisão final deve levar ainda alguns anos.</span></li>
      </ol>`,
    notes: 'Ponto importante pro debate: até agora nenhum tribunal deu sentença final dizendo "é genocídio" ou "não é". A CIJ julga Estados; o TPI julga pessoas.'
  },
  {
    id: 'hoje', speaker: 'Guilherme', layout: 'cards',
    kicker: 'E hoje?',
    title: 'Um cessar-fogo frágil',
    body: `
      <div class="cards c3">
        <div class="card stat"><div class="num">10/10/2025</div><h3>cessar-fogo</h3><p>Acordo mediado pelos EUA (plano de Trump) e países árabes. Reféns e prisioneiros foram trocados.</p></div>
        <div class="card stat red"><div class="num">1.600+</div><h3>mortos depois do acordo</h3><p>Segundo autoridades de Gaza. Israel e Hamas se acusam de violar a trégua.</p></div>
        <div class="card stat"><div class="num">~metade</div><h3>de Gaza</h3><p>continua sob controle militar israelense. A segunda fase do plano está travada.</p></div>
      </div>`,
    notes: 'Fechar o contexto: a guerra "acabou" no papel, mas ainda morre gente quase todo dia, a reconstrução não começou de verdade e o futuro de Gaza está indefinido. Agora passa pra Evilayne.'
  },
  {
    id: 'debate1', speaker: 'Evilayne', layout: 'question', round: 1,
    kicker: 'Rodada 1',
    title: 'Pelo que vimos, o que acontece em Gaza é genocídio?',
    body: `<p class="lead">Vote no celular. Depois, quem quiser defender sua resposta, peça a palavra ✋</p>`,
    poll: { q: 'O que acontece em Gaza é genocídio?', options: ['Sim', 'Não', 'Ainda não sei'] },
    notes: 'Abrir a votação. Deixar uns 30 segundos. Mostrar o resultado. Chamar pelo menos uma pessoa de cada lado da fila. Perguntas de apoio: "o que te convenceu?", "qual fato pesou mais?"'
  },
  {
    id: 'debate2', speaker: 'Evilayne', layout: 'question', round: 2,
    kicker: 'Rodada 2',
    title: 'O que mais pesa para provar a intenção?',
    body: `<p class="lead">Lembra: genocídio exige <b>intenção de destruir o grupo</b>.</p>`,
    poll: { q: 'O que mais pesa para provar intenção?', options: ['Número de mortos', 'Falas de líderes', 'Bloqueio de comida e ajuda', 'Nada disso sozinho'] },
    notes: 'Provocar: "Se morreu muita gente mas o objetivo era o Hamas, é genocídio?" "E se líderes falaram em destruir Gaza?" Ouvir os dois lados.'
  },
  {
    id: 'debate3', speaker: 'Evilayne', layout: 'question', round: 3,
    kicker: 'Rodada 3',
    title: 'Israel tinha direito de reagir ao 7 de outubro?',
    body: `<p class="lead">Legítima defesa tem limites? Quais?</p>`,
    poll: { q: 'Israel tinha direito de reagir?', options: ['Sim, do jeito que fez', 'Sim, mas não desse jeito', 'Não'] },
    notes: 'Aqui aparece a diferença entre "ter o direito de se defender" e "como" se defende. Perguntar: o que seria uma reação aceitável? E o que o Hamas deveria ter feito?'
  },
  {
    id: 'debate4', speaker: 'Evilayne', layout: 'question', round: 4,
    kicker: 'Rodada 4',
    title: 'O Brasil fez certo em entrar no caso da CIJ?',
    body: `<p class="lead">O Brasil entrou no processo da África do Sul em 2025. Israel criticou a decisão.</p>`,
    poll: { q: 'O Brasil fez certo em entrar no caso?', options: ['Sim', 'Não', 'Não sei'] },
    notes: 'Trazer pra perto da turma: um país distante deve se posicionar? Isso ajuda ou atrapalha a paz? Qual o papel do mundo quando há suspeita de genocídio?'
  },
  {
    id: 'final', speaker: 'Evilayne', layout: 'question', round: 5, final: true,
    kicker: 'Votação final',
    title: 'E agora, depois do debate: é genocídio?',
    body: `<p class="lead">Mudou de ideia? Vote de novo e compare com a Rodada 1.</p>`,
    poll: { q: 'Depois do debate: é genocídio?', options: ['Sim', 'Não', 'Ainda não sei'] },
    notes: 'Abrir a votação final e mostrar o resultado. O telão compara com a Rodada 1. Comentar se a turma mudou de opinião e por quê.'
  },
  {
    id: 'fim', speaker: 'Davy', layout: 'end',
    kicker: 'Obrigado!',
    title: 'Debater é ouvir também',
    body: `
      <p class="lead">Davy dos Santos Mendes · Eduardo Santos Yamanaka · Luis Eduardo Cremoneze Dourado · Gustavo Mauricio de Morais Silva · Kaiky Victor Santos · Guilherme Aquiles Xavier<br>Apresentação: <b>Evilayne</b></p>
      <div class="sources">
        <b>Fontes:</b> Convenção da ONU sobre Genocídio (1948) · Comissão de Inquérito da ONU sobre o Território Palestino Ocupado (set/2025) · Corte Internacional de Justiça, caso África do Sul v. Israel · OCHA/ONU, Gaza Impact Snapshot (nov/2026) · Ministério da Saúde de Gaza via Qatar News Agency e AP · Ministério das Relações Exteriores de Israel · Itamaraty · Anistia Internacional · IPC (classificação de fome).
      </div>`,
    notes: 'Agradecer, chamar a apresentadora e o grupo, e mostrar o "pódio" de quem mais participou se quiserem.'
  },
];
