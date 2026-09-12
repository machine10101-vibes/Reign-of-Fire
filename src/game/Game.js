import * as THREE from "three";
import { CONFIG } from "./config.js";
import { loadTextures } from "./assets.js";
import { SPECIES, SPECIES_ORDER, LAZY_PACKS } from "./species.js";
import { World } from "./World.js";
import { Player } from "./Player.js";
import { Weapon } from "./Weapon.js";
import { Hunt } from "./Hunt.js";
import { Particles } from "./Particles.js";
import { Combat } from "./Combat.js";
import { PostFX } from "./PostFX.js";
import { HUD } from "./HUD.js";
import { GameAudio } from "./Audio.js";
import { PerformanceMonitor } from "./Performance.js";
import { DemoDirector } from "./DemoDirector.js";

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.hud = new HUD();
    this.audio = new GameAudio();
    this.perf = new PerformanceMonitor();
    this.clock = new THREE.Clock();
    this._muzzle = new THREE.Vector3();
    this._dir = new THREE.Vector3();
    this._look = new THREE.Vector3();
    this.raycaster = new THREE.Raycaster();
    this.started = false;
  }

  async init() {
    this.hud.renderCodex(SPECIES, SPECIES_ORDER);
    const textures = await loadTextures((loaded, total) => this.hud.setLoading(loaded / total));
    this.textures = textures;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: "high-performance",
    });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
    this.renderer.setSize(innerWidth, innerHeight);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.05, 900);
    this.camera.rotation.order = "YXZ";
    this.scene.add(this.camera);

    this.world = new World(this.scene, textures, this.renderer);
    this.player = new Player(this.camera, this.world);
    this.player.position.set(2, this.world.heightAt(2, 46) + CONFIG.player.eye, 46);
    this.player.yaw = 0.04;
    this.player.pitch = -0.18;
    this.player.bind(this.canvas);
    this.weapon = new Weapon(this.camera, textures);

    this.particles = new Particles(this.scene);
    this.hunt = new Hunt(this.scene, this.world, textures, this.audio);
    this.combat = new Combat(this.scene, this.world, this.hunt, this.particles, this.audio);
    this.fx = new PostFX(this.renderer, this.scene, this.camera);
    this.demo = new DemoDirector(this.player, this.weapon);

    this.world.setQuality(this.perf.tier);
    this.particles.setQuality(this.perf.tier);
    this.fx.setQuality(this.perf.tier);
    this.hunt.setQuality(this.perf.tier);
    this.perf.onChange((tier) => {
      this.world.setQuality(tier);
      this.particles.setQuality(tier);
      this.fx.setQuality(tier);
      this.hunt.setQuality(tier);
      if (tier === "low") this.renderer.setPixelRatio(1);
      else if (tier === "medium") this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.25));
      else this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
    });

    const flight = Number(new URLSearchParams(location.search).get("flight"));
    await this.hunt.begin(Number.isFinite(flight) ? flight - 1 : 0);
    // The rest of the roster streams in behind the first flight.
    this.textures.prefetch(LAZY_PACKS);

    window.addEventListener("resize", () => this.resize());
    this.hud.ready();
    if (this.demo.enabled) this.start();
  }

  start() {
    if (this.started) return;
    this.started = true;
    this.audio.resume();
    this.hud.showGame();
    this.clock.start();
    this.renderer.setAnimationLoop(() => this.tick());
  }

  resize() {
    const w = innerWidth;
    const h = innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.fx.resize(w, h);
  }

  tick() {
    const dt = Math.min(this.clock.getDelta(), 0.05);
    this.perf.frame(dt);

    const focusForDemo = this.hunt.focus(this.player.position);
    this.demo.update(dt, focusForDemo?.dragon.root.position ?? null);

    const moving = this.player.update(dt);
    if (this.player.didStep) this.audio.step(this.player.sprint);

    this.hunt.update(dt, this.player, this.weapon);
    this.combat.handleRequests(this.hunt.drainRequests());
    this.world.update(this.clock.elapsedTime);
    this.particles.update(dt, this.player.position);

    for (const e of this.hunt.breathSources) {
      this.particles.breathe(
        e.dragon.mouthWorld(this._muzzle),
        this.player.position,
        dt,
        e.ai.breath.kind,
        e.ai.breath.spread
      );
      if (Math.random() < 0.06) this.audio.breath(e.spec.mind.voice.breath);
    }

    this.combat.update(dt, this.player);
    this._voices();

    if (this.combat.didHitDragon) {
      this.combat.didHitDragon = false;
      const dragon = this.combat.lastHitDragon;
      const entry = this.hunt.entries.find((e) => e.dragon === dragon);
      entry?.ai.notifyHit(this.combat.lastHitPart);
      if (entry) this.audio.roar(entry.spec.mind.voice.roar, dragon.root.position.distanceTo(this.player.position));
    }

    const hot = this._aimingDragon();
    this.weapon.update(dt, moving, hot);
    if (this.player.consumeReload()) this.weapon.tryReload();
    if (this.player.fireHeld && this.weapon.tryFire()) {
      this.camera.getWorldDirection(this._dir);
      this.weapon.muzzleWorld(this._muzzle);
      this.combat.fire(this._muzzle, this._dir);
      this.player.addShake(0.045);
      this.audio.fire();
    }

    const focus = this.hunt.focus(this.player.position);
    // Six flights with no recovery is unwinnable, so the camp binds wounds.
    const resting = this.world.atCamp(this.player.position) && this.player.onFire <= 0;
    if (resting && this.player.health < 100) {
      this.player.health = Math.min(100, this.player.health + 9 * dt);
    }
    const speed = Math.hypot(this.player.velocity.x, this.player.velocity.z);
    this.fx.render(dt, {
      heat: this.player.onFire > 0 || this.hunt.breathing ? 1 : 0,
      shake: this.player.shake.length() * 8,
      blur: THREE.MathUtils.clamp(speed / 14 + Math.abs(this.player.shake.x) * 6, 0.15, 1),
      damage: THREE.MathUtils.clamp(1 - this.player.health / 45, 0, 1),
    });

    this.hud.update({
      health: this.player.health,
      bolts: this.weapon.bolts,
      maxBolts: this.weapon.max,
      focus,
      alive: this.hunt.alive,
      playerPos: this.player.position,
      flightLabel: this.hunt.flightLabel,
      flightIndex: this.hunt.flightIndex,
      totalFlights: this.hunt.totalFlights,
      bounty: this.hunt.bounty,
      log: this.hunt.log,
      logDirty: this.hunt.logDirty,
      fps: this.perf.fps,
      quality: this.perf.tier,
      hint: resting && this.player.health < 100
        ? "Binding wounds at the camp fire."
        : focus?.ai.hint ?? "The ridge has gone quiet.",
      hot,
      hit: this.combat.lastHit > 0,
      hitPart: this.combat.lastHitPart,
      heat: this.player.onFire > 0,
    });
    this.hunt.logDirty = false;
  }

  /** One roar per attack commitment, so pitch tells you which species turned in. */
  _voices() {
    for (const e of this.hunt.entries) {
      const style = e.ai.attackStyle;
      if (!style) {
        e.lastRoar = null;
      } else if (e.lastRoar !== style) {
        e.lastRoar = style;
        this.audio.roar(e.spec.mind.voice.roar, e.dragon.root.position.distanceTo(this.player.position));
      }
    }
  }

  _aimingDragon() {
    this.camera.getWorldDirection(this._look);
    this.raycaster.set(this.camera.position, this._look);
    return this.raycaster.intersectObjects(this.hunt.hitboxes, false).length > 0;
  }
}
