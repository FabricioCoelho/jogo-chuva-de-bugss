import { CONFIG } from "./config.js";
import { setupInput } from "./input.js";
import { createGame, getView, updateGame } from "./game.js";

const canvas = document.querySelector("#game");
const context = canvas.getContext("2d");
const input = setupInput();
const game = createGame();
let previousTime = 0;

canvas.width = CONFIG.canvasWidth;
canvas.height = CONFIG.canvasHeight;

function drawBackground() {
  context.fillStyle = CONFIG.backgroundColor;
  context.fillRect(0, 0, CONFIG.canvasWidth, CONFIG.canvasHeight);
}

function drawStartScreen() {
  drawBackground();
  context.fillStyle = CONFIG.textColor;
  context.font = CONFIG.titleFont;
  context.textAlign = CONFIG.textAlign;
  context.fillText(CONFIG.gameTitle, CONFIG.canvasWidth / 2, CONFIG.titleY);

  context.fillStyle = CONFIG.accentColor;
  context.font = CONFIG.instructionFont;
  context.fillText(CONFIG.startInstruction, CONFIG.canvasWidth / 2, CONFIG.instructionY);
}

function drawPlayingScreen(view) {
  drawBackground();
  context.fillStyle = CONFIG.textColor;
  context.font = CONFIG.hudFont;
  context.textAlign = "left";
  context.fillText(`Cafés: ${view.score}`, 20, CONFIG.hudY);
  context.textAlign = "right";
  context.fillText(`Vidas: ${view.lives}`, CONFIG.canvasWidth - 20, CONFIG.hudY);

  context.font = CONFIG.playerFont;
  context.textAlign = "center";
  context.fillText(CONFIG.playerEmoji, view.playerX, CONFIG.playerY);
}

function render(view) {
  if (view.screen === "start") {
    drawStartScreen();
    return;
  }
  drawPlayingScreen(view);
}

function gameLoop(timestamp) {
  const elapsedSeconds = previousTime === 0
    ? 0
    : Math.min((timestamp - previousTime) / 1000, CONFIG.maximumDelta);

  previousTime = timestamp;
  updateGame(game, elapsedSeconds, input);
  render(getView(game));
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
