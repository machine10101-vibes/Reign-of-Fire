import * as THREE from "three";
import { standardFrom, setRepeat } from "./assets.js";

/**
 * Torso as [distance along the spine, radius]. More stations than the first
 * pass, and a real waist behind the chest: a lathe of nine fat samples is a
 * sausage, which is what every species used to silhouette as from below.
 */
const TORSO_PROFILE = [
  [-1.95, 0.04],
  [-1.72, 0.18],
  [-1.42, 0.38],
  [-1.08, 0.58],
  [-0.62, 0.78],
  [-0.18, 0.92],
  [0.22, 0.98],
  [0.58, 0.88],
  [0.88, 0.68],
  [1.12, 0.48],
  [1.32, 0.28],
  [1.46, 0.14],
];

const _q = new THREE.Quaternion();

function limbMesh(geo, mat) {
  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

/** Revolves a [along, radius] profile onto +X, which is the rig's forward. */
function latheAlongX(profile, segments) {
  const geo = new THREE.LatheGeometry(
    profile.map(([along, r]) => new THREE.Vector2(r, along)),
    segments
  );
  geo.rotateZ(-Math.PI / 2);
  geo.computeVertexNormals();
  return geo;
}

/**
 * A tapered tube along a curve. Copied in rather than imported from the
 * weapon: a dragon that cannot be constructed without the viewmodel is the
 * kind of coupling that fails a headless hunt test.
 */
function sweep(points, { steps = 16, radial = 8, radius, flatten = 1, caps = true }) {
  const curve = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p)));
  const frames = curve.computeFrenetFrames(steps, false);
  const position = [];
  const uv = [];
  const index = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const c = curve.getPointAt(t);
    const r = radius(t);
    const N = frames.normals[i];
    const B = frames.binormals[i];
    for (let j = 0; j <= radial; j++) {
      const a = (j / radial) * Math.PI * 2;
      const ca = Math.cos(a) * r * flatten;
      const sa = Math.sin(a) * r;
      position.push(c.x + N.x * ca + B.x * sa, c.y + N.y * ca + B.y * sa, c.z + N.z * ca + B.z * sa);
      uv.push(j / radial, t * 2);
    }
  }
  for (let i = 0; i < steps; i++) {
    for (let j = 0; j < radial; j++) {
      const a = i * (radial + 1) + j;
      const b = a + radial + 1;
      index.push(a, a + 1, b, b, a + 1, b + 1);
    }
  }
  if (caps) {
    for (const end of [0, 1]) {
      const c = curve.getPointAt(end);
      const centre = position.length / 3;
      position.push(c.x, c.y, c.z);
      uv.push(0.5, end);
      const ring = end === 0 ? 0 : steps * (radial + 1);
      for (let j = 0; j < radial; j++) {
        if (end === 0) index.push(centre, ring + j + 1, ring + j);
        else index.push(centre, ring + j, ring + j + 1);
      }
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(position, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(index);
  geo.computeVertexNormals();
  return geo;
}

/**
 * Membrane in shape space: +X outboard, +Y toward the leading edge, +Z out of
 * plane. Lofted as a grid so the sail can camber; an outlined plane has no
 * interior vertices and stays a plank however its silhouette is cut.
 *
 * The trailing edge is scalloped at the finger bays, and the camber is pinned
 * along the arm and the trailing edge so the slack hangs where a real wing's
 * does. Rows used to be five, which was enough to bow the surface and not
 * enough to read the bays as anything but a wavy line.
 */
function membraneGeometry(span, { slack = 0.34, cols = 28, rows = 8 } = {}) {
  const s = span;
  const lead = new THREE.Path();
  lead.moveTo(0, 0);
  lead.quadraticCurveTo(1.55 * s, 0.62, 3.05 * s, 0.4);
  lead.quadraticCurveTo(3.95 * s, 0.24, 4.4 * s, -0.2);

  const trail = new THREE.Path();
  trail.moveTo(0, 0);
  trail.quadraticCurveTo(0.22 * s, -0.55, 0.55 * s, -1.08);
  trail.quadraticCurveTo(1.1 * s, -0.92, 1.6 * s, -1.38);
  trail.quadraticCurveTo(2.15 * s, -0.86, 2.75 * s, -1.28);
  trail.quadraticCurveTo(3.55 * s, -0.84, 4.4 * s, -0.2);

  const position = [];
  const uv = [];
  const index = [];
  for (let i = 0; i <= cols; i++) {
    const u = i / cols;
    const front = lead.getPoint(u);
    const back = trail.getPoint(u);
    const chord = front.y - back.y;
    for (let j = 0; j <= rows; j++) {
      const v = j / rows;
      const x = THREE.MathUtils.lerp(front.x, back.x, v);
      const y = THREE.MathUtils.lerp(front.y, back.y, v);
      const across = Math.sin(v * Math.PI);
      const along = Math.sin(Math.min(1, u * 1.25) * Math.PI) ** 0.55;
      // A shallow secondary ripple in the bays, so the sail is not one smooth
      // hammock. Amplitude is a fraction of the camber or it reads as a flag.
      const bay = Math.sin(u * Math.PI * 4) * Math.sin(v * Math.PI) * 0.08;
      position.push(x, y, -(slack * chord * across * along + bay * chord));
      uv.push(u, v);
      if (i < cols && j < rows) {
        const a = i * (rows + 1) + j;
        const b = a + rows + 1;
        index.push(a, b, a + 1, b, b + 1, a + 1);
      }
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(position, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(index);
  geo.applyMatrix4(
    new THREE.Matrix4().makeBasis(
      new THREE.Vector3(0, 0, 1),
      new THREE.Vector3(1, 0, 0),
      new THREE.Vector3(0, 1, 0)
    )
  );
  geo.computeVertexNormals();
  return geo;
}

function skullGeometry(segments) {
  return latheAlongX(
    [
      [-0.22, 0.1],
      [-0.08, 0.3],
      [0.08, 0.4],
      [0.28, 0.42],
      [0.48, 0.34],
      [0.68, 0.24],
      [0.92, 0.16],
      [1.14, 0.1],
      [1.28, 0.04],
      [1.34, 0.0],
    ],
    segments
  );
}

function jawGeometry(segments) {
  return latheAlongX(
    [
      [0.0, 0.08],
      [0.16, 0.13],
      [0.4, 0.12],
      [0.68, 0.08],
      [0.9, 0.045],
      [1.02, 0.0],
    ],
    segments
  );
}

export class Dragon {
  constructor(spec, textures) {
    this.spec = spec;
    this.species = spec.id;
    this.name = spec.name;
    this.maxHp = spec.stats.hp;
    this.hp = this.maxHp;
    this.armor = spec.stats.armor ?? 0;
    this.alive = true;
    this.root = new THREE.Group();
    this.root.scale.setScalar(spec.build.scale);
    this.bones = {};
    this.hitboxes = [];
    this.anim = Math.random() * 10;
    this.pain = 0;
    this.jaw = 0;
    this.flapRate = THREE.MathUtils.lerp(2.2, 5.4, 1 - spec.build.scale / 14);
    this._build(textures);
  }

  _mat(textures) {
    const look = this.spec.look;
    // The repeat counts are authored in UV space, so a uniform root scale would
    // hand the Basalt Tyrant scales four times the size of an Emberkin's. Tie
    // the tiling to body size instead and the plates stay roughly hand-sized.
    const density = THREE.MathUtils.clamp(this.spec.build.scale / 6, 0.85, 2.2);
    const scales = setRepeat(
      textures.pack(look.pack, { clone: true }),
      look.scaleRepeat[0] * density,
      look.scaleRepeat[1] * density
    );
    const body = standardFrom(scales, {
      metalness: look.metalness,
      roughness: look.roughness,
      emissive: new THREE.Color(...look.emissive),
      emissiveIntensity: look.emissiveBase,
      normalScale: new THREE.Vector2(2.2, 2.2),
      envMapIntensity: 0.65,
    });
    body.onBeforeCompile = (shader) => {
      shader.vertexShader = `varying vec3 vHide;\n${shader.vertexShader}`
        .replace(
          "#include <begin_vertex>",
          `#include <begin_vertex>
           vHide = position;
           // Plate relief on the hide itself. A lathe is perfectly smooth, and
           // a normal map alone cannot break a silhouette that clean; a few
           // millimetres of overlapping scale is what stops the torso reading
           // as a glazed vase from below.
           float plate = sin(position.x * 14.0 + position.z * 3.0) * sin(position.y * 11.0 + position.z * 7.0);
           transformed += objectNormal * plate * 0.007;`
        );
      // The scale packs outline every single plate in molten grout. Left at
      // full strength that net out-radiates the hide and the beast reads as a
      // glowing wireframe, so pool the heat into bands and along the belly.
      shader.fragmentShader = `varying vec3 vHide;\n${shader.fragmentShader}`.replace(
        "#include <emissivemap_fragment>",
        `#include <emissivemap_fragment>
         float band = 0.5 + 0.5 * sin(vHide.x * 1.9 - 0.6);
         float belly = smoothstep(0.7, -0.5, vHide.y);
         float heat = clamp(band * 0.7 + belly * 0.5, 0.0, 1.0);
         totalEmissiveRadiance *= heat * heat;`
      );
    };

    const wingPack = setRepeat(textures.pack("dragon_wing", { clone: true }), 0.55, 0.55);
    const wing = standardFrom(wingPack, {
      color: new THREE.Color(look.wingTint),
      metalness: 0.04,
      roughness: THREE.MathUtils.clamp(look.roughness + 0.15, 0, 1),
      emissive: new THREE.Color(...look.emissive).multiplyScalar(0.55),
      emissiveIntensity: look.emissiveBase * 0.3,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.94,
    });

    wing.onBeforeCompile = (shader) => {
      shader.fragmentShader = shader.fragmentShader
        .replace(
          "#include <color_fragment>",
          `#include <color_fragment>
           // Finger veins. The sail used to be one tint from root to tip, so
           // the largest surface on the beast had nothing the eye could use
           // to judge its size against.
           float v0 = smoothstep(0.035, 0.0, abs(vUv.x - 0.22));
           float v1 = smoothstep(0.03, 0.0, abs(vUv.x - 0.48));
           float v2 = smoothstep(0.028, 0.0, abs(vUv.x - 0.72));
           float vein = max(v0, max(v1, v2)) * (1.0 - vUv.y);
           diffuseColor.rgb *= 1.0 - vein * 0.42;`
        )
        .replace(
          "#include <lights_fragment_end>",
          `#include <lights_fragment_end>
           #if NUM_DIR_LIGHTS > 0
             // Membrane translucency. A wing spread against a burning sky is lit
             // through as well as on, and without it the largest surface on the
             // beast goes to a flat dark board every time the sun is behind it —
             // which, with a low raking key light and a quarry that circles
             // overhead, is most of the time.
             vec3 sunDir = normalize(directionalLights[0].direction);
             float behind = clamp(-dot(geometryNormal, sunDir), 0.0, 1.0);
             float thinness = mix(0.35, 1.0, abs(dot(geometryNormal, geometryViewDir)));
             reflectedLight.indirectDiffuse +=
               directionalLights[0].color * diffuseColor.rgb * behind * thinness * 2.1;
           #endif`
        );
    };

    const claw = new THREE.MeshStandardMaterial({
      color: 0x14100d,
      metalness: 0.3,
      roughness: 0.35,
    });

    this.materials = { body, wing, claw };
    return this.materials;
  }

  _addHit(name, mesh, multiplier) {
    mesh.userData.hit = { name, multiplier, dragon: this };
    this.hitboxes.push(mesh);
  }

  _build(textures) {
    const { build } = this.spec;
    const { body, wing, claw } = this._mat(textures);
    const girth = build.bodyGirth;
    const detail = build.scale > 9 ? 22 : build.scale > 5 ? 18 : 14;

    const chest = new THREE.Group();
    const torso = limbMesh(latheAlongX(TORSO_PROFILE, detail), body);
    torso.scale.set(1, girth, girth * 0.88);
    chest.add(torso);
    this.root.add(chest);
    this.bones.chest = chest;
    this._addHit("body", torso, 1);

    this._buildKeel(chest, body, build, girth);
    this._buildNeck(chest, body, claw, build, detail);
    this._buildTail(chest, body, build, girth);
    this._buildWings(chest, body, wing, claw, build);
    this._buildLegs(chest, body, claw, girth);

    // Bolts stop at the first bounding sphere they enter, and the torso sphere
    // is wide enough to swallow the skull, so test the prize targets first.
    this.hitboxes.sort((a, b) => b.userData.hit.multiplier - a.userData.hit.multiplier);

    this.root.rotation.y = -Math.PI / 2;
    this.glow = new THREE.PointLight(this.spec.look.glow, this.spec.look.glowIntensity, 52, 1.5);
    this.glow.position.set(0.6, 0, 0);
    this.root.add(this.glow);
  }

  /**
   * Belly scutes, a dorsal keel, and — where the spec asks for them — the
   * spikes and the heavy plates. A smooth lathe from below is a balloon; these
   * are what break that outline into something that casts a dragon-shaped
   * shadow on the ridge.
   */
  _buildKeel(chest, body, build, girth) {
    for (let i = 0; i < 7; i++) {
      const t = i / 6;
      const plate = limbMesh(new THREE.BoxGeometry(0.38, 0.07, (0.72 - t * 0.22) * girth), body);
      plate.position.set(0.85 - t * 2.15, -0.7 * girth, 0);
      plate.rotation.z = 0.18;
      chest.add(plate);
    }

    for (let i = 0; i < 8; i++) {
      const t = i / 7;
      const scute = limbMesh(new THREE.BoxGeometry(0.26, 0.055, 0.2 * girth), body);
      scute.position.set(0.95 - t * 2.55, (0.82 - t * 0.18) * girth, 0);
      scute.rotation.z = -0.35;
      chest.add(scute);
    }

    if (build.spikes) {
      for (let i = 0; i < 7; i++) {
        const t = i / 6;
        const height = 0.2 + Math.sin(t * Math.PI) * 0.34;
        const spike = limbMesh(
          sweep(
            [
              [0, 0, 0],
              [0.02, height * 0.45, 0],
              [-0.04, height, 0],
            ],
            { steps: 6, radial: 5, radius: (u) => 0.055 * (1 - u) + 0.008 }
          ),
          body
        );
        spike.position.set(0.9 - t * 2.5, (0.88 - t * 0.15) * girth, 0);
        chest.add(spike);
      }
    }

    // The tyrant's extra plates. Driven off girth rather than the species
    // name, so anything this wide gets the same armour — which is also how a
    // future heavy reads as one without a special case.
    if (girth > 1.25) {
      for (const [x, y, z, sx, sy, sz] of [
        [0.35, 0.15, 0.62, 0.7, 0.45, 0.22],
        [0.35, 0.15, -0.62, 0.7, 0.45, 0.22],
        [-0.15, 0.35, 0, 0.9, 0.22, 0.7],
        [-0.85, 0.2, 0.5, 0.55, 0.35, 0.18],
        [-0.85, 0.2, -0.5, 0.55, 0.35, 0.18],
      ]) {
        const plate = limbMesh(new THREE.BoxGeometry(sx, sy, sz), body);
        plate.position.set(x, y * girth, z * girth);
        chest.add(plate);
      }
    }
  }

  _buildNeck(chest, body, claw, build, detail) {
    const segments = build.neck > 1.2 ? 3 : 2;
    const segLength = (1.15 * build.neck) / (segments / 2);
    let parent = chest;
    this.bones.neck = [];
    for (let i = 0; i < segments; i++) {
      const g = new THREE.Group();
      g.position.set(i === 0 ? 1.12 : segLength * 0.86, i === 0 ? 0.2 : 0.05, 0);
      const rTop = 0.42 - i * 0.08;
      const rBottom = 0.54 - i * 0.08;
      const seg = limbMesh(
        latheAlongX(
          [
            [0, rBottom],
            [segLength * 0.35, (rBottom + rTop) * 0.52],
            [segLength * 0.85, rTop],
          ],
          Math.max(10, detail - 4)
        ),
        body
      );
      g.add(seg);
      parent.add(g);
      this.bones.neck.push(g);
      this._addHit("neck", seg, 1.6);
      parent = g;
    }

    this._buildHead(parent, body, claw, build, segLength, detail);
  }

  _buildHead(parent, body, claw, build, segLength, detail) {
    const head = new THREE.Group();
    head.position.set(segLength * 0.88, 0.03, 0);
    head.scale.setScalar(build.headSize);

    const skull = limbMesh(skullGeometry(detail), body);
    skull.scale.set(1, 0.92, 0.78);
    head.add(skull);

    const brow = limbMesh(new THREE.BoxGeometry(0.28, 0.1, 0.58), body);
    brow.position.set(0.32, 0.22, 0);
    brow.rotation.z = -0.18;
    head.add(brow);

    for (const side of [-1, 1]) {
      const ridge = limbMesh(
        sweep(
          [
            [0.18, 0.16, 0.16 * side],
            [0.42, 0.26, 0.2 * side],
            [0.62, 0.2, 0.16 * side],
          ],
          { steps: 8, radial: 6, radius: () => 0.045 }
        ),
        body
      );
      head.add(ridge);
    }

    this.jawBone = new THREE.Group();
    this.jawBone.position.set(0.16, -0.12, 0);
    const jaw = limbMesh(jawGeometry(Math.max(10, detail - 4)), body);
    jaw.scale.set(1, 0.55, 0.7);
    jaw.position.y = -0.02;
    this.jawBone.add(jaw);
    for (let i = 0; i < 5; i++) {
      for (const side of [-1, 1]) {
        const tooth = limbMesh(new THREE.ConeGeometry(0.024, 0.12 + (i < 2 ? 0.04 : 0), 5), claw);
        tooth.position.set(0.28 + i * 0.16, 0.04, 0.08 * side);
        tooth.rotation.z = Math.PI;
        this.jawBone.add(tooth);
      }
    }
    head.add(this.jawBone);

    for (let i = 0; i < 4; i++) {
      for (const side of [-1, 1]) {
        const fang = limbMesh(new THREE.ConeGeometry(0.022, 0.1, 4), claw);
        fang.position.set(0.4 + i * 0.16, -0.06, 0.09 * side);
        head.add(fang);
      }
    }

    this.bones.head = head;
    parent.add(head);
    this._addHit("head", skull, 3.0);

    this._buildHorns(head, claw, build);
    this._buildFace(head, body, build);

    this.mouth = new THREE.Object3D();
    this.mouth.position.set(1.18, -0.06, 0);
    head.add(this.mouth);
  }

  /**
   * Horns swept back along a curve, not stood up as cones. A cone on a sphere
   * is a party hat; a horn that rises and then recedes is what the silhouette
   * of every species on the ridge is supposed to be carrying.
   */
  _buildHorns(head, claw, build) {
    const pairs = Math.max(1, Math.round(build.horns / 2));
    for (let p = 0; p < pairs; p++) {
      const back = p / Math.max(1, pairs);
      const length = build.hornLength * (1 - back * 0.32);
      for (const side of [-1, 1]) {
        const horn = limbMesh(
          sweep(
            [
              [0, 0, 0],
              [0.12 * length, 0.4 * length, 0.06 * side],
              [0.28 * length, 0.85 * length, 0.14 * side],
              [0.55 * length, 1.05 * length, 0.1 * side],
              [0.95 * length, 0.95 * length, 0.04 * side],
            ],
            { steps: 10, radial: 6, radius: (t) => (0.07 - p * 0.012) * (1 - t * 0.72) + 0.008 }
          ),
          claw
        );
        horn.position.set(-0.02 - back * 0.24, 0.32 - back * 0.06, (0.16 + back * 0.1) * side);
        head.add(horn);
      }
    }

    // A short crest of frill behind the crown on the longer-horned beasts.
    // Without it the back of the skull is a hemisphere and every species'
    // head reads as the same lump from above.
    if (build.hornLength > 0.6) {
      for (let i = 0; i < 5; i++) {
        const a = -0.7 + (i / 4) * 1.4;
        const frill = limbMesh(new THREE.BoxGeometry(0.06, 0.22, 0.04), this.materials.body);
        frill.position.set(-0.18, 0.28, Math.sin(a) * 0.18);
        frill.rotation.set(a * 0.35, 0, 0.55);
        head.add(frill);
      }
    }
  }

  _buildFace(head, body, build) {
    this.eyes = [];
    for (const side of [-1, 1]) {
      const socket = limbMesh(new THREE.SphereGeometry(0.09, 10, 8), body);
      socket.scale.set(0.85, 0.7, 0.45);
      socket.position.set(0.38, 0.12, 0.22 * side);
      head.add(socket);

      const eye = new THREE.Mesh(
        new THREE.SphereGeometry(0.068, 10, 8),
        new THREE.MeshBasicMaterial({ color: this.spec.look.eye })
      );
      eye.position.set(0.42, 0.12, 0.24 * side);
      head.add(eye);
      this.eyes.push(eye);

      const pupil = new THREE.Mesh(
        new THREE.SphereGeometry(0.028, 8, 6),
        new THREE.MeshBasicMaterial({ color: 0x070403 })
      );
      pupil.position.set(0.475, 0.12, 0.25 * side);
      head.add(pupil);

      const nostril = limbMesh(new THREE.SphereGeometry(0.03, 6, 5), body);
      nostril.scale.set(1.2, 0.6, 0.7);
      nostril.position.set(1.08, 0.02, 0.07 * side);
      head.add(nostril);
    }

    // A dewlap under the jaw on the big-headed, spike-less species — the
    // Sulfurmaw's tell, derived rather than named so the next brood gets one.
    if (!build.spikes && build.headSize > 1.02) {
      const wattle = new THREE.Mesh(
        membraneGeometry(0.22, { slack: 0.5, cols: 8, rows: 4 }),
        this.materials.wing
      );
      wattle.scale.set(0.55, 0.7, 0.55);
      wattle.rotation.z = -1.15;
      wattle.position.set(0.35, -0.18, 0);
      this.jawBone.add(wattle);
    }
  }

  _buildTail(chest, body, build, girth) {
    const count = build.tailSegments;
    let parent = chest;
    let x = -1.78;
    this.bones.tail = [];
    for (let i = 0; i < count; i++) {
      const t = i / count;
      const g = new THREE.Group();
      g.position.set(x, -0.05 * i, 0);
      const r = (0.48 - t * 0.36) * girth;
      const seg = limbMesh(
        latheAlongX(
          [
            [0, r],
            [0.5, r * 0.85],
            [0.95, r * 0.68],
          ],
          10
        ),
        body
      );
      seg.rotation.y = Math.PI;
      g.add(seg);
      if (build.spikes) {
        const spike = limbMesh(
          sweep(
            [
              [0, 0, 0],
              [0.02, 0.16, 0],
              [-0.02, 0.32, 0],
            ],
            { steps: 5, radial: 5, radius: (u) => 0.05 * (1 - u) + 0.006 }
          ),
          body
        );
        spike.position.set(-0.3, r + 0.06, 0);
        g.add(spike);
      }
      parent.add(g);
      this.bones.tail.push(g);
      this._addHit("tail", seg, 0.7);
      parent = g;
      x = -0.92;
    }
    const barb = limbMesh(
      sweep(
        [
          [0, 0, 0],
          [-0.28, 0.04, 0.12],
          [-0.7, 0.02, 0],
          [-0.28, 0.04, -0.12],
          [0, 0, 0],
        ],
        { steps: 10, radial: 6, radius: (t) => 0.08 * Math.sin(t * Math.PI) + 0.012, flatten: 0.45 }
      ),
      this.materials.claw
    );
    barb.position.set(-0.85, 0, 0);
    parent.add(barb);
  }

  /**
   * A wing with a shoulder, an elbow and a wrist, instead of one rigid board
   * hinged at the chest. The first version rotated the whole sail as a unit,
   * which is why a flap looked like a door swinging: the tip moved, but the
   * wing never changed shape.
   */
  _buildWings(chest, body, wing, claw, build) {
    const span = build.wingSpan;
    this.bones.wings = [];
    this.bones.elbows = [];
    this.bones.wrists = [];
    for (const side of [-1, 1]) {
      const shoulder = new THREE.Group();
      shoulder.position.set(0.22, 0.5 * build.bodyGirth, 0.52 * side);
      chest.add(shoulder);

      const mass = limbMesh(new THREE.SphereGeometry(0.26, 12, 10), body);
      mass.scale.set(1.15, 0.82, 0.95);
      shoulder.add(mass);

      const upperLen = 2.35 * span;
      const upper = limbMesh(new THREE.CylinderGeometry(0.075, 0.155, upperLen, 8), body);
      upper.rotation.x = Math.PI / 2;
      upper.position.set(-0.08, 0.04, upperLen * 0.5 * side);
      shoulder.add(upper);

      const elbow = new THREE.Group();
      elbow.position.set(-0.1, 0.02, upperLen * side);
      shoulder.add(elbow);
      elbow.add(limbMesh(new THREE.SphereGeometry(0.13, 10, 8), body));

      const foreLen = 2.05 * span;
      const forearm = limbMesh(new THREE.CylinderGeometry(0.045, 0.085, foreLen, 7), body);
      forearm.rotation.x = Math.PI / 2;
      forearm.position.set(-0.18, -0.06, foreLen * 0.5 * side);
      elbow.add(forearm);

      const wrist = new THREE.Group();
      wrist.position.set(-0.32, -0.14, foreLen * side);
      elbow.add(wrist);
      wrist.add(limbMesh(new THREE.SphereGeometry(0.08, 8, 6), body));

      const membrane = new THREE.Mesh(membraneGeometry(span), wing);
      membrane.castShadow = true;
      membrane.scale.z = side;
      membrane.position.set(-0.2, -0.08, 0.08 * side);
      elbow.add(membrane);
      this._addHit("wing", membrane, 0.55);

      const innerSail = new THREE.Mesh(membraneGeometry(span * 0.42, { slack: 0.22, cols: 12, rows: 5 }), wing);
      innerSail.castShadow = true;
      innerSail.scale.z = side;
      innerSail.position.set(-0.05, -0.02, 0.04 * side);
      shoulder.add(innerSail);

      for (const [reach, drop, thick] of [
        [1.95, -0.15, 0.05],
        [1.25, -0.85, 0.042],
        [0.7, -0.95, 0.034],
      ]) {
        const len = Math.hypot(reach * span, drop);
        const finger = limbMesh(new THREE.CylinderGeometry(thick * 0.55, thick, len, 6), body);
        finger.position.set(drop * 0.45, -0.04, reach * span * 0.5 * side);
        finger.rotation.x = Math.PI / 2;
        finger.rotation.y = Math.atan2(drop, reach * span) * -side;
        wrist.add(finger);
      }

      const hook = limbMesh(new THREE.ConeGeometry(0.055, 0.38, 5), claw);
      hook.position.set(0.06, 0.02, 2.05 * span * side);
      hook.rotation.z = -Math.PI / 2.5;
      wrist.add(hook);

      shoulder.userData.side = side;
      elbow.userData.side = side;
      wrist.userData.side = side;
      this.bones.wings.push(shoulder);
      this.bones.elbows.push(elbow);
      this.bones.wrists.push(wrist);
    }
  }

  _buildLegs(chest, body, claw, girth) {
    this.bones.legs = [];
    this.bones.knees = [];
    for (const [x, z, size] of [
      [0.72, 0.42, 1.0],
      [0.72, -0.42, 1.0],
      [-1.25, 0.46, 1.25],
      [-1.25, -0.46, 1.25],
    ]) {
      const hip = new THREE.Group();
      hip.position.set(x, -0.42 * girth, z * girth);
      const thigh = limbMesh(new THREE.CylinderGeometry(0.14 * size, 0.21 * size, 0.62 * size, 8), body);
      thigh.position.y = -0.28 * size;
      hip.add(thigh);

      const knee = new THREE.Group();
      knee.position.set(0, -0.58 * size, 0.02 * size * Math.sign(z));
      hip.add(knee);
      const shin = limbMesh(new THREE.CylinderGeometry(0.09 * size, 0.13 * size, 0.55 * size, 8), body);
      shin.position.set(0, -0.26 * size, -0.08 * size * Math.sign(z));
      knee.add(shin);

      const foot = limbMesh(new THREE.BoxGeometry(0.24 * size, 0.09 * size, 0.32 * size), body);
      foot.position.set(0, -0.54 * size, -0.16 * size * Math.sign(z));
      knee.add(foot);
      for (let i = -1; i <= 1; i++) {
        const talon = limbMesh(new THREE.ConeGeometry(0.045 * size, 0.24 * size, 5), claw);
        talon.position.set(0.08 * size * i, -0.56 * size, -0.34 * size * Math.sign(z));
        talon.rotation.x = (Math.PI / 2) * Math.sign(z) * -1;
        knee.add(talon);
      }
      chest.add(hip);
      this.bones.legs.push(hip);
      this.bones.knees.push(knee);
    }
  }

  mouthWorld(target = new THREE.Vector3()) {
    this.mouth.getWorldPosition(target);
    return target;
  }

  /** The skull's forward axis is local +X, not the +Z that getWorldDirection reports. */
  headForward(target = new THREE.Vector3()) {
    this.bones.head.getWorldQuaternion(_q);
    return target.set(1, 0, 0).applyQuaternion(_q).normalize();
  }

  /** Armor soaks a flat fraction everywhere except the skull. */
  takeDamage(amount, part = "body") {
    if (!this.alive) return 0;
    const soak = part === "head" ? this.armor * 0.25 : this.armor;
    const dealt = Math.max(1, amount * (1 - soak));
    this.hp = Math.max(0, this.hp - dealt);
    this.pain = 0.55;
    if (this.hp <= 0) this.alive = false;
    return dealt;
  }

  get hpFraction() {
    return this.hp / this.maxHp;
  }

  /**
   * @param {number} dt
   * @param {{ flap?: number, flapRate?: number, jaw?: number, pitch?: number,
   *   roll?: number, lash?: number, neck?: number, lookAt?: number,
   *   lookPitch?: number, grounded?: boolean, charge?: number, dead?: boolean,
   *   roar?: number }} pose
   */
  update(dt, pose) {
    this.anim += dt;
    const look = this.spec.look;
    const flapAmount = pose.flap ?? 1;
    const rate = this.flapRate * (pose.flapRate ?? 1);
    const phase = this.anim * rate;
    // Downstroke is the power stroke: the wing is extended and travels far.
    // Upstroke folds the elbow so the return does not fight the air. A single
    // sine on a rigid board is what made every flap look like a door.
    const goingUp = Math.cos(phase) > 0;
    const beat = Math.sin(phase);
    const glide = THREE.MathUtils.clamp(1 - flapAmount, 0, 1);
    const fold = THREE.MathUtils.lerp(goingUp ? 0.82 : 0.1, 0.08, glide) * Math.max(0.15, flapAmount);
    const bank = pose.roll ?? 0;
    const roar = pose.roar ?? 0;

    this.bones.wings.forEach((w, i) => {
      const side = w.userData.side;
      const inner = Math.max(0, bank * side);
      const dihedral = THREE.MathUtils.lerp(beat * 0.52 * flapAmount - 0.04, 0.14, glide);
      w.rotation.x = (dihedral - bank * 0.35) * side;
      w.rotation.y = beat * 0.06 * flapAmount * side;
      w.rotation.z = THREE.MathUtils.damp(w.rotation.z, roar * -0.08, 6, dt);

      const elbow = this.bones.elbows[i];
      const wrist = this.bones.wrists[i];
      // Fold the forearm back toward the body and slightly down. The inner
      // wing of a bank folds more, which is what makes a turn look like a
      // turn rather than a roll of the whole mesh.
      elbow.rotation.y = (-fold * 0.7 - inner * 0.45) * side;
      elbow.rotation.x = (fold * 0.28 + inner * 0.15) * side;
      wrist.rotation.y = -fold * 0.35 * side;
      wrist.rotation.x = beat * 0.12 * flapAmount * side;
    });

    const lookYaw = pose.lookAt ?? 0;
    const lookPitch = pose.lookPitch ?? 0;
    this.bones.neck.forEach((seg, i) => {
      const weight = (i + 1) / this.bones.neck.length;
      const idle = Math.sin(this.anim * 1.4 + i * 0.4) * 0.05;
      // Most of the look lives on the skull. Putting it on every neck bone
      // swung the mouth by metres on a fast strafe, and the flame — which is
      // aimed from the mouth — spent the pass pointing where the hunter was.
      seg.rotation.z = idle + (pose.neck ?? 0) * weight * 0.35 + lookPitch * weight * 0.16 + roar * 0.12;
      seg.rotation.y = THREE.MathUtils.damp(seg.rotation.y, lookYaw * 0.16 * weight, 4, dt);
    });
    this.bones.head.rotation.z = THREE.MathUtils.damp(
      this.bones.head.rotation.z,
      lookPitch * 0.5 + roar * 0.18,
      5,
      dt
    );
    this.bones.head.rotation.y = THREE.MathUtils.damp(this.bones.head.rotation.y, lookYaw * 0.42, 5, dt);

    const lash = pose.lash ?? 1;
    this.bones.tail.forEach((seg, i) => {
      const t = (i + 1) / this.bones.tail.length;
      // Counter-bank: the tail is the rudder, so it goes the other way to the
      // roll. Without that the whole animal banks as a rigid toy.
      seg.rotation.y = Math.sin(this.anim * 2.1 + i * 0.7) * 0.16 * lash - bank * 0.35 * t;
      seg.rotation.z = Math.cos(this.anim * 1.6 + i) * 0.05 + (pose.dead ? 0.15 * t : 0);
    });

    this.bones.legs.forEach((leg, i) => {
      const knee = this.bones.knees[i];
      if (pose.grounded) {
        const stride = Math.sin(this.anim * 2.4 + i * 1.6) * 0.35;
        leg.rotation.x = THREE.MathUtils.damp(leg.rotation.x, stride, 6, dt);
        knee.rotation.x = THREE.MathUtils.damp(knee.rotation.x, Math.max(0, -stride) * 0.6, 6, dt);
      } else {
        const tuck = 0.72 + Math.sin(this.anim * 1.1 + i) * 0.04;
        leg.rotation.x = THREE.MathUtils.damp(leg.rotation.x, tuck, 3.2, dt);
        knee.rotation.x = THREE.MathUtils.damp(knee.rotation.x, 0.85, 3.2, dt);
      }
    });

    // The chest heaves on the downstroke and swells with a charge. A torso
    // that never changes size is a statue the wings happen to be attached to.
    const heave = 1 + Math.max(0, -beat) * 0.025 * flapAmount + (pose.charge ?? 0) * 0.03;
    this.bones.chest.scale.set(heave, 1 + (pose.charge ?? 0) * 0.02, heave);

    this.pain = Math.max(0, this.pain - dt);
    this.jaw = THREE.MathUtils.damp(this.jaw, roar > 0.05 ? 0.85 : pose.jaw ?? 0.05, 8, dt);
    this.jawBone.rotation.z = this.jaw;

    const pulse = Math.sin(this.anim * 2.2) * 0.22 + 1;
    const charge = pose.charge ?? 0;
    this.materials.body.emissiveIntensity = look.emissiveBase * pulse + this.pain * 2 + charge * 3;
    this.materials.wing.emissiveIntensity = look.emissiveBase * 0.3 * pulse + charge;
    if (this.glow) this.glow.intensity = look.glowIntensity * pulse * (1 + charge * 1.5);

    if (pose.dead) {
      this.root.rotation.x = THREE.MathUtils.damp(this.root.rotation.x, 1.05, 2.2, dt);
      this.root.rotation.z = THREE.MathUtils.damp(this.root.rotation.z, 0.7, 1.6, dt);
      this.bones.wings.forEach((w, i) => {
        const side = w.userData.side;
        w.rotation.x = THREE.MathUtils.damp(w.rotation.x, 0.95 * side, 2.4, dt);
        this.bones.elbows[i].rotation.y = THREE.MathUtils.damp(
          this.bones.elbows[i].rotation.y,
          -1.1 * side,
          2.4,
          dt
        );
      });
      this.bones.neck.forEach((seg) => {
        seg.rotation.z = THREE.MathUtils.damp(seg.rotation.z, -0.35, 2, dt);
      });
    } else {
      this.root.rotation.x = THREE.MathUtils.damp(this.root.rotation.x, pose.pitch ?? 0, 4, dt);
      this.root.rotation.z = THREE.MathUtils.damp(this.root.rotation.z, pose.roll ?? 0, 3, dt);
    }
  }

  dispose() {
    this.root.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
    });
    for (const mat of Object.values(this.materials)) mat.dispose();
  }
}
