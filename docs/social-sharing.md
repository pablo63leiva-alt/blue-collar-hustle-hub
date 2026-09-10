# Social Sharing Playbook — TradeLift Quiz Results

A practical guide for sharing quiz result cards on social media to drive traffic and build community.

---

## Where to Share

### Instagram
- **Format:** Post the result card as a square or 4:5 crop in the feed; use Stories (tap to share the card image, add a "Link" sticker to quiz.html).
- **Why:** Visual-first platform, result cards are scroll-stopping, Stories link stickers drive direct clicks.
- **Tip:** Post the card as a carousel slide 1 of 2 — slide 2 = a close-up of the trade's salary band or a "Take the Quiz" CTA.

### TikTok
- **Format:** 15-30 second video — screen-record yourself taking the quiz, then flash the result card at the end. Or stitch with a trade-related "day in the life" clip.
- **Why:** Short-form video dominates teen attention. "Which trade are you?" is a proven format on TikTok.
- **Tip:** Use the "Green Screen" effect with the result card as the background. Add text overlay: "I'm built for [Trade]! 🔥 What's YOUR trade?"

### X (Twitter)
- **Format:** Attach the result card image + the share text ("I'm built for [Trade]! Take the quiz → [link]").
- **Why:** Quote-tweet potential — others can share "I got [Trade] too!" creating thread chains.
- **Tip:** Tag @TradeLift and use 2-3 hashtags max. Thread a follow-up with 3 facts about the trade.

### Threads
- **Format:** Post the card image + a casual caption. Threads favors conversational, low-production content.
- **Why:** Younger audience migrating here, less algorithm competition than Instagram feed.
- **Tip:** Ask a question in the caption ("Got Electrician — anyone else?") to boost comments.

### Snapchat
- **Format:** Snap the result card screen with a caption + link to the quiz.
- **Why:** Ephemeral sharing feels low-stakes for teens, drives curiosity clicks.
- **Tip:** Use the quiz URL as a Snap link sticker.

---

## Sample Captions

### Electrician
1. "Just found out I'm built for Electrician ⚡ $60K-$80K/yr, no student debt, and I get to wire the future. 2-minute quiz, zero commitment. What trade are you? [link]"
2. "Electrician it is ⚡ Hands-on problem solving, solid pay, and I'm never bored. Take the quiz and drop your result 👇 [link]"
3. "Turns out I should've been an electrician this whole time 😅⚡ $60K-$80K salary range. No degree required. Find your trade → [link]"

### Welder
1. "Welder 🔥 Thriving in fast-paced environments and building things that last — that's me. $45K-$70K/yr and certifiable in 6 months. What's YOUR trade? [link]"
2. "I'm built for Welder! 🔥 The hands-on creative life was calling all along. Take the 2-minute quiz and see where you fit → [link]"
3. "Me at 16: 'I don't know what I want to do.' Me now: *gets Welder on a trade quiz* 🔥🔥 $45K-$70K, no college needed. Take it → [link]"

### HVAC Technician
1. "HVAC Technician ❄️ Heating in winter, cooling in summer — always in demand. $50K-$70K/yr. Take the quiz and tell me your result 👇 [link]"
2. "Turns out I'm built for HVAC! ❄️ Mix of indoor precision work and real-world problem solving. No student loans. Find your trade in 2 min → [link]"
3. "HVAC Tech checking in ❄️ The trades I never knew existed but apparently I'm perfect for. $50K-$70K and year-round demand. What's your match? [link]"

---

## Hashtag Sets

Copy-paste ready. Rotate to avoid repetition.

### Primary (use on every post)
`#TradeLift` `#SkilledTrades` `#TradeCareer`

### Secondary (rotate 2-3 per post)
`#FindYourTrade` `#BlueCollar` `#TradeSchool` `#NoStudentDebt` `#CareerQuiz` `#ElectricianLife` `#WeldingLife` `#HVACtech` `#PlumberLife` `#CarpenterLife` `#IronworkerLife` `#ConstructionLife`

### Platform-specific
- **Instagram:** Add `#CareerTok` (cross-pollination), `#TradeLife`
- **TikTok:** `#TradeTok` `#BlueCollarTok` `#CareerTok`
- **X:** Keep it minimal — `#SkilledTrades` `#TradeLift` only

---

## Best Posting Times (Teen / Young Adult Audience)

| Platform | Best Times (EST) | Best Days |
|----------|------------------|-----------|
| Instagram | 11am-1pm, 7pm-9pm | Tue-Thu, Sun |
| TikTok | 7am-9am, 12pm-3pm, 7pm-11pm | Tue, Thu, Fri |
| X | 12pm-3pm | Wed, Thu |
| Threads | 8am-10am, 6pm-9pm | Mon-Fri |
| Snapchat | 6pm-11pm | Daily |

**Key insight:** Lunch breaks (12-1pm) and evening scroll time (7-10pm) are the highest-engagement windows for 16-24 year olds. Schedule posts 30 minutes before peak windows.

---

## UTM Tracking Scheme

Append these parameters to the quiz URL in every shared link to attribute traffic back to social posts.

### Base URL
```
https://tradelift.is-a.dev/quiz.html
```

### UTM Parameters
```
?utm_source={platform}&utm_medium=social&utm_campaign=quiz_share&utm_content={trade_name}
```

### Examples

| Platform | Full URL |
|----------|----------|
| Instagram post | `https://tradelift.is-a.dev/quiz.html?utm_source=instagram&utm_medium=social&utm_campaign=quiz_share&utm_content=electrician` |
| TikTok video | `https://tradelift.is-a.dev/quiz.html?utm_source=tiktok&utm_medium=social&utm_campaign=quiz_share&utm_content=welder` |
| X post | `https://tradelift.is-a.dev/quiz.html?utm_source=x&utm_medium=social&utm_campaign=quiz_share&utm_content=hvac` |
| Threads post | `https://tradelift.is-a.dev/quiz.html?utm_source=threads&utm_medium=social&utm_campaign=quiz_share&utm_content=plumber` |
| Snapchat | `https://tradelift.is-a.dev/quiz.html?utm_source=snapchat&utm_medium=social&utm_campaign=quiz_share&utm_content=electrician` |

### utm_term (optional, for A/B testing captions)
Add `&utm_term={caption_variant}` when testing different caption styles. Example: `&utm_term=emoji_heavy` vs `&utm_term=clean`.

### Tracking in GA4 / Plausible
These UTM parameters will automatically appear in your analytics dashboard under Acquisition > Traffic Sources. Filter by `utm_campaign=quiz_share` to see all quiz-share-driven traffic in one view.

---

## Quick-Start Checklist

- [ ] Complete the quiz, download your result card
- [ ] Pick a platform (start with where your audience already is)
- [ ] Copy a sample caption, personalize it
- [ ] Paste the UTM-tracked URL (replace {platform} and {trade_name})
- [ ] Post at a peak time from the schedule above
- [ ] Reply to every comment in the first hour (boosts algorithm reach)
- [ ] Cross-post the card to 1-2 other platforms the same day
