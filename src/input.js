export function setupInput() {
  const input = {
    left: false,
    right: false,
    start: false
  };

  window.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft" || event.code === "KeyA") {
      input.left = true;
    }
    if (event.code === "ArrowRight" || event.code === "KeyD") {
      input.right = true;
    }
    if (event.code === "Space") {
      input.start = true;
      event.preventDefault();
    }
  });

  window.addEventListener("keyup", (event) => {
    if (event.code === "ArrowLeft" || event.code === "KeyA") {
      input.left = false;
    }
    if (event.code === "ArrowRight" || event.code === "KeyD") {
      input.right = false;
    }
  });

  return input;
}
