/* Conteúdo dos slides. Cada slide tem: quem fala, título, corpo (HTML) e roteiro para quem apresenta.
   Números verificados em novembro de 2026 (ver slide de fontes). */
window.SLIDES = [
  {
    id: 'capa', fala: "Bom dia, pessoal! A gente é o grupo do trabalho sobre o genocídio na Palestina. Mas hoje não vai ser só a gente falando: vai ser um debate, tipo programa de TV, e vocês participam. Pega o celular e escaneia esse QR Code aqui. É só colocar o nome, não precisa de login.", speaker: 'Davy', layout: 'cover',
    kicker: 'Debate ao vivo',
    title: 'Genocídio na Palestina',
    body: `<p class="lead">Escaneie o QR Code, coloque seu nome e participe: reaja, vote e peça a palavra.</p>`,
    notes: 'Boa tarde! Hoje a gente não vai só apresentar: vai ser um debate, tipo programa de TV. Todo mundo pega o celular e escaneia o QR Code. Coloca só o nome, sem login. Dá pra mandar reação, votar e pedir pra falar. Quem comanda é a nossa apresentadora, a Evilayne.'
  },
  {
    id: 'regras', fala: "Pelo celular vocês podem fazer três coisas: mandar reação, que aparece aqui no telão com o seu nome; votar em quem argumentou melhor em cada rodada; e pedir a palavra, que a apresentadora te chama. Só uma regra: pode discordar à vontade, mas critica a ideia, não a pessoa. Agora o Eduardo vai explicar o contexto.", speaker: 'Davy', layout: 'cards',
    kicker: 'Como vai funcionar',
    title: 'Você também está no programa',
    body: `
      <div class="cards c4">
        <div class="card"><div class="big">📱</div><h3>Entre</h3><p>QR Code → seu nome → pronto. Sem login.</p></div>
        <div class="card"><div class="big">🔥👍👎</div><h3>Reaja</h3><p>Suas reações aparecem aqui no telão com seu nome.</p></div>
        <div class="card"><div class="big">📊</div><h3>Vote</h3><p>Em cada rodada você escolhe qual lado argumentou melhor.</p></div>
        <div class="card"><div class="big">✋</div><h3>Peça a palavra</h3><p>Você entra na fila e a apresentadora te chama.</p></div>
      </div>
      <p class="rule">Regra de ouro: <b>critique ideias, não pessoas.</b> Use fatos e diga de onde tirou.</p>`,
    notes: 'Explicar as 4 coisas. Reforçar a regra: pode discordar à vontade, mas sem ofender ninguém. E todo argumento é mais forte com fonte. Nome ofensivo ou bagunça é removido pela apresentadora.'
  },
  {
    id: 'onde', fala: "Primeiro: onde fica isso. Os palestinos têm dois territórios: a Faixa de Gaza, no litoral, do lado do Egito, e a Cisjordânia. Gaza é minúscula: 365 quilômetros quadrados, menor que a cidade de São Paulo, e antes da guerra tinha 2,1 milhões de pessoas. Desde 2007 quem governa Gaza é o Hamas, e Israel e Egito controlam tudo que entra e sai. Isso é o bloqueio.", speaker: 'Eduardo', layout: 'cards',
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
    id: 'historia', fala: "Esse conflito não começou agora. Em 1947 a ONU propôs dividir a região em dois Estados. Em 1948 Israel foi criado, e na guerra que veio cerca de 700 mil palestinos perderam suas casas. Eles chamam isso de Nakba, que quer dizer catástrofe. Em 1967 Israel ocupou Gaza e a Cisjordânia. Em 2005 saiu de Gaza, e em 2007 o Hamas tomou o poder lá. E em 2023 começou a guerra atual. O Luis vai explicar.", speaker: 'Eduardo', layout: 'timeline',
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
    id: 'out7', fala: "No dia 7 de outubro de 2023, o Hamas atacou o sul de Israel. Morreram cerca de 1.200 pessoas, a maioria civis, e 251 foram levadas como reféns para Gaza. Foi o dia mais mortal para judeus desde o Holocausto. Depois disso, Israel declarou guerra ao Hamas.", speaker: 'Luis Eduardo', layout: 'cards',
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
    id: 'numeros', fala: "Só que a guerra em Gaza foi muito maior. Segundo o Ministério da Saúde de Gaza, já são mais de 74.600 mortos e 175 mil feridos. Cerca de 90% da população teve que sair de casa, e em 2025 foi confirmada fome em Gaza. Um detalhe: esse ministério é controlado pelo Hamas, e Israel contesta os números, mas a ONU e pesquisadores independentes consideram os dados confiáveis. O Gustavo vai explicar o que é genocídio.", speaker: 'Luis Eduardo', layout: 'cards',
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
    id: 'definicao', fala: "Genocídio não é só 'morreu muita gente'. Tem uma definição da ONU, de 1948, criada depois do Holocausto: são atos cometidos com a intenção de destruir um povo, no todo ou em parte. São cinco atos: matar, causar danos graves, impor condições de vida pra destruir o grupo, impedir nascimentos e tirar as crianças à força. E o mais difícil de provar é a intenção. O Kaiky vai mostrar quem acusa e o que Israel responde.", speaker: 'Gustavo', layout: 'definition',
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
    id: 'acusam', fala: "Quem diz que é genocídio? A África do Sul levou Israel para a Corte Internacional de Justiça, e o Brasil entrou nesse processo. Em 2025, uma comissão da ONU concluiu que Israel cometeu quatro dos cinco atos de genocídio. A Anistia Internacional e a maior associação de estudiosos de genocídio do mundo dizem o mesmo. Os argumentos são: muitos civis mortos, casas e hospitais destruídos, bloqueio de comida e falas de autoridades israelenses.", speaker: 'Kaiky', layout: 'versus', side: 'a',
    kicker: 'As acusações',
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
    id: 'negam', fala: "E o que diz Israel? O governo nega e chamou o relatório da ONU de falso. Diz que a guerra é contra o Hamas e não contra os palestinos, que o Hamas se esconde no meio dos civis e que Israel avisou a população antes dos ataques. Os Estados Unidos defendem Israel na Corte. O Guilherme vai mostrar o que a Justiça já decidiu.", speaker: 'Kaiky', layout: 'versus', side: 'b',
    kicker: 'O outro lado',
    title: 'O que diz Israel',
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
    id: 'tribunais', fala: "Na Justiça: em 2024 a Corte Internacional disse que a acusação é plausível e mandou Israel prevenir genocídio e deixar a ajuda entrar. No mesmo ano, o Tribunal Penal Internacional pediu a prisão do primeiro-ministro Netanyahu e do ex-ministro da Defesa, e também de um líder do Hamas. A decisão final sobre o genocídio deve sair só lá pra 2029.", speaker: 'Guilherme', layout: 'timeline',
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
    id: 'hoje', fala: "E hoje? Desde outubro de 2025 tem um cessar-fogo, e os reféns foram trocados por prisioneiros. Mas mais de 1.600 pessoas morreram depois do acordo, e Israel ainda controla cerca de metade de Gaza. Agora chega de contexto: com vocês, a nossa apresentadora, Evilayne!", speaker: 'Guilherme', layout: 'cards',
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
    id: 'formato', fala: "Agora começa o debate! De um lado, o Lado da Palestina. Do outro, o Lado de Israel. Lembrando: são papéis, tipo um júri simulado, ninguém está dando a opinião pessoal. Cada lado tem um minuto por pergunta, e no final de cada rodada vocês votam no celular quem mandou melhor. Valendo!", speaker: 'Evilayne', layout: 'versus-intro',
    kicker: 'Agora é com vocês',
    title: 'Como vai ser o debate',
    body: `
      <div class="teams">
        <div class="team pal"><h3>🟢 Lado da Palestina</h3><p>Defende o povo de Gaza e as vítimas da guerra.</p></div>
        <div class="vs">VS</div>
        <div class="team isr"><h3>🔵 Lado de Israel</h3><p>Apresenta os argumentos do governo israelense.</p></div>
      </div>
      <p class="rule">Os times são <b>papéis</b>, como num júri simulado. Ninguém está dando a opinião pessoal.</p>
      <p class="lead" style="margin-top:22px">Cada lado tem <b>1 minuto</b> por pergunta. No fim de cada rodada, <b>você vota</b> em quem argumentou melhor. Depois a palavra é da sala ✋</p>`,
    notes: 'Explicar as regras com energia de programa de TV. Deixar claro que os lados são papéis. Apresentar quem está em cada time.'
  },
  {
    id: 'debate1', args: {"isr": ["Todo país tem direito de se defender: 1.200 mortos e 251 reféns num dia só.", "Nenhum governo do mundo ficaria parado depois de um ataque desses.", "O objetivo era trazer os reféns de volta e impedir que o Hamas repetisse o 7 de outubro.", "Israel avisou civis pra saírem antes dos ataques."], "isrPunch": "Se fosse o Brasil atacado assim, o que vocês iam querer que o governo fizesse?", "pal": ["Direito de se defender existe, mas a lei de guerra exige proporcionalidade e separar civil de combatente.", "Mais de 74 mil mortos, com muitas mulheres e crianças, não é defesa, é punição de 2 milhões de pessoas.", "Bloquear comida e ajuda não derrota o Hamas, só mata de fome quem não tem culpa.", "A Corte da ONU mandou Israel prevenir genocídio: até a Justiça viu o limite sendo passado."], "palPunch": "Ter direito de se defender não é ter direito de fazer qualquer coisa."}, fala: "Primeira pergunta: Israel tinha direito de reagir ao 7 de outubro? E até onde? Lado de Israel, seu minuto começa agora! [depois] Lado da Palestina, sua resposta! [depois] Votação aberta no celular de vocês!", speaker: 'Evilayne', layout: 'question', round: 1,
    kicker: 'Rodada 1',
    title: 'Israel tinha direito de reagir ao 7 de outubro? Até onde?',
    body: `<p class="lead">Legítima defesa tem limite? Quem passou dele?</p>`,
    poll: { q: 'Quem argumentou melhor nesta rodada?', options: ['Lado da Palestina', 'Lado de Israel', 'Empate'], score: true },
    notes: 'Lado de Israel começa (1 min), Lado da Palestina responde (1 min). Réplica rápida de 30 s se quiserem. Abrir a votação, mostrar o resultado e depois abrir a fila pra sala.'
  },
  {
    id: 'debate2', args: {"isr": ["Foi o Hamas que começou a guerra no 7 de outubro.", "O Hamas constrói túneis embaixo de casas, escolas e hospitais.", "Usa civis como escudo humano pra aumentar as mortes e culpar Israel.", "Se o Hamas devolvesse os reféns e entregasse as armas, a guerra acabava."], "isrPunch": "Quem esconde foguete embaixo de hospital é responsável pelo que acontece com o hospital.", "pal": ["O Hamas cometeu crimes no 7 de outubro, ninguém aqui defende o Hamas.", "Mas crime do Hamas não dá licença pra matar civil: quem ataca tem obrigação de proteger inocentes.", "Cerca de metade da população de Gaza é criança: elas não escolheram o Hamas.", "Culpar só o Hamas é o jeito de não responder pelas bombas."], "palPunch": "Uma criança de Gaza não tem culpa nenhuma pelo Hamas."}, fala: "Segunda pergunta: o Hamas também é culpado pelas mortes de civis em Gaza? Agora quem começa é o Lado da Palestina! [depois] Lado de Israel, sua resposta! [depois] Votem!", speaker: 'Evilayne', layout: 'question', round: 2,
    kicker: 'Rodada 2',
    title: 'O Hamas também é culpado pelas mortes de civis em Gaza?',
    body: `<p class="lead">Escudos humanos, túneis embaixo de casas e hospitais… e a responsabilidade de quem ataca?</p>`,
    poll: { q: 'Quem argumentou melhor nesta rodada?', options: ['Lado da Palestina', 'Lado de Israel', 'Empate'], score: true },
    notes: 'Lado da Palestina começa desta vez. Provocar: "Se o Hamas usa civis, isso libera Israel de proteger esses civis?" Votar e abrir pra sala.'
  },
  {
    id: 'debate3', args: {"isr": ["É uma guerra entre Israel e o Hamas, e países de longe tomam lado sem conhecer a realidade.", "Pressionar só Israel ajuda o Hamas a sair fortalecido.", "O Brasil deveria tentar mediar a paz, não acusar um lado.", "Israel é uma democracia com tribunais próprios para investigar."], "isrPunch": "Quem quer paz tem que conversar com os dois lados, não escolher um.", "pal": ["A Convenção de 1948 obriga os países a prevenir genocídio, não é opcional.", "Ficar parado vendo isso é ser cúmplice.", "O Brasil fez certo em entrar na Corte da ONU: é usar a lei, não a força.", "O mundo pode parar de vender armas e garantir que a ajuda humanitária entre."], "palPunch": "Depois do Holocausto o mundo prometeu: nunca mais. Essa promessa vale pra todos."}, fala: "Terceira pergunta: o mundo, e o Brasil, deveriam fazer mais pra parar a guerra? Lado de Israel começa! [depois] Lado da Palestina! [depois] Votação aberta!", speaker: 'Evilayne', layout: 'question', round: 3,
    kicker: 'Rodada 3',
    title: 'O mundo — e o Brasil — deveriam fazer mais para parar a guerra?',
    body: `<p class="lead">Cortar relações? Parar de vender armas? O Brasil entrou no processo contra Israel na Corte da ONU. Fez certo?</p>`,
    poll: { q: 'Quem argumentou melhor nesta rodada?', options: ['Lado da Palestina', 'Lado de Israel', 'Empate'], score: true },
    notes: 'Lado de Israel começa. Trazer pra perto da turma: um país distante deve se meter? Votar e abrir pra sala.'
  },
  {
    id: 'debate4', args: {"isr": ["O cessar-fogo trouxe os reféns de volta pra casa.", "Pra ter paz de verdade, o Hamas precisa se desarmar.", "Israel não pode sair de Gaza e deixar o Hamas se rearmar.", "Proposta: Gaza reconstruída, mas sem o Hamas no poder."], "isrPunch": "Paz de verdade só existe quando os dois lados param de atirar, e o Hamas ainda não parou.", "pal": ["É um cessar-fogo só no papel: mais de 1.600 mortos depois do acordo.", "Israel ainda controla cerca de metade de Gaza.", "Gaza precisa de reconstrução, comida, hospitais e escolas, agora.", "Proposta: ajuda entrando de verdade e os palestinos decidindo o próprio futuro, com um Estado palestino."], "palPunch": "Paz não é só parar as bombas, é deixar um povo viver."}, fala: "Última pergunta: o cessar-fogo resolve? O que precisa acontecer agora? Lado da Palestina abre e cada lado fecha com uma proposta! [depois] Lado de Israel! [depois] Última votação, vale o placar final!", speaker: 'Evilayne', layout: 'question', round: 4,
    kicker: 'Rodada 4 · Final',
    title: 'O cessar-fogo resolve? O que precisa acontecer agora?',
    body: `<p class="lead">Reconstrução, quem governa Gaza, o futuro dos dois povos.</p>`,
    poll: { q: 'Quem argumentou melhor nesta rodada?', options: ['Lado da Palestina', 'Lado de Israel', 'Empate'], score: true },
    notes: 'Lado da Palestina começa. Última rodada: pedir que cada lado feche com uma proposta. Votar e mostrar o placar final.'
  },
  {
    id: 'fim', fala: "E o placar final ficou assim! Valeu demais pela participação de todo mundo. A gente quis mostrar que dá pra discutir um assunto pesado ouvindo os dois lados e com respeito. Obrigado!", speaker: 'Davy', layout: 'end',
    kicker: 'Obrigado!',
    title: 'Debater é ouvir também',
    body: `<div id="finalScore"></div>
      <p class="lead">Davy dos Santos Mendes · Eduardo Santos Yamanaka · Luis Eduardo Cremoneze Dourado · Gustavo Mauricio de Morais Silva · Kaiky Victor Santos · Guilherme Aquiles Xavier<br>Apresentação: <b>Evilayne</b></p>
      <div class="sources">
        <b>Fontes:</b> Convenção da ONU sobre Genocídio (1948) · Comissão de Inquérito da ONU sobre o Território Palestino Ocupado (set/2025) · Corte Internacional de Justiça, caso África do Sul v. Israel · OCHA/ONU, Gaza Impact Snapshot (nov/2026) · Ministério da Saúde de Gaza via Qatar News Agency e AP · Ministério das Relações Exteriores de Israel · Itamaraty · Anistia Internacional · IPC (classificação de fome).
      </div>`,
    notes: 'Anunciar o placar final e o lado vencedor, mostrar quem mais participou e agradecer.'
  },
];
