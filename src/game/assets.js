import * as THREE from "three";

const MAPS = ["albedo", "normal", "roughness", "metallic", "ao", "emissive"];
const PACKS = [
  "dragon_scales",
  "dragon_wing",
  "terrain_rock",
  "weapon_metal",
  "weapon_wood",
  "leather_glove",
  "lava",
];

function configure(tex, { srgb = false, repeat = 1 } = {}) {
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeat, repeat);
  tex.anisotropy = 8;
  tex.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  tex.needsUpdate = true;
  return tex;
}

export async function loadTextures() {
  const loader = new THREE.TextureLoader();
  const load = (url) =>
    new Promise((resolve, reject) => {
      loader.load(url, resolve, undefined, reject);
    });

  const library = {};
  await Promise.all(
    PACKS.map(async (stem) => {
      const pack = {};
      await Promise.all(
        MAPS.map(async (map) => {
          const tex = await load(`/assets/textures/pbr/${stem}_${map}.png`);
          configure(tex, { srgb: map === "albedo" || map === "emissive", repeat: 1 });
          pack[map] = tex;
        })
      );
      library[stem] = pack;
    })
  );

  library.sky = configure(await load("/assets/textures/pbr/sky_ash_storm.png"), {
    srgb: true,
    repeat: 1,
  });
  library.sky.wrapS = library.sky.wrapT = THREE.ClampToEdgeWrapping;
  return library;
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
    envMapIntensity: 0.35,
    ...extra,
  });
}
