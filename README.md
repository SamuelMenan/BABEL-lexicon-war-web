# BABEL: Lexicon War Landing

Landing comercial de BABEL: Lexicon War construida con Next.js (App Router), Tailwind CSS v4 y shadcn/ui.

## Stack

- Next.js 16
- React 19
- Tailwind CSS v4
- shadcn/ui

## Scripts

- `npm run dev`: entorno local de desarrollo
- `npm run lint`: validacion de calidad con ESLint
- `npm run build`: build de produccion
- `npm run start`: servidor de produccion

## Desarrollo local

1. Instala dependencias:

   ```bash
   npm install
   ```

2. Ejecuta el servidor:

   ```bash
   npm run dev
   ```

3. Abre `http://localhost:3000`.

## Estructura principal

- `app/page.tsx`: landing principal
- `app/globals.css`: tema visual global
- `components/ui/*`: componentes shadcn/ui
- `lib/analytics.ts`: tracking de eventos CTA

## Despliegue en Vercel

1. Importa el repositorio en Vercel.
2. Framework: Next.js.
3. Build command: `npm run build`.
4. Deploy.

## Nota

Los enlaces de conversion (wishlist, compra, discord, newsletter, trailer) se configuran en `LINKS` dentro de `app/page.tsx`.
