import * as THREE from "three";
import { standardFrom, setRepeat } from "./assets.js";

/** Torso profile as [distance along spine, radius]; revolved into a lathe. */
const TORSO_PROFILE = [
  [-1.8, 0.05],
  [-1.52, 0.26],
  [-1.05, 0.52],
  [-0.45, 0.8],
  [0.12, 0.95],
  [0.6, 0.9],
  [1.0, 0.7],
  [1.26, 0.44],
  [1.42, 0.22],
];

const _q = new THREE.Quaternion();

function limbMesh(geo, mat) {
  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function torsoGeometry(segments) {
  const points = TORSO_PROFILE.map(([along, r]) => new THREE.Vector2(r, along));
  const geo = new THREE.LatheGeometry(points, segments);
  geo.rotateZ(-Math.PI / 2);
  geo.computeVertexNormals();
  return geo;
}

/**
 * Membrane in shape space: +X spans outboard, +Y runs toward the leading edge,
 * +Z lifts out of plane. The scalloped trailing edge is what reads as "bat
 * wing" rather than "flat triangle" in silhouette.
 *
 * Lofted as a grid between the two edges rather than triangulated as a flat
 * outline. An outline has no interior vertices to displace, so however the
 * silhouette is shaped the surface stays perfectly planar and the largest
 * panel on the beast reads as a plank.
 */
function membraneGeometry(span) {
  const s = span;
  const lead = new THREE.Path();
  lead.moveTo(0, 0);
  lead.quadraticCurveTo(1.6 * s, 0.55, 3.1 * s, 0.36);
  lead.quadraticCurveTo(4.0 * s, 0.22, 4.35 * s, -0.24);

  // Walked outboard, so it pairs up with the leading edge at equal parameter.
  // The waypoints are the finger tips, which is why the bays fall between the
  // bones laid down in `_buildWings`.
  const trail = new THREE.Path();
  trail.moveTo(0, 0);
  trail.quadraticCurveTo(0.2 * s, -0.5, 0.5 * s, -0.98);
  trail.quadraticCurveTo(1.05 * s, -0.9, 1.55 * s, -1.3);
  trail.quadraticCurveTo(2.1 * s, -0.82, 2.7 * s, -1.2);
  trail.quadraticCurveTo(3.5 * s, -0.8, 4.35 * s, -0.24);

  const cols = 24;
  const rows = 5;
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
      // Slack sail: pinned along the arm and the trailing edge, bowed under
      // between them, and flattening back out at the shoulder where the
      // membrane is stretched tight across the body.
      const across = Math.sin(v * Math.PI);
      const along = Math.sin(Math.min(1, u * 1.3) * Math.PI) ** 0.6;
      position.push(x, y, -0.34 * chord * across * along);
      // Matched to the flat outline this replaces, which took its UVs straight
      // from the 2D vertex positions, so the hide keeps its authored scale.
      uv.push(x, y);
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
      normalScale: new THREE.Vector2(1.7, 1.7),
      envMapIntensity: 0.5,
    });
    body.onBeforeCompile = (shader) => {
      shader.vertexShader = `varying vec3 vHide;\n${shader.vertexShader}`.replace(
        "#include <begin_vertex>",
        `#include <begin_vertex>
         vHide = position;`
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
      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <lights_fragment_end>",
        `#include <lights_fragment_end>
         #if NUM_DIR_LIGHTS > 0
           // Membrane translucency. A wing spread against a burning sky is lit
           // through as well as on, and without it the largest surface on the
           // beast goes to a flat dark board every time the sun is behind it —
           // which, with a low raking key light and a quarry that circles
           // overhead, is most of the time.
           //
           // Strongest face-on, where the light's path through the membrane is
           // shortest, and multiplied by the hide colour so the thick vanes and
           // finger bones stay silhouetted instead of lighting up with it.
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
    const detail = build.scale > 9 ? 20 : 16;

    const chest = new THREE.Group();
    const torso = limbMesh(torsoGeometry(detail), body);
    torso.scale.set(1, girth, girth * 0.94);
    chest.add(torso);
    this.root.add(chest);
    this.bones.chest = chest;
    this._addHit("body", torso, 1);

    this._buildSpine(chest, body, build, girth);
    this._buildNeck(chest, body, claw, build);
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

  _buildSpine(chest, body, build, girth) {
    if (!build.spikes) return;
    for (let i = 0; i < 7; i++) {
      const t = i / 6;
      const height = 0.18 + Math.sin(t * Math.PI) * 0.3;
      const spike = limbMesh(new THREE.ConeGeometry(0.06, height, 5), body);
      spike.position.set(0.9 - t * 2.5, (0.88 - t * 0.15) * girth, 0);
      spike.rotation.z = -0.25;
      chest.add(spike);
    }
  }

  _buildNeck(chest, body, claw, build) {
    const segments = build.neck > 1.2 ? 3 : 2;
    const segLength = (1.1 * build.neck) / (segments / 2);
    let parent = chest;
    this.bones.neck = [];
    for (let i = 0; i < segments; i++) {
      const g = new THREE.Group();
      g.position.set(i === 0 ? 1.05 : segLength * 0.88, i === 0 ? 0.22 : 0.06, 0);
      const rTop = 0.46 - i * 0.09;
      const rBottom = 0.56 - i * 0.09;
      const seg = limbMesh(new THREE.CylinderGeometry(rTop, rBottom, segLength, 12), body);
      seg.rotation.z = Math.PI / 2;
      seg.position.x = segLength * 0.44;
      g.add(seg);
      parent.add(g);
      this.bones.neck.push(g);
      this._addHit("neck", seg, 1.6);
      parent = g;
    }

    const head = new THREE.Group();
    head.position.set(segLength * 0.9, 0.04, 0);
    head.scale.setScalar(build.headSize);
    const skull = limbMesh(new THREE.SphereGeometry(0.42, 16, 12), body);
    skull.scale.set(1.5, 0.86, 0.8);
    head.add(skull);

    const brow = limbMesh(new THREE.BoxGeometry(0.34, 0.09, 0.52), body);
    brow.position.set(0.2, 0.2, 0);
    brow.rotation.z = -0.12;
    head.add(brow);

    const snout = limbMesh(new THREE.ConeGeometry(0.24, 0.76, 12), body);
    snout.rotation.z = -Math.PI / 2;
    snout.position.x = 0.64;
    head.add(snout);

    this.jawBone = new THREE.Group();
    this.jawBone.position.set(0.18, -0.14, 0);
    const jaw = limbMesh(new THREE.CylinderGeometry(0.1, 0.19, 0.72, 8), body);
    jaw.rotation.z = Math.PI / 2;
    jaw.position.x = 0.36;
    jaw.scale.y = 0.55;
    this.jawBone.add(jaw);
    for (let i = 0; i < 4; i++) {
      for (const side of [-1, 1]) {
        const tooth = limbMesh(new THREE.ConeGeometry(0.028, 0.13, 4), claw);
        tooth.position.set(0.24 + i * 0.15, 0.07, 0.1 * side);
        this.jawBone.add(tooth);
      }
    }
    this.bones.head = head;
    this.bones.neck[this.bones.neck.length - 1].add(head);
    head.add(this.jawBone);
    this._addHit("head", skull, 3.0);

    const pairs = Math.max(1, Math.round(build.horns / 2));
    for (let p = 0; p < pairs; p++) {
      const back = p / Math.max(1, pairs);
      for (const side of [-1, 1]) {
        const horn = limbMesh(new THREE.ConeGeometry(0.075 - p * 0.012, build.hornLength * (1 - back * 0.35), 6), claw);
        horn.position.set(-0.04 - back * 0.22, 0.34 - back * 0.08, (0.14 + back * 0.12) * side);
        horn.rotation.set(-0.35 * side, 0, 0.5 + back * 0.25);
        head.add(horn);
      }
    }

    this.eyes = [];
    for (const side of [-1, 1]) {
      const eye = new THREE.Mesh(
        new THREE.SphereGeometry(0.075, 10, 10),
        new THREE.MeshBasicMaterial({ color: this.spec.look.eye })
      );
      eye.position.set(0.3, 0.13, 0.23 * side);
      head.add(eye);
      this.eyes.push(eye);
    }

    this.mouth = new THREE.Object3D();
    this.mouth.position.set(0.95, -0.04, 0);
    head.add(this.mouth);
  }

  _buildTail(chest, body, build, girth) {
    const count = build.tailSegments;
    let parent = chest;
    let x = -1.7;
    this.bones.tail = [];
    for (let i = 0; i < count; i++) {
      const t = i / count;
      const g = new THREE.Group();
      g.position.set(x, -0.04 * i, 0);
      const r = (0.5 - t * 0.38) * girth;
      const seg = limbMesh(new THREE.CylinderGeometry(r * 0.7, r, 1.05, 10), body);
      seg.rotation.z = Math.PI / 2;
      seg.position.x = -0.46;
      g.add(seg);
      if (build.spikes) {
        const spike = limbMesh(new THREE.ConeGeometry(0.07, 0.34, 5), body);
        spike.position.set(-0.24, r + 0.1, 0);
        g.add(spike);
      }
      parent.add(g);
      this.bones.tail.push(g);
      this._addHit("tail", seg, 0.7);
      parent = g;
      x = -0.95;
    }
    const barb = limbMesh(new THREE.ConeGeometry(0.16, 0.72, 6), this.materials.claw);
    barb.rotation.z = -Math.PI / 2;
    barb.position.set(-1.1, 0, 0);
    parent.add(barb);
  }

  _buildWings(chest, body, wing, claw, build) {
    const span = build.wingSpan;
    this.bones.wings = [];
    for (const side of [-1, 1]) {
      const root = new THREE.Group();
      root.position.set(0.3, 0.52 * build.bodyGirth, 0.5 * side);
      chest.add(root);

      const shoulder = limbMesh(new THREE.SphereGeometry(0.22, 10, 8), body);
      root.add(shoulder);
      const upper = limbMesh(new THREE.CylinderGeometry(0.09, 0.17, 3.2 * span, 8), body);
      upper.rotation.x = Math.PI / 2;
      upper.position.set(-0.1, 0.05, 1.5 * span * side);
      root.add(upper);

      const membrane = new THREE.Mesh(membraneGeometry(span), wing);
      membrane.castShadow = true;
      membrane.scale.z = side;
      membrane.position.set(-0.35, -0.1, 0.2 * side);
      root.add(membrane);
      this._addHit("wing", membrane, 0.55);

      for (const [reach, drop, thick] of [
        [4.3, -0.2, 0.06],
        [2.7, -1.15, 0.05],
        [1.55, -1.25, 0.04],
      ]) {
        const finger = limbMesh(new THREE.CylinderGeometry(thick * 0.6, thick, Math.hypot(reach * span, drop), 6), body);
        finger.position.set(-0.35 + drop * 0.5, -0.1, (0.2 + reach * span * 0.5) * side);
        finger.rotation.x = Math.PI / 2;
        finger.rotation.y = Math.atan2(drop, reach * span) * -side;
        root.add(finger);
      }

      const hook = limbMesh(new THREE.ConeGeometry(0.06, 0.4, 5), claw);
      hook.position.set(-0.3, -0.1, 4.4 * span * side);
      hook.rotation.z = -Math.PI / 2.4;
      root.add(hook);

      root.userData.side = side;
      this.bones.wings.push(root);
    }
  }

  _buildLegs(chest, body, claw, girth) {
    this.bones.legs = [];
    for (const [x, z, size] of [
      [0.72, 0.42, 1.0],
      [0.72, -0.42, 1.0],
      [-1.25, 0.46, 1.25],
      [-1.25, -0.46, 1.25],
    ]) {
      const hip = new THREE.Group();
      hip.position.set(x, -0.42 * girth, z * girth);
      const thigh = limbMesh(new THREE.CylinderGeometry(0.15 * size, 0.22 * size, 0.7 * size, 8), body);
      thigh.position.y = -0.32 * size;
      thigh.rotation.x = 0.3 * Math.sign(z);
      hip.add(thigh);
      const shin = limbMesh(new THREE.CylinderGeometry(0.1 * size, 0.14 * size, 0.62 * size, 8), body);
      shin.position.set(0, -0.62 * size, -0.14 * size * Math.sign(z));
      hip.add(shin);
      const foot = limbMesh(new THREE.BoxGeometry(0.26 * size, 0.1 * size, 0.34 * size), body);
      foot.position.set(0, -0.94 * size, -0.24 * size * Math.sign(z));
      hip.add(foot);
      for (let i = -1; i <= 1; i++) {
        const talon = limbMesh(new THREE.ConeGeometry(0.05 * size, 0.26 * size, 5), claw);
        talon.position.set(0.09 * size * i, -0.98 * size, -0.42 * size * Math.sign(z));
        talon.rotation.x = Math.PI / 2 * Math.sign(z) * -1;
        hip.add(talon);
      }
      chest.add(hip);
      this.bones.legs.push(hip);
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

  update(dt, pose) {
    this.anim += dt;
    const look = this.spec.look;
    const flapAmount = pose.flap ?? 1;
    const rate = this.flapRate * (pose.flapRate ?? 1);
    const flap = Math.sin(this.anim * rate) * 0.5 * flapAmount;
    for (const w of this.bones.wings) {
      // Wings extend along local Z, so they have to pivot about X to move at all.
      w.rotation.x = (flap - 0.05) * w.userData.side;
      w.rotation.y = flap * 0.1 * w.userData.side;
    }

    this.bones.neck.forEach((seg, i) => {
      seg.rotation.z = Math.sin(this.anim * 1.4 + i * 0.4) * 0.07 + (pose.neck ?? 0) * (i + 1) * 0.2;
      seg.rotation.y = THREE.MathUtils.damp(seg.rotation.y, (pose.lookAt ?? 0) * 0.3, 4, dt);
    });

    const lash = pose.lash ?? 1;
    this.bones.tail.forEach((seg, i) => {
      seg.rotation.y = Math.sin(this.anim * 2.1 + i * 0.7) * 0.18 * lash;
      seg.rotation.z = Math.cos(this.anim * 1.6 + i) * 0.05;
    });

    this.bones.legs.forEach((leg, i) => {
      const tuck = pose.grounded ? 0 : 0.55;
      leg.rotation.x = THREE.MathUtils.damp(leg.rotation.x, tuck + Math.sin(this.anim * 1.1 + i) * 0.05, 3, dt);
    });

    this.pain = Math.max(0, this.pain - dt);
    this.jaw = THREE.MathUtils.damp(this.jaw, pose.jaw ?? 0.05, 8, dt);
    this.jawBone.rotation.z = this.jaw;

    const pulse = Math.sin(this.anim * 2.2) * 0.22 + 1;
    const charge = pose.charge ?? 0;
    this.materials.body.emissiveIntensity = look.emissiveBase * pulse + this.pain * 2 + charge * 3;
    this.materials.wing.emissiveIntensity = look.emissiveBase * 0.3 * pulse + charge;
    if (this.glow) this.glow.intensity = look.glowIntensity * pulse * (1 + charge * 1.5);

    if (pose.dead) {
      this.root.rotation.x = THREE.MathUtils.damp(this.root.rotation.x, 1.05, 2.2, dt);
      this.root.rotation.z = THREE.MathUtils.damp(this.root.rotation.z, 0.7, 1.6, dt);
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
