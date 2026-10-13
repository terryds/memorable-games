// Headless 5v5 bot match: checks rounds resolve (plants, defuses, eliminations, time) and nobody gets stuck.
import { Game } from '../src/sim.js';
import { SITES } from '../src/map.js';
const diff = process.argv[2] || 'normal';
const g = new Game({ botsOnly: true, difficulty: diff, winRounds: +(process.argv[3] || 8) });
g.start();
const dt = 1 / 60;
const stats = { plants: 0, defuses: 0, explodes: 0, kills: 0, hs: 0, shots: 0, hits: 0, nades: 0, buys: {}, kw: {} };
let t0 = performance.now(), steps = 0, roundStart = 0;
const stuck = new Map();
while (g.phase !== 'over' && g.time < 3600) {
  g.update(dt, null); steps++;
  for (const e of g.events) {
    if (e.type === 'planted') { stats.plants++; console.log(`  r${g.round} planted ${e.site} at ${(115 - g.roundT).toFixed(0)}s`); }
    if (e.type === 'defused') stats.defuses++;
    if (e.type === 'explode') stats.explodes++;
    if (e.type === 'kill') { stats.kills++; if (e.head) stats.hs++; stats.kw[e.w] = (stats.kw[e.w] || 0) + 1; }
    if (e.type === 'shot') { stats.shots++; if (e.hit >= 0) stats.hits++; }
    if (e.type === 'throw') stats.nades++;
    if (e.type === 'buy') stats.buys[e.item] = (stats.buys[e.item] || 0) + 1;
    if (e.type === 'roundStart') roundStart = g.time;
    if (e.type === 'roundEnd') {
      const alive = g.agents.filter((a) => a.alive).map((a) => `${a.team}:${a.name}@${a.x.toFixed(0)},${a.z.toFixed(0)}`).join(' ');
      console.log(`r${g.round} → ${e.winner} (${e.reason}) after ${(g.time - roundStart - 6).toFixed(0)}s  score T${g.score.T}-CT${g.score.CT}  alive: ${alive}`);
    }
  }
  g.events.length = 0;
  // stuck detector: alive agent that hasn't moved 1 m in 20 s of live play while not holding
  if (steps % 60 === 0 && g.phase === 'live') for (const a of g.agents) {
    if (!a.alive) continue;
    const s = stuck.get(a.id) || { x: a.x, z: a.z, t: g.time };
    if (Math.hypot(a.x - s.x, a.z - s.z) > 1) stuck.set(a.id, { x: a.x, z: a.z, t: g.time });
    else { stuck.set(a.id, s); const br = g.brains.get(a.id); if (g.time - s.t > 20 && br.mode !== 'hold' && !br.rotate) { console.log('  STUCK?', a.team, a.name, a.x.toFixed(1), a.z.toFixed(1), 'mode', br.mode, 'via', br.via, 'goal', br.pathGoal, 'c4', a.inv.c4, 'plantT', a.plantT.toFixed(2), 'tgt', br.target?.name, 'react', br.reactT.toFixed(2), 'cur', a.cur, 'bomb', g.bomb.state, 'inp', JSON.stringify(a.input), 'path', JSON.stringify(br.path), br.pi); s.t = g.time; } }
  }
}
const ms = performance.now() - t0;
console.log('final', g.score, 'rounds', g.round, 'sim time', g.time.toFixed(0) + 's', 'wall', ms.toFixed(0) + 'ms', (ms / steps).toFixed(3) + 'ms/step');
console.log(JSON.stringify(stats));
console.log(g.agents.map((a) => `${a.team} ${a.name} ${a.kills}/${a.deaths} $${a.money}`).join('\n'));
