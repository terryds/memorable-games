const stub = new Proxy(function () {}, { get: (t, k) => (k === Symbol.toPrimitive ? () => 0 : stub), apply: () => stub, set: () => true });
globalThis.document = { createElement: () => ({ getContext: () => stub }) };
const { Track } = await import('../src/track.js');
const { Car } = await import('../src/car.js');
const track = new Track();
for (const type of ['tuner', 'muscle', 'exotic']) {
  const c = new Car(type, '#fff', null, type);
  c.place(track, 100, 0);
  // fake an endless flat world: ignore walls by projecting with huge road (monkeypatch)
  const fakeTrack = { ...track, project: (x, z, h, out) => Object.assign(out, { i: 0, f: 0, lat: 0, y: 0, slope: 0, s: 0, tx: 0, tz: 1, rx: -1, rz: 0 }), length: track.length, startIdx: 0, ds: 2 };
  c.vx = Math.sin(c.h) * 33; c.vz = Math.cos(c.h) * 33;
  const log = [];
  for (let t = 0; t < 4; t += 1 / 120) {
    const inp = t < 0.35 ? { throttle: 0.5, brake: 0, steer: 1, handbrake: true } : t < 2.5 ? { throttle: 1, brake: 0, steer: t < 1.2 ? 0.6 : -0.3 } : { throttle: 1, brake: 0, steer: 0 };
    c.update(1 / 120, inp, fakeTrack);
    if (Math.round(t * 120) % 30 === 0) log.push(`${t.toFixed(2)}s v${(c.speed * 3.6).toFixed(0)} slip${(c.slip * 57.3).toFixed(0)}° ${c.drifting ? 'D' : '-'}`);
  }
  console.log(type, log.join(' | '));
}
