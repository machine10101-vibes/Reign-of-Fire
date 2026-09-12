export function hash(x, z) {
  let n = Math.sin(x * 127.1 + z * 311.7) * 43758.5453;
  return n - Math.floor(n);
}

export function noise2(x, z) {
  const ix = Math.floor(x);
  const iz = Math.floor(z);
  const fx = x - ix;
  const fz = z - iz;
  const ux = fx * fx * (3 - 2 * fx);
  const uz = fz * fz * (3 - 2 * fz);
  const a = hash(ix, iz);
  const b = hash(ix + 1, iz);
  const c = hash(ix, iz + 1);
  const d = hash(ix + 1, iz + 1);
  return a + (b - a) * ux + (c - a) * uz + (a - b - c + d) * ux * uz;
}

export function fbm(x, z, octaves = 5) {
  let v = 0;
  let a = 0.5;
  let f = 1;
  for (let i = 0; i < octaves; i++) {
    v += a * noise2(x * f, z * f);
    f *= 2.03;
    a *= 0.5;
  }
  return v;
}

function hash3(x, y, z) {
  const n = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453;
  return n - Math.floor(n);
}

/**
 * Value noise in three dimensions.
 *
 * Displacing a solid with the 2D generator leaves the value constant along the
 * unused axis, so every lump becomes an extrusion and the result reads as a
 * slab with straight creases down it rather than as a broken rock.
 */
export function noise3(x, y, z) {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const iz = Math.floor(z);
  const fx = x - ix;
  const fy = y - iy;
  const fz = z - iz;
  const ux = fx * fx * (3 - 2 * fx);
  const uy = fy * fy * (3 - 2 * fy);
  const uz = fz * fz * (3 - 2 * fz);
  const c = (dx, dy, dz) => hash3(ix + dx, iy + dy, iz + dz);
  const x00 = c(0, 0, 0) + (c(1, 0, 0) - c(0, 0, 0)) * ux;
  const x10 = c(0, 1, 0) + (c(1, 1, 0) - c(0, 1, 0)) * ux;
  const x01 = c(0, 0, 1) + (c(1, 0, 1) - c(0, 0, 1)) * ux;
  const x11 = c(0, 1, 1) + (c(1, 1, 1) - c(0, 1, 1)) * ux;
  const y0 = x00 + (x10 - x00) * uy;
  const y1 = x01 + (x11 - x01) * uy;
  return y0 + (y1 - y0) * uz;
}

export function fbm3(x, y, z, octaves = 4) {
  let v = 0;
  let a = 0.5;
  let f = 1;
  for (let i = 0; i < octaves; i++) {
    v += a * noise3(x * f, y * f, z * f);
    f *= 2.03;
    a *= 0.5;
  }
  return v;
}

export function ridge(x, z) {
  return 1 - Math.abs(fbm(x * 0.55, z * 0.55, 4) * 2 - 1);
}
