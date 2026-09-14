export class GameAudio {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.wind = null;
  }

  resume() {
    if (this.ctx) {
      this.ctx.resume();
      return;
    }
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.ctx = ctx;
    this.master = ctx.createGain();
    this.master.gain.value = 0.22;
    this.master.connect(ctx.destination);
    this._wind();
  }

  _osc(type, freq, dur, gain = 0.2, slide = 0) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), t + dur);
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g);
    g.connect(this.master);
    o.start(t);
    o.stop(t + dur + 0.05);
  }

  _noise(dur, gain, freq = 800) {
    if (!this.ctx) return;
    const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * dur, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    const src = this.ctx.createBufferSource();
    src.buffer = buffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = freq;
    const g = this.ctx.createGain();
    g.gain.value = gain;
    g.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + dur);
    src.connect(filter);
    filter.connect(g);
    g.connect(this.master);
    src.start();
  }

  _wind() {
    const buf = this.ctx.createBuffer(1, this.ctx.sampleRate * 2, this.ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    src.loop = true;
    const f = this.ctx.createBiquadFilter();
    f.type = "lowpass";
    f.frequency.value = 400;
    const g = this.ctx.createGain();
    g.gain.value = 0.18;
    src.connect(f);
    f.connect(g);
    g.connect(this.master);
    src.start();
    this.wind = g;
  }

  fire() {
    this._noise(0.18, 0.35, 600);
    this._osc("sawtooth", 140, 0.22, 0.12, -80);
  }

  step(sprint) {
    this._noise(0.08, sprint ? 0.16 : 0.1, 180);
    this._osc("sine", sprint ? 70 : 55, 0.09, 0.08, -20);
  }

  /**
   * Species voice: a small Emberkin shrieks near 220 Hz, a Basalt Tyrant
   * answers around 52 Hz, so pitch alone tells you what is behind you.
   */
  roar(freq = 90, distance = 0) {
    const falloff = Math.max(0.15, 1 - distance / 180);
    this._osc("sawtooth", freq, 0.9, 0.18 * falloff, -freq * 0.4);
    this._osc("square", freq * 1.5, 0.5, 0.05 * falloff, -freq * 0.3);
    this._noise(0.55, 0.2 * falloff, Math.max(160, freq * 3.2));
  }

  impact(critical = false) {
    this._noise(0.12, critical ? 0.4 : 0.28, critical ? 1400 : 900);
    this._osc("square", critical ? 420 : 220, 0.12, 0.09, -140);
  }

  breath(freq = 500) {
    this._noise(0.6, 0.2, freq);
    this._osc("sawtooth", 60, 0.5, 0.1, 40);
  }

  mortar() {
    this._osc("sine", 320, 0.45, 0.1, -240);
    this._noise(0.3, 0.12, 260);
  }

  explode() {
    this._noise(0.7, 0.4, 140);
    this._osc("sine", 70, 0.7, 0.24, -45);
  }

  death() {
    this._osc("sawtooth", 50, 1.6, 0.18, -30);
  }
}
