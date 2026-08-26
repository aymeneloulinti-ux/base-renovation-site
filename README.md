# Roofing & Renovation Template

Reusable Next.js foundation for client websites in the roofing and renovation space. This project currently contains framework scaffolding only; visual design, content, and reusable UI components are intentionally added later.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- ESLint

## Structure

```text
public/
  assets/       Static images, logos, icons, and fonts
src/
  app/          App Router layouts, pages, route-level styles, and metadata
  components/   Reusable UI components and future Lovable imports
  data/         Client content and template configuration
  lib/          Shared, framework-agnostic utilities
  types/        Shared TypeScript contracts
```

Use the `@/*` alias for imports from `src`, for example `@/components/...` or `@/lib/...`.

## Development

```bash
npm run dev
npm run lint
npm run build
```

## Lovable integration

Place imported Lovable components in `src/components` and keep route composition in `src/app`. Preserve each component's client/server boundary with a file-level `"use client"` directive when required. Keep page-specific composition in the route folder rather than coupling imported components to a single client.

Move reusable content and configuration into `src/data`, shared contracts into `src/types`, framework-agnostic helpers into `src/lib`, and static files into `public/assets`. Import local code through the `@/*` alias so components can move between routes without changing project-relative paths.

Add a dependency only when an imported component actually requires it. Keep backend, database, authentication, and API concerns outside this template foundation until a client project explicitly needs them.
