# Deployment Guide

This site is built with Astro and deployed as a static site to **Cloudflare Pages**.

## Cloudflare Pages Setup

1. Go to the Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
2. Select this repository and the branch you want to deploy (e.g. `portfolio` or `main`).
3. Configure the build:
   - **Framework preset**: Astro
   - **Build command**: `pnpm build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`
4. Environment variables:
   - `NODE_VERSION`: `22`
   - `PNPM_VERSION`: `10.20.0` (or match `packageManager` in `package.json`)
5. Save and deploy. Cloudflare will build on every push to the configured branch and create preview deploys for PRs.

No `VITE_BASE_URL` or base-path prefix is needed — Cloudflare serves from the domain root.

## CI

`.github/workflows/deploy.yml` only runs type-check + build as a safety net on pushes and PRs. The actual deploy is handled by Cloudflare's git integration, not GitHub Actions.

## Custom domain (optional)

In the Cloudflare Pages project → Custom domains → add your domain. Cloudflare manages DNS and TLS automatically if the domain is on Cloudflare.

## Local preview

```bash
pnpm build
pnpm preview
```
