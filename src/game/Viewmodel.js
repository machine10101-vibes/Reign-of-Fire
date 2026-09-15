import * as THREE from "three";
import { CONFIG } from "./config.js";

/**
 * The first-person viewmodel: its own scene, its own camera, drawn over the
 * finished world image with a fresh depth buffer.
 *
 * Sharing the world's depth buffer is what let the barrel sink into a boulder
 * whenever the hunter stood close to one, and no placement fixes that. Pull the
 * weapon in far enough to clear a rock and it crosses the near plane; push the
 * near plane in to hold it and the whole world z-fights. Every shooter solves
 * this the same way, by drawing the weapon last against nothing.
 *
 * The second benefit is the field of view. The world is rendered at 75 degrees
 * because a hunting ground wants the periphery, but a metre-long weapon half a
 * metre from the eye splays across the lower frame at that angle and its
 * parallel edges skew apart. The viewmodel gets its own, narrower lens.
 */
export class Viewmodel {
  constructor(worldCamera, aspect, envMap) {
    this.worldCamera = worldCamera;
    this.scene = new THREE.Scene();
    // No fog and no background: this scene is a transparent overlay. A
    // background here would paint over the world we are compositing onto.
    this.scene.environment = envMap ?? null;

    const { fov, near, far } = CONFIG.viewmodel;
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    this.scene.add(this.camera);

    // Everything is authored in camera space, so the camera itself never moves.
    // The world reaches this scene only through the light directions.
    this.root = new THREE.Group();
    this.camera.add(this.root);

    this.key = new THREE.DirectionalLight(0xffa561, 3.4);
    this.key.position.set(-0.6, 0.8, 0.4);
    // The rim stays put in camera space. A key light that follows the sun can
    // end up square behind the weapon, and something has to keep an edge on it.
    // Well over the world's own rim at 0.42, because the weapon is iron and
    // blued steel and a metal with nothing to reflect renders black. There is
    // nothing in a volcanic dusk's environment map bright enough to put an
    // edge on it, so this light does that job alone. Not higher than this,
    // though: at 3.2 it flooded every up-facing surface on the receiver into
    // one white rectangle.
    this.rim = new THREE.DirectionalLight(0x7d93bd, 1.1);
    this.rim.position.set(0.85, 0.32, -0.6);
    this.bounce = new THREE.HemisphereLight(0x8a6a55, 0x2a1710, 1.1);
    // A short fill on the gloves. Without it the hands sit in the hunter's
    // own shadow and every joint collapses into one dark mass, however
    // carefully they were modelled.
    this.handFill = new THREE.PointLight(0xc4a078, 0.68, 0.78, 2);
    this.handFill.position.set(0.12, -0.1, -0.4);
    this.muzzle = new THREE.PointLight(0xffb066, 0, 3.4, 2);
    this.muzzle.position.set(0, 0.0, -0.8);
    for (const light of [this.key, this.rim, this.bounce, this.handFill, this.muzzle]) {
      this.camera.add(light);
    }

    this._q = new THREE.Quaternion();
    this._sun = new THREE.Vector3();
    this.flashT = 0;
  }

  resize(aspect) {
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }

  setEnvironment(envMap) {
    this.scene.environment = envMap ?? null;
  }

  /**
   * Rotates the world's key light into camera space so that turning on the spot
   * swings the highlight along the receiver. Pinning the key to the screen
   * instead is the tell that gives away a viewmodel as a separate render: the
   * weapon stays lit identically while the horizon wheels behind it.
   */
  syncLighting(sun, hemi, cameraQuat) {
    this._q.copy(cameraQuat).invert();
    sun.getWorldPosition(this._sun);
    if (this._sun.lengthSq() > 1e-6) {
      this.key.position.copy(this._sun).normalize().applyQuaternion(this._q);
    }
    this.key.color.copy(sun.color);
    // Both lifted over the world's own, because the weapon is in the hunter's
    // shadow for most of a turn and a viewmodel that reads as a silhouette is
    // no use. Taken as multiples of the world's rather than set outright: a
    // fixed 1.8 against the world's hemisphere of 0.7 put two and a half times
    // the sky onto every up-facing surface of the receiver, which is what blew
    // the top of the stock out to white in every screenshot.
    this.key.intensity = sun.intensity * 1.15;
    this.bounce.color.copy(hemi.color);
    this.bounce.groundColor.copy(hemi.groundColor);
    this.bounce.intensity = hemi.intensity * 1.6;
  }

  /**
   * Converts a point in this scene into a world position.
   *
   * The viewmodel camera sits at its own scene's origin without rotation, so
   * anything here is already expressed relative to the eye; the world position
   * is that same offset carried by the hunter's camera.
   */
  toWorld(point, out) {
    this.worldCamera.updateMatrixWorld();
    return out.copy(point).applyMatrix4(this.worldCamera.matrixWorld);
  }

  /** Lights the weapon from its own muzzle for the length of a shot. */
  flash() {
    this.flashT = 1;
  }

  update(dt) {
    if (this.flashT <= 0) return;
    this.flashT = Math.max(0, this.flashT - dt * 9);
    this.muzzle.intensity = 14 * this.flashT ** 2;
  }
}
