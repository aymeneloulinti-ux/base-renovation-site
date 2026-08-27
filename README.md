# Roofing & Renovation Template

Reusable Next.js template for roofing and renovation companies serving Brussels and Wallonia.
The current demo uses fictional Maison Delcourt information and must be customized before
production deployment.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint
- Resend for quote-request emails

## Project structure

```text
public/
  images/       Demo photographs and visual assets
  assets/       Reserved for client-specific static assets
src/
  app/          Routes, layouts, metadata, API routes, robots, and sitemap
  components/   Reusable UI, page sections, and imported v0 components
  data/         Client content and template configuration
  lib/          Shared utilities, validation, site config, and email services
  types/        Shared TypeScript contracts
```

Use the `@/*` alias for imports from `src`, for example `@/components/...` or `@/lib/...`.

## Local development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Available validation commands:

```bash
npm run lint
npm run build
```

The application runs at `http://localhost:3000` by default.

## Routes

- `/` — Homepage
- `/devis` — Quote request form
- `/mentions-legales` — Legal notice template
- `/politique-confidentialite` — Privacy policy template
- `/politique-cookies` — Cookie policy
- `/robots.txt` — Generated robots file
- `/sitemap.xml` — Generated sitemap
- `/api/quote` — Server-side quote submission endpoint

## Quote requests and Resend

The form in `src/components/quote-form.tsx` sends validated requests to `/api/quote`. Validation
is shared between the client and server in `src/lib/quote-validation.ts`. The server-side email
logic is isolated in `src/lib/send-quote-email.ts`.

Create `.env.local` from `.env.example` and provide:

```env
RESEND_API_KEY=re_...
CONTACT_EMAIL=contact@example.com
```

Never expose `RESEND_API_KEY` through a `NEXT_PUBLIC_` variable or client component. Before
production, replace the demo sender `onboarding@resend.dev` in `src/lib/send-quote-email.ts` with
an address on a verified Resend domain.

The endpoint includes required-field and length validation, an email format check, and a honeypot
field for basic automated-submission protection. It does not include CAPTCHA, database storage, or
an administration interface.

## SEO

The homepage and quote page include metadata with canonical URLs, Open Graph, Twitter/X, and
descriptions. The homepage includes `RoofingContractor` JSON-LD structured data. Update the demo
domain in `src/lib/site-config.ts` by setting:

```env
NEXT_PUBLIC_SITE_URL=https://www.client-domain.be
```

This value is used by metadata, JSON-LD, robots, and the sitemap.

## Cookie consent

`CookieConsent` is a lightweight client component that stores choices in `localStorage`. Necessary
cookies remain enabled. Analytics and Marketing are disabled by default, and no analytics or
marketing service is currently installed. Visitors can update their choices through `Gérer mes
cookies` in the footer.

## Legal pages

The three legal pages contain clearly marked fictional placeholders such as `[Nom de l’entreprise]`
and `[Adresse]`. They are demonstration templates, not legal advice. Replace and review all legal,
company, hosting, privacy, retention, and contact information with the real client's details before
production.

## v0 integration

Place exported v0 components in `src/components` and keep route composition in `src/app`.
Preserve each component's server/client boundary with a file-level `"use client"` directive when
required. Keep reusable content in `src/data`, shared contracts in `src/types`, framework-agnostic
helpers in `src/lib`, and static files in `public/assets` or `public/images` as appropriate.

Add dependencies only when an imported component actually requires them. Backend, database,
authentication, and tracking services are intentionally outside this template unless explicitly
added for a client project.
