import { Game } from "./game/Game.js";

const canvas = document.getElementById("gl");
const game = new Game(canvas);

game.init().then(() => {
  const btn = document.getElementById("hunt-btn");
  btn.addEventListener("click", () => game.start());
  window.addEventListener("keydown", (e) => {
    if (e.code === "Enter" || e.code === "Space") game.start();
  });
});
