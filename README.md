# webpage

Sitio web de DAG migrado a **React + Vite**, manteniendo el contenido funcional original.

## Requisitos

- Node.js 20+
- npm 10+

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí `http://localhost:5173`.

## Build de producción

```bash
npm run build
npm run preview
```

## Estructura principal

- `src/components/Layout.jsx`: layout reutilizable (header, menú móvil, footer, selector de idioma).
- `src/pages/ContentPage.jsx`: renderizado de contenido por ruta.
- `src/content/*.js`: contenido textual de cada sección/página migrada.
- `src/styles/*.css`: estilos migrados por vista.
- `src/utils/paletteLoader.js`: carga de paleta desde `public/palette-config.txt`.
