import * as THREE from "three";
import { CONFIG } from "./config.js";
import { loadTextures } from "./assets.js";
import { World } from "./World.js";
import { Player } from "./Player.js";
import { Weapon } from "./Weapon.js";
import { Dragon } from "./Dragon.js";
import { DragonAI } from "./DragonAI.js";
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
    this._aim = new THREE.Vector3();
    this._muzzle = new THREE.Vector3();
    this._dir = new THREE.Vector3();
    this._look = new THREE.Vector3();
    this.raycaster = new THREE.Raycaster();
    this.started = false;
    this.roared = false;
    this.deadFx = false;
  }

  async init() {
    const textures = await loadTextures();
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: "high-performance",
    });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
    this.renderer.setSize(innerWidth, innerHeight);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.12;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.08, 600);
    this.camera.rotation.order = "YXZ";

    this.world = new World(this.scene, textures);
    this.player = new Player(this.camera, this.world);
    this.player.position.set(6, this.world.heightAt(6, 22) + CONFIG.player.eye, 22);
    this.player.bind(this.canvas);
    this.weapon = new Weapon(this.camera, textures);

    this.dragon = new Dragon(textures);
    this.dragon.root.position.set(40, CONFIG.dragon.patrolHeight, -24);
    this.scene.add(this.dragon.root);
    this.ai = new DragonAI(this.dragon);

    this.particles = new Particles(this.scene);
    this.combat = new Combat(this.scene, this.world, this.dragon, this.particles, this.audio);
    this.fx = new PostFX(this.renderer, this.scene, this.camera);
    this.demo = new DemoDirector(this.player, this.weapon);

    this.perf.onChange((tier) => {
      this.world.setQuality(tier);
      this.particles.setQuality(tier);
      this.fx.setQuality(tier);
      if (tier === "low") this.renderer.setPixelRatio(1);
      else if (tier === "medium") this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.25));
    });

    window.addEventListener("resize", () => this.resize());
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
    this.demo.update(dt, this.dragon.root.position);

    const moving = this.player.update(dt);
    if (this.player.didStep) this.audio.step(this.player.sprint);

    this.ai.update(dt, this.player.position);
    this.world.update(this.clock.elapsedTime);
    this.particles.update(dt);

    this.combat.setBreathing(this.ai.breathing);
    if (this.ai.breathing) {
      this.particles.fireBreath(this.dragon.mouthWorld(this._muzzle), this.player.position);
      if (Math.random() < 0.08) this.audio.breath();
    }
    this.combat.update(dt, this.player);

    if (this.combat.didHitDragon) {
      this.combat.didHitDragon = false;
      this.ai.notifyHit();
      this.audio.roar();
    }
    if (!this.dragon.alive && !this.deadFx) {
      this.deadFx = true;
      this.audio.death();
    }
    if (this.ai.state === "alert" && !this.roared) {
      this.audio.roar();
      this.roared = true;
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

    const speed = Math.hypot(this.player.velocity.x, this.player.velocity.z);
    this.fx.render(dt, {
      heat: this.player.onFire > 0 || this.ai.breathing ? 1 : 0,
      shake: this.player.shake.length() * 8,
      blur: THREE.MathUtils.clamp(speed / 14 + Math.abs(this.player.shake.x) * 6, 0.15, 1),
    });

    this.hud.update({
      health: this.player.health,
      bolts: this.weapon.bolts,
      maxBolts: this.weapon.max,
      dragonHp: this.dragon.hp,
      dragonMax: this.dragon.maxHp,
      fps: this.perf.fps,
      quality: this.perf.tier,
      hint: this.ai.hint,
      hot,
      hit: this.combat.lastHit > 0,
      heat: this.player.onFire > 0,
    });
  }

  _aimingDragon() {
    this.camera.getWorldDirection(this._look);
    this.raycaster.set(this.camera.position, this._look);
    const hits = this.raycaster.intersectObjects(this.dragon.hitboxes, false);
    return hits.length > 0;
  }
}
