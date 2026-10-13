// Headless race: 6 AI karts, 3 laps — checks lap times, jump success, drifts and wall hits.
import { Track } from '../src/track.js';
import { Kart, KartAI, CHARACTERS, collideKarts } from '../src/kart.js';
const track = new Track();
const karts = [], ais = [];
const f = track.finishIdx;
CHARACTERS.forEach((ch, i) => {
  const k = new Kart(ch, null, null, false);
  const row = Math.floor(i / 2), side = i % 2 ? 3.2 : -3.2;
  k.place(track, f - 4 - row * 5, side);
  karts.push(k); ais.push(new KartAI(k, track, { skill: 0.92 + (i % 3) * 0.04, lane: side * 0.5, seed: i + 1 }));
});
const stats = karts.map(() => ({ falls: 0, walls: 0, turbos: 0, perfect: 0, hang: 0, launches: 0, laps: [] }));
let t = 0; const dt = 1 / 120;
while (t < 300 && karts.some((k) => !k.finished)) {
  t += dt;
  karts.forEach((k, i) => {
    k.update(dt, ais[i].input(dt, karts, 0, t), track);
    for (const e of k.events) {
      if (e.type === 'fall') { stats[i].falls++; console.log('FALL', k.ch.name, t.toFixed(1), 'i', k.q.i, 'resp', k.respawnIdx, 'lat', k.q.lat.toFixed(1), 'y', k.y.toFixed(1), 'ph', k.passedHalf, 'rel', k.rel.toFixed(0)); }
      if (e.type === 'wall') { stats[i].walls++; if (process.env.V && e.v > 8) console.log('wall', k.ch.name, t.toFixed(1), 'i', k.q.i, 'v', e.v.toFixed(1), 'spd', k.speed.toFixed(1), 'drift', k.drifting); }
      if (e.type === 'turbo') { stats[i].turbos++; if (e.perfect) stats[i].perfect++; }
      if (e.type === 'hangtime') stats[i].hang++;
      if (e.type === 'launch') stats[i].launches++;
    }
    if (k.lapEvent) { k.lapEvent = false; stats[i].laps.push(t.toFixed(1)); if (k.lap > 3 && !k.finished) { k.finished = true; k.finishTime = t; } }
  });
  collideKarts(karts);
}
karts.forEach((k, i) => console.log(k.ch.name.padEnd(7), k.finished ? k.finishTime.toFixed(1) + 's' : 'DNF(lap ' + k.lap + ')', JSON.stringify(stats[i])));
karts.forEach((k) => { if (!k.finished) console.log('DNF state', k.ch.name, 'i', k.q.i, 'lap', k.lap, 'rel', k.rel.toFixed(0), 'spd', k.speed.toFixed(1), 'y', k.y.toFixed(1), 'air', k.airborne, 'resp', k.respawnTimer.toFixed(2), 'ww', k.wrongWay.toFixed(1), 'lat', k.q.lat.toFixed(1)); });
