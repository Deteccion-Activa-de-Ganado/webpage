# DAG — Legacy static site

This folder holds the **original static HTML** version of the DAG marketing site. It's preserved as a reference and still runs independently of the React version at the repo root.

## Running it locally

From the repo root:

```
cd _legacy
python3 -m http.server 8000
```

Then open <http://localhost:8000/index.html>.

**Do not open the HTML files via `file://`.** `palette-loader.js` uses `fetch()` to read `palette-config.txt`, and most browsers block that under the `file://` protocol. The page still renders (each HTML file inlines default palette values in `:root`), but palette switching silently falls back to the defaults.

## How assets resolve

`palette-config.txt` and `img/` here are **symlinks** into `../public/` — the same assets the React app uses. Editing `public/palette-config.txt` affects both sites. No duplication.

```
_legacy/
├── index.html            ← original landing
├── caracteristicas.html  ← original features
├── como-funciona.html    ← original how it works
├── dashboard.html        ← original dashboard preview
├── palette-loader.js     ← runtime palette override script
├── palette-config.txt    → ../public/palette-config.txt   (symlink)
├── img/                  → ../public/img/                 (symlink)
└── tsconfig.node.json    ← superseded tsconfig, preserved
```

## Palette configuration

The site loads its color palette from `palette-config.txt`. Because it's a symlink to `../public/palette-config.txt`, editing either path works.

1. Open `palette-config.txt` (or equivalently `../public/palette-config.txt`).
2. Set `active=` to one of the available palette names (e.g., `campo-clasica`, `campo-atardecer`, `argentina`).
3. Refresh any page.

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

## The dynamic React site

The current, actively-developed version of the site lives at the repo root and uses React + TypeScript + Vite. See [../README.md](../README.md) for how to run it.
