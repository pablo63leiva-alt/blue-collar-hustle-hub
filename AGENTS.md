# Blue Collar Hustle Hub — Agent Instructions

## What This Is
A static multi-page website promoting skilled-trade careers ("Blue Collar Hustle Hub").
Dark industrial theme (orange/yellow accents, mobile-first responsive). No framework, no build step — vanilla HTML/CSS/JS.

## Pages
- `index.html` — Homepage (hero, stats, featured trades, newsletter, footer)
- `trades.html` — 12 trade careers with filter buttons (All/Construction/Automotive/Industrial/Skilled Craft)
- `getting-started.html` — 5-step career roadmap, apprenticeships, certifications, tools, interview tips
- `resources.html` — Tools, certifications, YouTube channels, books, websites

## Assets
- `css/style.css` — shared stylesheet; MUST keep every class used by the HTML files styled (earlier version had HTML↔CSS class mismatches — check new markup against CSS)
- `js/main.js` — shared script: mobile nav toggle, trade filtering, newsletter handler; null-guarded to run safely on any page
- `img/hero-trades.svg` — hero illustration
- `.github/workflows/deploy.yml` — GitHub Pages auto-deploy on push to `main`

## Sales Targets & Audience
Teenagers / young adults considering trade careers (electrician, welder, plumber, HVAC, etc.).
Avoid student debt, high pay ($60K+), job security (750K open trade positions).

## Verification Commands
- HTML well-formedness: `python3` with `html.parser` (see pattern used previously)
- JS syntax: `node --check js/main.js`
- CSS brace balance: count `{` vs `}`

## WORKFLOW RULES (ALWAYS FOLLOW)
1. **Always use subagents for reviews** — never review only with my own tools.
2. **Run the check 2 SLASH TWO TIMES after finishing** any task, to find bugs:
   - Review PASS 1: launch a subagent for a thorough first review.
   - Review PASS 2: launch an independent second subagent, focused on functionality.
3. Fix every real bug the passes find, then re-verify.
4. Keep `PROGRESS.md` updated at the end of each session.

## Session Guidance
- Live production repo: **`pablo63leiva-alt/blue-collar-hustle-hub`** → `https://pablo63leiva-alt.github.io/blue-collar-hustle-hub/` (GitHub Pages, auto-deploy via `.github/workflows/deploy.yml`).
- The old repo `https-github.com-github-codespaces-blank` is a fork that GitHub refused to enable Pages on; it remains as the development copy. Push production changes to the `pages` remote (blue-collar-hustle-hub), NOT to the fork.
- Always commit only when the user asks.