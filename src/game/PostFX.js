import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { AfterimagePass } from "three/addons/postprocessing/AfterimagePass.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";

const CompositeShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uShake: { value: 0 },
    uHeat: { value: 0 },
    uBlur: { value: 0 },
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
    varying vec2 vUv;
    float grain(vec2 p) {
      return fract(sin(dot(p + uTime, vec2(12.9898, 78.233))) * 43758.5453);
    }
    void main() {
      vec2 uv = vUv;
      uv += (grain(uv * 40.0) - 0.5) * uShake * 0.012;
      float heat = sin(uv.y * 40.0 + uTime * 6.0) * uHeat * 0.004;
      uv.x += heat;
      vec4 c = texture2D(tDiffuse, uv);
      vec4 r = texture2D(tDiffuse, uv + vec2(0.0018 * (uBlur + uHeat), 0.0));
      vec4 b = texture2D(tDiffuse, uv - vec2(0.0018 * (uBlur + uHeat), 0.0));
      vec3 color = vec3(r.r, c.g, b.b);
      float g = grain(uv * vec2(1920.0, 1080.0));
      color += (g - 0.5) * 0.045;
      float vig = smoothstep(0.95, 0.35, length(vUv - 0.5));
      color *= vig;
      color = mix(color, color * vec3(1.08, 0.72, 0.5), uHeat * 0.35);
      gl_FragColor = vec4(color, 1.0);
    }
  `,
};

export class PostFX {
  constructor(renderer, scene, camera) {
    this.renderer = renderer;
    this.composer = new EffectComposer(renderer);
    this.composer.addPass(new RenderPass(scene, camera));
    this.bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.32, 0.55, 0.48);
    this.composer.addPass(this.bloom);
    this.after = new AfterimagePass(0.12);
    this.composer.addPass(this.after);
    this.after.enabled = false;
    this.composite = new ShaderPass(CompositeShader);
    this.composer.addPass(this.composite);
    this.composer.addPass(new OutputPass());
    this.enabled = true;
  }

  resize(w, h) {
    this.composer.setSize(w, h);
  }

  render(dt, { heat = 0, shake = 0, blur = 0.35 }) {
    this.composite.uniforms.uTime.value += dt;
    this.composite.uniforms.uHeat.value = heat;
    this.composite.uniforms.uShake.value = shake;
    this.composite.uniforms.uBlur.value = blur;
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
