# 3delSUR — sitio institucional

Landing pública para **3delSUR**: servicios de montaje industrial, galería de trabajos y formulario de contacto.

**Repositorio:** [github.com/jmvalesflores-create/3delsur](https://github.com/jmvalesflores-create/3delsur)

## Requisitos

- [Node.js](https://nodejs.org/) (LTS recomendado) y **npm**

## Puesta en marcha

```sh
git clone https://github.com/jmvalesflores-create/3delsur.git
cd 3delsur
npm install
```

Creá un archivo **`.env`** en la raíz (no se sube al repo) con las variables de Supabase que usa el cliente:

| Variable | Descripción |
|----------|-------------|
| `VITE_SUPABASE_URL` | URL del proyecto Supabase |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Clave pública (anon) del proyecto |

Las obtenés en el panel de Supabase: **Project Settings → API**.

```sh
npm run dev
```

El servidor de desarrollo suele quedar en **http://localhost:8080** (ver `vite.config.ts`).

## Scripts

| Comando | Uso |
|---------|-----|
| `npm run dev` | Desarrollo con recarga en caliente |
| `npm run build` | Build de producción en `dist/` |
| `npm run preview` | Vista previa del build |
| `npm run lint` | ESLint |
| `npm test` | Vitest |

## Galería de imágenes

Las fotos de la sección **Imágenes** salen de **Supabase Storage**, bucket `gallery`. Cómo subirlas sin tocar código: **[README-GALERIA.md](./README-GALERIA.md)**.

## Stack

- [Vite](https://vitejs.dev/) · [React](https://react.dev/) · [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) · [shadcn/ui](https://ui.shadcn.com/)
- [Supabase](https://supabase.com/) (Storage para la galería)

## Despliegue

Generá el sitio estático con `npm run build` y publicá la carpeta **`dist/`** en el hosting que prefieras (por ejemplo Vercel, Netlify, Cloudflare Pages, S3 + CDN, etc.). Configurá las mismas variables `VITE_*` en el panel del proveedor como variables de entorno de build.

## Estructura útil

- `src/pages/` — páginas (landing principal en `Index.tsx`)
- `src/components/` — secciones y UI
- `src/integrations/supabase/` — cliente y tipos de Supabase
- `supabase/migrations/` — migraciones SQL del proyecto
