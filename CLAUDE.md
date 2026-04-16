# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Stack

- **Astro 5** (static output) with file-based routing and native i18n (`en`, `es`)
- **Svelte 5** for the handful of interactive islands (theme toggle, mobile menu, typed title, scroll-to-top)
- **Tailwind CSS 3** via `@astrojs/tailwind` (`applyBaseStyles: false`; base layer lives in `src/styles/global.css`)
- **astro-icon** with FA6 (`fa6-solid`, `fa6-brands`) — only the icons explicitly listed in `astro.config.mjs` are bundled
- **Content collections** (`src/content/*`) with zod schemas in `src/content/config.ts`; content is split per locale (`en.json`, `es.json`)
- **@astrojs/sitemap** generates `sitemap-index.xml` with i18n hreflang alternates
- Package manager: **pnpm** (version pinned via `packageManager` in `package.json`)

## Commands

```bash
pnpm dev         # astro dev
pnpm build       # astro check && astro build
pnpm preview     # serve dist/
pnpm astro check # type-check Astro + Svelte + TS
```

## Architecture

- `src/pages/en/index.astro` and `src/pages/es/index.astro` compose the single-page layout. Root `/` is redirected to `/en/` via `astro.config.mjs` (`redirectToDefaultLocale: true`).
- `src/layouts/BaseLayout.astro` owns `<head>` (SEO meta, canonical, hreflang, OG/Twitter) and injects an inline anti-FOUC script that applies the `dark` class before paint.
- Sections live in `src/components/sections/` as pure `.astro` (static). Each receives `lang` as a prop and pulls content via `getEntry("<collection>", lang)`.
- Interactive islands live in `src/components/islands/` as `.svelte` files:
  - `ThemeToggle.svelte` — hydrated `client:load`; syncs with the inline FOUC script and `prefers-color-scheme`
  - `MobileMenu.svelte` — hydrated `client:load`
  - `TypedTitle.svelte` — hydrated `client:visible`
  - `ScrollToTop.svelte` — hydrated `client:idle`
- UI strings (nav, labels, aria) are in `src/i18n/ui.ts`; helpers in `src/i18n/utils.ts` (`useTranslations`, `otherLang`, `localizedPath`).
- Long-form content (bio, experience, projects, skills, education, personal) lives in `src/content/<collection>/{en,es}.json` under zod-typed collections.

## Styling

- Design tokens (colors, animations, keyframes) are defined in `tailwind.config.mjs`.
- Global CSS (base resets, component utilities, custom scrollbar, `scroll-padding-top` for anchor nav) is in `src/styles/global.css`.

## Assets

- `public/images/` — section imagery
- `public/resumes/cv-en.pdf`, `public/resumes/cv-es.pdf` — linked from About by locale
- `public/favicon.svg`, `public/robots.txt`

## Deploy

Cloudflare Pages via git integration. See `DEPLOYMENT.md`. No base-path prefix — site is served from the domain root.
