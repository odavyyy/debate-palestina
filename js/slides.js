/* Conteúdo dos slides. Cada slide tem: quem fala, título, corpo (HTML), fala (para decorar) e dicas para a apresentadora.
   Formato: contexto curto, pergunta central e 3 rodadas (o grupo abre, a sala vota, o site sorteia 1 de cada lado e o grupo rebate).
   A primeira votação (p0) é repetida no final (pfinal) para mostrar quem mudou de ideia.
   Números verificados em novembro de 2026 (ver slide de fontes). */
window.SLIDES = [
  {
    "id": "qr",
    "speaker": "Davy",
    "layout": "qr",
    "kicker": "Antes de começar",
    "title": "Escaneie e participe!",
    "body": "",
    "fala": "Pessoal, a gente queria fazer algo diferente, algo legal aqui. Vamos ver se vai dar certo usar o celular. Se não der, se não puder, tudo bem: vamos tentar pelo menos. Então pega o celular, abre a câmera e escaneia esse QR Code. É só colocar o seu nome, sem login. [espera o número subir na tela]",
    "notes": "Deixar este slide até quase toda a sala entrar (o número aparece no telão). Depois, passar pra capa."
  },
  {
    "id": "capa",
    "speaker": "Davy",
    "layout": "cover",
    "kicker": "Debate ao vivo",
    "title": "Genocídio na Palestina",
    "body": "<p class=\"lead\">Escaneie o QR Code e coloque seu nome. Você vota, e pode ser sorteado pra defender o seu voto.</p>",
    "fala": "Bom dia, pessoal! O nosso tema é pesado: genocídio na Palestina. E hoje não vai ser só a gente falando. Vai ser tipo programa de TV, com a Evilayne apresentando, e a opinião de vocês vai aparecer ali no telão.",
    "notes": "O Davy abre. Quem ainda não entrou pode escanear o QR desta tela."
  },
  {
    "id": "regras",
    "speaker": "Davy",
    "layout": "cards",
    "kicker": "Como vai funcionar",
    "title": "Você também está no programa",
    "body": "\n      <div class=\"cards c4\">\n        <div class=\"card\"><div class=\"big\">01</div><h3>Vote</h3><p>A Evilayne faz a pergunta e você responde no celular.</p></div>\n        <div class=\"card\"><div class=\"big\">02</div><h3>Sorteio</h3><p>O site sorteia 1 pessoa de cada lado pra defender o voto.</p></div>\n        <div class=\"card\"><div class=\"big\">03</div><h3>1 minuto</h3><p>Quem for sorteado fala com o cronômetro aqui no telão.</p></div>\n        <div class=\"card\"><div class=\"big\">04</div><h3>Peça a palavra</h3><p>Quer falar sem ser sorteado? Pede pelo celular.</p></div>\n      </div>\n      <p class=\"rule\">Regra de ouro: <b>critique ideias, não pessoas.</b></p>",
    "fala": "Funciona assim: a Evilayne faz uma pergunta, vocês votam no celular, e o resultado aparece aqui. Aí o site sorteia uma pessoa de cada lado pra defender o voto, com 1 minuto no cronômetro. Então vota sério, porque pode ser você! E quem quiser falar sem ser sorteado, é só pedir a palavra no celular. Uma regra só: critica a ideia, não a pessoa. Evilayne, é com você!",
    "notes": "Depois do Davy, você assume e faz a primeira votação, bem rápida."
  },
  {
    "id": "p0",
    "speaker": "Evilayne",
    "layout": "question",
    "kicker": "Antes de tudo",
    "title": "O que acontece em Gaza é genocídio?",
    "body": "<p class=\"lead\">Vote no celular. Guarda esse voto: no final a gente pergunta de novo.</p>",
    "poll": {
      "q": "O que acontece em Gaza é genocídio?",
      "options": [
        "Sim",
        "Não",
        "Ainda não sei"
      ]
    },
    "noDraw": true,
    "notes": "Votação rápida, sem debate: abre, espera uns 20 s e mostra o resultado. Fala: \"Guardem esse voto. No final a gente pergunta de novo pra ver quem mudou de ideia.\" Depois chama o Eduardo. Plano B: se pouca gente votar no celular, pede pra levantar a mão."
  },
  {
    "id": "onde",
    "fala": "Primeiro: onde é isso. Os palestinos têm dois territórios: Gaza, no litoral, do lado do Egito, e a Cisjordânia. Gaza é menor que a cidade de São Paulo e tinha 2,1 milhões de pessoas antes da guerra. Desde 2007 quem governa lá é o Hamas, e Israel e Egito controlam tudo que entra e sai: comida, remédio, gente.",
    "speaker": "Eduardo",
    "layout": "cards",
    "kicker": "Contexto",
    "title": "Onde fica e quem vive lá",
    "body": "\n      <div class=\"cards c3\">\n        <div class=\"card stat\"><div class=\"num\">2</div><h3>territórios palestinos</h3><p><b>Faixa de Gaza</b> (litoral, na fronteira com o Egito) e <b>Cisjordânia</b> (incluindo Jerusalém Oriental).</p></div>\n        <div class=\"card stat\"><div class=\"num\">365 km²</div><h3>tamanho de Gaza</h3><p>Menor que a cidade de São Paulo, com cerca de <b>2,1 milhões</b> de pessoas antes da guerra — uma das áreas mais densas do mundo.</p></div>\n        <div class=\"card stat\"><div class=\"num\">2007</div><h3>início do bloqueio</h3><p>O grupo <b>Hamas</b> assumiu o controle de Gaza, e Israel e Egito passaram a controlar quem e o que entra e sai.</p></div>\n      </div>",
    "notes": "Situar a turma: Israel e os territórios palestinos ficam no Oriente Médio. Gaza é pequena e muito populosa. Desde 2007 é governada pelo Hamas e vive sob bloqueio de Israel e do Egito."
  },
  {
    "id": "historia",
    "fala": "E isso não começou ontem. Em 1948 Israel foi criado, e cerca de 700 mil palestinos perderam suas casas. Pros israelenses, 1948 é a independência. Pros palestinos, é a Nakba, a catástrofe. A mesma data, duas histórias. Em 1967 Israel ocupou Gaza e a Cisjordânia, e em 2007 o Hamas tomou Gaza. O Luis vai mostrar o dia que mudou tudo.",
    "speaker": "Eduardo",
    "layout": "timeline",
    "kicker": "Contexto",
    "title": "Como a gente chegou aqui",
    "body": "\n      <ol class=\"timeline\">\n        <li><b>1947</b><span>A ONU propõe dividir a região em um Estado judeu e um Estado árabe.</span></li>\n        <li><b>1948</b><span>Israel é criado. Na guerra que segue, cerca de 700 mil palestinos fogem ou são expulsos — os palestinos chamam isso de <i>Nakba</i> (\"catástrofe\").</span></li>\n        <li><b>1967</b><span>Guerra dos Seis Dias: Israel passa a ocupar Gaza, Cisjordânia e Jerusalém Oriental.</span></li>\n        <li><b>2005</b><span>Israel retira colonos e soldados de Gaza.</span></li>\n        <li><b>2007</b><span>Hamas toma Gaza; começa o bloqueio. Várias guerras curtas acontecem nos anos seguintes.</span></li>\n        <li><b>2023</b><span>7 de outubro: começa a guerra atual.</span></li>\n      </ol>",
    "notes": "Não precisa decorar datas. A ideia: é um conflito de mais de 75 anos, com disputa por terra, refugiados e ocupação. Os dois lados contam essa história de jeitos diferentes."
  },
  {
    "id": "out7",
    "fala": "7 de outubro de 2023. O Hamas invadiu o sul de Israel e matou cerca de 1.200 pessoas, a maioria civis: jovens numa festa de música, famílias dentro de casa. 251 pessoas foram levadas como reféns pra Gaza, inclusive crianças e idosos. Foi o dia mais mortal para judeus desde o Holocausto.",
    "speaker": "Luis Eduardo",
    "layout": "cards",
    "kicker": "7 de outubro de 2023",
    "title": "O ataque que iniciou a guerra",
    "body": "\n      <div class=\"cards c2\">\n        <div class=\"card stat\"><div class=\"num\">~1.200</div><h3>mortos em Israel</h3><p>O Hamas e outros grupos atacaram o sul de Israel. A maioria dos mortos era civil.</p></div>\n        <div class=\"card stat\"><div class=\"num\">251</div><h3>reféns levados para Gaza</h3><p>Entre eles crianças e idosos. Os últimos reféns vivos foram libertados no cessar-fogo de 2025.</p></div>\n      </div>\n      <p class=\"rule\">Israel declarou guerra ao Hamas com o objetivo de destruir o grupo e trazer os reféns de volta.</p>",
    "notes": "É importante mostrar esse lado: foi o dia mais mortal para judeus desde o Holocausto. Isso é central no argumento de Israel de que age em legítima defesa."
  },
  {
    "id": "numeros",
    "fala": "E Israel respondeu com guerra. Mais de 74.600 mortos em Gaza, segundo o Ministério da Saúde de lá. Mais de 175 mil feridos. Cerca de 90% da população teve que fugir de casa, e em 2025 foi confirmada fome. Israel diz que esses números são exagerados, porque o ministério é do Hamas, mas a ONU considera os dados confiáveis. Desde outubro de 2025 tem um cessar-fogo, mas as mortes não pararam. Então: 1.200 mortos de um lado, mais de 74 mil do outro. O Gustavo vai explicar o que é genocídio.",
    "speaker": "Luis Eduardo",
    "layout": "cards",
    "kicker": "A guerra em Gaza",
    "title": "Dois anos de guerra em números",
    "body": "\n      <div class=\"cards c4\">\n        <div class=\"card stat red\"><div class=\"num\">74.600+</div><h3>mortos</h3><p>Segundo o Ministério da Saúde de Gaza (nov. 2026).</p></div>\n        <div class=\"card stat\"><div class=\"num\">175 mil+</div><h3>feridos</h3><p>Mais de 43 mil com lesões que mudam a vida, segundo a OMS.</p></div>\n        <div class=\"card stat\"><div class=\"num\">~90%</div><h3>deslocados</h3><p>A maior parte da população teve que deixar sua casa, muitos várias vezes.</p></div>\n        <div class=\"card stat\"><div class=\"num\">2025</div><h3>fome confirmada</h3><p>Em agosto, o sistema IPC (ligado à ONU) confirmou fome na Cidade de Gaza.</p></div>\n      </div>\n      <p class=\"note\"><b>Atenção:</b> o Ministério da Saúde de Gaza é controlado pelo Hamas e não separa civis de combatentes. Israel contesta os números; a ONU e vários estudos independentes consideram os dados confiáveis.</p>",
    "notes": "Ler os números com calma. Explicar a polêmica dos dados: quem conta é o ministério de Gaza, ligado ao Hamas. Israel diz que estão inflados; ONU e pesquisadores independentes costumam considerar confiáveis e alguns estudos estimam até mais mortes."
  },
  {
    "id": "definicao",
    "fala": "Genocídio não é só 'morreu muita gente'. Em 1948, depois do Holocausto, a ONU definiu: são atos feitos com a intenção de destruir um povo, no todo ou em parte. Matar, causar danos graves, criar condições de vida pra destruir o grupo, impedir nascimentos e tirar crianças à força. E o que decide tudo é a intenção. O Kaiky vai mostrar quem acusa e quem se defende.",
    "speaker": "Gustavo",
    "layout": "definition",
    "kicker": "Antes de discutir",
    "title": "O que é genocídio, afinal?",
    "body": "\n      <blockquote>Atos cometidos <b>com a intenção de destruir</b>, no todo ou em parte, um grupo nacional, étnico, racial ou religioso.</blockquote>\n      <p class=\"src\">Convenção da ONU para a Prevenção e Punição do Crime de Genocídio, 1948 — criada depois do Holocausto.</p>\n      <div class=\"cards c5 small\">\n        <div class=\"card\"><b>1</b><p>Matar membros do grupo</p></div>\n        <div class=\"card\"><b>2</b><p>Causar danos físicos ou mentais graves</p></div>\n        <div class=\"card\"><b>3</b><p>Impor condições de vida para destruir o grupo</p></div>\n        <div class=\"card\"><b>4</b><p>Impedir nascimentos</p></div>\n        <div class=\"card\"><b>5</b><p>Transferir crianças à força</p></div>\n      </div>\n      <p class=\"rule\">A parte mais difícil de provar é a <b>intenção</b>. Muitas mortes, sozinhas, não bastam: precisa mostrar que o objetivo era destruir o grupo.</p>",
    "notes": "Este slide é a chave do debate. Genocídio não é sinônimo de \"muita gente morreu\". É um crime com definição jurídica, e o ponto central é a intenção. Guerra com muitas mortes civis pode ser crime de guerra sem ser genocídio, e o debate é justamente esse."
  },
  {
    "id": "acusam",
    "fala": "Quem acusa Israel não é qualquer um. A África do Sul levou Israel pra Corte Internacional de Justiça, e o Brasil entrou junto. Em 2025, uma comissão da ONU concluiu que Israel cometeu quatro dos cinco atos de genocídio. A Anistia Internacional e os maiores estudiosos de genocídio do mundo concordam.",
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
    "fala": "Mas Israel tem a versão dele. Diz que a guerra é contra o Hamas, não contra os palestinos. Diz que o Hamas se esconde embaixo de casas, escolas e hospitais, usando a população como escudo, e que avisou os civis antes de atacar. E os Estados Unidos estão do lado de Israel na Corte. O Guilherme vai falar o que o nosso grupo pensa.",
    "speaker": "Kaiky",
    "layout": "versus",
    "side": "b",
    "kicker": "O outro lado",
    "title": "O que diz Israel",
    "body": "\n      <ul class=\"points\">\n        <li><b>Governo de Israel</b> rejeita a acusação e chamou o relatório da ONU de \"distorcido e falso\".</li>\n        <li><b>Legítima defesa:</b> a guerra seria contra o Hamas, não contra o povo palestino, depois do 7 de outubro.</li>\n        <li><b>Escudos humanos:</b> o Hamas operaria em túneis e prédios civis, o que aumentaria as mortes de civis.</li>\n        <li><b>Avisos e ajuda:</b> Israel diz que avisou civis antes de ataques e permitiu a entrada de ajuda.</li>\n        <li>Os <b>Estados Unidos</b> entraram no caso da CIJ em defesa de Israel (2026).</li>\n      </ul>",
    "notes": "Mesmo tom do slide anterior. A defesa de Israel se apoia em três pontos: autodefesa, falta de intenção de destruir os palestinos e culpa do Hamas pelas mortes de civis."
  },
  {
    "id": "opiniao",
    "speaker": "Guilherme",
    "layout": "versus",
    "side": "a",
    "kicker": "Nossa opinião",
    "title": "Por que a gente acha que é genocídio",
    "body": "\n      <ul class=\"points\">\n        <li><b>Matar e ferir em massa (atos 1 e 2):</b> mais de 74 mil mortos e 175 mil feridos, muitos deles civis.</li>\n        <li><b>Condições pra destruir um povo (ato 3):</b> fome confirmada, hospitais destruídos, ajuda bloqueada.</li>\n        <li><b>Intenção:</b> a comissão da ONU apontou falas de autoridades israelenses mostrando a vontade de destruir Gaza.</li>\n        <li><b>Não somos só nós:</b> ONU, Anistia, estudiosos de genocídio e até organizações de direitos humanos de dentro de Israel dizem o mesmo.</li>\n      </ul>\n      <p class=\"rule\">Isso <b>não</b> é apoiar o Hamas: o 7 de outubro também foi um crime.</p>",
    "fala": "Depois de ouvir os dois lados, a opinião do nosso grupo é: é genocídio. Mais de 74 mil mortos, fome, hospitais destruídos e ajuda bloqueada. E a comissão da ONU apontou falas de autoridades israelenses mostrando a intenção. Mas dizer isso não é apoiar o Hamas: o 7 de outubro também foi um crime. Só que o crime de um grupo não dá o direito de punir um povo inteiro. Aí vem a pergunta que importa: se é genocídio, o que o mundo deveria fazer? Evilayne!",
    "notes": "Slide com a posição do grupo. Falar com convicção, mas sem atacar quem pensa diferente: a sala vai poder discordar nas perguntas."
  },
  {
    "id": "central",
    "speaker": "Evilayne",
    "layout": "cards",
    "kicker": "Pergunta central",
    "title": "O que o mundo deveria fazer quando acontece um genocídio?",
    "body": "\n      <div class=\"cards c3\">\n        <div class=\"card\"><div class=\"big\">01</div><h3>O Brasil</h3><p>Deveria cortar relações com Israel?</p></div>\n        <div class=\"card\"><div class=\"big\">02</div><h3>A ONU</h3><p>Deveria poder intervir à força?</p></div>\n        <div class=\"card\"><div class=\"big\">03</div><h3>Você</h3><p>Boicote e protesto de gente comum mudam alguma coisa?</p></div>\n      </div>\n      <p class=\"rule\">Cada rodada: alguém do grupo explica a situação, vocês votam, o site <b>sorteia 1 de cada lado</b> pra defender o voto, e o grupo responde.</p>",
    "notes": "Lê a pergunta central em voz alta e explica as 3 rodadas, do país até a gente. Depois chama o Kaiky pra abrir a rodada 1."
  },
  {
    "id": "r1",
    "speaker": "Evilayne",
    "layout": "question",
    "kicker": "Rodada 1 · O Brasil",
    "title": "O Brasil deveria cortar relações com Israel?",
    "body": "<p class=\"lead\">Vote no celular. Depois o site sorteia 1 pessoa de cada lado pra defender o voto.</p>",
    "poll": {
      "q": "O Brasil deveria cortar relações com Israel?",
      "options": [
        "Sim, deveria cortar",
        "Não deveria",
        "Ainda não sei"
      ],
      "sides": [
        0,
        1
      ]
    },
    "followups": [
      "Se cortar relação não muda nada, por que Israel ficou tão bravo com o Lula?",
      "Quem votou \"não\": então o que o Brasil deveria fazer?",
      "Cortar relação prejudica quem: o governo de Israel ou as pessoas comuns?",
      "O Brasil deveria parar de fazer comércio com Israel, mesmo perdendo dinheiro?"
    ],
    "notes": "1) Chama o Kaiky pra abrir a rodada (30 s). 2) Abre a votação, espera uns 20 s e mostra o resultado. 3) Toca em \"Sortear 1 de cada lado\": o telão mostra quem vai defender cada lado. 4) Dá a palavra pra cada sorteado (1 min cada). 5) Chama o Guilherme pra rebater com um fato (30 s). 6) Sobrou tempo? Usa as perguntas abaixo ou chama quem pediu a palavra. Se o tempo apertar, troca o tempo de fala pra 30 s. Plano B: se pouca gente votar no celular, pede pra levantar a mão e escolhe 1 de cada lado.",
    "warmup": [
      {
        "name": "Kaiky",
        "text": "Em 2024 o Lula comparou a guerra em Gaza ao Holocausto, Israel declarou ele 'persona non grata', e o Brasil tirou o embaixador de lá. A Bolívia e a Colômbia foram além e cortaram as relações com Israel de vez. O Brasil não cortou: continua fazendo comércio com Israel. Então a pergunta é: o Brasil deveria ir até o fim e cortar tudo?"
      },
      {
        "name": "Guilherme",
        "text": "Quem acha que não muda nada: em 2024 a Espanha, a Irlanda e a Noruega reconheceram o Estado da Palestina, e Israel ficou tão bravo que chamou os embaixadores de volta. Decisão de outro país incomoda, sim. Agora, quem quer cortar: sem relação, também fica mais difícil negociar. Foi conversando com Israel e com o Egito que o Brasil conseguiu tirar brasileiros de Gaza em 2023."
      }
    ]
  },
  {
    "id": "r2",
    "speaker": "Evilayne",
    "layout": "question",
    "kicker": "Rodada 2 · A ONU",
    "title": "A ONU deveria poder intervir à força pra parar um genocídio?",
    "body": "<p class=\"lead\">Vote no celular. Depois o site sorteia 1 pessoa de cada lado pra defender o voto.</p>",
    "poll": {
      "q": "A ONU deveria poder intervir à força pra parar um genocídio?",
      "options": [
        "Sim, com tropas se precisar",
        "Não, cada país manda em si",
        "Ainda não sei"
      ],
      "sides": [
        0,
        1
      ]
    },
    "followups": [
      "Quem decide se um país está cometendo genocídio? E se errar?",
      "Vocês aceitariam soldados de outro país entrando no Brasil?",
      "O poder de veto dos 5 países deveria acabar?",
      "Se a ONU não pode fazer nada, ela serve pra quê?"
    ],
    "notes": "1) Chama o Gustavo pra abrir a rodada (30 s). 2) Abre a votação, espera uns 20 s e mostra o resultado. 3) Toca em \"Sortear 1 de cada lado\": o telão mostra quem vai defender cada lado. 4) Dá a palavra pra cada sorteado (1 min cada). 5) Chama o Eduardo pra rebater com um fato (30 s). 6) Sobrou tempo? Usa as perguntas abaixo ou chama quem pediu a palavra. Se o tempo apertar, troca o tempo de fala pra 30 s. Plano B: se pouca gente votar no celular, pede pra levantar a mão e escolhe 1 de cada lado.",
    "warmup": [
      {
        "name": "Gustavo",
        "text": "A ONU tem 193 países, mas quem pode mandar tropas é o Conselho de Segurança. E lá cinco países têm poder de veto: Estados Unidos, Rússia, China, França e Reino Unido. Os Estados Unidos vetaram várias vezes pedidos de cessar-fogo em Gaza. E em Ruanda, em 1994, a ONU tinha soldados no país e mesmo assim cerca de 800 mil pessoas foram mortas em 100 dias. Então: a ONU deveria poder entrar à força?"
      },
      {
        "name": "Eduardo",
        "text": "Quem quer intervenção: em 2011 a ONU autorizou atacar a Líbia pra proteger civis. O ditador caiu, e o país virou guerra civil por anos. Entrar à força pode piorar. Agora, quem não quer: depois de Ruanda o mundo prometeu que nunca mais ia ficar parado. Se não for a ONU, quem vai parar um genocídio?"
      }
    ]
  },
  {
    "id": "r3",
    "speaker": "Evilayne",
    "layout": "question",
    "kicker": "Rodada 3 · Você",
    "title": "Boicote e protesto de gente comum mudam alguma coisa?",
    "body": "<p class=\"lead\">Vote no celular. Depois o site sorteia 1 pessoa de cada lado pra defender o voto.</p>",
    "poll": {
      "q": "Boicote e protesto de gente comum mudam alguma coisa?",
      "options": [
        "Sim, mudam",
        "Não, não adianta",
        "Ainda não sei"
      ],
      "sides": [
        0,
        1
      ]
    },
    "followups": [
      "Alguém aqui já deixou de comprar alguma coisa por causa de uma causa?",
      "Postar sobre Gaza ajuda ou é só pra aparecer?",
      "Protesto aqui no Brasil chega lá em Gaza de algum jeito?",
      "Se nada que a gente faz adianta, então a gente não deveria se importar?"
    ],
    "notes": "1) Chama o Luis Eduardo pra abrir a rodada (30 s). 2) Abre a votação, espera uns 20 s e mostra o resultado. 3) Toca em \"Sortear 1 de cada lado\": o telão mostra quem vai defender cada lado. 4) Dá a palavra pra cada sorteado (1 min cada). 5) Chama o Davy pra rebater com um fato (30 s). 6) Sobrou tempo? Usa as perguntas abaixo ou chama quem pediu a palavra. Se o tempo apertar, troca o tempo de fala pra 30 s. Plano B: se pouca gente votar no celular, pede pra levantar a mão e escolhe 1 de cada lado.",
    "warmup": [
      {
        "name": "Luis Eduardo",
        "text": "Agora é com a gente, gente comum. Desde 2023 teve protesto no mundo inteiro, até nas universidades dos Estados Unidos, e campanha de boicote a marcas ligadas a Israel. E tem exemplo na história: na África do Sul, o boicote do mundo todo, no esporte, nas compras e nos investimentos, ajudou a pressionar o apartheid até acabar, em 1994. Então: o que a gente faz daqui do Brasil adianta alguma coisa?"
      },
      {
        "name": "Davy",
        "text": "Quem acha que não adianta: em 2024 o McDonald's e a Starbucks admitiram que as vendas caíram no Oriente Médio por causa do boicote ligado à guerra. Empresa grande sentiu. Agora, quem acha que adianta: muitas vezes o boicote atinge o funcionário da loja, não o governo. Então a pergunta é: boicote contra quem?"
      }
    ]
  },
  {
    "id": "pfinal",
    "speaker": "Evilayne",
    "layout": "question",
    "kicker": "Votação final",
    "title": "E agora: o que acontece em Gaza é genocídio?",
    "body": "<p class=\"lead\">A mesma pergunta do começo. Depois de tudo, mudou alguma coisa?</p>",
    "poll": {
      "q": "E agora: o que acontece em Gaza é genocídio?",
      "options": [
        "Sim",
        "Não",
        "Ainda não sei"
      ]
    },
    "final": true,
    "compareWith": "p0",
    "noDraw": true,
    "followups": [
      "Quem mudou de ideia: o que te fez mudar?",
      "Quem votou \"não\" ou \"ainda não sei\": o que faltou pra te convencer?",
      "Quem votou \"sim\" desde o começo: o que mais pesou?"
    ],
    "notes": "A mesma pergunta do começo. Abre, espera uns 20 s e mostra o resultado: o telão compara com o começo e mostra quantos mudaram de ideia. O painel mostra o nome de quem mudou: chama 1 ou 2 pra contar por quê. Depois chama o Davy pra encerrar. Plano B: se pouca gente votar no celular, pede pra levantar a mão."
  },
  {
    "id": "fim",
    "fala": "Valeu demais, galera! Obrigado por toparem usar o celular e principalmente por falarem. Teve gente que concordou, gente que discordou, e é assim que tem que ser. A gente quis mostrar que dá pra discutir um assunto pesado com fatos e com respeito. Fica uma última pergunta pra levar pra casa: se daqui a 20 anos alguém perguntar o que vocês pensavam sobre Gaza em 2026, o que vocês vão responder? Obrigado!",
    "speaker": "Davy",
    "layout": "end",
    "kicker": "Obrigado!",
    "title": "Obrigado por debaterem com a gente!",
    "body": "\n      <p class=\"lead\">Davy dos Santos Mendes · Eduardo Santos Yamanaka · Luis Eduardo Cremoneze Dourado · Gustavo Mauricio de Morais Silva · Kaiky Victor Santos · Guilherme Aquiles Xavier<br>Apresentação: <b>Evilayne</b></p>\n      <div class=\"sources\">\n        <b>Fontes:</b> Convenção da ONU sobre Genocídio (1948) · Comissão de Inquérito da ONU sobre o Território Palestino Ocupado (set/2025) · Corte Internacional de Justiça, caso África do Sul v. Israel · OCHA/ONU, Gaza Impact Snapshot (nov/2026) · Ministério da Saúde de Gaza via Qatar News Agency e AP · Ministério das Relações Exteriores de Israel · Itamaraty · Conselho de Segurança da ONU · Anistia Internacional · IPC (classificação de fome).\n      </div>",
    "notes": "Agradecer, mostrar quem mais participou e encerrar."
  }
];
