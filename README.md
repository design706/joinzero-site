# zero.university

The canonical site for Zero: the simulator where students do real work for real companies, get scored against the top 1% of professionals, and get recruited based on receipts.

## Stack

- Astro
- @astrojs/sitemap
- @astrojs/rss
- Deployed via Cloudflare Pages

## Structure

- `src/pages/` — Ring 4 branded pages
- `src/content/learn/` — Ring 1 cornerstones (markdown)
- `src/layouts/` — BaseLayout with JSON-LD, OG, canonical
- `src/components/` — Header, Footer, JsonLd

## Deploy

Pushes to `main` auto-deploy via Cloudflare Pages.
