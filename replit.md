# Jordan Kozmary Portfolio

Game developer portfolio with industry experience, personal projects, a downloadable resume, and game development articles.

## Run & Operate

- Start the managed `artifacts/portfolio: web` workflow for the website.
- `pnpm --filter @workspace/portfolio run typecheck` checks the frontend.
- `node --test scripts/verify-portfolio.mjs` checks routes, compiled articles, and asset delivery against the running website.
- Install dependencies from the root with `pnpm install`.
- Artifact workflows supply `PORT` and `BASE_PATH`; do not run a root-level dev command.
- `pnpm --filter @workspace/portfolio run build` generates a completely static website in `artifacts/portfolio/dist/public`.
- `node --test scripts/verify-static.mjs` verifies the built static pages, metadata, links, image delivery and route chunks without a server.

## GitHub Pages

- `.github/workflows/pages.yml` builds and deploys pushes to `main`; pull requests only build and validate.
- Repository Settings → Pages → Source must be **GitHub Actions**. The existing custom domain is preserved through `public/CNAME`.
- Build output includes rendered HTML for every route and a real `404.html`; no server, redirect workaround, or hash routing is needed.
- `BASE_PATH` defaults to `/`. The workflow reads GitHub Pages' configured base path, so repository subpaths work too.
- Do not reactivate the old Next.js workflow under `.migration-backup/`.
- This project must remain usable on GitHub Pages as a static site; retain its visual design when improving performance or structure.

## Stack

- pnpm workspace, React, Vite, TypeScript
- Original Chakra UI theme, Typekit typography, and static assets
- Route/article code splitting; frontmatter-only metadata module for listings
- Static HTML generation with React hydration; PNGs use lossless WebP on production builds, JPEGs retain their original encoding
- Article content remains local MDX; no database or credentials are required.
- Shared API and database packages are unused scaffold, not portfolio dependencies.

## Migration scope

Preserve the imported portfolio rather than redesigning it. The original source is retained in `.migration-backup/` for comparison. The original Projects page says “Coming soon!”; completing that page is outside the migration.

## Where things live

- `artifacts/portfolio/` — runnable portfolio
- `.migration-backup/` — original imported Next.js app
- `lib/`, `artifacts/api-server/`, `artifacts/mockup-sandbox/` — existing workspace scaffold

## Routing

The portfolio owns `/`, `/experience`, `/projects`, `/writing`, and `/writing/:slug`. Static files include `/sjk-resume.pdf` and `/images/`.
