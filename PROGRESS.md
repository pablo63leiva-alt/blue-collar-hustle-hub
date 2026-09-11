# TradeLift — Progress Tracker

**Last updated:** Thursday, September 10, 2026 — 7:15 PM EDT (resume session)

## Status: 🟢 QA-COMPLETE (Funnels + Share Cards Reviewed & Fixed) — DEPLOY BLOCKED ON CREDENTIALS

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
- [x] **RESUME SESSION (2026-09-10 ~7 PM):** Rogers Pass-1 funnel findings applied by Shuri (M1 email label, m1-m5 dead code/guard/print/doc). Rogers Pass-1 on Lang's Wave-3 share cards (0 critical, 2 major, 7 minor) → fixes by Shuri (preview via canvas, iOS failure fallback + SVG new-tab, no leak, async disabled state, fixed px fonts, escaping, aria, doc typo). Romanoff Pass 2 (independent, jsdom 36-assertion harness) → 2 major (double-submit-in-flight, fetch HTTP-status ignored), 1 minor (stale label restore), 2 info (aria-hidden-on-visible, capture analytics beacon) → all fixed by Shuri. Final re-verify green (node --check ×3, CSS braces 63/63 + 206/206 + 48/48, html.parser clean ×9 pages, 0 dup IDs). Committed. **Deploy still blocked on creds.**
- [x] **CONTENT WAVE 2 (2026-09-10 ~11 PM):** 2 SEO posts by Hawkeye (blog/best-trades-for-16-year-olds.html targets "trades for 16 year olds", blog/is-welding-a-good-career.html targets "is welding a good career"/"welder salary 2026") + blog.html integration (2 cards + JSON-LD BlogPosting → 4 posts, title/meta/og tightened ≤60 chars, meta desc 134) + sitemap generator blogPosts +2 (now 10 URLs, idempotent). Rogers Pass-1 (0 crit, 0 major, 6 minor) + Romanoff Pass-2 (real Chromium render + click-through, 0 crit/0 major, 2 minor SEO-length) → all minors fixed by Shuri (FAQ summary↔JSON-LD verbatim parity ×8, OSHA-10 age hedge ×2, welding CTA wording, titles ≤60, related-card copy, AGENTS.md/SESSION-MEMORY count sync 8→10 URLs). PM re-verify: html.parser clean ×3, sitemap identical ×2 (10 URLs). Committed. **Deploy still blocked on creds.**

### BLOCKED
- [ ] **Push to production (`git push pages main`)** — environment GITHUB_TOKEN is Codespaces auto-token (metadata=read only). Needs user PAT (`repo`+`workflow`) OR codespace `repo` scope OR manual push by user. **All wave-3 work (funnel + share cards + both QA passes) committed locally, NOT pushed.**

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