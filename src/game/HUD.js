export class HUD {
  constructor() {
    this.hp = document.getElementById("hp-fill");
    this.bolts = document.getElementById("bolts");
    this.beast = document.getElementById("beast-fill");
    this.fps = document.getElementById("fps");
    this.quality = document.getElementById("quality");
    this.hint = document.getElementById("hint");
    this.cross = document.getElementById("crosshair");
    this.hit = document.getElementById("hitmarker");
    this.heat = document.getElementById("heat");
    this.hud = document.getElementById("hud");
    this.title = document.getElementById("title-screen");
  }

  showGame() {
    this.title.classList.add("hidden");
    this.hud.classList.remove("hidden");
  }

  update({ health, bolts, maxBolts, dragonHp, dragonMax, fps, quality, hint, hot, hit, heat }) {
    this.hp.style.width = `${Math.max(0, health)}%`;
    this.bolts.textContent = `${bolts} / ${maxBolts}`;
    this.beast.style.width = `${(dragonHp / dragonMax) * 100}%`;
    this.fps.textContent = `${Math.round(fps)} FPS`;
    this.quality.textContent = quality;
    if (hint) this.hint.textContent = hint;
    this.cross.classList.toggle("hot", !!hot);
    this.heat.style.opacity = heat ? "1" : "0";
    if (hit) {
      this.hit.style.opacity = "1";
      this.hit.style.transform = "translate(-50%, -50%) scale(1)";
    } else {
      this.hit.style.opacity = "0";
    }
  }
}
