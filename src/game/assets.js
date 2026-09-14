import * as THREE from "three";

const MAPS = ["albedo", "normal", "roughness", "metallic", "ao", "emissive"];
const COLOR_MAPS = new Set(["albedo", "emissive"]);

/** Packs the first frame cannot be drawn without. */
const CORE_PACKS = [
  "dragon_scales",
  "dragon_wing",
  "terrain_rock",
  "weapon_metal",
  "weapon_wood",
  "leather_glove",
  "lava",
  "obsidian",
  "bone",
  "burnt_bark",
];

function texturePath(stem, map) {
  return `${import.meta.env.BASE_URL}assets/textures/pbr/${stem}_${map}.webp`;
}

function configure(tex, srgb) {
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.anisotropy = 8;
  tex.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  tex.needsUpdate = true;
  return tex;
}

/**
 * Holds the baked PBR sets. Core packs are resolved before the first frame;
 * species scale packs are pulled in on demand so the opening download stays
 * close to the size of what is actually on screen.
 */
export class TextureLibrary {
  constructor() {
    this.loader = new THREE.TextureLoader();
    this.packs = new Map();
    this._pending = new Map();
    this._progress = null;
    this._loaded = 0;
    this._total = 0;
  }

  onProgress(fn) {
    this._progress = fn;
  }

  _load(url) {
    return new Promise((resolve, reject) => {
      this.loader.load(url, resolve, undefined, reject);
    });
  }

  has(stem) {
    return this.packs.has(stem);
  }

  /**
   * @param {string} stem
   * @param {{ clone?: boolean }} [opts] `clone` yields independent textures so
   *   two meshes can tile the same material at different densities.
   */
  pack(stem, opts = {}) {
    const pack = this.packs.get(stem);
    if (!pack) throw new Error(`texture pack not loaded: ${stem}`);
    if (!opts.clone) return pack;
    const copy = {};
    for (const map of MAPS) {
      const tex = pack[map].clone();
      tex.needsUpdate = true;
      copy[map] = tex;
    }
    return copy;
  }

  async ensure(stem) {
    if (this.packs.has(stem)) return this.packs.get(stem);
    if (this._pending.has(stem)) return this._pending.get(stem);
    this._total += MAPS.length;
    const job = Promise.all(
      MAPS.map(async (map) => {
        const tex = configure(await this._load(texturePath(stem, map)), COLOR_MAPS.has(map));
        this._loaded++;
        this._progress?.(this._loaded, this._total);
        return [map, tex];
      })
    ).then((entries) => {
      const pack = Object.fromEntries(entries);
      this.packs.set(stem, pack);
      this._pending.delete(stem);
      return pack;
    });
    this._pending.set(stem, job);
    return job;
  }

  /** Warm the cache without blocking; failures are irrelevant until spawn. */
  prefetch(stems) {
    for (const stem of stems) this.ensure(stem).catch(() => {});
  }

  async loadCore() {
    await Promise.all(CORE_PACKS.map((stem) => this.ensure(stem)));
    this.sky = configure(await this._load(`${import.meta.env.BASE_URL}assets/textures/pbr/sky_ash_storm.webp`), true);
    this.sky.wrapS = this.sky.wrapT = THREE.ClampToEdgeWrapping;
    return this;
  }
}

export async function loadTextures(onProgress) {
  const library = new TextureLibrary();
  if (onProgress) library.onProgress(onProgress);
  return library.loadCore();
}

export function setRepeat(pack, u, v = u) {
  for (const map of MAPS) pack[map]?.repeat.set(u, v);
  return pack;
}

export function standardFrom(pack, extra = {}) {
  return new THREE.MeshStandardMaterial({
    map: pack.albedo,
    normalMap: pack.normal,
    roughnessMap: pack.roughness,
    metalnessMap: pack.metallic,
    aoMap: pack.ao,
    emissiveMap: pack.emissive,
    emissive: extra.emissive ?? new THREE.Color(0x000000),
    emissiveIntensity: extra.emissiveIntensity ?? 1,
    metalness: extra.metalness ?? 0.2,
    roughness: extra.roughness ?? 0.6,
    envMapIntensity: extra.envMapIntensity ?? 0.55,
    ...extra,
  });
}
