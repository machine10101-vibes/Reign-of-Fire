import { CONFIG } from "./config.js";

// Raising a tier costs a shadow-map reallocation, so each step needs headroom
// above the threshold that would drop it back down.
const TIERS = ["low", "medium", "high", "cinematic"];
const FLOOR = { low: 0, medium: 38, high: 48, cinematic: CONFIG.quality.targetFps - 4 };
const HYSTERESIS = 6;
const DWELL = 2.5;

export class PerformanceMonitor {
  constructor() {
    this.samples = [];
    this.fps = 60;
    this.tier = "high";
    this.listeners = [];
    this._since = 0;
  }

  onChange(fn) {
    this.listeners.push(fn);
  }

  frame(dt) {
    if (dt <= 0) return;
    this.samples.push(1 / dt);
    if (this.samples.length > 60) this.samples.shift();
    this.fps = this.samples.reduce((a, b) => a + b, 0) / this.samples.length;
    this._since += dt;
    if (this.samples.length < 30 || this._since < DWELL) return;

    const index = TIERS.indexOf(this.tier);
    let next = this.tier;
    if (this.fps < FLOOR[this.tier] && index > 0) next = TIERS[index - 1];
    else if (index < TIERS.length - 1 && this.fps > FLOOR[TIERS[index + 1]] + HYSTERESIS) {
      next = TIERS[index + 1];
    }
    if (next === this.tier) return;
    this.tier = next;
    this._since = 0;
    for (const fn of this.listeners) fn(this.tier);
  }
}
