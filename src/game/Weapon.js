import * as THREE from "three";
import { CONFIG } from "./config.js";
import { standardFrom, setRepeat } from "./assets.js";

const FORWARD = new THREE.Vector3(0, 0, -1);
const _dir = new THREE.Vector3();

/**
 * Sweeps a tapered, optionally flattened tube along a curve.
 *
 * Three's `TubeGeometry` holds one radius from end to end, and a limb of
 * constant thickness is exactly what made the old prod read as a fallen branch
 * laid across the screen. A bow limb is a leaf spring: wide in the plane it
 * does not bend in, thin in the plane it does, tapering to nothing at the tip.
 */
function sweep(points, { steps = 22, radial = 10, radius, flatten = 1, caps = true }) {
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
      position.push(
        c.x + N.x * ca + B.x * sa,
        c.y + N.y * ca + B.y * sa,
        c.z + N.z * ca + B.z * sa
      );
      uv.push(j / radial, t * 3);
    }
  }
  for (let i = 0; i < steps; i++) {
    for (let j = 0; j < radial; j++) {
      const a = i * (radial + 1) + j;
      const b = a + radial + 1;
      index.push(a, b, a + 1, b, b + 1, a + 1);
    }
  }
  // Both ends get a fan, otherwise the tube is open and you can see straight
  // down the inside of a forearm the moment it nears the edge of the frame.
  if (caps) {
    for (const end of [0, 1]) {
      const c = curve.getPointAt(end);
      const centre = position.length / 3;
      position.push(c.x, c.y, c.z);
      uv.push(0.5, end * 3);
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
 * Extrudes a side profile across the weapon's width.
 *
 * Authoring the stock as a silhouette is the whole point of this helper: the
 * shape a firearm is recognised by lives in its outline, and no stack of axis
 * aligned boxes reproduces a comb, a wrist and a butt. The bevel matters as
 * much — a hard ninety-degree edge catches no light along it and reads as bare
 * geometry however good the material wrapped around it.
 */
function profileSolid(outline, width, bevel = 0.005) {
  const shape = new THREE.Shape();
  shape.moveTo(outline[0][0], outline[0][1]);
  for (let i = 1; i < outline.length; i++) shape.lineTo(outline[i][0], outline[i][1]);
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: Math.max(width - bevel * 2, 0.001),
    bevelEnabled: true,
    bevelThickness: bevel,
    bevelSize: bevel,
    bevelSegments: 2,
    curveSegments: 4,
  });
  // Shape x runs along the weapon and shape y is its height, so the extrusion
  // axis has to become the width.
  geo.rotateY(-Math.PI / 2);
  geo.computeBoundingBox();
  const bb = geo.boundingBox;
  geo.translate(-(bb.min.x + bb.max.x) / 2, 0, 0);
  return geo;
}

/** Lathes a profile of `[radius, distance forward of the breech]` pairs. */
function lathe(profile, segments = 20) {
  const points = profile.map(([r, l]) => new THREE.Vector2(Math.max(r, 1e-4), l));
  const geo = new THREE.LatheGeometry(points, segments);
  // The lathe spins around +Y; the weapon points down -Z.
  geo.rotateX(-Math.PI / 2);
  return geo;
}

function roundedRect(length, height, radius, steps = 3) {
  const r = Math.min(radius, length / 2, height / 2);
  const pts = [];
  const corners = [
    [length / 2 - r, height / 2 - r, 0],
    [-length / 2 + r, height / 2 - r, Math.PI / 2],
    [-length / 2 + r, -height / 2 + r, Math.PI],
    [length / 2 - r, -height / 2 + r, -Math.PI / 2],
  ];
  for (const [cx, cy, start] of corners) {
    for (let i = 0; i <= steps; i++) {
      const a = start + (i / steps) * (Math.PI / 2);
      pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
    }
  }
  return pts;
}

/** A block with rounded edges, sized along the weapon's own axes. */
function roundedBlock(length, height, width, radius = 0.006) {
  return profileSolid(roundedRect(length, height, radius), width, Math.min(0.004, width / 3));
}

// Authored at true scale in metres, muzzle down -Z, and posed once at the end.
// Anything else and the proportions drift every time a part gets nudged.
//
// The bolt channel height is the load-bearing number here: the string, the
// limb tips and the loaded bolt all have to sit on the same line, or the
// weapon is drawn shooting past its own string.
const CHANNEL_Y = 0.048;
const LIMB_ROOT_Z = -0.5;
const STRING_LATCH_Z = -0.165;
const STRING_REST_Z = -0.545;
const MUZZLE_Z = -0.74;
const LIMB_TIP = [0.335, CHANNEL_Y - 0.004, -0.452];
const SIGHT_Y = 0.084;
// Centres of the two handles, and how far the rear one leans back.
const GRIP = [0, -0.108, 0.15];
const FOREGRIP = [0, -0.092, -0.452];
const GRIP_RAKE = 0.34;

export class Weapon {
  constructor(viewmodel, textures) {
    this.viewmodel = viewmodel;
    this.group = new THREE.Group();
    this.bolts = CONFIG.weapon.bolts;
    this.max = CONFIG.weapon.bolts;
    this.cooldown = 0;
    this.reloadT = 0;
    this.recoil = 0;
    this.kick = 0;
    this.dry = 0;
    // 1 while the string is back on the latch, which is also the only state the
    // weapon can be fired from.
    this.draw = 1;
    this.crankSpin = 0;
    this._sway = new THREE.Vector2();
    this._swayTarget = new THREE.Vector2();
    // Held at the right hip with the muzzle canted in toward the centre of the
    // frame. Swept against the ridge rather than guessed: the weapon is a metre
    // long, so a few centimetres nearer the eye is the difference between a
    // weapon in shot and a plank across the bottom third of it.
    this._restPos = new THREE.Vector3(0.125, -0.15, -0.78);
    this._restRot = new THREE.Euler(0.06, 0.4, 0.05);
    this._pos = new THREE.Vector3();
    this._muzzle = new THREE.Vector3();

    this._materials(textures);
    this._build();
    this.group.position.copy(this._restPos);
    this.group.rotation.copy(this._restRot);
    // The scale belongs on the weapon, not on the rig above it: putting it on
    // the parent shrinks this offset along with the model, so every attempt to
    // push the butt away from the eye was cancelled by the shrink.
    this.group.scale.setScalar(CONFIG.viewmodel.scale);
    // After the build, not before it. Running this on an empty group is what
    // left all twenty-odd parts of the weapon frustum culled.
    this.group.traverse((o) => {
      o.frustumCulled = false;
      o.castShadow = false;
      o.receiveShadow = false;
    });
    viewmodel.root.add(this.group);
  }

  get reloading() {
    return this.reloadT > 0;
  }

  /** 0 to 1 across a reload, for the HUD to draw. */
  get reloadProgress() {
    return this.reloadT > 0 ? 1 - this.reloadT / CONFIG.weapon.reload : 1;
  }

  get empty() {
    return this.bolts <= 0;
  }

  _materials(textures) {
    const pack = (stem, u, v) => setRepeat(textures.pack(stem, { clone: true }), u, v);
    this.mats = {
      iron: standardFrom(pack("weapon_metal", 3, 1.4), {
        color: 0x6e6a66,
        metalness: 0.92,
        roughness: 0.42,
        envMapIntensity: 1.1,
      }),
      steel: standardFrom(pack("weapon_metal", 1.6, 1.6), {
        color: 0x8d8a88,
        metalness: 0.96,
        roughness: 0.28,
        envMapIntensity: 1.35,
      }),
      // Oil-dark walnut. The first pass used a mid tan, and with the key light
      // sitting on the broad side of the stock that turned the largest flat
      // face on the weapon into the brightest thing on the screen — brighter
      // than the lava it was standing next to.
      wood: standardFrom(pack("weapon_wood", 1, 3.4), {
        color: 0x4a3729,
        metalness: 0.02,
        roughness: 0.8,
        envMapIntensity: 0.3,
      }),
      leather: standardFrom(pack("leather_glove", 2.4, 2.4), {
        color: 0x463a2f,
        metalness: 0,
        roughness: 0.82,
        envMapIntensity: 0.24,
      }),
      glove: standardFrom(pack("leather_glove", 1.6, 1.6), {
        color: 0x372c24,
        metalness: 0,
        roughness: 0.84,
        envMapIntensity: 0.24,
      }),
      brass: new THREE.MeshStandardMaterial({
        color: 0x9a7434,
        metalness: 0.9,
        roughness: 0.34,
        envMapIntensity: 1.2,
      }),
      cord: new THREE.MeshStandardMaterial({ color: 0xb3a58c, metalness: 0, roughness: 0.64 }),
      blued: new THREE.MeshStandardMaterial({
        color: 0x2b2723,
        metalness: 0.88,
        roughness: 0.36,
        envMapIntensity: 0.9,
      }),
    };
  }

  /**
   * A handle: a leather-wrapped column with a swell at the bottom so the hand
   * has something to stop against, raked back from vertical by `rake`.
   */
  _grip([x, y, z], radius, length, rake) {
    const m = this.mats;
    const pivot = new THREE.Group();
    pivot.position.set(x, y, z);
    pivot.rotation.x = rake;
    this.group.add(pivot);
    this._add(
      new THREE.CylinderGeometry(radius * 1.06, radius * 0.92, length, 12),
      m.wood,
      null,
      null,
      pivot
    );
    this._add(
      new THREE.CylinderGeometry(radius * 1.1, radius * 1.1, length * 0.66, 12),
      m.leather,
      [0, -length * 0.05, 0],
      null,
      pivot
    );
    // Butt swell and the collar where it meets the receiver.
    this._add(new THREE.SphereGeometry(radius * 1.25, 10, 7), m.leather, [0, -length / 2, 0], null, pivot);
    this._add(
      new THREE.CylinderGeometry(radius * 1.35, radius * 1.15, 0.014, 12),
      m.iron,
      [0, length / 2 - 0.004, 0],
      null,
      pivot
    );
    return pivot;
  }

  _add(geo, mat, position, rotation, parent = this.group) {
    const mesh = new THREE.Mesh(geo, mat);
    if (position) mesh.position.set(...position);
    if (rotation) mesh.rotation.set(...rotation);
    parent.add(mesh);
    return mesh;
  }

  _build() {
    this._buildStock();
    this._buildBarrel();
    this._buildLimbs();
    this._buildString();
    this._buildLock();
    this._buildSights();
    this._buildWindlass();
    this._buildBolt();
    this._buildArms();
  }

  _buildStock() {
    const m = this.mats;
    // Side profile, front of the receiver back to the butt. The dip behind the
    // trigger is the wrist, the rise behind that the comb.
    const stock = [
      [-0.34, 0.044],
      [-0.02, 0.05],
      [0.06, 0.078],
      [0.2, 0.072],
      [0.29, 0.05],
      [0.3, -0.062],
      [0.24, -0.076],
      [0.16, -0.07],
      [0.11, -0.038],
      [0.05, -0.048],
      [-0.02, -0.052],
      [-0.34, -0.046],
    ];
    this._add(profileSolid(stock, 0.07), m.wood);

    // Iron sideplates. The receiver is the part carrying the limb load, so
    // banding it is both how it would be built and what keeps the middle of
    // the weapon from reading as one undifferentiated block of timber.
    this._add(
      profileSolid(
        [
          [-0.35, 0.05],
          [-0.02, 0.056],
          [-0.02, -0.056],
          [-0.35, -0.05],
        ],
        0.076
      ),
      m.iron
    );

    // Butt plate, with a band across it. The broad side of the stock is the
    // biggest unbroken face on the weapon and the one nearest the eye, so it
    // needs something on it or it reads as a plank however dark it is.
    this._add(roundedBlock(0.016, 0.118, 0.066, 0.012), m.blued, [0, -0.006, 0.303]);
    this._add(roundedBlock(0.03, 0.13, 0.072, 0.01), m.iron, [0, -0.004, 0.28]);
    for (const side of [-1, 1]) {
      // Raised cheek panel, inset from the edges so it casts an edge of its own.
      this._add(roundedBlock(0.13, 0.062, 0.006, 0.014), m.wood, [side * 0.036, 0.026, 0.19]);
      // Sling swivel, and a wear plate under the wrist.
      this._add(
        new THREE.TorusGeometry(0.011, 0.003, 5, 10),
        m.iron,
        [side * 0.033, -0.055, 0.235],
        [0, Math.PI / 2, 0]
      );
    }

    // Forestock under the barrel, tapering as it runs out.
    this._add(
      profileSolid(
        [
          [-0.62, 0.012],
          [-0.34, 0.028],
          [-0.34, -0.042],
          [-0.6, -0.03],
        ],
        0.058
      ),
      m.wood
    );

    // Leather bindings. Small repeated fittings are what give the eye
    // something to judge the weapon's size against.
    for (const [z, r] of [
      [-0.4, 0.036],
      [-0.5, 0.03],
      [-0.575, 0.024],
    ]) {
      this._add(new THREE.TorusGeometry(r, 0.0075, 6, 14), m.leather, [0, -0.008, z], [Math.PI / 2, 0, 0]);
    }

    this._add(roundedBlock(0.14, 0.015, 0.05, 0.007), m.leather, [0, 0.08, 0.13]);

    // A pistol grip below the receiver and a foregrip under the barrel.
    //
    // These exist because the hands need something a hand can actually close
    // around. The stock is seventy millimetres across at the wrist and a
    // hundred and twenty deep, so a hand wrapped around it had half of each
    // finger buried inside the timber; the only fingers that showed were the
    // slivers poking out the far side.
    this.grip = this._grip(GRIP, 0.023, 0.125, GRIP_RAKE);
    this.foregrip = this._grip(FOREGRIP, 0.0205, 0.105, -0.12);

    const rivet = new THREE.SphereGeometry(0.0045, 6, 5);
    for (const z of [-0.3, -0.22, -0.14, -0.06]) {
      for (const side of [-1, 1]) {
        this._add(rivet, m.brass, [side * 0.039, 0.024, z]);
        this._add(rivet, m.brass, [side * 0.039, -0.026, z]);
      }
    }
  }

  _buildBarrel() {
    const m = this.mats;
    // Breech ring, a long shallow taper, then a stepped muzzle crown. The
    // steps are the point: a plain cylinder offers no length cues at all.
    this._add(
      lathe([
        [0.0, 0.3],
        [0.034, 0.3],
        [0.034, 0.322],
        [0.027, 0.33],
        [0.027, 0.52],
        [0.024, 0.55],
        [0.024, 0.695],
        [0.029, 0.7],
        [0.029, 0.726],
        [0.022, 0.74],
        [0.013, 0.74],
        [0.0, 0.733],
      ]),
      m.iron
    );

    // The bolt rides in a channel between two rails.
    for (const side of [-1, 1]) {
      this._add(roundedBlock(0.42, 0.014, 0.009, 0.003), m.blued, [side * 0.015, CHANNEL_Y, -0.48]);
    }
    this._add(roundedBlock(0.44, 0.008, 0.03, 0.003), m.blued, [0, CHANNEL_Y - 0.008, -0.47]);

    // Vent slots down the shroud, cut in rather than drawn on.
    for (let i = 0; i < 4; i++) {
      for (const side of [-1, 1]) {
        this._add(roundedBlock(0.034, 0.012, 0.006, 0.005), m.blued, [side * 0.028, 0.002, -0.4 - i * 0.06]);
      }
    }
  }

  _buildLimbs() {
    const m = this.mats;
    this._add(roundedBlock(0.07, 0.05, 0.1, 0.01), m.iron, [0, CHANNEL_Y - 0.012, LIMB_ROOT_Z]);

    this.limbs = [];
    for (const side of [-1, 1]) {
      // Out, forward, then the recurve turning the tip back toward the shooter.
      const path = [
        [side * 0.03, LIMB_TIP[1] + 0.004, LIMB_ROOT_Z],
        [side * 0.12, LIMB_TIP[1] + 0.003, LIMB_ROOT_Z - 0.03],
        [side * 0.22, LIMB_TIP[1] + 0.001, LIMB_ROOT_Z - 0.045],
        [side * 0.295, LIMB_TIP[1] - 0.001, LIMB_ROOT_Z - 0.032],
        [side * LIMB_TIP[0], LIMB_TIP[1], LIMB_TIP[2]],
      ];
      this.limbs.push(
        this._add(
          sweep(path, {
            steps: 24,
            radial: 10,
            // Thick at the socket, next to nothing at the tip.
            radius: (t) => 0.0245 * (1 - t) ** 0.75 + 0.0055,
            // Flattened across the bending plane, like the spring it is.
            flatten: 0.42,
          }),
          m.steel
        )
      );

      this._add(
        new THREE.TorusGeometry(0.012, 0.0045, 6, 12),
        m.blued,
        [side * (LIMB_TIP[0] - 0.008), LIMB_TIP[1], LIMB_TIP[2] + 0.006],
        [0, side * 0.6, Math.PI / 2]
      );
      this._add(
        new THREE.TorusGeometry(0.022, 0.006, 6, 12),
        m.leather,
        [side * 0.07, LIMB_TIP[1] + 0.003, LIMB_ROOT_Z - 0.016],
        [0, Math.PI / 2, 0]
      );
    }
  }

  /**
   * Two straight runs of cord from the limb tips to a shared centre, plus the
   * serving in the middle. Keeping them as aimed, scaled cylinders means the
   * draw animates by moving one point — and the string is the only part of a
   * crossbow whose motion the eye actually follows.
   */
  _buildString() {
    // A unit cylinder along -Z, so scale.z is its length.
    const geo = new THREE.CylinderGeometry(0.0028, 0.0028, 1, 5, 1, true);
    geo.rotateX(Math.PI / 2);
    geo.translate(0, 0, -0.5);
    this.stringSides = [];
    for (const side of [-1, 1]) {
      const pivot = new THREE.Group();
      pivot.position.set(side * LIMB_TIP[0], LIMB_TIP[1], LIMB_TIP[2]);
      this.group.add(pivot);
      const mesh = new THREE.Mesh(geo, this.mats.cord);
      pivot.add(mesh);
      this.stringSides.push({ pivot, mesh });
    }
    this.serving = this._add(
      new THREE.CylinderGeometry(0.005, 0.005, 0.05, 6),
      this.mats.leather,
      [0, LIMB_TIP[1], STRING_LATCH_Z],
      [0, 0, Math.PI / 2]
    );
  }

  _buildLock() {
    const m = this.mats;
    // Trigger guard: a bow under the wrist, not a ring floating in the air.
    this._add(
      new THREE.TorusGeometry(0.032, 0.0055, 6, 16, Math.PI * 1.15),
      m.blued,
      [0, -0.052, 0.055],
      [0, Math.PI / 2, -0.45]
    );
    this._add(roundedBlock(0.012, 0.038, 0.01, 0.005), m.steel, [0, -0.05, 0.052], [0, 0, 0.22]);
    // Lock housing and the claw the string latches into.
    this._add(roundedBlock(0.07, 0.03, 0.05, 0.008), m.iron, [0, CHANNEL_Y - 0.016, STRING_LATCH_Z]);
    this._add(roundedBlock(0.02, 0.022, 0.038, 0.005), m.steel, [0, CHANNEL_Y + 0.004, STRING_LATCH_Z - 0.008]);
  }

  _buildSights() {
    const m = this.mats;
    // Rear aperture, carried on its own post. The old one was a torus hanging
    // in mid air above the receiver, attached to nothing.
    this._add(roundedBlock(0.03, 0.014, 0.03, 0.005), m.blued, [0, 0.056, -0.03]);
    this._add(roundedBlock(0.016, 0.04, 0.014, 0.004), m.blued, [0, SIGHT_Y - 0.024, -0.03]);
    this._add(new THREE.TorusGeometry(0.016, 0.0035, 6, 14), m.blued, [0, SIGHT_Y, -0.03]);

    // Front blade with a brass bead, the one part of the sight picture that
    // has to stay findable at dusk. Both posts start above the bolt's path.
    this._add(roundedBlock(0.01, 0.026, 0.008, 0.003), m.blued, [0, SIGHT_Y - 0.019, -0.66]);
    this._add(new THREE.SphereGeometry(0.0055, 8, 6), m.brass, [0, SIGHT_Y - 0.002, -0.66]);
  }

  _buildWindlass() {
    const m = this.mats;
    this.crank = new THREE.Group();
    this.crank.position.set(0.044, -0.012, 0.09);
    this.group.add(this.crank);
    this._add(new THREE.CylinderGeometry(0.03, 0.03, 0.008, 14), m.iron, null, [0, 0, Math.PI / 2], this.crank);
    // Cranking arm and handle, offset so the rotation is legible.
    this._add(roundedBlock(0.048, 0.012, 0.008, 0.004), m.iron, [0, 0.018, 0.006], [0, 0, Math.PI / 2], this.crank);
    this._add(
      new THREE.CylinderGeometry(0.007, 0.007, 0.03, 8),
      m.leather,
      [0, 0.036, 0.018],
      [0, 0, Math.PI / 2],
      this.crank
    );
    // Six spokes rather than a ring of ratchet teeth. The teeth were the right
    // idea mechanically and completely wrong on screen: ten little blocks
    // around a drum read as a coiled spring hanging off the receiver.
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI;
      this._add(
        roundedBlock(0.05, 0.006, 0.005, 0.002),
        m.steel,
        null,
        [a, Math.PI / 2, 0],
        this.crank
      );
    }
    // Pawl, and the cable the drum winds, running forward along the receiver.
    this._add(roundedBlock(0.018, 0.006, 0.005, 0.002), m.steel, [0.002, 0.032, -0.006], null, this.crank);
    this._add(new THREE.CylinderGeometry(0.0035, 0.0035, 0.24, 5), m.cord, [0.04, -0.012, -0.04], [Math.PI / 2, 0, 0]);
  }

  _buildBolt() {
    const m = this.mats;
    this.bolt = new THREE.Group();
    this.bolt.position.set(0, CHANNEL_Y, 0);
    this.group.add(this.bolt);
    this._add(
      new THREE.CylinderGeometry(0.0085, 0.0095, 0.5, 8),
      m.wood,
      [0, 0, -0.44],
      [Math.PI / 2, 0, 0],
      this.bolt
    );
    // Broadhead: two crossed blades read as a hunting head from any angle,
    // where a plain cone reads as a pencil.
    const head = lathe(
      [
        [0.0, 0.0],
        [0.019, 0.045],
        [0.014, 0.055],
        [0.0, 0.062],
      ],
      4
    );
    this._add(head, m.steel, [0, 0, -0.688], null, this.bolt);
    this._add(head, m.steel, [0, 0, -0.688], [0, 0, Math.PI / 4], this.bolt);
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2;
      this._add(
        new THREE.PlaneGeometry(0.05, 0.022),
        m.leather,
        [Math.cos(a) * 0.012, Math.sin(a) * 0.012, -0.225],
        [0, Math.PI / 2, a],
        this.bolt
      );
    }

    // Two spare bolts strapped flat to the off side of the stock. Three evenly
    // spaced ones stood off the wood far enough to read as organ pipes.
    for (let i = 0; i < 2; i++) {
      this._add(
        new THREE.CylinderGeometry(0.0075, 0.0075, 0.19, 6),
        m.wood,
        [-0.041, -0.008 + i * 0.017, 0.055 + i * 0.012],
        [Math.PI / 2, 0, 0.05]
      );
    }
    for (const z of [-0.015, 0.115]) {
      this._add(roundedBlock(0.012, 0.05, 0.012, 0.005), m.leather, [-0.041, 0.0, z]);
    }
  }

  /**
   * Hands and forearms. Without arms running out of frame the gloves read as
   * two blocks floating beside the weapon, which is precisely what they were:
   * the old pair had no thumb, no wrist and nothing behind them.
   */
  _buildArms() {
    this.hands = new THREE.Group();
    this.group.add(this.hands);

    // Rear hand around the pistol grip, index finger reaching the trigger.
    const rear = this._hand(0.026, 1, { trigger: [0, -0.052, 0.056] });
    rear.position.set(GRIP[0], GRIP[1] + 0.014, GRIP[2] - 0.006);
    // -90 degrees stands the hand's grip axis upright; the rake matches the
    // handle it is closed around.
    rear.rotation.set(-Math.PI / 2 + GRIP_RAKE, 0, 0);

    // Front hand under the barrel, taking the weapon's weight.
    const front = this._hand(0.023, -1);
    front.position.set(FOREGRIP[0], FOREGRIP[1] + 0.01, FOREGRIP[2] + 0.004);
    front.rotation.set(-Math.PI / 2 - 0.12, 0, 0);

    // The arms run back past the camera so they leave the frame rather than
    // stopping in mid air.
    this.rightArm = this._arm([0.3, -0.56, 0.3], rear, 1);
    this.leftArm = this._arm([-0.26, -0.56, 0.2], front, -1);
    this.hands.add(this.rightArm, this.leftArm);
  }

  /**
   * A forearm from `elbow` to whichever wrist the hand it carries ended up at.
   *
   * The endpoint is read off the hand's own transform rather than written down
   * twice. Hand-authoring both is how the first version ended up with arms
   * stopping fourteen centimetres short of the gloves they were supposed to be
   * attached to — the hands moved onto the new grips and the arms did not.
   */
  _arm(elbow, hand, side) {
    const m = this.mats;
    const group = new THREE.Group();
    hand.updateMatrix();
    const wrist = new THREE.Vector3(...hand.userData.wrist).applyMatrix4(hand.matrix);

    const at = (t, bow) => [
      THREE.MathUtils.lerp(elbow[0], wrist.x, t) + side * bow,
      THREE.MathUtils.lerp(elbow[1], wrist.y, t) - bow * 0.5,
      THREE.MathUtils.lerp(elbow[2], wrist.z, t),
    ];
    // A forearm is near enough straight; the slight outward bow is the belly
    // of the muscle rather than a bend.
    const path = [elbow, at(0.4, 0.012), at(0.75, 0.008), [wrist.x, wrist.y, wrist.z]];

    group.add(
      new THREE.Mesh(
        sweep(path, {
          steps: 16,
          radial: 10,
          // Thick at the elbow, narrowing into the wrist. The first pass was
          // half again as wide and read as a cannon barrel aimed at the camera.
          radius: (t) => 0.052 - t * 0.026,
        }),
        m.glove
      )
    );

    // Two bracer straps, both toward the wrist. Three evenly spaced down the
    // forearm looked like barrel bands.
    const curve = new THREE.CatmullRomCurve3(path.map((p) => new THREE.Vector3(...p)));
    for (const t of [0.58, 0.76]) {
      const point = curve.getPointAt(t);
      const strap = new THREE.Mesh(new THREE.TorusGeometry(0.04 - t * 0.014, 0.0065, 6, 14), m.leather);
      strap.position.copy(point);
      strap.lookAt(point.clone().add(curve.getTangentAt(t)));
      group.add(strap);
    }

    group.add(hand);
    return group;
  }

  /**
   * A gloved hand closed around a cylinder of radius `gripR`, lying along the
   * weapon's own axis: four fingers swept as arcs that hug the grip, a thumb
   * across them, and the back of the hand on the `side` it reaches in from.
   *
   * The first attempt built fingers as chains of little boxes on hinges, and
   * from a hand's length away they read as a mitten with slabs poking out of
   * it. Fingers that follow the surface they are holding survive the close-up,
   * and cost about the same.
   */
  _hand(gripR, side, { trigger } = {}) {
    const m = this.mats;
    const g = new THREE.Group();
    const rF = 0.0115;
    const arcR = gripR + rF * 0.75;

    /** One finger, curled from the front of the grip around to the back. */
    const finger = (z, span, thickness) => {
      const pts = [];
      for (let k = 0; k <= 6; k++) {
        // Angle 0 is the front of the grip; positive swings toward the palm.
        const a = -0.45 + (k / 6) * span;
        pts.push([Math.sin(a) * arcR * side, Math.cos(a) * arcR, z]);
      }
      return new THREE.Mesh(
        sweep(pts, { steps: 11, radial: 7, radius: (t) => thickness * (1 - t * 0.2) }),
        m.glove
      );
    };

    // Middle, ring and little finger closed around the handle. The index is
    // either with them or out on the trigger.
    for (let i = trigger ? 1 : 0; i < 4; i++) {
      // The little finger closes furthest, the index least.
      g.add(finger(-0.031 + i * 0.021, 2.15 + i * 0.16, rF - i * 0.0008));
    }

    // Index finger taking up the slack on the trigger: a hunter with a beast
    // in the sight picture is not resting it along the frame.
    if (trigger) {
      const knuckle = [Math.sin(-0.45) * arcR * side, Math.cos(-0.45) * arcR, -0.031];
      g.add(
        new THREE.Mesh(
          sweep(
            [
              knuckle,
              [knuckle[0] * 0.75, arcR * 1.02, -0.05],
              [knuckle[0] * 0.4, arcR * 1.18, -0.086],
              [side * 0.006, arcR * 1.1, -0.108],
            ],
            { steps: 12, radial: 7, radius: (t) => rF * (1 - t * 0.28) }
          ),
          m.glove
        )
      );
    }

    // Thumb, laid down the near face of the grip rather than wrapped: how a
    // hand actually holds a handle it is bracing a heavy weapon against.
    g.add(
      new THREE.Mesh(
        sweep(
          [
            [side * arcR * 0.95, arcR * 0.1, 0.05],
            [side * arcR * 0.9, arcR * 0.62, 0.026],
            [side * arcR * 0.62, arcR * 0.95, -0.004],
            [side * arcR * 0.28, arcR * 1.0, -0.032],
          ],
          { steps: 12, radial: 7, radius: (t) => 0.0135 * (1 - t * 0.22) }
        ),
        m.glove
      )
    );

    // The hand itself: a rounded mass between the wrist and the knuckles, so
    // the fingers are attached to something instead of floating in a ring.
    const back = new THREE.Mesh(roundedBlock(0.096, 0.052, 0.034, 0.017), m.glove);
    back.rotation.set(Math.PI / 2, 0, 0);
    back.position.set(side * (gripR + 0.021), 0.006, 0.008);
    g.add(back);
    // Wrist, filling the gap to the forearm. Its centre is published so the
    // forearm can end exactly here whatever pose the hand is put in.
    const wrist = [side * (gripR + 0.024), 0.0, 0.052];
    const joint = new THREE.Mesh(new THREE.SphereGeometry(0.03, 10, 8), m.glove);
    joint.scale.set(0.85, 1, 0.9);
    joint.position.set(...wrist);
    g.add(joint);
    g.userData.wrist = wrist;
    return g;
  }

  // ------------------------------------------------------------------- firing

  /**
   * The muzzle in world space. The viewmodel lives in its own scene, so a point
   * in it is an offset from the eye and nothing more; where that lands in the
   * world is the hunter's camera applied to it.
   */
  muzzleWorld(out) {
    this._muzzle.set(0, CHANNEL_Y, MUZZLE_Z);
    this.group.localToWorld(this._muzzle);
    return this.viewmodel.toWorld(this._muzzle, out);
  }

  tryFire() {
    if (this.reloading || this.cooldown > 0) return false;
    if (this.bolts <= 0) {
      // A dry trigger still deserves an answer, or an empty weapon reads as a
      // broken one.
      if (this.dry <= 0) this.dry = 0.24;
      return false;
    }
    this.bolts -= 1;
    this.cooldown = CONFIG.weapon.cooldown;
    // A heavier weapon is thrown less by the same shot, and settles slower.
    this.recoil = CONFIG.weapon.recoil * (4.6 / CONFIG.weapon.mass);
    this.kick = 1;
    this.draw = 0;
    this.bolt.visible = false;
    this.viewmodel.flash();
    return true;
  }

  tryReload() {
    if (this.reloading || this.bolts === this.max) return false;
    this.reloadT = CONFIG.weapon.reload;
    return true;
  }

  // ---------------------------------------------------------------- animation

  /**
   * The reload runs in four beats: drop the weapon off the aim, wind the
   * windlass until the string is back on the latch, seat a bolt, bring it up.
   * The old one snapped to a single tilted pose and held it for two seconds,
   * which is why the quiver refilling felt like a page reloading.
   */
  _reloadPose(dt) {
    const t = 1 - this.reloadT / CONFIG.weapon.reload;
    const off = THREE.MathUtils.smoothstep(t, 0, 0.18) - THREE.MathUtils.smoothstep(t, 0.82, 1);

    const wind = THREE.MathUtils.smoothstep(t, 0.2, 0.68);
    this.draw = wind;
    if (wind > 0 && wind < 1) this.crankSpin += dt * 15;

    // The bolt is seated once the string is latched, not at the very end.
    const seat = THREE.MathUtils.smoothstep(t, 0.7, 0.86);
    this.bolt.visible = seat > 0.02;
    this.bolt.position.set(0, CHANNEL_Y + (1 - seat) * 0.1, (1 - seat) * 0.16);

    this._pos.copy(this._restPos);
    this._pos.y -= off * 0.13;
    this._pos.z += off * 0.05;
    this.group.position.copy(this._pos);
    this.group.rotation.set(
      this._restRot.x + off * 0.42,
      this._restRot.y - off * 0.3,
      // A shudder through the wrist while the windlass is under load.
      this._restRot.z + off * 0.26 + Math.sin(t * Math.PI * 9) * off * 0.022
    );
  }

  /**
   * @param {number} dt
   * @param {{ moving?: boolean, sprinting?: boolean, crouching?: boolean,
   *   turnRate?: { x: number, y: number }, aimingHot?: boolean }} state
   */
  update(dt, state = {}) {
    const { moving = false, sprinting = false, crouching = false, turnRate, aimingHot = false } = state;
    this.cooldown = Math.max(0, this.cooldown - dt);
    this.dry = Math.max(0, this.dry - dt);
    this.viewmodel.update(dt);

    if (this.reloadT > 0) {
      this.reloadT -= dt;
      this._reloadPose(dt);
      if (this.reloadT <= 0) {
        this.reloadT = 0;
        this.bolts = this.max;
        this.draw = 1;
        this.bolt.visible = true;
        this.bolt.position.set(0, CHANNEL_Y, 0);
      }
      this._poseString();
      this.crank.rotation.x = this.crankSpin;
      return;
    }

    // The string comes back onto the latch a beat after a shot, and the bolt
    // only appears once there is a string for it to sit against.
    this.draw = Math.min(1, this.draw + dt * 3.4);
    this.bolt.visible = !this.empty && this.draw > 0.75;
    this.kick = THREE.MathUtils.damp(this.kick, 0, 7.5, dt);
    this.recoil = THREE.MathUtils.damp(this.recoil, 0, 9, dt);

    // Sway. The weapon lags a turn and settles back onto the aim afterwards,
    // which is the only thing telling the player they are carrying a ballista
    // rather than a pistol.
    const { sway, swayMax } = CONFIG.viewmodel;
    const clamp = (v) => THREE.MathUtils.clamp(v, -swayMax, swayMax);
    if (turnRate) {
      // Turning right leaves the weapon pointing left of the new forward, so
      // the offset follows the sign of the turn itself.
      this._swayTarget.set(clamp(turnRate.x * sway * 0.25), clamp(-turnRate.y * sway * 0.25));
    } else {
      this._swayTarget.set(0, 0);
    }
    const settle = 6.5 * (4.6 / CONFIG.weapon.mass);
    this._sway.x = THREE.MathUtils.damp(this._sway.x, this._swayTarget.x, settle, dt);
    this._sway.y = THREE.MathUtils.damp(this._sway.y, this._swayTarget.y, settle, dt);

    const now = performance.now() * 0.001;
    const rate = sprinting ? 9.2 : 5.4;
    const amp = moving ? (sprinting ? 0.026 : 0.013) : 0.0024;
    const bobY = Math.sin(now * rate * 2) * amp;
    const bobX = Math.sin(now * rate) * amp * 1.5;
    const breath = Math.sin(now * 1.15) * 0.0022;

    this._pos.copy(this._restPos);
    this._pos.x += bobX + this._sway.x;
    this._pos.y += bobY + breath + this._sway.y - this.kick * 0.028;
    this._pos.z += this.kick * 0.05;
    // Dropped out of the aim at a sprint, tucked up when crouched.
    const loping = sprinting && moving;
    if (loping) {
      this._pos.y -= 0.075;
      this._pos.z += 0.035;
    }
    if (crouching) this._pos.y += 0.014;
    // Brought toward the eye line when there is something worth shooting.
    if (aimingHot && !loping) {
      this._pos.x -= 0.03;
      this._pos.y += 0.012;
    }
    this.group.position.copy(this._pos);

    this.group.rotation.set(
      this._restRot.x + this.recoil * 2.2 + bobY * 0.6 - (loping ? 0.075 : 0),
      this._restRot.y - this._sway.x * 2.4 + (loping ? 0.5 : 0),
      this._restRot.z + this.kick * 0.05 + this._sway.y * 1.6 - this.dry * 0.12
    );

    this._poseString();
    this.crank.rotation.x = this.crankSpin;
  }

  /**
   * Aims each half of the string from its limb tip at the current centre and
   * scales it to reach. A crossbow at full draw with a slack string is the kind
   * of thing that looks wrong before anyone can say why.
   */
  _poseString() {
    const z = THREE.MathUtils.lerp(STRING_REST_Z, STRING_LATCH_Z, this.draw);
    this.serving.position.z = z;
    for (const { pivot, mesh } of this.stringSides) {
      _dir.set(-pivot.position.x, LIMB_TIP[1] - pivot.position.y, z - pivot.position.z);
      const len = _dir.length();
      pivot.quaternion.setFromUnitVectors(FORWARD, _dir.divideScalar(len));
      mesh.scale.z = len;
    }
    // The limbs draw in as the string comes onto the latch.
    for (const limb of this.limbs) limb.scale.z = 1 - this.draw * 0.03;
  }

  dispose() {
    this.group.traverse((o) => o.geometry?.dispose());
    for (const mat of Object.values(this.mats)) mat.dispose();
  }
}
