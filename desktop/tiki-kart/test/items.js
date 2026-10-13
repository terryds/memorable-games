// Fire each weapon at a kart ahead/behind and check it lands.
const stub = new Proxy(function () {}, { get: (t, k) => (k === Symbol.toPrimitive ? () => 0 : stub), apply: () => stub, set: () => true });
globalThis.document = { createElement: () => ({ getContext: () => stub }) };
const THREE = await import('three');
const { Track } = await import('../src/track.js');
const { Kart, CHARACTERS } = await import('../src/kart.js');
const { ItemSystem } = await import('../src/items.js');
const track = new Track();
const P = { emit() {} }, fx = { fire: P, smoke: P, spark: P, dust: P };
const scene = new THREE.Scene();
for (const [item, gap] of [['missile', 30], ['bomb', 25], ['tnt', -8]]) {
  const items = new ItemSystem(scene, track, null, fx);
  const a = new Kart(CHARACTERS[0], null, null, true), b = new Kart(CHARACTERS[1], null, null);
  const i0 = track.cp[4];
  a.place(track, i0, 0); b.place(track, i0 + gap / track.ds, item === 'bomb' ? 0.5 : 1);
  a.speed = 20; b.speed = item === 'tnt' ? 26 : 18;
  a.item = item;
  const order = () => [a, b].sort((x, y) => y.progress - x.progress);
  items.use(a, order());
  let hitAt = null;
  for (let t = 0; t < 6 && hitAt === null; t += 1 / 120) {
    const inA = { throttle: item === 'tnt' ? 0.4 : 1, brake: 0, steer: 0 }, inB = { throttle: 1, brake: 0, steer: 0 };
    a.update(1 / 120, inA, track); b.update(1 / 120, inB, track);
    items.update(1 / 120, [a, b], order(), t);
    if (b.spinTime > 0) hitAt = t;
  }
  console.log(item.padEnd(8), hitAt !== null ? `hit target after ${hitAt.toFixed(2)}s` : 'MISSED', 'projectiles left', items.projectiles.length, 'crates', items.crates.length);
}
