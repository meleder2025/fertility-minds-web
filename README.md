# Fertility Minds — complete updated website bundle

All 13 pages in one place: the redesigned homepage + the 12 updated legal / sub-pages + assets.

## Contents
- index.html .................... redesigned homepage (matches the live appworkdemo design)
- privacy.html, terms.html, subscription-terms.html, cookies.html, delete-account.html,
  community-guidelines.html, dmca.html, refund-policy.html, support.html, contact.html,
  faq.html, about.html ........... updated legal / sub-pages
- css/, js/, images/, favicon.svg

## IMPORTANT — two design systems in this bundle
- The HOMEPAGE (index.html) is a fresh, self-contained rebuild matching the live JS site the
  client has been reviewing (inline CSS).
- The LEGAL/SUB-PAGES use the original static design system (css/styles.css + shared header/footer).
So the homepage and the legal pages do NOT share identical header/footer styling. Navigation
between them works, but visually the chrome differs. This bundle is a handoff/reference — in
production (a single JS codebase) the dev team applies all this content within one design, so the
mismatch disappears. If you'd rather have a pixel-consistent standalone static site, that's a
separate (larger) job — ask and I'll unify them.

## Changes applied (client request, 22 June 2026)
Homepage:
- Reviews/testimonials section removed
- Community group cards with fabricated member counts removed (honest version kept)
- "Nutritionists" removed from the expert grid and copy
- 14-day free trial added, then £7.99/month
- Registered company details in the footer
Legal/sub-pages:
- Privacy policy corrected — was wrongly "unincorporated"; now names FERTILITY MINDS LTD as
  data controller, with company no. 16617575, registered office, and an ICO registration line
- Sub-processors named (Cloudflare, Vercel, MongoDB, Firebase, RevenueCat, Apple/Google, Brevo,
  Sentry) for data-safety alignment
- 14-day free trial made explicit in the Subscription Terms
- Registered entity added to every page footer; FAQ placeholder fixed; Perplexity script removed

## Must be finished before App Store / Google Play submission (cannot be completed in these files)
1. ICO NUMBER (client) — insert the real number into the marked slot in privacy.html.
2. STORE LISTINGS (dev) — configure the 14-day trial + £7.99 identically on both stores.
3. IN-APP (dev) — medical disclaimer at onboarding + working EULA/Privacy links in the app and
   in the App Store metadata.
4. FREE TRIAL LENGTH — set to 14 days; change to 7 if the client prefers (homepage + sub-terms).
5. VERSION CHECK — confirm the production site serves these legal pages; if not, apply the same
   content fixes to whatever is live.
