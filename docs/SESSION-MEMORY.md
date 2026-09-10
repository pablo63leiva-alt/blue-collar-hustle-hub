# TradeLift — Master Project Memory & Session Record

**Snapshot timestamp:** Thursday, September 10, 2026 — 12:19 PM EDT (America/New_York)
**Owner:** Pablo (user) + Jarvis (PM/AI)
**Mission:** Grow TradeLift traffic now; generate $50,000 revenue (~103 days, deadline ≈ December 22, 2026).

---

## 1. Project Overview

- **Name:** TradeLift (rebranded from "Blue Collar Hustle Hub")
- **What:** Static multi-page marketing site selling skilled-trade careers to teenagers/young adults
- **URL (LIVE):** https://tradelift.is-a.dev/ (GitHub Pages, auto-deploy on push to `main` via `.github/workflows/deploy.yml`)
- **Tech:** Vanilla HTML/CSS/JS. No framework, no build step.
- **Theme:** Dark industrial, orange/yellow accents, mobile-first responsive.
- **Sales angles:** Avoid student debt, high pay ($60K+), job security (750K open trade positions).
- **Repository (this dir):** `/workspaces/https-github.com-github-codespaces-blank`

### Pages (9 total)
| File | Purpose |
|---|---|
| `index.html` | Homepage — hero, stats, featured trades, blog teaser, newsletter, footer |
| `trades.html` | 12 trade careers with filters (All/Construction/Automotive/Industrial/Skilled Craft) |
| `getting-started.html` | 5-step career roadmap, apprenticeships, certifications, tools, interview tips |
| `resources.html` | Tools, certifications, YouTube channels, books, websites |
| `blog.html` | Blog index — lists 2 posts |
| `blog/how-to-become-an-electrician.html` | SEO post #1 |
| `blog/trade-school-vs-college.html` | SEO post #2 |
| `quiz.html` | "Which Trade Is For You?" interactive 10-question quiz |
| `badge.html` | Social/share badge (no nav; linked from footers) |

### Key Files
- `css/style.css` — shared stylesheet (MUST keep every HTML class styled; history of HTML↔CSS mismatches)
- `css/quiz.css` — quiz page styles (isolated, 0 bare element selectors)
- `blog/blog-style.css` — blog styles (isolated)
- `js/main.js` — nav toggle, trade filters, newsletter + exit-modal lead capture (Formspree w/ mailto fallback), OneSignal guard
- `js/quiz.js` — quiz engine (10 questions, weighted scoring, all 12 trades reachable, share/retake)
- `scripts/generate-sitemap.js` — regenerates sitemap.xml (8 URLs) on deploy
- `sitemap.xml` — 8 URLs, populated lastmod
- `CNAME` = `tradelift.is-a.dev`
- `docs/monetization.md` — revenue strategy playbook (Mint/Fury built)
- `docs/SESSION-MEMORY.md` — THIS FILE (master memory)
- `widget/quiz.html` + `widget/demo.html` — OLD self-contained 8-question quiz embed; flagged as divergent from quiz.html (decision pending)

### Git Remotes
- `origin` → `https://github.com/pablo63leiva-alt/https-github.com-github-codespaces-blank.git` (DEV copy — fork)
- `pages` → `https://github.com/pablo63leiva-alt/blue-collar-hustle-hub.git` (**PRODUCTION** — pushes to this deploy the live site)
- `upstream` → old template origin
- **Rule:** Push production changes to `pages`, NOT `origin`. Origin is the development copy.
- **History note:** GitHub refused Pages on the original fork ("Resource not accessible by integration"), so a fresh non-fork repo (`blue-collar-hustle-hub`) was created; Pages enabled via API + PAT (classic `repo`+`workflow` scopes) and `enablement: true` in workflow. **PAT exists — do NOT store its value in any file; note it must be periodically rotated by user.**

---

## 2. The Squad (named subagents)

| Name | MCU identity | Role |
|------|--------------|------|
| **Hawkeye** | precision marksman | Content / SEO builder |
| **Stark** | inventor | Product builder (interactive features) |
| **Fury** | the strategist | Growth & monetization |
| **Vision** | brings parts together | Integration (nav, links, sitemap) |
| **Shuri** | Wakanda tech fixer | Bug fixing, upgrades, repair work |
| **Rogers** | the guardian | QA Review Pass 1 (thorough structural) |
| **Romanoff** | digs for the functional truth | QA Review Pass 2 (independent functional) |
| **Lang** | small package, big impact | Future reserve (e.g., quiz share images) |

---

## 3. Standing Instructions from the User (v1 — Comcast Record)

1. **Jarvis = PM.** One subagent per task. I do the hard THINKING; subagents do the hard WORK.
2. **Review workflow (AGENTS.md, always):** after finishing any task, run TWO review passes via subagents (Rogers = thorough pass 1; Romanoff = independent functional pass 2). Fix every real bug the passes find, then re-verify.
3. **Every subagent** self-reviews its own work, checks for bugs/glitches/improvements, and comes back to Jarvis (the PM) for approval.
4. **Every subagent should think like a growth expert** while working — propose things that make the website better / drive traffic.
5. **User gives Jarvis FULL AUTONOMY and pre-approval** for anything Jarvis judges good for the website. No permission gates needed anymore.
6. **Revenue mission:** $50,000 in ~103 days (≈ Dec 22, 2026), working from traffic now.
7. **Final-deadline discipline:** work quickly but take the time needed; don't rush quality.
8. **Commit/push rule (AGENTS.md):** commit only when user asks — BUT note: user's "full autonomy" grant is interpreted as ALSO authorizing production deploy (pages remote) of PM-approved, double-reviewed work.
9. **Keep `PROGRESS.md` updated at the end of each session.**
10. **Save project/memory/instructions** — THIS FILE is the canonical record. Update it at the end of every session.
11. Subagent names from the MCU (this file documents the mapping).
12. Time reference: live time in **EST/EDT** (America/New_York) — use `TZ=America/New_York date`.

---

## 4. Build & Session History Log (chronological)

1. **Original build:** homepage, trades explorer (12 trades), getting-started, resources, dark theme CSS, main.js. Name: Blue Collar Hustle Hub.
2. **Rebrand:** → TradeLift. CNAME, images, docs, canonical URLs updated.
3. **Pages activation workaround:** fresh non-fork repo, Pages enabled via PAT, deploy workflow passing, site verified live (all pages returned HTTP 200).
4. **Quick wins wave** (content/SEO, technical, growth, partnership) via subagents.
5. **PUBLISH_THIS_SESSION WAVE (Sep 10, 2026):**
   - **Hawkeye (content):** built `blog.html` + 2 SEO posts (electrician guide, trade-school-vs-college) with Article + FAQPage JSON-LD, full meta/OG, real BLS salary figures. ✅
   - **Stark (product):** built `quiz.html` + `js/quiz.js` + `css/quiz.css` — 10-question quiz all 12 trades reachable, share/retake, radiogroup ARIA. ✅
   - **Fury (growth):** wired REAL newsletter capture on index + getting-started (Formspree config + honeypot + email validation + mailto fallback), fixed exit modal handler, wrote `docs/monetization.md`. ✅
   - **Vision (integration):** nav links (Home→Trades→Getting Started→Resources→Blog→Quiz) across all pages, hero quiz CTA, blog teaser, trade/getting-started callouts, footer widget→quiz fix, sitemap script extended to 8 URLs. ✅
   - **Rogers (Pass 1):** 20 findings — 3 critical, 6 major, 11 minor. Recorded below.
   - **Shuri (fixer):** applied 14 fixes (incl. OneSignal guard, blog quiz nav, canonical tags ×4, ©2026 footers, Breadcrumb item, quiz radiogroup ARIA, sitemap lastmod fix, hero aria, single-primary-button, merged CTA section, robust share data-trade). ✅ All verified. [C1 Formspree YOURID kept by design — mailto fallback intentional.]
   - **Romanoff (Pass 2):** functionally simulated quiz (all 4^10 answer keys brute-forced; every trade winnable) + main.js flows (28/28) + newsletter + OneSignal guard verified. 7 new minor findings (listed below). 0 criticals. **Deploy pending.**

### Rogers (Pass 1) findings — remediated by Shuri
- C1 Formspree placeholder → KEPT (design: fallback to mailto until user configures real Formspree ID)
- C2 OneSignal SDK loaded with placeholder ID → GUARDED (skips init when appId contains YOUR_)
- C3 blog posts missing Quiz nav link → FIXED
- M1 blog quiz links to widget → FIXED (→ ../quiz.html)
- M2 4 pages missing canonical → FIXED
- M3 footer ©2025 → FIXED (©2026)
- M4 trades.html BreadcrumbList missing item → FIXED
- M5 quiz missing radiogroup ARIA → FIXED
- M6 sitemap empty lastmod → FIXED (script handles untracked files)
- m7 getting-started JSON-LD dates 2025 → FIXED (2026-09-10)
- m1 quiz hero aria → FIXED
- m2 two primary buttons in hero → FIXED (quiz CTA now outline)
- m3 duplicate cta-sections on trades → FIXED (merged)
- m10 share name parsed from textContent → FIXED (data-trade attr)
- m4/m5/m6/m8/m9/m11 → left as design decisions / notes

### Romanoff (Pass 2) findings — PENDING (fix queue)
1. `js/quiz.js` (~306-328) rapid double-click skips a question + double-counts score → add in-flight `locked` flag / disable option during 280ms advance.
2. `trades.html` ItemList JSON-LD (positions 10-12) salary/category contradicts visible cards: Mason schema $70K-$100K vs card $45K-$70K; Roofer schema $45K-$70K vs card $40K-$65K; CM schema $40K-$65K/category Skilled Craft vs card $70K-$100K/category construction. Fix schema to match cards.
3. `badge.html` clipboard copy: no `.catch` / no `execCommand` fallback (silent failure on insecure context). Wrap like quiz.js.
4. `badge.html` no canonical, no site nav (one-way dead-end). Add canonical; optionally restore header or drop from footers.
5. `widget/` duplicate divergent 8-question quiz → decide: rebuild from quiz.js, or remove (SEO near-duplicate risk).
6. `js/main.js` (~84) unguarded `button.textContent` — add `if (!button) return;`.
7. `js/main.js` (~181) focus-trap includes hidden `.exit-modal-download` anchor in focusables → exclude `.hidden` and `[tabindex="-1"]`.

### Verified-correct (from Romanoff) — do not regress
- All 12 trades match quiz scoring ↔ trades.html cards (salary figures consistent)
- Quiz share/retake/double-check, newsletter mailto fallback single-fire, OneSignal guard, filters (5/3/2/2), nav both ways, CSS isolation clean, no duplicate IDs, no broken links, sitemap idempotent.

---

## 5. Deploy Playbook (production)

1. From repo root: `node scripts/generate-sitemap.js` (regenerate sitemap with 8 URLs) — also runs automatically in CI.
2. `git status` — confirm only intended files staged. NEVER commit secrets.
3. Commit with concise message matching repo style (e.g., `feat: blog + quiz + lead capture + integration`).
4. Push to **`pages`** remote: `git push pages main` → GitHub Actions auto-deploys (`deploy.yml`: npm ci → sitemap → pa11y-ci → linkinator → configure-pages → upload → deploy).
5. Verify: HTTP 200 on `/`, `/trades.html`, `/getting-started.html`, `/resources.html`, `/blog.html`, `/blog/how-to-become-an-electrician.html`, `/blog/trade-school-vs-college.html`, `/quiz.html`, `/css/style.css`, `/js/main.js`, `/img/hero-trades.svg`.
6. Update `PROGRESS.md` + this memory file. Commit those to origin as the dev copy record.

---

## 6. Revenue Mission — $50K by ≈ Dec 22, 2026

### Strategy pillars (from docs/monetization.md + PM synthesis)
1. **Traffic engine:** content blitz (2-4 posts/month; long-tail: "apprentice wages by year", "electrician apprentice salary", "trades for 16-year-olds", "highest paying jobs without degree", "is trade school worth it", "HVAC apprenticeship requirements 2026", "is welding a good career"), blog interlinking, quiz shares, TikTok/IG Reels strategy.
2. **Lead capture:** email list via newsletter (Formspree — **ACTION ITEM: user must paste real Formspree ID**, see below) + quiz-result email capture (currently NOT gated — decision: gate detailed results behind email or add opt-in on results screen).
3. **Affiliates (passive revenue):** trade school affiliate programs, tool brands (Milwaukee/DeWalt), apprenticeship programs, safety gear; "Best [Trade] Tools for Beginners" posts per trade.
4. **Digital products:** career-fit guide PDF, résumé templates, mini-course, quiz upsell ("personalized career action plan").
5. **Ads (later):** AdSense readiness + EU cookie/consent compliance notes; only after traffic scales.
6. **Partnerships:** career counselors/schools (embeddable quiz → backlinks + referral traffic); sponsorship once traffic proves.

### Action items / open decisions
- [ ] User: create Formspree account → paste real form ID at `js/main.js` NEWSLETTER_CONFIG.formspreeEndpoint (currently `https://formspree.io/f/YOURID`).
- [ ] Decide + implement quiz-results email capture (Fury).
- [ ] Fix Romanoff queue (7 items) → Shuri.
- [ ] Deploy current wave to `pages`.
- [ ] Affiliate infrastructure pages (Hawkeye/Fury).
- [ ] Quiz share-images (Lang, 12 per-trade OG cards, result-tagged URLs `quiz.html?r=trade`).
- [ ] Productionize widget embed for school/counselor backlinks (Stark).
- [ ] Content calendar ≥2 posts/month (Hawkeye).

---

## 7. Verification Commands (repo root)

- HTML: `python3 - <<'EOF' ... html.parser ... EOF` (well-formedness per file)
- JS: `node --check js/main.js js/quiz.js`
- CSS brace balance: count `{` vs `}` in css/style.css, css/quiz.css, blog/blog-style.css
- Sitemap: `node scripts/generate-sitemap.js` (run twice, expect identical output, 8 URLs)
- Live deploy: push to `pages` remote; GitHub Actions runs pa11y-ci + linkinator automatically.
- Time: `TZ=America/New_York date`

---

## 8. Contact / Identity Notes

- Jarvis = the PM AI persona for this project.
- Subagents: `general` type (full tool access), fresh context per launch unless resumed with task_id.
- Keep this file updated at session end — it is the memory of record.