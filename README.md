# PixVerse — promo site

Promo site for the PixVerse iPhone app (App Store ID 6815764831).
Design: Paper file "Pixverse v2 RF", page Promo (layout from sathe.framer.ai, colors and screens from the app's Figma).

## Run

```bash
pnpm install
pnpm dev        # local dev server
pnpm build      # production build into dist/
```

## Deploy

Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) builds and publishes to GitHub Pages.
In the repo settings, Pages → Source must be **GitHub Actions**.

Live URL (no custom domain yet): https://norin-web.github.io/Pixverse2rf/

### base / custom domain trap

`vite.config.ts` has `base: "/Pixverse2rf/"` because the site is served from a sub-path.
When a custom domain is attached, in ONE commit: set `base: "/"` and add `public/CNAME` with the domain.
Otherwise every asset 404s and the page is blank.

## Where things live

- `src/app/content/site.ts` — every fact: brand, email, App Store link, models, FAQ, specs. `PLACEHOLDER` marks values still to confirm (operator, min iOS, disclaimer).
- `src/app/content/legal.ts` — Privacy Policy and Terms of Use, pasted **verbatim** from the owner (only `## ` headings and `- ` lists added). Not here yet: the pages show a short notice until `body` is filled.
- `src/styles/index.css` — tokens in `:root`, all layout.
- `public/images/` — app screens and blurred frames as WebP; sources in `../File/materials/site/`.
- All image paths go through `img()` (`src/app/utils/img.ts`) so they respect `base`.

## Motion rule

Reveals are CSS transitions driven by `useReveal` (IntersectionObserver with viewport-gated fallbacks).
Hidden states are scoped under `html.js`, so content is visible without scripts and never stays hidden
in a background tab. No smooth-scroll library; the header is sticky and never hides.
