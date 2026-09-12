import { Game } from "./game/Game.js";

const canvas = document.getElementById("gl");
const game = new Game(canvas);

// Exposed deliberately: the hunt, combat and species state are worth poking at
// from the console when tuning a species or reproducing a hit-detection bug.
window.game = game;

game.init().then(() => {
  const btn = document.getElementById("hunt-btn");
  btn.addEventListener("click", () => game.start());
  window.addEventListener("keydown", (e) => {
    if (e.code === "Enter" || e.code === "Space") game.start();
  });
});
