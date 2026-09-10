# TradeLift — Progress Tracker

**Last updated:** Thursday, September 10, 2026 — 12:19 PM EDT (snapshot per user request)

## Status: 🟡 NEW WAVE READY — DEPLOY BLOCKED ON CREDENTIALS

Live site: https://tradelift.is-a.dev/ (running the PRE-wave build until push unblocks).

## Milestones

### Done & Shipped (published to production earlier)
- [x] Project structure scaffolded
- [x] Homepage (index.html), Trades explorer (trades.html, 12 trades + filters), Getting Started (getting-started.html), Resources (resources.html)
- [x] CSS dark industrial theme, JS interactivity (js/main.js)
- [x] GitHub Actions deployment workflow (.github/workflows/deploy.yml) with `enablement: true`
- [x] Missing assets: hero-trades.svg, og-image.png (1200x630), logo.png (512x512)
- [x] Meta/JSON-LD URLs → real Pages domain
- [x] Production repo created (pablo63leiva-alt/blue-collar-hustle-hub, non-fork) + Pages enabled via PAT
- [x] Deploy workflow passed; verified live (all pages HTTP 200) — pre-wave build

### Done in the 2026-09-10 PUBLISH WAVE (committed `1950774`, NOT yet pushed)
- [x] Blog: blog.html + 2 SEO posts (how-to-become-an-electrician, trade-school-vs-college) w/ Article + FAQPage schema
- [x] Quiz: quiz.html + js/quiz.js + css/quiz.css — 10-question "Which Trade Is For You?" (all 12 trades reachable)
- [x] Lead capture: Formspree newsletter + exit modal w/ honeypot, validation, mailto fallback
- [x] Integration: uniform nav (Home/Trades/Getting Started/Resources/Blog/Quiz), hero quiz CTA, blog teaser, callouts, canonicals on all pages, sitemap 8 URLs
- [x] QA: Rogers (Pass 1, 20 findings) + Romanoff (Pass 2, independent functional, 7 findings) — all fixed by Shuri (21 fixes) and re-verified
- [x] NEWS: Fury Wave 2 — quiz-results email capture funnel (docs/conversion-funnel.md) built, verified, awaiting review-pass before bundling into deploy

### BLOCKED
- [ ] **Push to production (`git push pages main`)** — environment GITHUB_TOKEN is Codespaces auto-token (metadata=read only). Needs user PAT (`repo`+`workflow`) OR codespace `repo` scope OR manual push by user. Code committed locally as `1950774` (+ Fury funnel files uncommitted).

## The Fork/PAT History (why production is a separate repo)
- GitHub refused Pages on the original fork. Fresh non-fork repo created; Pages enabled via API + classic PAT (`repo`+`workflow`); deploy workflow succeeds on push.
- PAT is a credential of the user; do not persist its value anywhere in this repo.

## Notes
- Production pushes → `pages` remote (blue-collar-hustle-hub). Deploy is automatic on push to `main` there.
- The 12:19 PM EDT snapshot (2026-09-10) of project/memory/instructions lives in `docs/SESSION-MEMORY.md`.

## Optional / Future Work
- Fix deploy blocker (credentials) — top priority.
- Review + deploy Fury funnel wave.
- Affiliate pages (tools per trade), more blog posts (2-4/mo), quiz share images (12), widget embed for schools, Meta retargeting pixel, Google Search Console verification.
- Revenue playbooks live in docs/monetization.md + docs/conversion-funnel.md.