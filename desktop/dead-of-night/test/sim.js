// Headless playthrough: the "player" is also a bot that walks the route (door -> docks -> radio -> boat).
// Usage: bun test/sim.js [easy|normal|advanced] [seed]
import { Game } from '../src/sim.js';
import { BotBrain } from '../src/bots.js';
import * as M from '../src/map.js';
const diff = process.argv[2] || 'normal', seed = +(process.argv[3] || 1);
const g = new Game({ diff, seed });
const brains = g.survivors.map((s, i) => new BotBrain(s, g, i));
const route = [[22, 118], [70, 116], [128, 110], [130, 76], [118, 50], [172, 42], [140, 40], [134, 30], [100, 16], [40, 16], [26, 24]];
let wi = 0;
brains[0].goal = function () {
  const s = this.s;
  if (g.finale.boat) return [12, 20];
  if (g.finale.started) return [24, 22];
  if (wi < route.length && Math.hypot(route[wi][0] - s.x, route[wi][1] - s.z) < 4) wi++;
  return route[Math.min(wi, route.length - 1)];
};
const counts = {};
let t = 0; const dt = 1 / 60, log = [];
let lastLog = 0;
while (t < 1500 && !g.over) {
  const inputs = brains.map((b) => b.think(dt));
  // the pilot presses use at the door and the radio
  const p = g.player;
  if (!g.doorOpen && Math.hypot(24 - p.x, 118 - p.z) < 2.8) inputs[0].use = (Math.floor(t * 10) % 2) === 0;
  if (!g.finale.started && Math.hypot(26 - p.x, 26 - p.z) < 2.5) inputs[0].use = (Math.floor(t * 10) % 2) === 0;
  g.step(dt, inputs);
  t += dt;
  for (const e of g.events) counts[e.type] = (counts[e.type] || 0) + 1;
  g.events.length = 0;
  if (t - lastLog > 30) { lastLog = t; log.push(`${t.toFixed(0)}s wp${wi} prog${(g.progress ?? 0).toFixed(0)} z${g.zombies.filter((z) => !z.dead).length} sp${g.specials.filter((q) => !q.dead).length} hp[${g.survivors.map((s) => s.dead ? 'X' : s.incap ? 'i' + s.incapHp.toFixed(0) : s.hp.toFixed(0)).join(',')}]${g.finale.started ? ' FINALE ' + g.finale.t.toFixed(0) : ''}`); }
}
console.log(log.join('\n'));
console.log('OVER', JSON.stringify(g.over), 'time', t.toFixed(0) + 's');
console.log('kills', g.survivors.map((s) => s.name + ':' + s.stats.kills + '/' + s.stats.specials + ' inc' + s.stats.incaps).join(' '));
const pick = ['zhit', 'hurt', 'pounce', 'vomit', 'tankpunch', 'shot', 'zdeath', 'incap', 'revived', 'pinned', 'horde', 'special', 'sdeath', 'witchrage', 'biled', 'healed', 'pickup', 'radio', 'boat', 'explode', 'alarm'];
console.log(pick.map((k) => k + ':' + (counts[k] || 0)).join(' '));
