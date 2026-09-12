import { CONFIG } from "./config.js";

// Raising a tier costs a shadow-map reallocation, so each step needs headroom
// above the threshold that would drop it back down.
const TIERS = ["low", "medium", "high", "cinematic"];
const FLOOR = { low: 0, medium: 38, high: 48, cinematic: CONFIG.quality.targetFps - 4 };
const HYSTERESIS = 6;
const DWELL = 2.5;
const WARMUP = 1.5;
const MEMORY = 0.75;

export class PerformanceMonitor {
  constructor() {
    this.fps = 60;
    this.tier = "high";
    this.listeners = [];
    this._since = 0;
    this._age = 0;
    this._last = 0;
  }

  onChange(fn) {
    this.listeners.push(fn);
  }

  /**
   * Timed off the wall clock rather than the simulation step. The game clamps
   * its dt so a stall cannot teleport the world, and that clamp would
   * otherwise hide every frame slower than it from this ladder entirely.
   */
  frame() {
    const now = performance.now();
    const previous = this._last;
    this._last = now;
    if (!previous) return;
    const real = (now - previous) / 1000;
    if (real <= 0) return;

    // Time-weighted, so the average settles over the same wall-clock span
    // whether the renderer is managing 120 frames a second or four.
    this.fps += (1 / real - this.fps) * (1 - Math.exp(-real / MEMORY));
    this._age += real;
    this._since += real;
    if (this.pinned || this._age < WARMUP || this._since < DWELL) return;

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

  /** Freezes the ladder, so a demo or a benchmark can hold one tier. */
  pin(tier) {
    if (!TIERS.includes(tier)) return;
    this.tier = tier;
    this.pinned = true;
    for (const fn of this.listeners) fn(tier);
  }
}
