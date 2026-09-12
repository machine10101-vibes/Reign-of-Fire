import * as THREE from "three";
import { CONFIG } from "./config.js";
import { fbm, ridge } from "./utils/noise.js";
import { standardFrom } from "./assets.js";

export class World {
  constructor(scene, textures) {
    this.scene = scene;
    this.size = CONFIG.worldSize;
    this.segments = CONFIG.terrainSegments;
    this.heights = new Float32Array((this.segments + 1) * (this.segments + 1));
    this.group = new THREE.Group();
    scene.add(this.group);
    this._buildSky(textures);
    this._buildTerrain(textures);
    this._buildRocks(textures);
    this._buildLighting();
    this._buildAshColumns();
  }

  heightAt(x, z) {
    const s = this.size;
    const n = this.segments;
    const u = THREE.MathUtils.clamp((x + s / 2) / s, 0, 1);
    const v = THREE.MathUtils.clamp((z + s / 2) / s, 0, 1);
    const gx = u * n;
    const gz = v * n;
    const x0 = Math.floor(gx);
    const z0 = Math.floor(gz);
    const x1 = Math.min(n, x0 + 1);
    const z1 = Math.min(n, z0 + 1);
    const tx = gx - x0;
    const tz = gz - z0;
    const h00 = this.heights[z0 * (n + 1) + x0];
    const h10 = this.heights[z0 * (n + 1) + x1];
    const h01 = this.heights[z1 * (n + 1) + x0];
    const h11 = this.heights[z1 * (n + 1) + x1];
    return THREE.MathUtils.lerp(h00 * (1 - tx) + h10 * tx, h01 * (1 - tx) + h11 * tx, tz);
  }

  _buildSky(textures) {
    const geo = new THREE.SphereGeometry(420, 32, 20);
    const mat = new THREE.MeshBasicMaterial({
      map: textures.sky,
      side: THREE.BackSide,
      fog: false,
      depthWrite: false,
    });
    this.sky = new THREE.Mesh(geo, mat);
    this.group.add(this.sky);
  }

  _buildTerrain(textures) {
    const n = this.segments;
    const geo = new THREE.PlaneGeometry(this.size, this.size, n, n);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    const colors = new Float32Array(pos.count * 3);
    const uvs = geo.attributes.uv;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const mountain = fbm(x * 0.018, z * 0.018, 5);
      const ridges = ridge(x * 0.021, z * 0.02);
      const crater = Math.hypot(x, z + 18);
      const caldera = Math.exp(-((crater - 42) ** 2) / 380) * 7;
      const h = mountain * 16.5 + ridges * 11.5 - caldera + 2.2;
      pos.setY(i, h);
      const ix = Math.round(((x + this.size / 2) / this.size) * n);
      const iz = Math.round(((z + this.size / 2) / this.size) * n);
      this.heights[iz * (n + 1) + ix] = h;
      uvs.setXY(i, x * 0.045, z * 0.045);
      const lava = THREE.MathUtils.smoothstep(5.4, 2.2, h);
      colors[i * 3] = 1;
      colors[i * 3 + 1] = 1 - lava * 0.55;
      colors[i * 3 + 2] = 1 - lava * 0.7;
    }
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.setAttribute("uv2", geo.attributes.uv.clone());
    geo.computeVertexNormals();

    const pack = textures.terrain_rock;
    pack.albedo.repeat.set(14, 14);
    pack.normal.repeat.set(14, 14);
    pack.roughness.repeat.set(14, 14);
    pack.ao.repeat.set(14, 14);
    pack.emissive.repeat.set(14, 14);

    const mat = standardFrom(pack, {
      vertexColors: true,
      metalness: 0.04,
      roughness: 0.78,
      emissive: new THREE.Color(1.0, 0.18, 0.03),
      emissiveIntensity: 0.55,
      normalScale: new THREE.Vector2(1.4, 1.4),
    });

    mat.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = { value: 0 };
      this._terrainShader = shader;
      shader.vertexShader = `
        varying float vWorldY;
        ${shader.vertexShader}
      `.replace(
        "#include <begin_vertex>",
        `#include <begin_vertex>
         vWorldY = position.y;`
      );
      shader.fragmentShader = `
        uniform float uTime;
        varying float vWorldY;
        ${shader.fragmentShader}
      `.replace(
        "#include <emissivemap_fragment>",
        `#include <emissivemap_fragment>
         float lava = 1.0 - smoothstep(2.4, 6.8, vWorldY);
         float pulse = 0.65 + 0.35 * sin(uTime * 1.7 + vWorldY * 0.4);
         totalEmissiveRadiance += vec3(1.0, 0.22, 0.04) * lava * pulse * 1.8;`
      );
    };

    this.terrain = new THREE.Mesh(geo, mat);
    this.terrain.receiveShadow = true;
    this.terrain.castShadow = true;
    this.group.add(this.terrain);
  }

  _buildRocks(textures) {
    const geo = new THREE.IcosahedronGeometry(1, 1);
    const mat = standardFrom(textures.terrain_rock, {
      roughness: 0.9,
      metalness: 0.03,
      emissive: new THREE.Color(0.4, 0.05, 0.01),
      emissiveIntensity: 0.2,
    });
    const count = 220;
    this.rocks = new THREE.InstancedMesh(geo, mat, count);
    this.rocks.castShadow = true;
    this.rocks.receiveShadow = true;
    const dummy = new THREE.Object3D();
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 18 + Math.random() * 118;
      const x = Math.cos(a) * r + (Math.random() - 0.5) * 16;
      const z = Math.sin(a) * r + (Math.random() - 0.5) * 16;
      const y = this.heightAt(x, z);
      dummy.position.set(x, y + 0.2, z);
      dummy.rotation.set(Math.random() * 0.6, Math.random() * Math.PI, Math.random() * 0.4);
      const s = 1.2 + Math.random() * 4.8;
      dummy.scale.set(s * (0.7 + Math.random() * 0.6), s, s * (0.7 + Math.random() * 0.6));
      dummy.updateMatrix();
      this.rocks.setMatrixAt(i, dummy.matrix);
    }
    this.group.add(this.rocks);
  }

  _buildLighting() {
    this.scene.fog = new THREE.FogExp2(0x1a140f, 0.0125);
    this.scene.background = new THREE.Color(0x120e0c);

    this.hemi = new THREE.HemisphereLight(0x6a5344, 0x1a0a04, 0.55);
    this.group.add(this.hemi);

    this.sun = new THREE.DirectionalLight(0xff9a55, 2.35);
    this.sun.position.set(-70, 48, 30);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    this.sun.shadow.camera.near = 4;
    this.sun.shadow.camera.far = 260;
    this.sun.shadow.camera.left = -90;
    this.sun.shadow.camera.right = 90;
    this.sun.shadow.camera.top = 90;
    this.sun.shadow.camera.bottom = -90;
    this.sun.shadow.bias = -0.0004;
    this.group.add(this.sun);

    this.rim = new THREE.DirectionalLight(0x3a4a66, 0.35);
    this.rim.position.set(40, 20, -80);
    this.group.add(this.rim);

    this.lavaLight = new THREE.PointLight(0xff4a10, 42, 80, 1.6);
    this.lavaLight.position.set(6, 4, -8);
    this.group.add(this.lavaLight);

    this.ember = new THREE.PointLight(0xff6a1a, 18, 50, 2);
    this.ember.position.set(-12, 8, 10);
    this.group.add(this.ember);
  }

  _buildAshColumns() {
    const geo = new THREE.CylinderGeometry(6, 14, 48, 10, 1, true);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x2a241f,
      transparent: true,
      opacity: 0.13,
      side: THREE.DoubleSide,
      depthWrite: false,
      fog: true,
    });
    for (let i = 0; i < 5; i++) {
      const mesh = new THREE.Mesh(geo, mat);
      const a = (i / 5) * Math.PI * 2;
      mesh.position.set(Math.cos(a) * 70, 34, Math.sin(a) * 64 - 20);
      mesh.rotation.z = (Math.random() - 0.5) * 0.2;
      this.group.add(mesh);
    }
  }

  update(t) {
    if (this._terrainShader) this._terrainShader.uniforms.uTime.value = t;
    this.lavaLight.intensity = 34 + Math.sin(t * 1.8) * 8;
    this.sky.rotation.y = t * 0.003;
  }

  setQuality(tier) {
    const map = { cinematic: 2048, high: 1024, medium: 512, low: 256 };
    const size = map[tier] ?? 1024;
    this.sun.shadow.mapSize.set(size, size);
    this.sun.castShadow = tier !== "low";
    this.rocks.visible = tier !== "low";
  }
}
