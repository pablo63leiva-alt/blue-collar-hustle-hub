# TradeLift Monetization Playbook

Turning traffic into sustainable revenue for a niche career-sites business.

---

## 1. Email List Funnel

The email list is the single most valuable asset before any monetization attempt. Every other revenue stream depends on having a warm, engaged audience.

### Current state
- Newsletter form on index.html and getting-started.html
- Exit-intent modal offering a free PDF lead magnet ("5 Trades Paying $60K+ with No Degree")
- Formspree endpoint wired up (needs real Formspree ID to activate)

### What to build next
- **Welcome sequence**: 3-email drip after signup — (1) deliver the PDF, (2) introduce the top 3 trades with salary data, (3) "which trade is right for you?" CTA linking to the quiz
- **Weekly newsletter**: Curated trade news, apprenticeship openings, tool deals. Consistency builds habit. Send the same day each week.
- **Segmentation**: Tag subscribers by interest (based on which page they signed up on or quiz results) so you can send targeted affiliate offers later.

### Realistic numbers
- A site with 1,000-5,000 monthly visitors can realistically build a 200-500 subscriber list in the first 3-6 months with no ad spend.
- Email open rates for career/education niches average 22-28%. That's your engaged core.
- A 500-person list is already enough to test affiliate offers and gauge demand for a paid product.

---

## 2. Affiliate & Partner Programs

Affiliate revenue is the most realistic early monetization path because it requires no product creation. For a trades-focused site, these are the viable categories:

### Trade school & training affiliates
- **Trade school referral programs**: Many vocational schools (UTI, Lincoln Tech, Williamson College of the Trades) offer referral fees ($50-$200 per enrolled student) for sending applicants. Check each school's website for "partner" or "affiliate" pages.
- **Online certification providers**: Sites like OSHA.com or 360training pay affiliates for safety certification referrals. OSHA 10/30 courses cost $25-$90 and pay 10-25% commissions.
- **Apprenticeship.gov**: Government site, no affiliate program — but linking to it builds trust and authority.

### Tool brand programs
- **Milwaukee Tool**: Has an influencer/affiliate program. Harder to get into as a small site, but possible if you produce content (tool reviews, comparisons).
- **DeWalt / Stanley**: Amazon Associates is the realistic path here — link to specific DeWalt/Stanley products through Amazon and earn 1-4% on qualifying purchases.
- **Harbor Freight**: Has a basic affiliate program. Their audience overlaps heavily with entry-level tradespeople (budget tools for beginners).
- **Klein Tools / Knipex**: No direct affiliate programs at small scale. Amazon Associates is again the path.

### Safety gear
- **Red Wing / Timberland PRO / Keen**: Work boot affiliate programs through Amazon or ShareASale.
- **MSA Safety / 3M**: Hard hat and PPE referrals through Amazon.

### Honest assessment
- Amazon Associates is the most accessible program (4% commission, wide product range). Sign up early even if payouts are small.
- Direct brand partnerships require 10,000+ monthly pageviews minimum. Not realistic in year one.
- Trade school referral programs are the highest per-lead value ($50-$200) but lowest volume. Focus content on "is trade school worth it?" and "trade school vs. apprenticeship" comparison pages to capture this intent.
- Realistic early affiliate revenue: $50-$200/month once you have 3,000+ monthly visitors and targeted content.

---

## 3. Display Advertising

### AdSense readiness
- Google AdSense requires 400+ pages of content (or equivalent quality) and must comply with content policies. TradeLift is close but should ensure:
  - No thin/duplicate content pages
  - Privacy policy page exists
  - All content is original (no scraped material)
  - Site is live for 30+ days
- Once approved, CPM for career/education content ranges from $2-$8 depending on geography. US traffic earns the most.

### EU cookie consent (GDPR/ePrivacy)
- If any traffic comes from EU visitors, you need a cookie consent banner before loading any tracking or ad scripts.
- Lightweight options: use a simple CSS/JS banner (no library needed) that stores consent in localStorage and only loads third-party scripts after consent.
- AdSense itself handles consent via its own CMP (Consent Management Platform) integration, but you still need your own banner for analytics.

### Realistic ad revenue
- At 5,000 monthly visitors with 3 pages/session = 15,000 pageviews.
- At $3 CPM average = $45/month from display ads.
- This is low. Display ads should be a passive income layer, not the primary strategy. They work best combined with email capture (the list is worth more than the ad impressions).

---

## 4. Digital Product Ideas

Digital products are where the real margin is. No inventory, no shipping, no COGS beyond your time.

### Career guide PDF (entry-level)
- **"The Complete Guide to Starting a Trade Career"** — expanded version of the existing 5-trades PDF. 30-50 pages covering trade selection, apprenticeship navigation, certifications, tool lists, interview prep, and salary negotiation.
- Price point: $9-$19. Or free as an email opt-in to grow the list faster.
- Sell via Gumroad or Lemon Squeezy (both handle payment processing, delivery, and tax compliance for digital goods).

### Resume & cover letter templates
- Trade-specific resume templates (not generic corporate ones). Include versions for apprenticeship applications, journeyman positions, and self-employed contractors.
- Price point: $7-$12 for a bundle of 3-5 templates.
- Low effort to create, high perceived value for the audience (17-24 year olds who've never written a trade resume).

### Quiz upsell
- The existing "Find Your Trade" quiz (widget/quiz.html) can be extended:
  - Free result: your top trade match + general info
  - Paid result ($5-$9): detailed career roadmap for your match, local training programs, estimated timeline to first paycheck, recommended certifications
- The quiz is already built. Adding a paywall to the detailed results is the highest-leverage product opportunity on the site.

### Premium tool guides
- "First Tool Kit Guide for [Trade Name]" — detailed product recommendations with Amazon affiliate links embedded.
- This doubles as affiliate content and a standalone product. Give the basic version free, sell the comprehensive version with comparison charts and budget tiers.

---

## 5. Five-Step Revenue Plan

### Step 1: Fix the funnel (Week 1-2) ← CURRENT
- Activate Formspree on all forms (paste real Formspree ID)
- Verify exit-intent modal works and captures emails
- Write and upload the 3-email welcome sequence (use free tier of Mailchimp or Buttondown)
- Create a privacy policy page (required for AdSense and builds trust)

### Step 2: Content for SEO traffic (Month 1-3)
- Publish 2-4 long-form articles targeting high-intent keywords:
  - "how to become an electrician with no experience"
  - "highest paying trade jobs 2025"
  - "trade school vs college cost comparison"
  - "best tools for apprentice electricians"
- Each article should include a newsletter CTA and relevant affiliate links.
- Goal: grow from current traffic to 3,000-5,000 monthly visitors via organic search.

### Step 3: Activate affiliate revenue (Month 2-3)
- Sign up for Amazon Associates immediately
- Add affiliate links to existing tool recommendation content
- Create 1-2 dedicated "best tools for [trade]" comparison posts
- Reach out to 2-3 trade schools about referral partnerships
- Goal: first $100/month in affiliate revenue.

### Step 4: Launch a digital product (Month 3-4)
- Build the expanded career guide PDF (or the quiz paywall)
- List on Gumroad with email delivery
- Promote to existing email list first, then add CTAs site-wide
- Price at $9-$14
- Goal: 20-50 sales in first month = $180-$700.

### Step 5: Apply for AdSense and scale (Month 4-6)
- Apply for Google AdSense once you have consistent traffic and content volume
- Install consent banner for GDPR compliance
- Continue growing email list and publishing content
- Reinvest early revenue into one paid promotion (e.g., Instagram/TikTok ads targeting trade-curious 18-24 year olds)
- Goal: combine all revenue streams to reach $500-$1,000/month by month 6.

---

## Revenue Projections (Conservative, 6-Month)

| Stream | Month 3 | Month 6 |
|---|---|---|
| Affiliate (Amazon + trade schools) | $50 | $200 |
| Digital products | $0 | $300 |
| Display ads (AdSense) | $0 | $150 |
| Email list (asset value) | — | Growing |
| **Total** | **$50** | **$650** |

These numbers are realistic for a niche static site with no paid traffic. The email list is the compounding asset — a 2,000-person list in this niche is worth $400-$1,000/month in affiliate/product revenue alone once you have something to sell.

---

## What NOT to do
- **Don't launch a paid course yet**. You don't have enough traffic or authority. Give away free value first.
- **Don't spam affiliate links**. One genuine recommendation per article, clearly labeled. Trust is your only currency with a young audience.
- **Don't ignore the email list for display ads**. Ad revenue requires massive traffic to be meaningful. Email conversion requires almost none. Prioritize list building.
- **Don't add a tip jar or donation button**. This audience (teens/young adults) won't donate. They'll buy a useful product or click an affiliate link for gear they need.
