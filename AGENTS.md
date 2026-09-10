# TradeLift — Agent Instructions

## What This Is
A static multi-page website promoting skilled-trade careers ("TradeLift"). Dark industrial theme (orange/yellow accents), mobile-first responsive. No framework, no build step — vanilla HTML/CSS/JS. Live at https://tradelift.is-a.dev/ (GitHub Pages, auto-deploy via `.github/workflows/deploy.yml`).

## Pages
- `index.html` — Homepage (hero, stats, featured trades, blog teaser, newsletter, footer)
- `trades.html` — 12 trade careers with filter buttons (All/Construction/Automotive/Industrial/Skilled Craft)
- `getting-started.html` — 5-step career roadmap, apprenticeships, certifications, tools, interview tips
- `resources.html` — Tools, certifications, YouTube channels, books, websites
- `blog.html` + `blog/` — Blog index + 2 SEO posts
- `quiz.html` — "Which Trade Is For You?" 10-question quiz + email capture funnel
- `badge.html` — share badge; `widget/quiz.html` — old embed (canonical → quiz.html)

## Assets
- `css/style.css` — shared stylesheet; MUST keep every class used by the HTML files styled (earlier HTML↔CSS mismatches — check new markup against CSS)
- `css/quiz.css`, `blog/blog-style.css` — page-scoped styles (0 bare element selectors on shared pages)
- `js/main.js` — mobile nav toggle, trade filtering, newsletter + exit modal (Formspree w/ mailto fallback), OneSignal guard; null-guarded
- `js/quiz.js` — quiz engine (10 Qs, weighted, all 12 trades reachable, share/retake/email capture; double-click locked)
- `.github/workflows/deploy.yml` — GitHub Pages auto-deploy on push to `main`
- `docs/SESSION-MEMORY.md` — MASTER MEMORY OF RECORD (read first when starting a session)
- `docs/monetization.md`, `docs/conversion-funnel.md` — revenue playbooks

## Sales Targets & Audience
Teenagers / young adults considering trade careers (electrician, welder, plumber, HVAC, etc.). Avoid student debt, high pay ($60K+), job security (750K open trade positions). Business goal: traffic → email list → $50K revenue by ~Dec 22, 2026.

## Verification Commands
- HTML well-formedness: `python3` with `html.parser` (pattern used previously)
- JS syntax: `node --check js/main.js js/quiz.js`
- CSS brace balance: count `{` vs `}`
- Sitemap: `node scripts/generate-sitemap.js` (run twice → identical, 8 URLs)

## WORKFLOW RULES (ALWAYS FOLLOW)
1. **Always use subagents (squad) for reviews** — never review only with my own tools.
2. **Two review passes after finishing** any task:
   - Review PASS 1: **Rogers** — thorough first review.
   - Review PASS 2: **Romanoff** — independent, functionality-focused.
3. Fix every real bug the passes find, then re-verify.
4. Keep `PROGRESS.md` and `docs/SESSION-MEMORY.md` updated at the end of each session.
5. Every subagent self-reviews and proposes growth/revenue improvements (PM reviews their proposals).
6. Production code changes deploy via the `pages` remote ONLY after the 2-pass review.

## Squad (subagent names)
| Name | Role |
|------|------|
| Hawkeye | Content / SEO |
| Stark | Product builder |
| Fury | Growth & monetization |
| Vision | Integration |
| Shuri | Fixes / upgrades |
| Rogers | QA Pass 1 |
| Romanoff | QA Pass 2 |
| Lang | Reserve / share images |

## Session Guidance
- Live production repo: `tradelift.is-a.dev` → push to the `pages` remote (blue-collar-hustle-hub), **NOT** the fork (`origin` = dev copy).
- **DEPLOY BLOCKER (open):** the Codespaces GITHUB_TOKEN is `metadata=read`-only; pushing requires the user's PAT (`repo`+`workflow`) configured as a local credential, or codespace `repo` scope, or a manual push. Do not invent or persist a PAT value.
- Commit only when the user asks, or when the full-autonomy grant covers it (PM-approved, double-reviewed production deploys).