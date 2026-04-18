# DAG — Detección Activa de Ganado

Dynamic marketing site for **DAG**, a cattle monitoring system operated via drone. Spanish-first (`lang="es"`) with inline English translations. Built with React 18, TypeScript, Vite, and React Router v6.

## Prerequisites

- **Node.js 18+** (20 recommended)
- **npm** (ships with Node)

## Running it locally

```
npm install
npm run dev
```

Open <http://localhost:5173>. Changes hot-reload automatically.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Type-check, then build the production bundle into `dist/` |
| `npm run preview` | Serve the production build locally for sanity-checking |
| `npm run typecheck` | Run TypeScript with `--noEmit` to verify types without bundling |

## Project structure

```
src/
├── components/   Reusable primitives (Button, Nav, StatCard, Sparkline, Callout, ...)
├── sections/     Page-composing sections (Hero, FeatureBlock, ProcessStep, DemoCTA, ...)
├── routes/       One file per route — Home, Features, HowItWorks, Dashboard, plus Layout
├── providers/    React contexts (I18nProvider)
├── hooks/        Custom hooks (useScrollToHash, usePaletteFromConfig)
├── content/      Typed content dictionary (es.ts / en.ts, Content shape in types.ts)
├── lib/          Pure helpers (palette parser)
├── types/        Shared TypeScript types
└── styles/       globals.css (resets + CSS custom property defaults + grain overlay)
```

## Palette configuration

Colors are centralized as CSS custom properties (`--primary`, `--secondary`, `--bg-main`, etc.) and loaded at runtime from `public/palette-config.txt`.

1. Open `public/palette-config.txt`.
2. Set `active=<palette-name>` to one of the defined palettes (e.g., `campo-clasica`, `campo-atardecer`, `argentina`).
3. Refresh the browser. No rebuild needed — `palette-loader`-style code runs on mount and overrides `:root` tokens.

You can also add your own palette block:

```
[palette your-name]
bg-main=#...
primary=#...
secondary=#...
brand=#...
text-primary=#...
text-muted=#...
text-subtle=#...
border-default=#...
surface=#...
cta-hover=#...
```

When adding a new design token, update (a) the `:root` defaults in `src/styles/globals.css`, (b) the `PaletteToken` union in `src/types/palette.ts`, and (c) every `[palette ...]` block in `public/palette-config.txt`, or the new token will fall back to its default.

## Internationalization

Translations live in a typed dictionary:

- `src/content/types.ts` — the `Content` shape and narrow types (`MeterTone`, `KpiDirection`, etc.).
- `src/content/es.ts` / `src/content/en.ts` — the actual Spanish and English strings.
- `src/providers/I18nProvider.tsx` — `useT()` returns the current language's full nested object.

Switch languages via the `ES` / `EN` toggle in the header. Choice persists via `localStorage["dag-lang"]`.

## Legacy static site

The original hand-coded static HTML version of this site is preserved in `_legacy/` and still runs standalone. See [`_legacy/README.md`](./_legacy/README.md) for how to serve it.

## Deployment

Deploys to **Vercel**. Vite produces a static build in `dist/`. For SPA routing to work on refresh (`/caracteristicas` → returns `index.html`, not 404), ensure the host rewrites unknown paths to `/index.html`. Vercel's React preset handles this automatically; on other hosts you may need an explicit catch-all rewrite.
