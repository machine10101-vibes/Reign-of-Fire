import { CONFIG } from "./config.js";

export class PerformanceMonitor {
  constructor() {
    this.samples = [];
    this.fps = 60;
    this.tier = "cinematic";
    this.listeners = [];
  }

  onChange(fn) {
    this.listeners.push(fn);
  }

  frame(dt) {
    if (dt <= 0) return;
    const fps = 1 / dt;
    this.samples.push(fps);
    if (this.samples.length > 45) this.samples.shift();
    this.fps = this.samples.reduce((a, b) => a + b, 0) / this.samples.length;
    const next = this._tier(this.fps);
    if (next !== this.tier && this.samples.length > 20) {
      this.tier = next;
      for (const fn of this.listeners) fn(this.tier);
    }
  }

  _tier(fps) {
    if (fps >= CONFIG.quality.targetFps - 4) return "cinematic";
    if (fps >= 50) return "high";
    if (fps >= 40) return "medium";
    return "low";
  }
}
