# Memorable Games

*A tribute to the games we grew up with.*

The classics you remember — rebuilt from scratch to play instantly in the browser: six mobile
hits plus two 3D racers for the big screen.
Live at **https://games.terrydjony.com**

| # | Game | Path | Controls |
|---|------|------|----------|
| 1 | 🍉 Fruit Ninja | `/fruit-ninja/` | Swipe to slice (mouse drag) |
| 2 | 🐦 Flappy Bird | `/flappy-bird/` | Tap to flap (Space / click) |
| 3 | 🟢 Doodle Jump | `/doodle-jump/` | Tilt your phone (default) or hold left / right, tap to shoot (keyboard ← → / Space) |
| 4 | 🚗 Two Cars | `/two-cars/` | Tap left / right half (keyboard ← →) |
| 5 | 🎸 Guitar Hero | `/guitar-hero/` | Tap the frets (keyboard A S D F G, Space = Star Power) |
| 6 | 🔢 2048 | `/2048/` | Swipe to slide tiles (arrow keys / WASD, U = undo) |

### Desktop

| # | Game | Path | Controls |
|---|------|------|----------|
| 7 | 🏎️ Carbon Nights | `/carbon-nights/` | Game controller recommended (RT gas, LT brake, A drift, B nitro). Keyboard: W/S, A/D, Space = handbrake, Shift = nitro, Q = Speedbreaker, C = camera, R = reset |
| 8 | 🏝️ Tiki Kart Rally | `/tiki-kart/` | Controller recommended (A/RT gas, RB hop + powerslide, LB turbo, B item). Keyboard: W/S, A/D, Space = hop/slide, Shift = turbo, E = item, R = rescue |

Carbon Nights is a Three.js street racer inspired by a 2006 night-racing classic: a wet neon
downtown, a canyon road with a view over the city, and a waterfront run past a lit suspension
bridge. Circuit Race (vs 3 AI rivals), Drift Attack and Free Roam; Tuner / Muscle / Exotic cars.

Tiki Kart Rally is a cartoon kart racer inspired by a 1999 kart classic: 3 laps of Tiki Island
(beach, temple tunnel, a cliff jump over a waterfall ravine, rope bridge) against 5 AI racers, with
powerslide turbo chains, item boxes (homing rockets, bombs, TNT, shields, turbos) and fruit.

## How it's built

- **Zero dependencies, zero build step.** Every game is one self-contained `index.html`
  (HTML + CSS + canvas JS) plus a web-app manifest and an SVG icon.
- **All assets are made in code** — sprites, backgrounds and sound effects are drawn /
  synthesized at runtime. Guitar Hero's three songs are composed procedurally from a seed
  and played through a Web Audio synth band, so the note chart and the music always match.
- **Mobile-first**: touch controls, safe-area insets, no zoom/scroll bounce, and each game
  can be installed to the home screen (opens full-screen).
- **High scores** live in `localStorage` (per-game key prefixes: `twocars.`, `dj.`, `fn.`,
  `flappy.`, `gh.`, `g2048.`, `cn-`, `tiki`), so the landing page can show your personal bests.
- **The desktop games are the one exception to "no build step"**: they use Three.js, so their
  source lives in `desktop/<game>/` and is bundled with Bun into `public/<game>/dist/main.js`.
  The bundles are committed, so deploying still needs no build.

```
.
├── wrangler.jsonc        # Cloudflare Workers config (serves ./public as static assets)
├── desktop/
│   ├── carbon-nights/    # Three.js source for the street racer (src/, test/ physics sims)
│   └── tiki-kart/        # Three.js source for the kart racer (src/, test/ race + item sims)
└── public/               # everything that gets deployed
    ├── index.html        # landing page
    ├── 404.html          # "Game over" not-found page
    ├── assets/
    │   ├── icon.svg      # site favicon
    │   ├── og.png        # social share image (1200×630)
    │   └── shots/*.jpg   # game thumbnails used on the landing page
    ├── fruit-ninja/      # each game: index.html + manifest.json + icon.svg
    ├── two-cars/
    ├── doodle-jump/
    ├── flappy-bird/
    ├── guitar-hero/
    ├── 2048/
    ├── carbon-nights/    # index.html, style.css, manifest, icon + dist/main.js (built bundle)
    └── tiki-kart/        # same layout
```

All paths inside `public/` are relative, so the site works from any host or sub-path.

## Run locally

Any static file server pointed at `public/` works:

```bash
npx serve public          # or: python3 -m http.server 8080 -d public
npx wrangler dev          # same as production, via Cloudflare's local runtime (Node 22+)
```

### Rebuilding a desktop game

After editing anything in `desktop/<game>/src/` (`carbon-nights` or `tiki-kart`):

```bash
cd desktop/<game>
bun install
bun run build             # writes ../../public/<game>/dist/main.js — commit it
bun run sim               # optional: headless AI race to sanity-check physics
```

## Deploy (Cloudflare Workers) → games.terrydjony.com

Connect the repo in **Cloudflare dashboard → Workers & Pages → Create → Import a repository**:

| Field | Value |
|-------|-------|
| Project name | `memorable-mobile-games` (must match `name` in `wrangler.jsonc` — the Worker keeps its original name; rename both together if you ever change it) |
| Build command | *(leave empty)* |
| Deploy command | `npx wrangler deploy` |
| Preview command | `npx wrangler preview` (or leave the default) |

Every push to `main` redeploys. Then add the domain: **Worker → Settings → Domains & Routes →
Add → Custom domain → `games.terrydjony.com`** (works automatically when `terrydjony.com` uses
Cloudflare DNS).

`wrangler.jsonc` serves `public/` as static assets: `/two-cars` redirects to `/two-cars/`,
and unknown paths get `404.html`. Nothing outside `public/` (README, config, `.git`) is ever
uploaded.

The social preview (`og:image`, canonical URL) in `public/index.html` points at
`https://games.terrydjony.com/` — update those URLs if you deploy elsewhere.

## Adding a game

1. Create `public/<slug>/index.html` (+ `manifest.json` with `"start_url": "./"`, `icon.svg`).
2. Add the `← All games` link (`<a class="homeLink" href="../">`) on its menu screens.
3. Add an entry to the `GAMES` array in the landing page and a thumbnail at
   `public/assets/shots/<slug>.jpg` (390×780 @1.5x screenshot works well).
   Desktop games go in the "On the big screen" section instead, with a 16:9 thumbnail.

## Disclaimer

Fan-made tributes built for fun. Not affiliated with, endorsed by, or connected to the
original games or their creators; all trademarks belong to their respective owners.
