# Blue Collar Hustle Hub — Progress Tracker

**Last updated:** 🎉 SITE IS LIVE ON GITHUB PAGES.

## Status: 🟢 LIVE — https://pablo63leiva-alt.github.io/blue-collar-hustle-hub/

### Milestones
- [x] Project structure scaffolded
- [x] Homepage (index.html) built
- [x] Trades explorer page (trades.html) built — 12 trades + working filters
- [x] Getting started guide (getting-started.html) built
- [x] Resources page (resources.html) built
- [x] CSS styling (style.css) built — dark industrial theme, aligned to HTML classes
- [x] JavaScript interactivity (js/main.js)
- [x] GitHub Actions deployment workflow (.github/workflows/deploy.yml) with `enablement: true`
- [x] Missing assets created: hero-trades.svg, og-image.png (1200x630), logo.png (512x512)
- [x] Meta/JSON-LD URLs → real Pages domain
- [x] Review passes x2 (subagents) — clean
- [x] **New production repo created: pablo63leiva-alt/blue-collar-hustle-hub** (old repo was a fork; GitHub blocks Pages on forks)
- [x] GitHub Pages enabled via API (PAT) + build_type workflow
- [x] Deploy workflow passed (success)
- [x] Verified live: all 4 pages + css/js/img return HTTP 200

### Getting Here: The Fork Workaround
- GitHub refused to enable Pages on the original fork (even with `enablement: true` in the workflow): "Resource not accessible by integration".
- User created a fresh non-fork repo (blue-collar-hustle-hub); pushed code via PAT credential; created the Pages site via `POST /repos/.../pages` with classic PAT `repo`+`workflow` scopes; re-ran the deploy workflow → success.

### Notes
- Production pushes go to the `pages` git remote (blue-collar-hustle-hub). The fork remains the dev copy.
- Deploy is automatic on every push to `main` of blue-collar-hustle-hub.
- Keep sharing/reflog: the PAT was used during setup; revoke/replace it as needed.

### Optional Future Work
- Cleaner custom domain (e.g. bluecollarhustlehub.com) — then update meta/JSON-LD URLs in the 4 HTML files.
- Add newsletter backend (currently a placeholder that shows "Thanks for subscribing!").
- More trades, blog, or interactive quiz for "which trade fits me".