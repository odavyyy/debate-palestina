/* Conteúdo dos slides. Cada slide tem: quem fala, título, corpo (HTML), fala (para decorar) e dicas para a apresentadora.
   Formato: o grupo apresenta o contexto e a própria opinião, e a Evilayne faz perguntas pra sala votar e debater.
   Números verificados em novembro de 2026 (ver slide de fontes). */
window.SLIDES = [
  {
    "id": "qr",
    "speaker": "Davy",
    "layout": "qr",
    "kicker": "Antes de começar",
    "title": "Escaneie e participe!",
    "body": "",
    "fala": "Pessoal, antes de começar: todo mundo pega o celular, abre a câmera e escaneia esse QR Code. Só o nome, sem login. E já vou avisando: hoje vocês vão ter que se posicionar. Quem ficar em cima do muro, a gente chama pra falar! [espera o número subir na tela]",
    "notes": "Deixar este slide até quase toda a sala entrar (o número aparece no telão). Depois, passar pra capa."
  },
  {
    "id": "capa",
    "fala": "Bom dia, pessoal! O nosso tema é pesado: genocídio na Palestina. E eu vou começar com uma pergunta. Levanta a mão quem sabe explicar o que está acontecendo em Gaza. [espera] Pois é. Todo mundo já ouviu falar, mas pouca gente sabe o que está acontecendo de verdade. Hoje não vai ser só a gente falando: vai ser debate, tipo programa de TV, e a opinião de vocês vai aparecer ali no telão.",
    "speaker": "Davy",
    "layout": "cover",
    "kicker": "Debate ao vivo",
    "title": "Genocídio na Palestina",
    "body": "<p class=\"lead\">Escaneie o QR Code, coloque seu nome e participe: reaja, vote e peça a palavra.</p>",
    "notes": "Boa tarde! Hoje a gente não vai só apresentar: vai ser um debate, tipo programa de TV. Todo mundo pega o celular e escaneia o QR Code. Coloca só o nome, sem login. Dá pra mandar reação, votar e pedir pra falar. Quem comanda é a nossa apresentadora, a Evilayne."
  },
  {
    "id": "regras",
    "fala": "Pelo celular vocês podem fazer três coisas: mandar reação, que aparece no telão com o seu nome; responder as perguntas que a Evilayne vai fazer; e pedir a palavra pra falar. E vou ser sincero: aqui não tem resposta fácil. Vai ter gente discordando de vocês, e é pra isso mesmo. Só uma regra: critica a ideia, não a pessoa. Agora o Eduardo vai mostrar onde tudo isso começou.",
    "speaker": "Davy",
    "layout": "cards",
    "kicker": "Como vai funcionar",
    "title": "Você também está no programa",
    "body": "\n      <div class=\"cards c4\">\n        <div class=\"card\"><div class=\"big\">📱</div><h3>Entre</h3><p>QR Code → seu nome → pronto. Sem login.</p></div>\n        <div class=\"card\"><div class=\"big\">🔥👍👎</div><h3>Reaja</h3><p>Suas reações aparecem aqui no telão com seu nome.</p></div>\n        <div class=\"card\"><div class=\"big\">📊</div><h3>Opine</h3><p>Responda as perguntas e veja na hora o que a sala pensa.</p></div>\n        <div class=\"card\"><div class=\"big\">✋</div><h3>Peça a palavra</h3><p>Você entra na fila e a apresentadora te chama.</p></div>\n      </div>\n      <p class=\"rule\">Regra de ouro: <b>critique ideias, não pessoas.</b> Use fatos e diga de onde tirou.</p>",
    "notes": "Explicar as 4 coisas. Reforçar a regra: pode discordar à vontade, mas sem ofender ninguém. E todo argumento é mais forte com fonte. Nome ofensivo ou bagunça é removido pela apresentadora."
  },
  {
    "id": "onde",
    "fala": "Imagina 2 milhões de pessoas presas num lugar menor que a cidade de São Paulo, sem poder sair. Isso é Gaza. Os palestinos têm dois territórios: Gaza, no litoral, do lado do Egito, e a Cisjordânia. Gaza tem 365 quilômetros quadrados e antes da guerra tinha 2,1 milhões de pessoas. Desde 2007 quem governa lá é o Hamas, e Israel e Egito controlam tudo que entra e sai: comida, remédio, gente. Pergunta pra vocês: vocês conseguiriam viver num lugar de onde não podem sair?",
    "speaker": "Eduardo",
    "layout": "cards",
    "kicker": "Contexto",
    "title": "Onde fica e quem vive lá",
    "body": "\n      <div class=\"cards c3\">\n        <div class=\"card stat\"><div class=\"num\">2</div><h3>territórios palestinos</h3><p><b>Faixa de Gaza</b> (litoral, na fronteira com o Egito) e <b>Cisjordânia</b> (incluindo Jerusalém Oriental).</p></div>\n        <div class=\"card stat\"><div class=\"num\">365 km²</div><h3>tamanho de Gaza</h3><p>Menor que a cidade de São Paulo, com cerca de <b>2,1 milhões</b> de pessoas antes da guerra — uma das áreas mais densas do mundo.</p></div>\n        <div class=\"card stat\"><div class=\"num\">2007</div><h3>início do bloqueio</h3><p>O grupo <b>Hamas</b> assumiu o controle de Gaza, e Israel e Egito passaram a controlar quem e o que entra e sai.</p></div>\n      </div>",
    "notes": "Situar a turma: Israel e os territórios palestinos ficam no Oriente Médio. Gaza é pequena e muito populosa. Desde 2007 é governada pelo Hamas e vive sob bloqueio de Israel e do Egito."
  },
  {
    "id": "historia",
    "fala": "E isso não começou ontem. Em 1947 a ONU propôs dividir a terra em dois países. Em 1948 Israel foi criado, e cerca de 700 mil palestinos perderam suas casas. Eles chamam isso de Nakba, a catástrofe. Olha que louco: pros israelenses, 1948 é a independência. Pros palestinos, é a tragédia. A mesma data, duas histórias. Em 1967 Israel ocupou Gaza e a Cisjordânia, em 2005 saiu de Gaza, e em 2007 o Hamas tomou o poder lá. Então já fica a pergunta: de quem é essa terra? O Luis vai mostrar o dia que mudou tudo.",
    "speaker": "Eduardo",
    "layout": "timeline",
    "kicker": "Contexto",
    "title": "Como a gente chegou aqui",
    "body": "\n      <ol class=\"timeline\">\n        <li><b>1947</b><span>A ONU propõe dividir a região em um Estado judeu e um Estado árabe.</span></li>\n        <li><b>1948</b><span>Israel é criado. Na guerra que segue, cerca de 700 mil palestinos fogem ou são expulsos — os palestinos chamam isso de <i>Nakba</i> (\"catástrofe\").</span></li>\n        <li><b>1967</b><span>Guerra dos Seis Dias: Israel passa a ocupar Gaza, Cisjordânia e Jerusalém Oriental.</span></li>\n        <li><b>2005</b><span>Israel retira colonos e soldados de Gaza.</span></li>\n        <li><b>2007</b><span>Hamas toma Gaza; começa o bloqueio. Várias guerras curtas acontecem nos anos seguintes.</span></li>\n        <li><b>2023</b><span>7 de outubro: começa a guerra atual.</span></li>\n      </ol>",
    "notes": "Não precisa decorar datas. A ideia: é um conflito de mais de 75 anos, com disputa por terra, refugiados e ocupação. Os dois lados contam essa história de jeitos diferentes."
  },
  {
    "id": "out7",
    "fala": "7 de outubro de 2023. O Hamas invadiu o sul de Israel e matou cerca de 1.200 pessoas, a maioria civis: jovens numa festa de música, famílias dentro de casa. 251 pessoas foram levadas como reféns pra Gaza, inclusive crianças e idosos. Foi o dia mais mortal para judeus desde o Holocausto. E aqui eu quero que vocês pensem: se isso acontecesse no Brasil, o que vocês iam querer que o governo fizesse?",
    "speaker": "Luis Eduardo",
    "layout": "cards",
    "kicker": "7 de outubro de 2023",
    "title": "O ataque que iniciou a guerra",
    "body": "\n      <div class=\"cards c2\">\n        <div class=\"card stat\"><div class=\"num\">~1.200</div><h3>mortos em Israel</h3><p>O Hamas e outros grupos atacaram o sul de Israel. A maioria dos mortos era civil.</p></div>\n        <div class=\"card stat\"><div class=\"num\">251</div><h3>reféns levados para Gaza</h3><p>Entre eles crianças e idosos. Os últimos reféns vivos foram libertados no cessar-fogo de 2025.</p></div>\n      </div>\n      <p class=\"rule\">Israel declarou guerra ao Hamas com o objetivo de destruir o grupo e trazer os reféns de volta.</p>",
    "notes": "É importante mostrar esse lado: foi o dia mais mortal para judeus desde o Holocausto. Isso é central no argumento de Israel de que age em legítima defesa."
  },
  {
    "id": "numeros",
    "fala": "E Israel respondeu com guerra. Olha os números: mais de 74.600 mortos em Gaza, segundo o Ministério da Saúde de lá. Mais de 175 mil feridos. Cerca de 90% da população teve que fugir de casa. E em 2025 foi confirmada fome. Fome, em pleno 2025. Agora, um detalhe: esse ministério é controlado pelo Hamas, e Israel diz que os números são exagerados. Mas a ONU e pesquisadores independentes dizem que são confiáveis, e alguns estudos acham que são até maiores. Então eu pergunto: 1.200 mortos de um lado, mais de 74 mil do outro. Isso ainda é defesa? Evilayne, é com você!",
    "speaker": "Luis Eduardo",
    "layout": "cards",
    "kicker": "A guerra em Gaza",
    "title": "Dois anos de guerra em números",
    "body": "\n      <div class=\"cards c4\">\n        <div class=\"card stat red\"><div class=\"num\">74.600+</div><h3>mortos</h3><p>Segundo o Ministério da Saúde de Gaza (nov. 2026).</p></div>\n        <div class=\"card stat\"><div class=\"num\">175 mil+</div><h3>feridos</h3><p>Mais de 43 mil com lesões que mudam a vida, segundo a OMS.</p></div>\n        <div class=\"card stat\"><div class=\"num\">~90%</div><h3>deslocados</h3><p>A maior parte da população teve que deixar sua casa, muitos várias vezes.</p></div>\n        <div class=\"card stat\"><div class=\"num\">2025</div><h3>fome confirmada</h3><p>Em agosto, o sistema IPC (ligado à ONU) confirmou fome na Cidade de Gaza.</p></div>\n      </div>\n      <p class=\"note\">⚠️ O Ministério da Saúde de Gaza é controlado pelo Hamas e não separa civis de combatentes. Israel contesta os números; a ONU e vários estudos independentes consideram os dados confiáveis.</p>",
    "notes": "Ler os números com calma. Explicar a polêmica dos dados: quem conta é o ministério de Gaza, ligado ao Hamas. Israel diz que estão inflados; ONU e pesquisadores independentes costumam considerar confiáveis e alguns estudos estimam até mais mortes."
  },
  {
    "id": "p1",
    "speaker": "Evilayne",
    "layout": "question",
    "kicker": "Pergunta pra sala",
    "title": "Israel tinha direito de reagir ao 7 de outubro?",
    "body": "<p class=\"lead\">Vote no celular. Depois, quem quiser explicar o voto, pede a palavra ✋</p>",
    "poll": {
      "q": "Israel tinha direito de reagir ao 7 de outubro?",
      "options": [
        "Sim, mas não desse jeito",
        "Sim, do jeito que fez",
        "Não"
      ]
    },
    "followups": [
      "Se o Brasil fosse atacado assim, vocês aceitariam bombardear onde os terroristas se escondem, mesmo com civis perto?",
      "Pra quem votou \"sim, mas não desse jeito\": qual seria o jeito certo?",
      "Existe limite pra legítima defesa? Quem decide esse limite?",
      "E os reféns? O que vocês fariam pra trazer eles de volta?"
    ],
    "notes": "Antes de abrir a votação: Luis Eduardo provoca (30 s) e Guilherme rebate (30 s). Depois abre a votação e pergunta pra sala: \"e vocês, concordam com quem?\". Abrir a votação (uns 30 s) e mostrar o resultado. Chamar alguém de cada resposta: o painel mostra quem votou o quê. Usar as perguntas de provocação se a sala travar. Depois, chamar o Gustavo pra explicar o que é genocídio. Plano B: se pouca gente votar no celular, pedir pra sala levantar a mão.",
    "warmup": [
      {
        "name": "Luis Eduardo",
        "text": "Vou provocar: Israel tinha direito, sim. Foram 1.200 mortos e 251 reféns num dia só. Qual país ia ficar parado? Se fosse aqui no Brasil, todo mundo ia pedir uma resposta."
      },
      {
        "name": "Guilherme",
        "text": "Direito de se defender não é direito de fazer qualquer coisa. Mais de 74 mil mortos, fome, hospital destruído. Isso não é defesa, é punir um povo inteiro."
      }
    ]
  },
  {
    "id": "definicao",
    "fala": "Tá, mas o que é genocídio? Porque não é só 'morreu muita gente'. Em 1948, depois do Holocausto, a ONU definiu: genocídio são atos feitos com a intenção de destruir um povo, no todo ou em parte. São cinco atos: matar, causar danos graves, criar condições de vida pra destruir o grupo, impedir nascimentos e tirar crianças à força. E o que decide tudo é a intenção. Uma guerra pode matar muita gente sem ser genocídio. Então a pergunta não é 'quantos morreram'. É 'o que eles queriam fazer'. O Kaiky vai mostrar quem acusa e quem se defende.",
    "speaker": "Gustavo",
    "layout": "definition",
    "kicker": "Antes de discutir",
    "title": "O que é genocídio, afinal?",
    "body": "\n      <blockquote>Atos cometidos <b>com a intenção de destruir</b>, no todo ou em parte, um grupo nacional, étnico, racial ou religioso.</blockquote>\n      <p class=\"src\">Convenção da ONU para a Prevenção e Punição do Crime de Genocídio, 1948 — criada depois do Holocausto.</p>\n      <div class=\"cards c5 small\">\n        <div class=\"card\"><b>1</b><p>Matar membros do grupo</p></div>\n        <div class=\"card\"><b>2</b><p>Causar danos físicos ou mentais graves</p></div>\n        <div class=\"card\"><b>3</b><p>Impor condições de vida para destruir o grupo</p></div>\n        <div class=\"card\"><b>4</b><p>Impedir nascimentos</p></div>\n        <div class=\"card\"><b>5</b><p>Transferir crianças à força</p></div>\n      </div>\n      <p class=\"rule\">A parte mais difícil de provar é a <b>intenção</b>. Muitas mortes, sozinhas, não bastam: precisa mostrar que o objetivo era destruir o grupo.</p>",
    "notes": "Este slide é a chave do debate. Genocídio não é sinônimo de \"muita gente morreu\". É um crime com definição jurídica, e o ponto central é a intenção. Guerra com muitas mortes civis pode ser crime de guerra sem ser genocídio, e o debate é justamente esse."
  },
  {
    "id": "acusam",
    "fala": "Quem está acusando Israel de genocídio não é qualquer um. A África do Sul levou Israel pra Corte Internacional de Justiça, e o Brasil entrou junto. Em 2025, uma comissão da ONU concluiu que Israel cometeu quatro dos cinco atos de genocídio. A Anistia Internacional concorda. A maior associação de estudiosos de genocídio do mundo concorda. E até organizações de direitos humanos de dentro de Israel concordam. Quando até gente de dentro do país acusa, dá pra ignorar?",
    "speaker": "Kaiky",
    "layout": "versus",
    "side": "a",
    "kicker": "As acusações",
    "title": "Quem diz que é genocídio",
    "body": "\n      <ul class=\"points\">\n        <li><b>África do Sul</b> processou Israel na Corte Internacional de Justiça (CIJ) em dez/2023. O Brasil e mais de 10 países entraram no caso.</li>\n        <li><b>Comissão de Inquérito da ONU</b> (set/2025): concluiu que Israel cometeu 4 dos 5 atos de genocídio e que falas de líderes mostram intenção.</li>\n        <li><b>Associação Internacional de Estudiosos do Genocídio</b> (2025) e <b>Anistia Internacional</b> (2024) chegaram à mesma conclusão.</li>\n        <li>Argumentos: escala das mortes de civis, destruição de casas e hospitais, bloqueio de comida e ajuda, e declarações de autoridades israelenses.</li>\n      </ul>",
    "notes": "Apresentar com neutralidade, como um jornalista. A comissão é independente e não fala oficialmente pela ONU inteira, mas é o relatório mais forte de um órgão ligado à ONU até agora."
  },
  {
    "id": "negam",
    "fala": "Mas Israel tem a versão dele, e vocês precisam ouvir. O governo chamou o relatório da ONU de falso. Diz que a guerra é contra o Hamas, não contra os palestinos. Diz que o Hamas se esconde em túneis embaixo de casas, escolas e hospitais, usando a própria população como escudo. Diz que avisou os civis antes de atacar. E os Estados Unidos estão do lado de Israel na Corte. Então, quem está falando a verdade? Evilayne!",
    "speaker": "Kaiky",
    "layout": "versus",
    "side": "b",
    "kicker": "O outro lado",
    "title": "O que diz Israel",
    "body": "\n      <ul class=\"points\">\n        <li><b>Governo de Israel</b> rejeita a acusação e chamou o relatório da ONU de \"distorcido e falso\".</li>\n        <li><b>Legítima defesa:</b> a guerra seria contra o Hamas, não contra o povo palestino, depois do 7 de outubro.</li>\n        <li><b>Escudos humanos:</b> o Hamas operaria em túneis e prédios civis, o que aumentaria as mortes de civis.</li>\n        <li><b>Avisos e ajuda:</b> Israel diz que avisou civis antes de ataques e permitiu a entrada de ajuda.</li>\n        <li>Os <b>Estados Unidos</b> entraram no caso da CIJ em defesa de Israel (2026).</li>\n      </ul>",
    "notes": "Mesmo tom do slide anterior. A defesa de Israel se apoia em três pontos: autodefesa, falta de intenção de destruir os palestinos e culpa do Hamas pelas mortes de civis."
  },
  {
    "id": "p2",
    "speaker": "Evilayne",
    "layout": "question",
    "kicker": "Pergunta pra sala",
    "title": "O Hamas também tem culpa pelas mortes em Gaza?",
    "body": "<p class=\"lead\">Dá pra condenar os dois ao mesmo tempo?</p>",
    "poll": {
      "q": "O Hamas também tem culpa pelas mortes em Gaza?",
      "options": [
        "Sim",
        "Não",
        "Em parte"
      ]
    },
    "followups": [
      "Quem acha que é \"só culpa de Israel\": e os reféns? Quem acha que é \"só culpa do Hamas\": e as crianças?",
      "Se o Hamas se esconde no meio de civis, isso libera quem ataca?",
      "Dá pra condenar o Hamas e Israel ao mesmo tempo?",
      "Por que tem gente que só fala do Hamas, e gente que nunca fala?"
    ],
    "notes": "Antes de abrir a votação: Kaiky provoca (30 s) e Eduardo rebate (30 s). Depois abre a votação e pergunta pra sala: \"e vocês, concordam com quem?\". Mesmo esquema: votar, mostrar, chamar pessoas de respostas diferentes pra conversarem entre si. Depois, chamar o Gustavo pra mostrar a opinião do grupo. Plano B: se pouca gente votar no celular, pedir pra sala levantar a mão.",
    "warmup": [
      {
        "name": "Kaiky",
        "text": "O Hamas tem culpa, sim. Começou a guerra, sequestrou crianças e se esconde embaixo de hospital. Quem usa civil como escudo é culpado pelo que acontece com eles."
      },
      {
        "name": "Eduardo",
        "text": "Mas o Hamas não é o povo palestino. Quase metade de Gaza é criança, e criança não escolheu o Hamas. Se tem civil, quem ataca tem a obrigação de não atirar."
      }
    ]
  },
  {
    "id": "opiniao",
    "speaker": "Gustavo",
    "layout": "versus",
    "side": "a",
    "kicker": "Nossa opinião",
    "title": "Por que a gente acha que é genocídio",
    "body": "\n      <ul class=\"points\">\n        <li><b>Matar e ferir em massa (atos 1 e 2):</b> mais de 74 mil mortos e 175 mil feridos, muitos deles civis.</li>\n        <li><b>Condições pra destruir um povo (ato 3):</b> fome confirmada, hospitais destruídos, ajuda bloqueada.</li>\n        <li><b>Intenção:</b> a comissão da ONU apontou falas de autoridades israelenses mostrando a vontade de destruir Gaza.</li>\n        <li><b>Não somos só nós:</b> ONU, Anistia, estudiosos de genocídio e até organizações de direitos humanos de dentro de Israel dizem o mesmo.</li>\n      </ul>\n      <p class=\"rule\">Isso <b>não</b> é apoiar o Hamas: o 7 de outubro também foi um crime.</p>",
    "fala": "Depois de ouvir os dois lados, a opinião do nosso grupo é clara: é genocídio. Primeiro: mais de 74 mil mortos e 175 mil feridos, muitos civis. Segundo: fome, hospitais destruídos e ajuda bloqueada, que é criar condições pra destruir um povo. Terceiro: a intenção, porque a comissão da ONU apontou falas de autoridades israelenses. E não somos só nós: ONU, Anistia, estudiosos e até organizações israelenses dizem o mesmo. Mas presta atenção: dizer isso não é apoiar o Hamas. O 7 de outubro foi um crime, e o Hamas tem que responder por ele. Só que o crime de um grupo não dá o direito de punir um povo inteiro. Alguém aqui discorda? Pode falar, é pra isso que a gente está aqui. [pausa] O Guilherme vai mostrar o que a Justiça fez até agora.",
    "notes": "Slide com a posição do grupo. Falar com convicção, mas sem atacar quem pensa diferente: a sala vai poder discordar nas perguntas."
  },
  {
    "id": "tribunais",
    "fala": "E a Justiça? Em janeiro de 2024, a Corte Internacional disse que a acusação era plausível e mandou Israel prevenir genocídio e deixar a ajuda entrar. Em novembro de 2024, o Tribunal Penal Internacional pediu a prisão do primeiro-ministro Netanyahu e do ex-ministro da Defesa, e também de um líder do Hamas. Mas sabe quando sai a decisão final sobre o genocídio? Lá pra 2029. Pensa nisso: até a Justiça decidir, quantas pessoas ainda vão morrer?",
    "speaker": "Guilherme",
    "layout": "timeline",
    "kicker": "Na Justiça",
    "title": "O que os tribunais já decidiram",
    "body": "\n      <ol class=\"timeline\">\n        <li><b>Jan 2024</b><span>A CIJ diz que o pedido da África do Sul é <i>plausível</i> e manda Israel prevenir atos de genocídio e permitir ajuda. <u>Ainda não é a sentença final.</u></span></li>\n        <li><b>Nov 2024</b><span>O Tribunal Penal Internacional (TPI) pede a prisão de Netanyahu e do ex-ministro da Defesa Gallant por crimes de guerra e contra a humanidade — e também de um líder do Hamas.</span></li>\n        <li><b>Mar 2026</b><span>Israel entrega sua defesa na CIJ e questiona se a corte pode julgar o caso.</span></li>\n        <li><b>2027–2029</b><span>Novos prazos: a decisão final deve levar ainda alguns anos.</span></li>\n      </ol>",
    "notes": "Ponto importante pro debate: até agora nenhum tribunal deu sentença final dizendo \"é genocídio\" ou \"não é\". A CIJ julga Estados; o TPI julga pessoas."
  },
  {
    "id": "hoje",
    "fala": "E hoje? Desde outubro de 2025 tem um cessar-fogo, e os reféns vivos voltaram pra casa. Parece que acabou, né? Só que mais de 1.600 pessoas morreram depois do acordo, e Israel ainda controla mais ou menos metade de Gaza. Então é paz ou só uma pausa? Agora chega da gente: queremos ouvir vocês. Evilayne!",
    "speaker": "Guilherme",
    "layout": "cards",
    "kicker": "E hoje?",
    "title": "Um cessar-fogo frágil",
    "body": "\n      <div class=\"cards c3\">\n        <div class=\"card stat\"><div class=\"num\">10/10/2025</div><h3>cessar-fogo</h3><p>Acordo mediado pelos EUA (plano de Trump) e países árabes. Reféns e prisioneiros foram trocados.</p></div>\n        <div class=\"card stat red\"><div class=\"num\">1.600+</div><h3>mortos depois do acordo</h3><p>Segundo autoridades de Gaza. Israel e Hamas se acusam de violar a trégua.</p></div>\n        <div class=\"card stat\"><div class=\"num\">~metade</div><h3>de Gaza</h3><p>continua sob controle militar israelense. A segunda fase do plano está travada.</p></div>\n      </div>",
    "notes": "Fechar o contexto e passar pra Evilayne, que abre as perguntas finais."
  },
  {
    "id": "p3",
    "speaker": "Evilayne",
    "layout": "question",
    "kicker": "Pergunta pra sala",
    "title": "O mundo fez o suficiente pra parar o que aconteceu em Gaza?",
    "body": "<p class=\"lead\">Países, ONU, Brasil… alguém poderia ter feito mais?</p>",
    "poll": {
      "q": "O mundo fez o suficiente pra parar o que aconteceu em Gaza?",
      "options": [
        "Sim",
        "Não",
        "Não sei"
      ]
    },
    "followups": [
      "Se fosse um país pobre fazendo isso, o mundo já teria agido?",
      "O que o mundo poderia ter feito: parar de vender armas, cortar relações, sanções?",
      "Por que demorou tanto pra alguém falar em genocídio?",
      "O Brasil fez certo em entrar no processo contra Israel na Corte da ONU?"
    ],
    "notes": "Antes de abrir a votação: Gustavo provoca (30 s) e Davy rebate (30 s). Depois abre a votação e pergunta pra sala: \"e vocês, concordam com quem?\". Puxar o Brasil pra conversa. Se todo mundo votar igual, perguntar: \"e o que vocês fariam se fossem presidente?\" Plano B: se pouca gente votar no celular, pedir pra sala levantar a mão.",
    "warmup": [
      {
        "name": "Gustavo",
        "text": "O mundo falhou. Todo mundo viu tudo ao vivo pelo celular e quase ninguém fez nada. Depois do Holocausto prometeram 'nunca mais'. Cadê?"
      },
      {
        "name": "Davy",
        "text": "Mas o que um país de longe consegue fazer de verdade? Se o Brasil cortar relação com Israel, muda alguma coisa lá? Ou é só pra aparecer?"
      }
    ]
  },
  {
    "id": "p4",
    "speaker": "Evilayne",
    "layout": "question",
    "kicker": "Pergunta pra sala",
    "title": "As redes sociais ajudam a entender essa guerra ou só espalham ódio?",
    "body": "<p class=\"lead\">TikTok, Instagram, X… de onde vem o que você sabe sobre Gaza?</p>",
    "poll": {
      "q": "As redes sociais ajudam a entender essa guerra ou só espalham ódio?",
      "options": [
        "Ajudam",
        "Atrapalham",
        "Os dois"
      ]
    },
    "followups": [
      "Quem aqui já mudou de opinião por causa de um vídeo?",
      "Alguém já viu notícia falsa sobre esse assunto?",
      "Postar sobre Gaza ajuda de verdade ou é só pra aparecer?",
      "A gente, aqui no Brasil, deveria se importar com isso? Por quê?"
    ],
    "notes": "Antes de abrir a votação: Luis Eduardo provoca (30 s) e Kaiky rebate (30 s). Depois abre a votação e pergunta pra sala: \"e vocês, concordam com quem?\". Pergunta mais leve pra sala inteira participar. Pedir exemplos de vídeos ou posts que eles viram. Plano B: se pouca gente votar no celular, pedir pra sala levantar a mão.",
    "warmup": [
      {
        "name": "Luis Eduardo",
        "text": "Rede social ajuda, sim. Foi pelo celular que o mundo viu o que está acontecendo em Gaza. A TV não mostrava."
      },
      {
        "name": "Kaiky",
        "text": "Ajuda nada. Tem muito vídeo falso, e cada um só vê o que o algoritmo quer. Vira briga, não informação."
      }
    ]
  },
  {
    "id": "pfinal",
    "speaker": "Evilayne",
    "layout": "question",
    "kicker": "Pergunta final",
    "title": "E pra você: o que acontece em Gaza é genocídio?",
    "body": "<p class=\"lead\">Depois de tudo que a gente mostrou e debateu, qual é a sua opinião?</p>",
    "poll": {
      "q": "E pra você: o que acontece em Gaza é genocídio?",
      "options": [
        "Sim",
        "Não",
        "Ainda não sei"
      ]
    },
    "followups": [
      "Quem votou diferente do grupo: o que a gente não conseguiu te convencer?",
      "Pra quem votou \"não\" ou \"ainda não sei\": o que faltou pra te convencer?",
      "Pra quem votou \"sim\": o que mais pesou?",
      "Alguém mudou de opinião durante a aula?"
    ],
    "notes": "Última votação. Dar a palavra principalmente pra quem discordou do grupo: é o momento de debate mais legal. No fim, chamar o Davy pra encerrar. Plano B: se pouca gente votar no celular, pedir pra sala levantar a mão."
  },
  {
    "id": "fim",
    "fala": "Valeu demais, galera! Hoje teve gente que concordou, gente que discordou, e é assim que tem que ser. A gente quis mostrar que dá pra discutir um assunto pesado com fatos e com respeito. Mas fica uma última pergunta pra vocês levarem pra casa: se daqui a 20 anos alguém perguntar o que vocês pensavam sobre Gaza em 2026, o que vocês vão responder? Obrigado!",
    "speaker": "Davy",
    "layout": "end",
    "kicker": "Obrigado!",
    "title": "Obrigado por debaterem com a gente!",
    "body": "\n      <p class=\"lead\">Davy dos Santos Mendes · Eduardo Santos Yamanaka · Luis Eduardo Cremoneze Dourado · Gustavo Mauricio de Morais Silva · Kaiky Victor Santos · Guilherme Aquiles Xavier<br>Apresentação: <b>Evilayne</b></p>\n      <div class=\"sources\">\n        <b>Fontes:</b> Convenção da ONU sobre Genocídio (1948) · Comissão de Inquérito da ONU sobre o Território Palestino Ocupado (set/2025) · Corte Internacional de Justiça, caso África do Sul v. Israel · OCHA/ONU, Gaza Impact Snapshot (nov/2026) · Ministério da Saúde de Gaza via Qatar News Agency e AP · Ministério das Relações Exteriores de Israel · Itamaraty · Anistia Internacional · IPC (classificação de fome).\n      </div>",
    "notes": "Agradecer, mostrar quem mais participou e encerrar."
  }
];
