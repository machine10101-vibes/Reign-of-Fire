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

      float vig = smoothstep(1.02, 0.32, length(centred));
      color *= mix(vig, vig * vig, uDamage);

      // Grain sits mostly in the shadows, the way film stock behaves.
      float luma = dot(color, vec3(0.2126, 0.7152, 0.0722));
      float g = grain(uv * vec2(1920.0, 1080.0));
      color += (g - 0.5) * mix(0.05, 0.014, smoothstep(0.0, 0.6, luma));

      color = mix(color, color * vec3(1.1, 0.72, 0.48), uHeat * 0.35);
      color = mix(color, vec3(luma * 0.9, luma * 0.42, luma * 0.38), uDamage * 0.5);
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
