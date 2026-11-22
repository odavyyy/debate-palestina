# Debate ao vivo: Genocídio na Palestina

Apresentação interativa para a escola, com três telas que conversam em tempo real:

| Tela | Link | Quem usa |
|---|---|---|
| Alunos | `https://odavyyy.github.io/debate-palestina/` | Todo mundo, pelo QR Code (sem login) |
| Telão | `https://odavyyy.github.io/debate-palestina/telao` | Computador ligado no projetor |
| Painel | `https://odavyyy.github.io/debate-palestina/apresentadora` | Evilayne (celular ou notebook) |
| Falas | `https://odavyyy.github.io/debate-palestina/orador` | Cada apresentador no próprio celular: avisa a vez e mostra a fala |
| Atalhos | `https://odavyyy.github.io/debate-palestina/links` | Quem for testar: botões para todas as telas e sala de teste |

## Como usar no dia
1. No computador do projetor, abra o **telão**, digite a senha do grupo e aperte **F** (tela cheia).
2. A Evilayne abre o **painel** e digita **a mesma senha**.
3. A turma escaneia o QR Code, coloca o nome e participa.
4. O grupo apresenta o contexto e a opinião do grupo. Entre os blocos, a Evilayne faz perguntas pra sala votar no celular e chama pra falar quem votou diferente (o painel mostra quem votou o quê).

**Atalhos do telão:** ← → trocam slide · F tela cheia · Q esconde o QR · S troca a senha.

Antes de começar, use **Zerar tudo** no painel para apagar os testes.

## Como funciona
Site estático (GitHub Pages). O tempo real usa dois servidores MQTT públicos e gratuitos (EMQX e HiveMQ) ao mesmo tempo; se um cair, o outro segura. Os comandos do painel são assinados com a senha, então só quem tem a senha controla slides e fila.

Grupo: Davy dos Santos Mendes, Eduardo Santos Yamanaka, Luis Eduardo Cremoneze Dourado, Gustavo Mauricio de Morais Silva, Kaiky Victor Santos, Guilherme Aquiles Xavier. Apresentação: Evilayne.
