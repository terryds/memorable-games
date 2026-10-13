// Weapon & equipment table. Angles in radians, distances in metres, speeds as a fraction of 6.4 m/s.
// falloff = damage multiplier per 12.7 m (CS's per-500-units range modifier).
export const WEAPONS = {
  knife: { name: 'Knife', slot: 'knife', price: 0, dmg: 34, dmg2: 65, rate: 0.42, rate2: 1.0, range: 1.9, speed: 1, kill: 1500, icon: '🔪' },
  glock: {
    name: 'Glock-18', slot: 'secondary', team: 'T', price: 200, dmg: 28, pen: 0.47, rate: 0.15, mag: 20, reserve: 120, reload: 2.2,
    spread: 0.006, moveSpread: 0.035, spraySpread: 0.004, kick: 0.012, falloff: 0.85, speed: 1, kill: 300, auto: false,
  },
  usp: {
    name: 'USP-S', slot: 'secondary', team: 'CT', price: 200, dmg: 35, pen: 0.5, rate: 0.17, mag: 12, reserve: 24, reload: 2.2,
    spread: 0.004, moveSpread: 0.03, spraySpread: 0.004, kick: 0.016, falloff: 0.88, speed: 1, kill: 300, auto: false,
  },
  deagle: {
    name: 'Desert Eagle', slot: 'secondary', price: 700, dmg: 63, pen: 0.93, rate: 0.26, mag: 7, reserve: 35, reload: 2.2,
    spread: 0.004, moveSpread: 0.07, spraySpread: 0.012, kick: 0.05, falloff: 0.81, speed: 0.96, kill: 300, auto: false,
  },
  mp5: {
    name: 'MP5-SD', slot: 'primary', price: 1500, dmg: 27, pen: 0.62, rate: 0.075, mag: 30, reserve: 120, reload: 2.6,
    spread: 0.008, moveSpread: 0.025, spraySpread: 0.0025, kick: 0.009, falloff: 0.85, speed: 0.94, kill: 600, auto: true,
  },
  ak47: {
    name: 'AK-47', slot: 'primary', team: 'T', price: 2700, dmg: 36, pen: 0.775, rate: 0.1, mag: 30, reserve: 90, reload: 2.5,
    spread: 0.0035, moveSpread: 0.09, spraySpread: 0.0035, kick: 0.018, falloff: 0.98, speed: 0.86, kill: 300, auto: true,
  },
  m4a1: {
    name: 'M4A1', slot: 'primary', team: 'CT', price: 3100, dmg: 33, pen: 0.7, rate: 0.09, mag: 30, reserve: 90, reload: 3.1,
    spread: 0.003, moveSpread: 0.08, spraySpread: 0.003, kick: 0.015, falloff: 0.97, speed: 0.9, kill: 300, auto: true,
  },
  awp: {
    name: 'AWP', slot: 'primary', price: 4750, dmg: 115, pen: 0.975, rate: 1.45, mag: 10, reserve: 30, reload: 3.6,
    spread: 0.0008, moveSpread: 0.15, spraySpread: 0, kick: 0.06, falloff: 0.99, speed: 0.78, kill: 100, auto: false,
    scope: true, unscoped: 0.09,
  },
  he: { name: 'HE Grenade', slot: 'nade', price: 300, nade: 'he', max: 1, speed: 1, kill: 300 },
  flash: { name: 'Flashbang', slot: 'nade', price: 200, nade: 'flash', max: 2, speed: 1 },
  smoke: { name: 'Smoke Grenade', slot: 'nade', price: 300, nade: 'smoke', max: 1, speed: 1 },
  c4: { name: 'C4 Explosive', slot: 'c4', speed: 1 },
};
export const BUY_MENU = [
  { cat: 'Pistols', items: ['glock', 'usp', 'deagle'] },
  { cat: 'SMG', items: ['mp5'] },
  { cat: 'Rifles', items: ['ak47', 'm4a1', 'awp'] },
  { cat: 'Grenades', items: ['he', 'flash', 'smoke'] },
  { cat: 'Gear', items: ['vest', 'vesthelm', 'kit'] },
];
export const GEAR = {
  vest: { name: 'Kevlar Vest', price: 650 },
  vesthelm: { name: 'Kevlar + Helmet', price: 1000 },
  kit: { name: 'Defuse Kit', price: 400, team: 'CT' },
};
// spray pattern: horizontal drift per shot (multiplied by kick); vertical climb tapers after ~9 shots
export const SPRAY_X = [0, 0, 0.1, 0.15, 0.25, 0.3, 0.1, -0.4, -0.9, -1.2, -1, -0.5, 0.4, 1, 1.3, 1.1, 0.5, -0.3, -1, -1.3, -1, -0.4, 0.4, 1, 1.2, 0.8, 0.2, -0.5, -1, -1];
export const sprayY = (i) => (i < 9 ? 1 : 0.28);
