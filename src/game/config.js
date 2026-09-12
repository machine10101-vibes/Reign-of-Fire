export const CONFIG = {
  title: "Reign of Fire",
  worldSize: 280,
  // Just over a metre per quad, which is what it takes to resolve the
  // fractured mid-scale relief in the height field rather than average it away.
  terrainSegments: 256,
  player: {
    eye: 1.72,
    speed: 7.4,
    sprint: 12.2,
    crouch: 3.6,
    // Damping rate in 1/s for reaching full speed, not an acceleration in
    // m/s². Low enough that the hunter has some weight, high enough that a
    // sidestep away from a mortar still happens when you ask for it.
    accel: 9,
    gravity: 22,
    jump: 8.5,
    mouse: 0.0018,
    // Half-width of the hunter for the purposes of walking into scenery.
    radius: 0.5,
  },
  weapon: {
    bolts: 8,
    muzzle: 92,
    gravity: 9.2,
    reload: 2.15,
    recoil: 0.034,
    cooldown: 0.62,
    // Kilograms of moving mass, near enough. Drives how far the weapon is
    // thrown by a shot and how sluggishly it settles back onto the aim.
    mass: 4.6,
    damage: 85,
  },
  hunt: {
    // Difficulty ramps by aggression and armour, not just by hit points.
    flights: [
      { label: "Scavengers on the slope", species: ["emberkin", "emberkin"] },
      { label: "Forge-hot harrier", species: ["cinderwyrm"] },
      { label: "The ridge's landlord", species: ["ashwrought"] },
      { label: "They hunt in threes", species: ["rustwing", "rustwing", "rustwing"] },
      { label: "Fumarole brood", species: ["sulfurmaw", "emberkin"] },
      { label: "Something is stalking you", species: ["pale_stalker"] },
      { label: "Walking siege", species: ["basalt_tyrant", "cinderwyrm"] },
    ],
    flightGap: 6,
    corpseLinger: 9,
    // Long enough to read who killed you, short enough not to be a punishment.
    downed: 4.6,
    mortarRadius: 9,
    cloudLife: 7,
    cloudRadius: 7,
  },
  quality: {
    targetFps: 60,
    particleAsh: 900,
    particleEmber: 220,
    // Fraction of native resolution each tier rasterises at.
    renderScale: { low: 0.55, medium: 0.78, high: 1, cinematic: 1 },
  },
};
