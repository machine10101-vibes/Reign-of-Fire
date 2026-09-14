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
export function sweep(points, { steps = 22, radial = 10, radius, flatten = 1, caps = true }) {
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
      // Wound so the faces look outward. The first version had it the other
      // way, and with backface culling every swept part was being viewed from
      // the inside: the limbs merely looked oddly lit, but the fingers — thin
      // tubes a centimetre across — read as open guttering.
      index.push(a, a + 1, b, b, a + 1, b + 1);
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
// The prod belongs at the front of the stock, where a crossbow carries it.
// Mounted two thirds along, as it was, its near limb passed across the
// receiver in screen space and was lost against it — leaving one thin tapering
// limb on the far side and a weapon that read as a rifle.
const LIMB_ROOT_Z = -0.6;
const STRING_LATCH_Z = -0.165;
const STRING_REST_Z = -0.552;
const MUZZLE_Z = -0.74;
const LIMB_TIP = [0.335, CHANNEL_Y - 0.004, -0.552];
const SIGHT_Y = 0.084;
// The trigger, and the grip behind it. These two belong together: the first
// version had the grip ten centimetres behind its own trigger, which is a
// reach no index finger has, so the finger animating onto it had to be drawn
// as a blade sticking out of the front of the hand.
const TRIGGER = [0, -0.05, 0.068];
// Centres of the two handles, and how far the rear one leans back.
const GRIP = [0, -0.108, 0.135];
// Well back from the prod: a support hand out at the limbs is both a metre
// from the eye, which no arm reaches, and where a crossbow takes your fingers
// off.
const FOREGRIP = [0, -0.088, -0.235];
const GRIP_RAKE = 0.34;
// How much arm is in shot: a forearm and a little of the upper arm, which is
// all a first-person camera ever sees. The first pair were half a metre and
// three quarters of a metre long, and both read as scaffolding poles.
const ARM_IN_SHOT = 0.34;

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
    this._clock = 0;
    // Held at the right hip, canted in toward the centre of the frame and
    // pitched nose-down. Chosen by `scripts/framing.mjs` rather than by eye:
    // the weapon is a metre long, and where a prod that wide falls relative to
    // the reticle, and whether the hands clear the bottom edge, are arithmetic
    // once the lens is fixed. Guessing at it cost a dozen screenshots and still
    // left both hands below the frame.
    this._restPos = new THREE.Vector3(0.14, -0.16, -0.8);
    // Held square rather than canted in across the body, and that is not a
    // stylistic choice. Swinging the muzzle inward rotates the near limb behind
    // the stock from the eye's point of view, so all that shows of a prod
    // two thirds of a metre across is one thin tapering limb on the far side —
    // which is why every screenshot so far looked like a man holding a rifle.
    // Pitched a little more nose-down so the hunter looks onto the top of the
    // prod instead of into the butt plate, which is a white door filling the
    // lower right of the frame.
    this._restRot = new THREE.Euler(-0.24, -0.02, 0.08);
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
      // Metalness held below the nine-tenths these would really have. A fully
      // metallic surface has no diffuse term at all, so on a ridge at dusk,
      // with nothing in the environment map brighter than the lava, the entire
      // weapon came out as a silhouette with one specular streak on it.
      iron: standardFrom(pack("weapon_metal", 3, 1.4), {
        color: 0x6e6a66,
        metalness: 0.78,
        roughness: 0.45,
        envMapIntensity: 1.1,
      }),
      steel: standardFrom(pack("weapon_metal", 1.6, 1.6), {
        color: 0xb0aca8,
        metalness: 0.84,
        roughness: 0.3,
        envMapIntensity: 1.35,
      }),
      // Oil-dark walnut. The first pass used a mid tan, and with the key light
      // sitting on the broad side of the stock that turned the largest flat
      // face on the weapon into the brightest thing on the screen — brighter
      // than the lava it was standing next to.
      wood: standardFrom(pack("weapon_wood", 1, 3.4), {
        // A stop above charcoal. The first oil-dark walnut disappeared into
        // the ridge and left the tiller reading as a silhouette of a rifle
        // receiver, which is the opposite of a crossbow.
        color: 0x6a5340,
        metalness: 0.02,
        roughness: 0.78,
        envMapIntensity: 0.38,
      }),
      leather: standardFrom(pack("leather_glove", 2.4, 2.4), {
        color: 0x5c4a3a,
        metalness: 0,
        roughness: 0.8,
        envMapIntensity: 0.28,
      }),
      glove: standardFrom(pack("leather_glove", 1.6, 1.6), {
        // Lifted so a finger is a finger in the hunter's own shadow. At
        // 0x372c24 the gloves were the same value as the stock and vanished.
        color: 0x6e5a48,
        metalness: 0,
        roughness: 0.78,
        envMapIntensity: 0.3,
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
        metalness: 0.72,
        roughness: 0.38,
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
    // A tiller, not a receiver. Seventy millimetres across with iron from
    // lock to prod is a rifle; a crossbow is a thin beam the prod is hung
    // on, and the hunter has to be able to see past it to the limbs.
    const stock = [
      [-0.34, 0.038],
      [-0.02, 0.044],
      [0.08, 0.082],
      [0.22, 0.074],
      [0.3, 0.042],
      [0.312, -0.058],
      [0.24, -0.072],
      [0.15, -0.062],
      [0.08, -0.03],
      [0.02, -0.042],
      [-0.02, -0.046],
      [-0.34, -0.04],
    ];
    this._add(profileSolid(stock, 0.048), m.wood);

    // Iron only where the load actually lives: the lock and the prod root.
    // Plating the whole middle was what turned the tiller into a stamped
    // receiver and hid the near limb behind it.
    this._add(
      profileSolid(
        [
          [-0.2, 0.046],
          [-0.04, 0.05],
          [-0.04, -0.05],
          [-0.2, -0.046],
        ],
        0.054
      ),
      m.iron
    );
    this._add(
      profileSolid(
        [
          [-0.66, 0.04],
          [-0.54, 0.048],
          [-0.54, -0.04],
          [-0.66, -0.032],
        ],
        0.062
      ),
      m.iron
    );

    // A strap on each cheek of the butt — not a plate on the rear face.
    // A flat plate there is a door filling the lower-right of the frame
    // the moment the hunter looks down the tiller.
    for (const side of [-1, 1]) {
      this._add(roundedBlock(0.02, 0.088, 0.004, 0.006), m.blued, [side * 0.026, -0.008, 0.296]);
      this._add(roundedBlock(0.12, 0.055, 0.005, 0.012), m.wood, [side * 0.026, 0.028, 0.19]);
      this._add(
        new THREE.TorusGeometry(0.011, 0.003, 5, 10),
        m.iron,
        [side * 0.026, -0.052, 0.235],
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
        0.044
      ),
      m.wood
    );

    // Leather wrap around the forestock — the concept's bound cable bundle.
    // A bare lathe is a rifle barrel; a wrapped cylinder is a siege tiller.
    this._add(
      new THREE.CylinderGeometry(0.034, 0.037, 0.155, 14),
      m.leather,
      [0, 0.0, -0.455],
      [Math.PI / 2, 0, 0]
    );
    for (const z of [-0.39, -0.455, -0.52]) {
      this._add(new THREE.TorusGeometry(0.037, 0.0055, 6, 12), m.cord, [0, 0.0, z], [Math.PI / 2, 0, 0]);
    }

    // Stirrup — the iron loop a crossbow is stood in to span. Reads as
    // "this is a bow you plant," not a rifle you shoulder.
    this._add(
      sweep(
        [
          [-0.038, -0.018, -0.555],
          [-0.048, -0.058, -0.542],
          [0.0, -0.078, -0.532],
          [0.048, -0.058, -0.542],
          [0.038, -0.018, -0.555],
        ],
        { steps: 16, radial: 7, radius: () => 0.0068 }
      ),
      m.steel
    );

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
        this._add(rivet, m.brass, [side * 0.028, 0.02, z]);
        this._add(rivet, m.brass, [side * 0.028, -0.022, z]);
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
    // Prod housing: a block the staves come out of, wide enough that the
    // limbs have a place to live instead of sprouting from a thin collar.
    this._add(roundedBlock(0.09, 0.058, 0.12, 0.01), m.iron, [0, CHANNEL_Y - 0.01, LIMB_ROOT_Z]);
    this._add(roundedBlock(0.098, 0.064, 0.03, 0.008), m.leather, [0, CHANNEL_Y - 0.01, LIMB_ROOT_Z]);

    this.limbs = [];
    for (const side of [-1, 1]) {
      // Out, forward, then the recurve turning the tip back toward the shooter.
      const path = [
        [side * 0.04, LIMB_TIP[1] + 0.005, LIMB_ROOT_Z],
        [side * 0.13, LIMB_TIP[1] + 0.007, LIMB_ROOT_Z - 0.028],
        [side * 0.23, LIMB_TIP[1] + 0.003, LIMB_ROOT_Z - 0.048],
        [side * 0.3, LIMB_TIP[1] - 0.001, LIMB_ROOT_Z - 0.03],
        [side * LIMB_TIP[0], LIMB_TIP[1], LIMB_TIP[2]],
      ];
      // Wooden leaf spring. Wide in the plane it does not bend in, and it
      // stays wide to the tip — the concept's stave, not a tapering tube.
      this.limbs.push(
        this._add(
          sweep(path, {
            steps: 24,
            radial: 10,
            radius: (t) => 0.026 * (1 - t * 0.22) + 0.008,
            flatten: 0.34,
          }),
          m.wood
        )
      );

      this._add(
        new THREE.TorusGeometry(0.014, 0.005, 6, 12),
        m.blued,
        [side * (LIMB_TIP[0] - 0.008), LIMB_TIP[1], LIMB_TIP[2] + 0.006],
        [0, side * 0.6, Math.PI / 2]
      );
      this._add(
        new THREE.TorusGeometry(0.028, 0.007, 6, 12),
        m.leather,
        [side * 0.08, LIMB_TIP[1] + 0.004, LIMB_ROOT_Z - 0.014],
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
    // Trigger guard: a bow under the wrist, not a ring floating in the air. Its
    // rear reaches back to the front face of the pistol grip, which is where a
    // guard is actually anchored.
    this._add(
      new THREE.TorusGeometry(0.032, 0.0055, 6, 16, Math.PI * 1.15),
      m.blued,
      [0, TRIGGER[1] - 0.002, TRIGGER[2] + 0.004],
      [0, Math.PI / 2, -0.45]
    );
    this.trigger = this._add(roundedBlock(0.012, 0.038, 0.01, 0.005), m.steel, TRIGGER, [0, 0, 0.22]);
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
    this.rearSight = this._add(new THREE.TorusGeometry(0.016, 0.0035, 6, 14), m.blued, [0, SIGHT_Y, -0.03]);

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

    // Rear hand around the pistol grip. -90 degrees stands the hand's handle
    // axis upright; the rake matches the handle it is closed around.
    const rear = this._hand(0.023, 1, true);
    rear.position.set(GRIP[0], GRIP[1] + 0.01, GRIP[2] - 0.004);
    rear.rotation.set(-Math.PI / 2 + GRIP_RAKE, 0, 0);
    // The index finger is laid on wherever the trigger actually is, rather
    // than at a remembered offset from the hand.
    this.triggerFinger = this._triggerFinger(rear, 1);

    // Front hand under the barrel, taking the weapon's weight.
    const front = this._hand(0.0205, -1);
    front.position.set(FOREGRIP[0], FOREGRIP[1] + 0.008, FOREGRIP[2] + 0.002);
    front.rotation.set(-Math.PI / 2 - 0.12, 0, 0);

    // Down, back and outward from each wrist, far enough that the elbow falls
    // outside the frame.
    this.rightArm = this._arm(rear, 1, [0.45, -0.85, 0.3]);
    this.leftArm = this._arm(front, -1, [-0.5, -0.8, 0.35]);
    this.hands.add(this.rightArm, this.leftArm);
  }

  /**
   * Replaces a hand's index finger with one reaching the trigger.
   *
   * The target is converted out of the weapon's space through the hand's own
   * transform, so the finger follows the trigger if the lock or the grip ever
   * moves. It is built after the hand is posed for exactly that reason.
   */
  _triggerFinger(hand, side) {
    hand.updateMatrix();
    const local = new THREE.Vector3(...TRIGGER).applyMatrix4(
      new THREE.Matrix4().copy(hand.matrix).invert()
    );
    const root = new THREE.Vector3(...hand.userData.knuckle);
    // The pad stops a finger's thickness short of the blade rather than
    // passing through it.
    const pad = local.clone().addScaledVector(root.clone().sub(local).normalize(), 0.013);
    // Out over the front of the handle, then down onto the blade. The waypoints
    // are pulled off the straight line so the finger bends rather than pointing.
    const bend = (t, out) =>
      root
        .clone()
        .lerp(pad, t)
        .add(new THREE.Vector3(-side * out * 0.35, out, 0));
    const pip = bend(0.38, 0.013);
    const dip = bend(0.72, 0.008);
    const mesh = new THREE.Mesh(
      sweep([root.toArray(), pip.toArray(), dip.toArray(), pad.toArray()], {
        steps: 12,
        radial: 7,
        radius: (t) => 0.0084 * (1 - t * 0.2),
      }),
      this.mats.glove
    );
    hand.add(mesh);
    for (const [p, r] of [
      [pip, 0.0082],
      [dip, 0.0074],
      [pad, 0.0066],
    ]) {
      const joint = new THREE.Mesh(new THREE.SphereGeometry(r, 8, 6), this.mats.glove);
      joint.position.copy(p);
      hand.add(joint);
    }
    hand.userData.digits = 5;
    hand.userData.joints = (hand.userData.joints ?? 0) + 2;
    return mesh;
  }

  /**
   * A forearm running back from whichever wrist the hand it carries ended up
   * at, `ARM_IN_SHOT` metres along `dir`.
   *
   * Both ends are derived rather than written down. The wrist comes off the
   * hand's own transform, because hand-authoring it is how the arms came to
   * stop six centimetres short of the gloves; and the elbow comes off a real
   * forearm's length, because hand-authoring that gave one arm a fifty
   * centimetre forearm and the other a seventy-eight, which is why both of
   * them read as scaffolding poles rather than limbs.
   */
  _arm(hand, side, dir) {
    const m = this.mats;
    const group = new THREE.Group();
    hand.updateMatrix();
    const wrist = new THREE.Vector3(...hand.userData.wrist).applyMatrix4(hand.matrix);
    const elbow = wrist.clone().addScaledVector(new THREE.Vector3(...dir).normalize(), ARM_IN_SHOT);

    // A forearm is near enough straight; the slight outward bow is the belly
    // of the muscle rather than a bend.
    const at = (t, bow) =>
      elbow.clone().lerp(wrist, t).add(new THREE.Vector3(side * bow, -bow * 0.5, 0));
    const path = [elbow, at(0.4, 0.014), at(0.75, 0.009), wrist].map((p) => p.toArray());

    const armR = (t) => 0.045 - t * 0.02;
    group.add(new THREE.Mesh(sweep(path, { steps: 16, radial: 10, radius: armR }), m.glove));

    // A leather bracer over the wrist half, and two straps standing off it.
    // Everything here is sized off armR: the first version's straps were
    // narrower than the arm they were meant to be buckled around, so all that
    // showed of them was a ring cut into the surface, and the bracer itself ran
    // the whole length and left the arm one featureless tube.
    const curve = new THREE.CatmullRomCurve3(path.map((p) => new THREE.Vector3(...p)));
    group.add(
      new THREE.Mesh(
        sweep(
          [0.52, 0.7, 0.86, 0.99].map((t) => curve.getPointAt(t).toArray()),
          { steps: 10, radial: 10, radius: (t) => armR(0.52 + t * 0.47) * 1.08 }
        ),
        m.leather
      )
    );
    const axis = new THREE.Vector3(0, 0, 1);
    for (const t of [0.62, 0.84]) {
      const strap = new THREE.Mesh(new THREE.TorusGeometry(armR(t) * 1.16, 0.0055, 6, 14), m.leather);
      strap.position.copy(curve.getPointAt(t));
      strap.quaternion.setFromUnitVectors(axis, curve.getTangentAt(t));
      group.add(strap);
    }

    group.add(hand);
    group.userData.elbow = elbow.toArray();
    return group;
  }

  /**
   * A humanoid glove closed around an upright handle of radius `gripR`.
   *
   * Local axes: +z runs up the handle, +y toward the muzzle, +x out to the side
   * the hand comes from. Positions around the handle are an angle from the
   * muzzle face toward that side, so a finger root sits next to the palm and
   * the tip wraps onto the far face.
   *
   * The palm is a tapered mass with thenar and hypothenar pads. Four fingers
   * are three-bone chains with PIP / DIP joints. The thumb comes off the
   * thenar and opposes them. Index is skipped on the rear hand —
   * `_triggerFinger` draws that one reaching for the trigger.
   */
  _hand(gripR, side, skipIndex = false) {
    const m = this.mats;
    const g = new THREE.Group();
    const rF = 0.0088;
    const arcR = gripR + rF + 0.004;
    const palmX = side * (gripR + 0.02);
    const ROOT = 1.92;
    const around = (phi, z, r = arcR) => [Math.sin(phi) * r * side, Math.cos(phi) * r, z];
    const KNUCKLE_Z = 0.03;

    // Palm sits *outside* the handle. The first rebuild buried it inside the
    // grip (x < gripR), so all that showed of a hand was a row of joint
    // spheres stuck to a leather cylinder.
    const heel = new THREE.Mesh(roundedBlock(0.038, 0.032, 0.026, 0.012), m.glove);
    heel.position.set(palmX, -0.004, KNUCKLE_Z - 0.078);
    g.add(heel);
    const mid = new THREE.Mesh(roundedBlock(0.048, 0.038, 0.028, 0.012), m.glove);
    mid.position.set(palmX, 0.0, KNUCKLE_Z - 0.04);
    g.add(mid);
    const pad = new THREE.Mesh(roundedBlock(0.03, 0.044, 0.026, 0.011), m.glove);
    pad.position.set(palmX, 0.004, KNUCKLE_Z - 0.004);
    g.add(pad);

    const thenar = new THREE.Mesh(new THREE.SphereGeometry(0.016, 10, 8), m.glove);
    thenar.position.set(palmX * 0.85, 0.02, KNUCKLE_Z - 0.012);
    thenar.scale.set(1.15, 1.35, 1.15);
    g.add(thenar);
    const hypo = new THREE.Mesh(new THREE.SphereGeometry(0.012, 8, 6), m.glove);
    hypo.position.set(palmX * 0.8, -0.016, KNUCKLE_Z - 0.07);
    hypo.scale.set(1.1, 0.85, 1.2);
    g.add(hypo);

    const cuff = new THREE.Mesh(new THREE.CylinderGeometry(0.019, 0.022, 0.034, 8), m.glove);
    cuff.rotation.x = Math.PI / 2;
    cuff.position.set(palmX * 0.85, -0.008, KNUCKLE_Z - 0.082);
    g.add(cuff);

    const wrist = [side * arcR * 0.72, -0.012, KNUCKLE_Z - 0.092];
    const joint = new THREE.Mesh(new THREE.SphereGeometry(0.02, 10, 8), m.glove);
    joint.scale.set(0.88, 0.94, 1);
    joint.position.set(...wrist);
    g.add(joint);
    g.userData.wrist = wrist;

    const rows = [
      { z: KNUCKLE_Z, curl: 2.15, r: 0.0084, phi: 0 },
      { z: KNUCKLE_Z - 0.021, curl: 2.32, r: 0.0088, phi: 0.04 },
      { z: KNUCKLE_Z - 0.042, curl: 2.42, r: 0.0082, phi: 0.08 },
      { z: KNUCKLE_Z - 0.061, curl: 2.5, r: 0.0074, phi: 0.12 },
    ];
    let joints = 0;
    rows.forEach((row, i) => {
      const mcp = new THREE.Mesh(new THREE.SphereGeometry(row.r * 1.08, 8, 6), m.glove);
      mcp.position.set(...around(ROOT + row.phi - 0.08, row.z));
      g.add(mcp);
      joints += 1;
      if (i === 0 && skipIndex) return;
      joints += this._digit(g, {
        z: row.z,
        startPhi: ROOT + row.phi,
        curl: row.curl,
        radius: row.r,
        bones: 3,
        side,
        arcR,
      });
    });

    // Thumb: two bones off the thenar, laid down the front of the handle
    // so it opposes the fingers from the camera's side of the grip.
    const t0 = [palmX * 0.7, 0.016, KNUCKLE_Z + 0.01];
    const t1 = [side * gripR * 0.15, arcR * 1.02, KNUCKLE_Z + 0.002];
    const t2 = [-side * gripR * 0.55, arcR * 0.7, KNUCKLE_Z - 0.016];
    g.add(
      new THREE.Mesh(sweep([t0, t1], { steps: 8, radial: 7, radius: () => 0.009 }), m.glove)
    );
    g.add(
      new THREE.Mesh(
        sweep([t1, t2], { steps: 8, radial: 7, radius: (t) => 0.0078 * (1 - t * 0.16) }),
        m.glove
      )
    );
    const tmj = new THREE.Mesh(new THREE.SphereGeometry(0.0096, 8, 6), m.glove);
    tmj.position.set(...t1);
    g.add(tmj);
    const tip = new THREE.Mesh(new THREE.SphereGeometry(0.0072, 8, 6), m.glove);
    tip.position.set(...t2);
    g.add(tip);
    joints += 1;

    g.userData.knuckle = around(ROOT, KNUCKLE_Z);
    g.userData.digits = skipIndex ? 4 : 5;
    g.userData.joints = joints;
    return g;
  }

  /**
   * One finger: short bones + spherical PIP / DIP joints wrapping the grip.
   */
  _digit(parent, { z, startPhi, curl, radius, bones, side, arcR }) {
    const around = (phi, zz) => [Math.sin(phi) * arcR * side, Math.cos(phi) * arcR, zz];
    const pts = [];
    let joints = 0;
    for (let i = 0; i <= bones; i++) {
      const t = i / bones;
      const p = around(startPhi - curl * t, z - 0.002 * i);
      pts.push(p);
      if (i > 0 && i < bones) {
        const joint = new THREE.Mesh(new THREE.SphereGeometry(radius * 1.06, 8, 6), this.mats.glove);
        joint.position.set(...p);
        parent.add(joint);
        joints += 1;
      }
    }
    parent.add(
      new THREE.Mesh(
        sweep(pts, { steps: 10, radial: 7, radius: (t) => radius * (1 - t * 0.18) }),
        this.mats.glove
      )
    );
    const tip = new THREE.Mesh(new THREE.SphereGeometry(radius * 0.92, 8, 6), this.mats.glove);
    tip.position.set(...pts[pts.length - 1]);
    parent.add(tip);
    return joints;
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

    // Dropped off the aim, but not out of the frame. The first version took it
    // down thirteen centimetres, which left nothing on screen but the prod and
    // made the one animation the player watches eight times a flight invisible.
    this._pos.copy(this._restPos);
    this._pos.y -= off * 0.055;
    this._pos.z += off * 0.03;
    this.group.position.copy(this._pos);
    this.group.rotation.set(
      this._restRot.x + off * 0.3,
      this._restRot.y - off * 0.22,
      // A shudder through the wrist while the windlass is under load.
      this._restRot.z + off * 0.2 + Math.sin(t * Math.PI * 9) * off * 0.022
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

    this._clock += dt;
    const now = this._clock;
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
      this._pos.y -= 0.042;
      this._pos.z += 0.03;
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
