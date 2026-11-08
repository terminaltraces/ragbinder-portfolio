# Portfolio performance and structure review

## Scope

Keep the existing visual design, content, Typekit fonts, and Chakra UI theme.
The site remains fully static and can be developed in Replit and hosted on GitHub Pages.

## Findings and changes

| Finding | Improvement |
| --- | --- |
| Every article was included in the initial JavaScript download. | Pages and each article now load as separate chunks. The writing list imports metadata only. |
| Visitors needed JavaScript before any page content appeared. | Production builds render all 13 content routes to HTML, plus a 404 page. React hydrates that HTML for navigation and interactive controls. |
| GitHub Pages cannot fall back to a server router. | Every known route has its own `index.html`; article links work when opened directly or refreshed. |
| Original PNG screenshots were large. | Production uses lossless WebP versions of PNGs. JPEGs retain their original encoding because lossless WebP made those larger. Original files remain available. |
| Internal sidebar links reloaded the entire document. | Shared navigation uses the client router, closes the mobile drawer, and resets scroll on navigation. Resume downloads and external links remain normal links. |
| URL handling assumed the domain root. | Asset paths support both a custom domain and GitHub Pages repository subpaths. |
| Unused scaffold dependencies obscured what the portfolio actually needs. | Removed unused UI/tooling dependencies and the unused API-client project reference from the portfolio package. Shared scaffold packages are untouched. |
| Custom article links discarded their destination. | The MDX link component now forwards its link attributes. |
| Titles and descriptions could be stale after navigation. | Static generation and client navigation share page metadata. |

## Measured build results

Measured using production builds of the migrated portfolio before and after this pass:

- Initial JavaScript: approximately **601 KB → 535 KB**, or **197 KB → 176 KB gzip** (about **11% less compressed initial JavaScript**).
- PNG collection: **27.87 MB → 16.86 MB** in production lossless WebP (about **40% smaller**). These are totals across the collection, not a single page's transfer size.
- Article bodies are now separate **4–9 KB** chunks before compression, loaded only when needed.

These are build measurements, not Lighthouse scores or measured real-user loading times. React, Chakra, Emotion, and the existing animation dependencies still make up most of the initial bundle. They were retained to preserve the design and avoid a broad component-library rewrite.

## Verification

- Frontend TypeScript checks.
- Static-output tests cover rendered content, metadata, local links/resources, the custom domain file, resume PDF, 404 page, code splitting, and image savings.
- Static output checked with both `/` and `/portfolio/` base paths.
- Development smoke tests cover all routes, nine compiled articles, and original asset delivery.
- Desktop homepage and mobile writing-list screenshots compared with the migrated design.

## Deployment

Push to `main` to run `.github/workflows/pages.yml`; pull requests build and validate without deploying.
GitHub repository **Settings → Pages → Source** must be **GitHub Actions**.
The workflow uses the Pages base-path setting and preserves `public/CNAME`.
Only `artifacts/portfolio/dist/public` is uploaded. No Replit backend, database, or runtime server is required.

The workflow is configured and tested locally; its first actual GitHub Actions deployment must run on GitHub after these changes are pushed.
