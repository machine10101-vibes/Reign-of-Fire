import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { CONFIG } from "./config.js";
import { fbm, ridge, noise2 } from "./utils/noise.js";
import { standardFrom, setRepeat } from "./assets.js";

const SPAWN = new THREE.Vector2(2, 46);

function transformed(geo, { pos = [0, 0, 0], rot = [0, 0, 0], scale = [1, 1, 1] } = {}) {
  const clone = geo.clone();
  clone.applyMatrix4(
    new THREE.Matrix4().compose(
      new THREE.Vector3(...pos),
      new THREE.Quaternion().setFromEuler(new THREE.Euler(...rot)),
      new THREE.Vector3(...scale)
    )
  );
  return clone;
}

/** Pushes a primitive's vertices about so it stops reading as a primitive. */
function weathered(geo, amount, seed) {
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    const dent = 1 - amount * fbm(x * 1.7 + seed, z * 1.7 - seed, 3);
    pos.setXYZ(i, x * dent, y * (1 - amount * fbm(z * 1.4 - seed, y * 1.4 + seed, 2)), z * dent);
  }
  geo.computeVertexNormals();
  return geo;
}

/**
 * Fractal skyline height at one azimuth, sampled through cos/sin so the curve
 * closes seamlessly on itself. Raised to a power because mountains meet the sky
 * in crests, not in rolling hills.
 */
function skyline(angle, seed) {
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  let v = 0;
  let total = 0;
  let w = 1;
  let f = 1.7;
  for (let o = 0; o < 4; o++) {
    v += w * noise2(c * f + seed, s * f + seed);
    total += w;
    w *= 0.52;
    f *= 2.13;
  }
  return Math.pow(v / total, 1.7);
}

export class World {
  constructor(scene, textures, renderer) {
    this.scene = scene;
    this.renderer = renderer;
    this.size = CONFIG.worldSize;
    this.segments = CONFIG.terrainSegments;
    this.heights = new Float32Array((this.segments + 1) * (this.segments + 1));
    this.group = new THREE.Group();
    this.props = [];
    this.lavaMats = [];
    this.blockers = [];
    scene.add(this.group);
    this._buildSky(textures);
    this._buildTerrain(textures);
    this._buildLighting();
    this._buildVolcano(textures);
    this._buildHorizon(textures);
    this._buildRocks(textures);
    this._buildSpires(textures);
    this._buildDeadTrees(textures);
    this._buildBonePiles(textures);
    this._buildRuins(textures);
    this._buildLavaPools(textures);
    this._buildCamp(textures);
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

  /** Rough surface steepness at a point, used to keep props off cliff faces. */
  slopeAt(x, z) {
    const d = 2.5;
    const dx = this.heightAt(x + d, z) - this.heightAt(x - d, z);
    const dz = this.heightAt(x, z + d) - this.heightAt(x, z - d);
    return Math.hypot(dx, dz) / (2 * d);
  }

  /**
   * Poisson-ish scatter: reject samples that are too steep, too close to the
   * hunter's camp, or outside the requested elevation band.
   */
  _scatter(count, { minR = 20, maxR = 130, slopeMax = 1.2, band = [-Infinity, Infinity], clear = 18, spacing = 0 } = {}) {
    const out = [];
    let guard = 0;
    while (out.length < count && guard < count * 40) {
      guard++;
      const a = Math.random() * Math.PI * 2;
      const r = minR + Math.random() * (maxR - minR);
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r - 8;
      if (Math.hypot(x - SPAWN.x, z - SPAWN.y) < clear) continue;
      const y = this.heightAt(x, z);
      if (y < band[0] || y > band[1]) continue;
      if (this.slopeAt(x, z) > slopeMax) continue;
      if (spacing && out.some((p) => Math.hypot(p.x - x, p.z - z) < spacing)) continue;
      out.push({ x, y, z });
    }
    return out;
  }

  /**
   * Registers a prop the hunter cannot walk through, as an upright cylinder.
   *
   * Only things that reach the eye are worth listing. Blocking every stone
   * underfoot would have the hunter shuffling sideways around gravel, and the
   * defect this exists to fix is walking *into* a boulder, not tripping on one.
   */
  _block(x, z, radius) {
    this.blockers.push({ x, z, r: radius });
  }

  /**
   * Slides a point out of any prop it has ended up inside, horizontally.
   *
   * Resolved as a push rather than as a swept collision: at walking pace over a
   * scatter of convex props the difference is a few centimetres, and it cannot
   * wedge or tunnel the way a stop-on-contact test can.
   *
   * Boulders are scattered without a spacing rule, so they overlap and a push
   * out of one can land inside its neighbour. The pushes are therefore summed
   * over a pass and applied together, which sends the hunter out along the
   * bisector of a pair instead of bouncing between their two faces, and the
   * pass is repeated until nothing overlaps.
   */
  resolveCollision(position, radius = 0.45) {
    let moved = false;
    for (let pass = 0; pass < 6; pass++) {
      let pushX = 0;
      let pushZ = 0;
      let hits = 0;
      let worst = 0;
      let worstX = 1;
      let worstZ = 0;
      for (const b of this.blockers) {
        const dx = position.x - b.x;
        const dz = position.z - b.z;
        const reach = b.r + radius;
        if (Math.abs(dx) > reach || Math.abs(dz) > reach) continue;
        const gap = Math.hypot(dx, dz);
        if (gap >= reach) continue;
        hits++;
        const depth = reach - gap;
        const nx = gap < 1e-4 ? 1 : dx / gap;
        const nz = gap < 1e-4 ? 0 : dz / gap;
        pushX += nx * depth;
        pushZ += nz * depth;
        if (depth > worst) {
          worst = depth;
          worstX = nx * depth;
          worstZ = nz * depth;
        }
      }
      if (!hits) break;
      moved = true;
      // Deep inside a cluster of overlapping boulders the pushes point at each
      // other and cancel, which would leave the hunter wedged in the middle of
      // the rock. When the sum collapses like that, leave by the deepest face.
      if (Math.hypot(pushX, pushZ) < worst * 0.6) {
        pushX = worstX;
        pushZ = worstZ;
      }
      // A hair past contact, so the next frame's test starts outside.
      const len = Math.hypot(pushX, pushZ) || 1;
      position.x += pushX + (pushX / len) * 0.01;
      position.z += pushZ + (pushZ / len) * 0.01;
    }
    return moved;
  }

  _instance(geo, mat, placements, place) {
    const mesh = new THREE.InstancedMesh(geo, mat, placements.length);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    const dummy = new THREE.Object3D();
    placements.forEach((p, i) => {
      const block = place(dummy, p, i);
      if (block > 0) this._block(dummy.position.x, dummy.position.z, block);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
    this.group.add(mesh);
    this.props.push(mesh);
    return mesh;
  }

  _buildSky(textures) {
    const geo = new THREE.SphereGeometry(440, 40, 24);
    const mat = new THREE.MeshBasicMaterial({
      map: textures.sky,
      side: THREE.BackSide,
      fog: false,
      depthWrite: false,
    });
    this.sky = new THREE.Mesh(geo, mat);
    this.group.add(this.sky);

    // Image-based lighting from the same ash storm the sky dome shows, so metal
    // and wet rock pick up the real horizon instead of a flat grey cube.
    if (this.renderer) {
      const pmrem = new THREE.PMREMGenerator(this.renderer);
      pmrem.compileEquirectangularShader();
      const equirect = textures.sky.clone();
      equirect.mapping = THREE.EquirectangularReflectionMapping;
      equirect.needsUpdate = true;
      this.envMap = pmrem.fromEquirectangular(equirect).texture;
      this.scene.environment = this.envMap;
      pmrem.dispose();
      equirect.dispose();
    }
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
      // Broken relief in the three-to-ten metre band. The massif noise bottoms
      // out around twenty metres, so without this the height field runs
      // straight from those shapes down to the quad size and the smooth
      // interpolation across the gap reads as sand dunes — which is exactly
      // what it looked like, and no amount of normal mapping hides it.
      const fracture = ridge(x * 0.17, z * 0.163) ** 2 * 2.7;
      const rubble = fbm(x * 0.46, z * 0.46, 2) * 1.15;
      const crater = Math.hypot(x, z + 18);
      const caldera = Math.exp(-((crater - 42) ** 2) / 380) * 3.2;
      const h = mountain * 16.5 + ridges * 11.5 + fracture + rubble - caldera + 1.4;
      pos.setY(i, h);
      const ix = Math.round(((x + this.size / 2) / this.size) * n);
      const iz = Math.round(((z + this.size / 2) / this.size) * n);
      this.heights[iz * (n + 1) + ix] = h;
      uvs.setXY(i, x * 0.045, z * 0.045);
      // Ash bleaches the peaks; the low ground keeps its molten tint.
      const lava = THREE.MathUtils.smoothstep(5.4, 2.2, h);
      const ash = THREE.MathUtils.smoothstep(16, 26, h);
      colors[i * 3] = 1 - ash * 0.1;
      colors[i * 3 + 1] = 1 - lava * 0.55 - ash * 0.04;
      colors[i * 3 + 2] = 1 - lava * 0.7 - ash * 0.02;
    }
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.computeVertexNormals();

    // Roughly one tile every six metres: dense enough to read as scoria, coarse
    // enough that the macro shapes survive mipmapping out to the ridge line.
    const pack = setRepeat(textures.pack("terrain_rock", { clone: true }), 4, 4);
    const mat = standardFrom(pack, {
      vertexColors: true,
      metalness: 0.04,
      roughness: 0.8,
      emissive: new THREE.Color(1.0, 0.18, 0.03),
      emissiveIntensity: 0.55,
      normalScale: new THREE.Vector2(1.5, 1.5),
      envMapIntensity: 0.35,
    });

    mat.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = { value: 0 };
      this._terrainShader = shader;
      shader.vertexShader = `varying float vWorldY;\n${shader.vertexShader}`.replace(
        "#include <begin_vertex>",
        `#include <begin_vertex>
         vWorldY = position.y;`
      );
      shader.fragmentShader = `uniform float uTime;\nvarying float vWorldY;\n${shader.fragmentShader}`
        // A second high-frequency tap of the same albedo keeps the ground from
        // going soft under the player's feet without shipping a 4K texture.
        .replace(
          "#include <map_fragment>",
          `#include <map_fragment>
           vec4 detailTex = texture2D(map, vMapUv * 8.0);
           diffuseColor.rgb *= mix(vec3(1.0), detailTex.rgb * 1.85, 0.42);`
        )
        .replace(
          "#include <roughnessmap_fragment>",
          `#include <roughnessmap_fragment>
           roughnessFactor *= mix(1.0, texture2D(roughnessMap, vRoughnessMapUv * 8.0).g * 1.7, 0.35);`
        )
        .replace(
          "#include <emissivemap_fragment>",
          // Gated on the crack mask: a flat glow over every low-lying face
          // out-radiates the rock albedo and the ground goes to smooth putty.
          `#include <emissivemap_fragment>
           float crack = texture2D(emissiveMap, vEmissiveMapUv * 4.0).r;
           float lava = 1.0 - smoothstep(2.4, 6.8, vWorldY);
           float pulse = 0.65 + 0.35 * sin(uTime * 1.7 + vWorldY * 0.4);
           totalEmissiveRadiance += vec3(1.0, 0.22, 0.04) * crack * lava * pulse * 2.2;`
        );
    };

    this.terrain = new THREE.Mesh(geo, mat);
    this.terrain.receiveShadow = true;
    this.terrain.castShadow = true;
    this.group.add(this.terrain);
  }

  _buildVolcano(textures) {
    const pack = setRepeat(textures.pack("terrain_rock", { clone: true }), 10, 10);
    const mat = standardFrom(pack, {
      metalness: 0.02,
      roughness: 0.92,
      emissive: new THREE.Color(0.55, 0.08, 0.01),
      emissiveIntensity: 0.25,
      envMapIntensity: 0.25,
    });
    const cone = new THREE.ConeGeometry(140, 118, 28, 4, true);
    this.volcano = new THREE.Mesh(cone, mat);
    this.volcano.position.set(-120, 10, -250);
    this.group.add(this.volcano);

    const caldera = new THREE.Mesh(
      new THREE.CircleGeometry(26, 24),
      new THREE.MeshBasicMaterial({ color: 0xff5512, fog: false })
    );
    caldera.rotation.x = -Math.PI / 2;
    caldera.position.set(-120, 68, -250);
    this.group.add(caldera);
    this.calderaGlow = caldera;

    const plume = new THREE.Mesh(
      new THREE.CylinderGeometry(24, 60, 200, 14, 1, true),
      new THREE.MeshBasicMaterial({
        color: 0x3a3029,
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide,
        depthWrite: false,
        fog: false,
      })
    );
    plume.position.set(-120, 165, -250);
    this.group.add(plume);
    this.plume = plume;
  }

  _buildRocks(textures) {
    const pack = setRepeat(textures.pack("terrain_rock", { clone: true }), 2.2, 2.2);
    const mat = standardFrom(pack, {
      roughness: 0.9,
      metalness: 0.03,
      emissive: new THREE.Color(0.4, 0.05, 0.01),
      emissiveIntensity: 0.2,
      envMapIntensity: 0.3,
    });
    const geo = new THREE.IcosahedronGeometry(1, 1);
    // Break the sphere so instances read as fractured basalt, not pebbles.
    const p = geo.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const s = 0.78 + fbm(p.getX(i) * 2.2 + 11, p.getZ(i) * 2.2 + 7, 3) * 0.7;
      p.setXYZ(i, p.getX(i) * s, p.getY(i) * s, p.getZ(i) * s);
    }
    geo.computeVertexNormals();
    // The displaced hull, so the no-go circle can be sized to the lobes rather
    // than to the mean surface: a boulder's longest spur is what the camera
    // walks into, and it reaches about half again as far.
    geo.computeBoundingSphere();
    const hull = geo.boundingSphere.radius;

    const spots = this._scatter(260, { minR: 18, maxR: 134, slopeMax: 2.4, clear: 16 });
    this.rocks = this._instance(geo, mat, spots, (d, p) => {
      d.position.set(p.x, p.y + 0.3, p.z);
      d.rotation.set(Math.random() * 0.6, Math.random() * Math.PI, Math.random() * 0.4);
      const s = 0.7 + Math.random() * 3.0;
      d.scale.set(s * (0.7 + Math.random() * 0.6), s * (0.75 + Math.random() * 0.6), s * (0.7 + Math.random() * 0.6));
      // Knee-high stones pass under the eye line and are better stepped over
      // than walked around. The rest are blocked at their hull, less the body
      // radius the resolver adds back, so the stop lands just off the rock.
      return d.scale.y > 0.9 ? hull * Math.max(d.scale.x, d.scale.z) - 0.45 : 0;
    });

    this._buildScree(mat);
  }

  /**
   * Loose stone underfoot, in one instanced draw call.
   *
   * A height field cannot make ground read as fractured rock on its own: push
   * enough noise into it to look broken up close and the macro shapes turn to
   * gravel, so the interpolated surface stays smooth and the slope reads as a
   * sand dune however much relief is layered in. Scattering actual stone over
   * it is what breaks the silhouette, and the near field is where it counts.
   */
  _buildScree(mat) {
    // Twenty faces, displaced into a chip. At this size nothing more resolves.
    const geo = new THREE.IcosahedronGeometry(1, 0);
    const p = geo.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const s = 0.6 + fbm(p.getX(i) * 3.1 + 29, p.getZ(i) * 3.1 - 13, 2);
      p.setXYZ(i, p.getX(i) * s, p.getY(i) * s * 0.7, p.getZ(i) * s);
    }
    geo.computeVertexNormals();

    const spots = this._scatter(900, { minR: 4, maxR: 124, slopeMax: 3.2, clear: 7 });
    this.scree = this._instance(geo, mat, spots, (d, p) => {
      d.position.set(p.x, p.y + 0.05, p.z);
      d.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      // Squared, so most of them are chips and only a few are bigger stones.
      const s = 0.2 + Math.random() ** 2 * 0.85;
      d.scale.set(s * (0.8 + Math.random() * 0.5), s * (0.5 + Math.random() * 0.5), s * (0.8 + Math.random() * 0.5));
    });
    // Nine hundred stone-sized shadow casters cost far more in the shadow pass
    // than they are worth; the ambient occlusion in the pack reads well enough.
    this.scree.castShadow = false;
  }

  _buildSpires(textures) {
    const pack = setRepeat(textures.pack("obsidian", { clone: true }), 1.4, 2.6);
    const mat = standardFrom(pack, {
      roughness: 0.24,
      metalness: 0.4,
      emissive: new THREE.Color(0.8, 0.12, 0.02),
      emissiveIntensity: 0.5,
      envMapIntensity: 1.1,
    });
    // Sheared columns with flat, broken tops. These were five-sided needles,
    // and three dozen of them scattered across the ridge read as a row of
    // shark teeth rather than as an obsidian outcrop.
    const blade = (base, top, height, sides) => new THREE.CylinderGeometry(top, base, height, sides);
    const geo = mergeGeometries([
      transformed(blade(1.0, 0.34, 5.4, 5), { pos: [0, 2.7, 0], rot: [0.06, 0.4, 0.08] }),
      transformed(blade(0.62, 0.2, 3.6, 4), { pos: [1.05, 1.8, 0.35], rot: [0.1, 0.9, 0.26] }),
      transformed(blade(0.5, 0.17, 2.4, 5), { pos: [-0.82, 1.2, -0.55], rot: [-0.14, 0.3, -0.3] }),
      transformed(blade(0.42, 0.3, 1.3, 4), { pos: [0.3, 0.62, -1.0], rot: [0.2, 1.7, 0.14] }),
    ]);
    const spots = this._scatter(26, { minR: 26, maxR: 128, slopeMax: 1.6, clear: 22, spacing: 14 });
    this.spires = this._instance(geo, mat, spots, (d, p) => {
      d.position.set(p.x, p.y - 0.4, p.z);
      d.rotation.set((Math.random() - 0.5) * 0.22, Math.random() * Math.PI, (Math.random() - 0.5) * 0.22);
      const s = 0.7 + Math.random() * 1.3;
      d.scale.set(s, s * (0.8 + Math.random() * 1.0), s);
      return s * 1.5;
    });
  }

  /**
   * Ridges past the playable ground, so the terrain does not stop in mid-air.
   *
   * At this range the fog has taken all but about a tenth of their shading, so
   * the outline is the only thing that reads — which is why these are skyline
   * curtains and not geometry. A cone silhouettes as a triangle however much
   * its flanks are displaced, and a ring of forty of them read as a row of
   * tents pitched around the map.
   */
  _buildHorizon(textures) {
    const pack = setRepeat(textures.pack("terrain_rock", { clone: true }), 26, 2);
    const mat = standardFrom(pack, {
      roughness: 0.95,
      metalness: 0,
      emissive: new THREE.Color(0.5, 0.07, 0.01),
      emissiveIntensity: 0.08,
      envMapIntensity: 0.15,
      side: THREE.DoubleSide,
    });
    this.horizon = new THREE.Group();
    // Three layers at increasing distance and height: the overlap between them
    // is what gives the skyline depth once fog has flattened the shading.
    for (const [radius, base, amp, seed] of [
      [300, 14, 70, 3.7],
      [382, 24, 104, 21.3],
      [464, 32, 148, 48.9],
    ]) {
      this.horizon.add(this._ridgeCurtain(radius, base, amp, seed, mat));
    }
    this.group.add(this.horizon);
  }

  /** One wrapping strip whose top edge follows a fractal skyline. */
  _ridgeCurtain(radius, base, amp, seed, mat) {
    const segments = 256;
    const floor = -46;
    const position = [];
    const uv = [];
    const index = [];
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      const c = Math.cos(angle);
      const s = Math.sin(angle);
      const top = base + amp * skyline(angle, seed);
      position.push(c * radius, floor, s * radius, c * radius, top, s * radius);
      uv.push(i / segments, 0, i / segments, (top - floor) / 90);
      if (i < segments) {
        const b = i * 2;
        index.push(b, b + 1, b + 2, b + 1, b + 3, b + 2);
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(position, 3));
    geo.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
    geo.setIndex(index);
    geo.computeVertexNormals();
    const mesh = new THREE.Mesh(geo, mat);
    // It rings the whole world, so the bounding sphere is never a useful test.
    mesh.frustumCulled = false;
    return mesh;
  }

  _buildDeadTrees(textures) {
    const pack = setRepeat(textures.pack("burnt_bark", { clone: true }), 1, 3);
    const mat = standardFrom(pack, {
      roughness: 0.95,
      metalness: 0.0,
      emissive: new THREE.Color(0.35, 0.04, 0.0),
      emissiveIntensity: 0.14,
      envMapIntensity: 0.2,
    });
    const parts = [transformed(new THREE.CylinderGeometry(0.22, 0.52, 7.5, 7), { pos: [0, 3.7, 0] })];
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2 + 0.4;
      const len = 2.2 + Math.random() * 1.6;
      const h = 3.4 + i * 0.7;
      parts.push(
        transformed(new THREE.CylinderGeometry(0.05, 0.14, len, 5), {
          pos: [Math.cos(a) * len * 0.36, h, Math.sin(a) * len * 0.36],
          rot: [Math.sin(a) * 1.0, 0, -Math.cos(a) * 1.0],
        })
      );
    }
    const geo = mergeGeometries(parts);
    const spots = this._scatter(56, { minR: 24, maxR: 126, slopeMax: 0.85, band: [6, 24], clear: 14, spacing: 7 });
    this.trees = this._instance(geo, mat, spots, (d, p) => {
      d.position.set(p.x, p.y - 0.3, p.z);
      d.rotation.set((Math.random() - 0.5) * 0.3, Math.random() * Math.PI, (Math.random() - 0.5) * 0.3);
      const s = 0.7 + Math.random() * 0.9;
      d.scale.set(s, s * (0.8 + Math.random() * 0.7), s);
      return s * 0.55;
    });
  }

  _buildBonePiles(textures) {
    const pack = setRepeat(textures.pack("bone", { clone: true }), 1.6, 1.6);
    const mat = standardFrom(pack, {
      // Ash-caked, not museum-clean. Left glossy and bright, the cranium
      // catches the sky and reads as a smooth pale egg on the slope.
      color: new THREE.Color(0.62, 0.58, 0.54),
      roughness: 0.86,
      metalness: 0.0,
      envMapIntensity: 0.16,
    });
    const parts = [
      transformed(weathered(new THREE.SphereGeometry(0.75, 14, 10), 0.16, 5.3), {
        pos: [1.6, 0.5, 0.2],
        scale: [1.5, 0.72, 0.8],
      }),
      transformed(new THREE.ConeGeometry(0.34, 1.1, 8), { pos: [2.7, 0.5, 0.2], rot: [0, 0, -Math.PI / 2] }),
    ];
    // Ribcage: paired arcs walking back down the spine.
    for (let i = 0; i < 6; i++) {
      for (const side of [-1, 1]) {
        parts.push(
          transformed(new THREE.TorusGeometry(0.85, 0.07, 5, 10, Math.PI * 0.8), {
            pos: [-i * 0.62, 0.45, 0.1 * side],
            rot: [Math.PI / 2, 0.25 * side, 0.1],
            scale: [1, 0.7 + i * 0.04, 1],
          })
        );
      }
    }
    for (let i = 0; i < 7; i++) {
      parts.push(
        transformed(new THREE.CylinderGeometry(0.14, 0.16, 0.55, 6), {
          pos: [-i * 0.6 + 0.4, 0.95, 0],
          rot: [0, 0, Math.PI / 2],
        })
      );
    }
    const geo = mergeGeometries(parts);
    const spots = this._scatter(16, { minR: 26, maxR: 118, slopeMax: 0.6, clear: 20, spacing: 26 });
    this.bones = this._instance(geo, mat, spots, (d, p) => {
      d.position.set(p.x, p.y, p.z);
      d.rotation.set(0, Math.random() * Math.PI * 2, 0);
      const s = 0.95 + Math.random() * 0.95;
      d.scale.setScalar(s);
      // Only the cranium is solid enough to matter, and it sits well off to one
      // side of the pile's origin. The ribcage is open arcs: walk through it.
      const a = d.rotation.y;
      this._block(p.x + Math.cos(a) * 1.6 * s, p.z - Math.sin(a) * 1.6 * s, 1.05 * s);
    });
  }

  _buildRuins(textures) {
    const pack = setRepeat(textures.pack("terrain_rock", { clone: true }), 1.2, 2.4);
    const mat = standardFrom(pack, {
      roughness: 0.84,
      metalness: 0.02,
      envMapIntensity: 0.3,
    });
    const parts = [];
    // A toppled basalt colonnade: columnar hex prisms, snapped at different heights.
    for (let i = 0; i < 7; i++) {
      const h = 2.2 + Math.random() * 6;
      parts.push(
        transformed(new THREE.CylinderGeometry(0.62, 0.68, h, 6), {
          pos: [i * 1.5 - 4.5, h / 2, Math.sin(i * 1.7) * 0.9],
          rot: [0, i * 0.4, (Math.random() - 0.5) * 0.12],
        })
      );
    }
    parts.push(
      transformed(new THREE.CylinderGeometry(0.6, 0.6, 6, 6), {
        pos: [2.4, 0.7, 3.2],
        rot: [Math.PI / 2.1, 0.4, 0],
      })
    );
    const geo = mergeGeometries(parts);
    const spots = this._scatter(9, { minR: 34, maxR: 120, slopeMax: 0.55, clear: 24, spacing: 34 });
    this.ruins = this._instance(geo, mat, spots, (d, p) => {
      d.position.set(p.x, p.y - 0.4, p.z);
      d.rotation.set(0, Math.random() * Math.PI * 2, 0);
      const s = 1.1 + Math.random() * 0.8;
      d.scale.setScalar(s);
      // Blocked column by column along the row rather than as one disc, so the
      // colonnade can still be walked through where it has fallen open.
      const a = d.rotation.y;
      for (let i = 0; i < 7; i++) {
        const off = (i * 1.5 - 4.5) * s;
        this._block(p.x + Math.cos(a) * off, p.z - Math.sin(a) * off, 0.7 * s);
      }
    });
  }

  _buildLavaPools(textures) {
    const pack = setRepeat(textures.pack("lava", { clone: true }), 2.4, 2.4);
    const spots = this._scatter(14, { minR: 22, maxR: 122, slopeMax: 0.34, band: [1, 7.5], clear: 22, spacing: 20 });
    this.lavaLights = [];
    spots.forEach((p, i) => {
      const mat = standardFrom(pack, {
        roughness: 0.42,
        metalness: 0.0,
        emissive: new THREE.Color(1.5, 0.4, 0.05),
        emissiveIntensity: 2.6,
        envMapIntensity: 0.1,
      });
      this.lavaMats.push(mat);
      const radius = 4 + Math.random() * 7;
      const geo = new THREE.CircleGeometry(radius, 18);
      // Ripple the rim so pools follow the ground instead of floating flat.
      const vp = geo.attributes.position;
      for (let k = 0; k < vp.count; k++) {
        const r = Math.hypot(vp.getX(k), vp.getY(k));
        if (r > 0.1) {
          const wob = 0.78 + fbm(vp.getX(k) * 0.6 + i, vp.getY(k) * 0.6, 3) * 0.55;
          vp.setXY(k, vp.getX(k) * wob, vp.getY(k) * wob);
        }
      }
      geo.computeVertexNormals();
      const pool = new THREE.Mesh(geo, mat);
      pool.rotation.x = -Math.PI / 2;
      pool.position.set(p.x, p.y + 0.22, p.z);
      this.group.add(pool);
      this.props.push(pool);

      // Point lights are the most expensive thing here, so only a few pools get one.
      if (i < 3) {
        const light = new THREE.PointLight(0xff4a10, 30, radius * 6, 1.8);
        light.position.set(p.x, p.y + 2.2, p.z);
        this.group.add(light);
        this.lavaLights.push(light);
      }
    });
  }

  /** The hunter's camp doubles as the spawn landmark so the player can orient. */
  _buildCamp(textures) {
    const wood = standardFrom(setRepeat(textures.pack("weapon_wood", { clone: true }), 1, 2), {
      roughness: 0.86,
      metalness: 0.0,
      envMapIntensity: 0.25,
    });
    const hide = standardFrom(setRepeat(textures.pack("leather_glove", { clone: true }), 2, 2), {
      roughness: 0.78,
      metalness: 0.0,
      side: THREE.DoubleSide,
      envMapIntensity: 0.25,
    });
    const camp = new THREE.Group();
    const ground = this.heightAt(SPAWN.x, SPAWN.y);
    camp.position.set(SPAWN.x, ground, SPAWN.y);
    this.group.add(camp);

    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * Math.PI * 2;
      const stake = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.09, 2.6, 6), wood);
      stake.position.set(Math.cos(a) * 6.5, 1.1, Math.sin(a) * 6.5);
      stake.rotation.z = Math.cos(a) * 0.16;
      stake.rotation.x = Math.sin(a) * 0.16;
      stake.castShadow = true;
      camp.add(stake);
      // Every stake carries a trophy skull from an earlier hunt.
      const skull = new THREE.Mesh(new THREE.SphereGeometry(0.26, 8, 6), hide);
      skull.position.set(Math.cos(a) * 6.5, 2.5, Math.sin(a) * 6.5);
      skull.scale.set(1.3, 0.9, 0.9);
      camp.add(skull);
    }

    const tarp = new THREE.Mesh(new THREE.ConeGeometry(2.4, 2.6, 4, 1, true), hide);
    tarp.position.set(-3.4, 1.3, -2.2);
    tarp.rotation.y = 0.6;
    tarp.castShadow = true;
    camp.add(tarp);
    this._block(SPAWN.x - 3.4, SPAWN.y - 2.2, 1.3);

    const fire = new THREE.Group();
    fire.position.set(1.6, 0, 1.4);
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2;
      const log = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.13, 1.5, 6), wood);
      log.position.set(Math.cos(a) * 0.35, 0.5, Math.sin(a) * 0.35);
      log.rotation.set(Math.sin(a) * 0.9, 0, -Math.cos(a) * 0.9);
      fire.add(log);
    }
    const coals = new THREE.Mesh(
      new THREE.SphereGeometry(0.55, 12, 8),
      new THREE.MeshBasicMaterial({ color: 0xff7a22 })
    );
    coals.position.y = 0.22;
    coals.scale.y = 0.4;
    fire.add(coals);
    this.campFire = new THREE.PointLight(0xff8a33, 22, 26, 1.9);
    this.campFire.position.set(0, 1.1, 0);
    this.campFire.castShadow = false;
    fire.add(this.campFire);
    camp.add(fire);
    this.campGroup = camp;
    this.campCenter = new THREE.Vector3(SPAWN.x + 1.6, ground, SPAWN.y + 1.4);
    this.campRadius = 8.5;
  }

  /** True inside the staked ring, where the hunter can bind wounds. */
  atCamp(position) {
    return Math.hypot(position.x - this.campCenter.x, position.z - this.campCenter.z) < this.campRadius;
  }

  _buildLighting() {
    this.scene.fog = new THREE.FogExp2(0x1b1510, 0.0062);
    this.scene.background = new THREE.Color(0x120e0c);

    this.hemi = new THREE.HemisphereLight(0x8a6a55, 0x24100a, 0.7);
    this.group.add(this.hemi);

    // Low, raking key light: long shadows are what sell the ridge as volcanic.
    this.sun = new THREE.DirectionalLight(0xffa561, 2.5);
    this.sun.position.set(-78, 40, 34);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(1536, 1536);
    this.sun.shadow.camera.near = 4;
    this.sun.shadow.camera.far = 300;
    this.sun.shadow.camera.left = -110;
    this.sun.shadow.camera.right = 110;
    this.sun.shadow.camera.top = 110;
    this.sun.shadow.camera.bottom = -110;
    this.sun.shadow.bias = -0.00035;
    this.sun.shadow.normalBias = 0.028;
    this.group.add(this.sun);

    this.rim = new THREE.DirectionalLight(0x4a5a78, 0.42);
    this.rim.position.set(48, 24, -86);
    this.group.add(this.rim);

    this.ember = new THREE.PointLight(0xff6a1a, 16, 54, 2);
    this.ember.position.set(-12, 8, 10);
    this.group.add(this.ember);
  }

  _buildAshColumns() {
    const geo = new THREE.CylinderGeometry(6, 16, 56, 12, 1, true);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x2a241f,
      transparent: true,
      opacity: 0.12,
      side: THREE.DoubleSide,
      depthWrite: false,
      fog: true,
    });
    this.ashColumns = [];
    for (let i = 0; i < 7; i++) {
      const mesh = new THREE.Mesh(geo, mat);
      const a = (i / 7) * Math.PI * 2;
      mesh.position.set(Math.cos(a) * 78, 36, Math.sin(a) * 72 - 20);
      mesh.rotation.z = (Math.random() - 0.5) * 0.2;
      this.group.add(mesh);
      this.ashColumns.push(mesh);
    }
  }

  update(t) {
    if (this._terrainShader) this._terrainShader.uniforms.uTime.value = t;
    const pulse = 2.3 + Math.sin(t * 1.6) * 0.5;
    for (let i = 0; i < this.lavaMats.length; i++) {
      this.lavaMats[i].emissiveIntensity = pulse + Math.sin(t * 2.1 + i) * 0.35;
    }
    for (let i = 0; i < this.lavaLights.length; i++) {
      this.lavaLights[i].intensity = 26 + Math.sin(t * 1.8 + i * 1.3) * 9;
    }
    if (this.campFire) this.campFire.intensity = 19 + Math.sin(t * 9.3) * 4 + Math.sin(t * 3.1) * 3;
    if (this.calderaGlow) this.calderaGlow.material.color.setRGB(1, 0.3 + Math.sin(t * 0.9) * 0.08, 0.06);
    if (this.plume) this.plume.rotation.y = t * 0.012;
    this.sky.rotation.y = t * 0.003;
  }

  setQuality(tier) {
    const shadow = { cinematic: 2048, high: 1536, medium: 768, low: 512 };
    this.sun.shadow.mapSize.set(shadow[tier] ?? 1024, shadow[tier] ?? 1024);
    this.sun.shadow.map?.dispose();
    this.sun.shadow.map = null;
    this.sun.castShadow = tier !== "low";

    // Instanced props are one draw call each; it is their shadow pass that
    // costs, so thin the set gradually and drop shadow casting before geometry.
    const detail = tier === "low" ? 0 : tier === "medium" ? 1 : 2;
    for (const prop of [this.rocks, this.spires, this.trees]) {
      if (!prop) continue;
      prop.visible = true;
      prop.castShadow = detail >= 1;
    }
    if (this.bones) this.bones.visible = detail >= 1;
    if (this.ruins) this.ruins.visible = detail >= 1;
    // The scree is one draw call, but nine hundred stones still cost vertex
    // work and overdraw, and the lowest tier needs the pixels more.
    if (this.scree) this.scree.visible = detail >= 1;
    for (const c of this.ashColumns ?? []) c.visible = detail >= 1;
    this.lavaLights?.forEach((l, i) => {
      l.visible = tier === "cinematic" || (detail >= 2 && i === 0);
    });
    if (this.campFire) this.campFire.visible = detail >= 1;
    if (this.ember) this.ember.visible = detail >= 1;
  }
}
