# Plano de implementação: Chuva de Bugs

> Como usar: rode `/4-implementar N` para cada tarefa, teste no navegador e faça commit.

- [x] 1. Criar o esqueleto jogável
  - Criar `index.html`, `style.css`, `src/config.js` e `src/main.js`.
  - Definir o `CONFIG`, desenhar o Canvas centralizado e executar o loop com delta time.
  - Mostrar na tela inicial o nome do jogo e a instrução para pressionar Espaço.
  - **Arquivos:** `index.html`, `style.css`, `src/config.js`, `src/main.js`
  - **Como verificar:** Abrir o jogo pelo servidor local → o Canvas aparece, centralizado, com o fundo escuro, o nome do jogo e “pressione Espaço para começar”.
  - _Requisitos: 1.1_

- [x] 2. Implementar controles e início da partida
  - Criar `src/input.js` e `src/game.js` para manter o estado das teclas inicializado.
  - Iniciar uma partida com 0 pontos, 3 vidas e 0 movimento do dev ao pressionar Espaço.
  - Permitir movimento horizontal com ←, →, A e D, sem sair dos limites do Canvas.
  - Permitir reiniciar pela tela de fim de jogo após integrar essa tela nas próximas etapas.
  - **Arquivos:** `src/input.js`, `src/game.js`, `src/main.js`
  - **Como verificar:** Pressionar Espaço → começam 0 pontos e 3 vidas; usar ←, →, A e D → o dev se move sem ultrapassar os lados.
  - _Requisitos: 1.2, 1.3, 2.1, 2.2, 2.3_

- [ ] 3. Criar queda, pontuação, vidas e dificuldade
  - Criar cafés e bugs em posições horizontais variadas e fazê-los cair pelo Canvas.
  - Remover itens que chegam ao chão sem tocar o dev e manter pontos e vidas nesses casos.
  - Somar 1 ponto em cafés, retirar 1 vida em bugs e atualizar HUD e estado da partida.
  - Aumentar velocidade e frequência dos itens com o tempo sem alterar pontos ou vidas.
  - **Arquivos:** `src/game.js`, `src/main.js`
  - **Como verificar:** Deixar os itens passarem sem tocar o dev → não há mudança; coletar cafés → +1 ponto; encostar em bugs → -1 vida; esperar → quedas ficam mais rápidas e frequentes.
  - _Requisitos: 3.1, 3.2, 3.3, 4.1, 4.2, 4.3, 5.1, 5.2, 5.3_

- [ ] 4. Finalizar partida, recorde e polimento
  - Encerrar a partida ao chegar a 0 vidas e mostrar pontuação final, recorde e instrução de reinício.
  - Salvar um novo recorde no `localStorage` e mantê-lo após recarregar ou fechar a página.
  - Conferir os estados, limites, colisões, delta time, visual e todos os critérios do jogo.
  - **Arquivos:** `src/game.js`, `src/main.js`, `index.html`, `style.css`
  - **Como verificar:** Perder todas as vidas → aparecem pontuação final e recorde com “pressione Espaço para jogar de novo”; ao atualizar a página, superar o recorde e recarregar mantém o maior valor.
  - _Requisitos: 6.1, 6.2, 6.3, 6.4_

## Correções

- [x] Bug: Espaço não iniciava a partida | Causa: tela inicial não registrava teclado nem chamava o estado inicial da partida | _Requisitos: 1.2_
