import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { AfterimagePass } from "three/addons/postprocessing/AfterimagePass.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { Pass } from "three/addons/postprocessing/Pass.js";

/**
 * Draws the viewmodel scene on top of the world with the depth buffer cleared,
 * so the weapon can never be occluded by scenery however close the hunter
 * stands to it.
 *
 * `RenderPass` has a `clearDepth` flag that looks like it would do this, but it
 * clears before binding its own target, so what it wipes is whichever buffer
 * the previous pass happened to leave attached. Doing it here in the right
 * order is a few lines and does not depend on that.
 */
class ViewmodelPass extends Pass {
  constructor(viewmodel) {
    super();
    this.viewmodel = viewmodel;
    this.needsSwap = false;
  }

  render(renderer, writeBuffer, readBuffer) {
    const autoClear = renderer.autoClear;
    renderer.autoClear = false;
    renderer.setRenderTarget(this.renderToScreen ? null : readBuffer);
    renderer.clearDepth();
    renderer.render(this.viewmodel.scene, this.viewmodel.camera);
    renderer.autoClear = autoClear;
  }
}

const CompositeShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uShake: { value: 0 },
    uHeat: { value: 0 },
    uBlur: { value: 0 },
    uDamage: { value: 0 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uShake;
    uniform float uHeat;
    uniform float uBlur;
    uniform float uDamage;
    varying vec2 vUv;

    float grain(vec2 p) {
      return fract(sin(dot(p + uTime, vec2(12.9898, 78.233))) * 43758.5453);
    }

    // Warm ash grade: lift the shadows toward brown, pull highlights to amber.
    vec3 grade(vec3 c) {
      float luma = dot(c, vec3(0.2126, 0.7152, 0.0722));
      vec3 shadows = vec3(0.055, 0.034, 0.026);
      vec3 lift = mix(shadows, vec3(0.0), smoothstep(0.0, 0.4, luma));
      vec3 gain = mix(vec3(1.0), vec3(1.06, 0.985, 0.93), smoothstep(0.35, 1.0, luma));
      c = (c + lift) * gain;
      // Hold a little saturation back so emissive lava stays the brightest thing.
      return mix(vec3(luma), c, 0.92);
    }

    void main() {
      vec2 centred = vUv - 0.5;
      vec2 uv = vUv;
      uv += (grain(uv * 40.0) - 0.5) * uShake * 0.012;
      uv.x += sin(uv.y * 40.0 + uTime * 6.0) * uHeat * 0.004;

      // Lateral chromatic aberration that grows toward the frame edge.
      float disperse = (0.0011 + 0.0016 * (uBlur + uHeat)) * (0.35 + length(centred));
      vec4 c = texture2D(tDiffuse, uv);
      float r = texture2D(tDiffuse, uv + centred * disperse).r;
      float b = texture2D(tDiffuse, uv - centred * disperse).b;
      vec3 color = grade(vec3(r, c.g, b));

      float vig = smoothstep(1.35, 0.40, length(centred));
      color *= mix(mix(1.0, vig, 0.55), vig, uDamage);

      // Grain sits mostly in the shadows, the way film stock behaves.
      float luma = dot(color, vec3(0.2126, 0.7152, 0.0722));
      float g = grain(uv * vec2(1920.0, 1080.0));
      color += (g - 0.5) * mix(0.028, 0.008, smoothstep(0.0, 0.6, luma));

      color = mix(color, color * vec3(1.1, 0.72, 0.48), uHeat * 0.35);
      color = mix(color, vec3(luma * 0.9, luma * 0.42, luma * 0.38), uDamage * 0.5);
      gl_FragColor = vec4(color, 1.0);
    }
  `,
};

export class PostFX {
  constructor(renderer, scene, camera, viewmodel) {
    this.renderer = renderer;
    this.composer = new EffectComposer(renderer);
    this.composer.addPass(new RenderPass(scene, camera));
    // Ahead of bloom, so a muzzle flash blooms and the grade treats the weapon
    // as part of the photograph rather than as an overlay pasted on top.
    if (viewmodel) this.composer.addPass(new ViewmodelPass(viewmodel));
    this.bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.32, 0.55, 0.48);
    this.composer.addPass(this.bloom);
    this.after = new AfterimagePass(0.12);
    this.composer.addPass(this.after);
    this.after.enabled = false;
    // Bloom and the afterimage belong on the linear HDR buffer, but the grade,
    // vignette and grain are photographic effects: they have to run on
    // display-referred pixels, so OutputPass tone maps first.
    this.composer.addPass(new OutputPass());
    this.composite = new ShaderPass(CompositeShader);
    this.composer.addPass(this.composite);
    this.enabled = true;
  }

  resize(w, h) {
    this.composer.setSize(w, h);
  }

  /**
   * The composer owns its own render targets, so it has to be told about a
   * resolution change too; otherwise every pass keeps shading the old,
   * larger buffer and the downscale saves nothing.
   */
  setPixelRatio(ratio) {
    this.composer.setPixelRatio(ratio);
  }

  render(dt, { heat = 0, shake = 0, blur = 0.35, damage = 0 }) {
    this.composite.uniforms.uTime.value += dt;
    this.composite.uniforms.uHeat.value = heat;
    this.composite.uniforms.uShake.value = shake;
    this.composite.uniforms.uBlur.value = blur;
    this.composite.uniforms.uDamage.value = damage;
    this.after.uniforms.damp.value = THREE.MathUtils.lerp(0.08, 0.22, blur);
    this.composer.render();
  }

  setQuality(tier) {
    this.bloom.enabled = tier === "cinematic" || tier === "high";
    this.after.enabled = tier === "cinematic";
    this.bloom.strength = tier === "cinematic" ? 0.36 : 0.22;
    this.after.enabled = tier === "cinematic";
  }
}
