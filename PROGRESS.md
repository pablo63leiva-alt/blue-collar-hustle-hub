# Blue Collar Hustle Hub — Progress Tracker

**Last updated:** Review bugs fixed, pushed. Activating GitHub Pages.

## Status: 🟢 FIXED & PUSHED — ACTIVATING PAGES

### Milestones
- [x] Project structure scaffolded
- [x] Homepage (index.html) built
- [x] Trades explorer page (trades.html) built — 12 trades (added Mason + Roofer for Skilled Craft filter)
- [x] Getting started guide (getting-started.html) built
- [x] Resources page (resources.html) built
- [x] CSS styling (style.css) built — dark industrial theme, aligned to HTML classes
- [x] JavaScript interactivity (js/main.js)
- [x] GitHub Actions deployment workflow (.github/workflows/deploy.yml)
- [x] Missing assets created: img/hero-trades.svg, img/og-image.png (1200x630), img/logo.png (512x512)
- [x] Meta/JSON-LD URLs updated to real Pages domain (was placeholder bluecollarhustlehub.com)
- [x] Review pass 1 (subagent) — clean
- [x] Review pass 2 (subagent, functionality) — clean
- [x] Review-bug fixes committed & pushed
- [x] AGENTS.md created (workflow rules: 2 subagent review passes after finishing)
- [ ] Enable GitHub Pages (manual step; token can't via API)
- [ ] Trigger deploy & verify live site

### Review Bugs Fixed This Round
- Skilled Craft filter had 0 matching cards → added Mason + Roofer (data-category="skilled-craft"), updated JSON-LD to 12 items
- Orphaned CSS (.resource-card, .hero-buttons) removed
- Footer active-page links now styled via .footer-nav a[aria-current="page"]
- og-image.png / logo.png were missing → generated 1200x630 and 512x512 PNGs
- Placeholder domain in meta/JSON-LD → real GitHub Pages URL

### How to Activate (manual — API token lacks permission)
1. Repo: **Settings → Pages** → Source: **GitHub Actions**
2. Deploy workflow auto-runs on push; or re-run from Actions tab
3. Live at: `https://pablo63leiva-alt.github.io/https-github.com-github-codespaces-blank/`
4. For a cleaner URL, rename repo or add a custom domain, then update meta/JSON-LD URLs in the 4 HTML files.