# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static HTML website for **Fertility Minds** — a UK fertility wellness app (FERTILITY MINDS LTD, company no. 16617575) currently in pre-launch. No build system, no package manager, no server. Open any `.html` file directly in a browser.

## Two design systems

This is the most important architectural fact: the homepage and legal/sub-pages use **separate, incompatible design systems**.

**Homepage (`index.html`)** — self-contained, all CSS is inline in `<style>`. CSS variables use short names: `--pink`, `--ink`, `--line`, `--soft`, etc. The nav mobile toggle uses class `open` on `#nav`.

**Legal/sub-pages (all other `.html` files)** — link to `css/styles.css` and `js/site.js`. CSS variables are prefixed: `--fm-pink`, `--fm-ink`, `--fm-line`, etc. The nav mobile toggle uses class `is-open` on `#primary-nav`. The footer year element has `id="footer-year"` (vs an inline script on the homepage).

Do not copy CSS or class names between the homepage and the legal pages — they will silently mismatch.

## Shared sub-page patterns

All legal/sub-pages share:
- Identical `<head>` boilerplate (meta tags, Google Fonts, `css/styles.css`)
- Same header/nav markup with `nav__brand`, `nav__toggle`, `nav__links`, `nav__link` classes
- Same footer structure with `id="footer-year"` for the auto-updating year
- `js/site.js` handles: scroll shadow on `.site-header`, mobile nav toggle, active nav link highlighting, generic form submissions (`form[data-handler]`), and cookie banner (`#cookie-banner`)

When adding a new sub-page, copy the header/footer from an existing one (e.g. `about.html`) rather than from `index.html`.

## Forms

Forms are client-side only — no backend is wired. The JS in `site.js` intercepts `submit`, shows a fake success message after 700 ms, then resets the form. The `data-handler` attribute controls the success message text: `"contact"`, `"support"`, or `"delete"`.

## Outstanding items before App Store / Google Play submission

From the README — these require action outside this repo:
1. **ICO number** — insert into the marked placeholder in `privacy.html`
2. **Store listings** — configure 14-day trial + £7.99/month on both stores
3. **In-app** — medical disclaimer at onboarding + working EULA/Privacy links in the app and App Store metadata
4. **Free trial length** — currently 14 days in `index.html` and `subscription-terms.html`; change both if the client opts for 7 days

## Brand constants

- Primary colour: `#EE5A8C` (pink) / `#EC4899` in homepage inline CSS
- Fonts: Plus Jakarta Sans (headings) + Inter (body) from Google Fonts
- Company: FERTILITY MINDS LTD · Registered in England & Wales No. 16617575
- Registered office: Director Generals House, 15 Rockstone Place, Southampton, England, SO15 2EP
- Contact: hello@fertilityminds.com
- Sub-processors named in privacy.html: Cloudflare, Vercel, MongoDB, Firebase, RevenueCat, Apple/Google, Brevo, Sentry
