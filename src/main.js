import { CONFIG } from "./config.js";

const canvas = document.querySelector("#game");
const context = canvas.getContext("2d");
let previousTime = 0;

canvas.width = CONFIG.canvasWidth;
canvas.height = CONFIG.canvasHeight;

function drawStartScreen() {
  context.fillStyle = CONFIG.backgroundColor;
  context.fillRect(0, 0, CONFIG.canvasWidth, CONFIG.canvasHeight);

  context.fillStyle = CONFIG.textColor;
  context.font = CONFIG.titleFont;
  context.textAlign = CONFIG.textAlign;
  context.fillText(CONFIG.gameTitle, CONFIG.canvasWidth / 2, CONFIG.titleY);

  context.fillStyle = CONFIG.accentColor;
  context.font = CONFIG.instructionFont;
  context.fillText(CONFIG.startInstruction, CONFIG.canvasWidth / 2, CONFIG.instructionY);
}

function gameLoop(timestamp) {
  const elapsedSeconds = previousTime === 0
    ? 0
    : Math.min((timestamp - previousTime) / 1000, CONFIG.maximumDelta);

  previousTime = timestamp;
  drawStartScreen(elapsedSeconds);
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
