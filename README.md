# Debate ao vivo: Palestina, é genocídio?

Apresentação interativa para a escola, com três telas que conversam em tempo real:

| Tela | Link | Quem usa |
|---|---|---|
| Alunos | `https://odavyyy.github.io/debate-palestina/` | Todo mundo, pelo QR Code (sem login) |
| Telão | `https://odavyyy.github.io/debate-palestina/telao.html` | Computador ligado no projetor |
| Painel | `https://odavyyy.github.io/debate-palestina/apresentadora.html` | Evilayne (celular ou notebook) |

## Como usar no dia
1. No computador do projetor, abra o **telão**, digite a senha do grupo e aperte **F** (tela cheia).
2. A Evilayne abre o **painel** e digita **a mesma senha**.
3. A turma escaneia o QR Code, coloca o nome e participa.
4. A Evilayne passa os slides, abre as votações e dá a palavra pelo painel.

**Atalhos do telão:** ← → trocam slide · F tela cheia · Q esconde o QR · S troca a senha.

Antes de começar, use **Zerar tudo** no painel para apagar os testes.

## Como funciona
Site estático (GitHub Pages). O tempo real usa dois servidores MQTT públicos e gratuitos (EMQX e HiveMQ) ao mesmo tempo; se um cair, o outro segura. Os comandos do painel são assinados com a senha, então só quem tem a senha controla slides e fila.

Grupo: Davy dos Santos Mendes, Eduardo Santos Yamanaka, Luis Eduardo Cremoneze Dourado, Gustavo Mauricio de Morais Silva, Kaiky Victor Santos, Guilherme Aquiles Xavier. Apresentação: Evilayne.
