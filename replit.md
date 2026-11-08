# Jordan Kozmary Portfolio

Game developer portfolio with industry experience, personal projects, a downloadable resume, and game development articles.

## Run & Operate

- Start the managed `artifacts/portfolio: web` workflow for the website.
- `pnpm --filter @workspace/portfolio run typecheck` checks the frontend.
- `node --test scripts/verify-portfolio.mjs` checks routes, compiled articles, and asset delivery against the running website.
- Install dependencies from the root with `pnpm install`.
- Artifact workflows supply `PORT` and `BASE_PATH`; do not run a root-level dev command.

## Stack

- pnpm workspace, React, Vite, TypeScript
- Original Chakra UI theme, Typekit typography, and static assets
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
