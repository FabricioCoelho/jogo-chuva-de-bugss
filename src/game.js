import { CONFIG } from "./config.js";

export function createGame() {
  return {
    screen: "start",
    playerX: CONFIG.canvasWidth / 2,
    score: 0,
    lives: CONFIG.initialLives
  };
}

export function startGame(game) {
  game.screen = "playing";
  game.playerX = CONFIG.canvasWidth / 2;
  game.score = 0;
  game.lives = CONFIG.initialLives;
}

export function updateGame(game, delta, input) {
  if (game.screen === "start" && input.start) {
    startGame(game);
    input.start = false;
  }

  if (game.screen !== "playing") {
    return;
  }

  const direction = Number(input.right) - Number(input.left);
  game.playerX += direction * CONFIG.playerSpeed * delta;
  game.playerX = Math.max(
    CONFIG.playerHalfWidth,
    Math.min(CONFIG.canvasWidth - CONFIG.playerHalfWidth, game.playerX)
  );
}

export function getView(game) {
  return game;
}
