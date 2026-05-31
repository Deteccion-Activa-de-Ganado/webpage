# DAG — Detección Activa de Ganado

Dynamic marketing site for **DAG**, a cattle monitoring system operated via drone. Solo español. Built with React 18, TypeScript, Vite, and React Router v6 (carpetas de rutas al estilo Next.js App Router).

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
├── app/          Rutas (page.tsx por carpeta, layout, routes.ts)
├── components/   UI reutilizable (Button, Nav, StatCard, ...)
├── sections/     Bloques presentacionales (reciben content por props)
├── hooks/        useScrollToHash, usePaletteFromConfig
├── lib/          Helpers (palette, airtable)
├── types/        Tipos compartidos (ui, blocks)
└── styles/       globals.css
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

## Páginas (estilo Next.js App Router)

Las rutas viven en `src/app/`. Cada carpeta es un segmento de URL:

| Carpeta | URL |
|---------|-----|
| `app/page.tsx` | `/` |
| `app/caracteristicas/` | `/caracteristicas` |
| `app/como-funciona/` | `/como-funciona` |
| `app/dashboard/` | `/dashboard` |
| `app/encuesta/` | `/encuesta` |

En cada carpeta:

- **`page.tsx`** — la página entera: composición y textos en JSX (props inline o bloques `<Section>`).
- **`index.ts`** — reexporta `page` (opcional, para imports limpios).

Ejemplo en inicio (`app/page.tsx`): `<Hero titleLine1="..." lede="..." />` sin archivos de datos aparte.

Nav y footer llevan sus textos directo en `components/Nav/Nav.tsx` y `components/Footer/Footer.tsx`.

El registro de rutas está en `src/app/routes.ts`. `sections/` son componentes reutilizables que reciben props desde cada `page.tsx`.

## Legacy static site

The original hand-coded static HTML version of this site is preserved in `_legacy/` and still runs standalone. See [`_legacy/README.md`](./_legacy/README.md) for how to serve it.

## Deployment

Deploys to **Vercel**. Vite produces a static build in `dist/`. For SPA routing to work on refresh (`/caracteristicas` → returns `index.html`, not 404), ensure the host rewrites unknown paths to `/index.html`. Vercel's React preset handles this automatically; on other hosts you may need an explicit catch-all rewrite.
