# Sylva — Into the living world

`<SylvaHero variant="living-green" />` from ThreeUI (`@designcodeio/threeui@1.2.0`), wired full-viewport.

## Run
```bash
npm install
npm run dev        # http://localhost:5173
npm run build && npm run preview
```

## How it's wired
- `src/App.tsx` renders `SylvaHero` with the configured typography props inside `.shader-frame` (full viewport).
- `SylvaHero` loads the canonical page in an iframe from `/landing-pages/inner-green-3d.html`, so the runtime
  files live in `public/landing-pages/` at those exact root-relative URLs:
  - `inner-green-3d.html` (canonical source)
  - `inner-green-assets/three.min.js` (local Three.js r149 — no CDN)
  - `inner-green-assets/lexend-latin.woff2`, `card-ethos.jpg`, `card-ecostove.jpg`
- `./verify-assets.sh` re-checks those five files against the SHA-256 hashes from the brief.

## Notes
- The package's `SylvaHero` ships only the Living Green world and has no `variant` prop; it is passed through as configured.
- `headingSize={63}` is in the page's design units and is scaled by the page's `--u` viewport unit (≈56.7px at 1440px wide).
- Deploy with the `public/landing-pages/` folder served from the site root (don't change the base path without updating the iframe URL).
