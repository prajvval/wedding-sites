# wedding-sites — Indian wedding microsite service

Sell digital wedding invitations / wedding microsites to Indian couples. Each
deliverable is a small website (1-5 pages) with the couple's story, event
schedule, RSVP form, photo gallery, venue map, and travel info. The URL gets
shared on WhatsApp instead of (or alongside) a printed card.

## Why this works for the Indian market

- **Wedding spend is elastic even at modest income.** A ₹3,000-12,000 invite
  is rounding-error against a ₹5-50 lakh wedding budget.
- **WhatsApp is the distribution.** Indian couples already share invites on
  WhatsApp; a microsite URL is a natural upgrade from a forwarded JPG.
- **Built-in virality.** Every guest who opens the URL is a future lead.
  Footer with "made by [your brand]" turns 200-500 guests per wedding into
  zero-cost marketing.
- **B2B distribution, not B2C social.** Wedding planners, photographers,
  banquet halls, and jewellers all introduce vendors to couples. No
  Instagram grind required (see `channels.md`).
- **Templated → high margin.** Once you have 3-4 base templates, each
  deliverable is 2-4 hours of customization, not 20 hours of design.

## Packages — canonical feature matrix

These are the official, frozen package definitions. Used in the partner
deck, the couple-facing proposal, the outreach scripts, and any future
sample templates.

| Feature | **Basic ₹3,000** | **Standard ₹6,000** | **Premium ₹10,000** |
|---|---|---|---|
| **Pages** | 1-page scroll | 1-page, 8 sections | Multi-page (separate page per event) |
| **Templates** | 1 template, 3 preset palettes | 3 templates, custom palette (you pick hex) | Bespoke layout |
| **Photos** | Up to 5 | Up to 25, masonry gallery | Unlimited, lightbox + per-event galleries |
| **Story section** | — | 3-4 milestones | 4-6 milestones with timeline graphics |
| **Event details** | Simple text list | Card grid (photo, dress code, time, venue) | Full dedicated page per event |
| **Countdown** | — | Live ticker | Live ticker + animated transitions |
| **RSVP form** | Name + Y/N + guest count | + dietary, accommodation, per-event, free-text note | + CSV guest-list import, password-protected, auto email confirmations, live dashboard for couple |
| **Music** | — | 1 background track | Curated playlist (3-5 tracks) |
| **Languages** | English only | English + 1 regional (Hindi/Tamil/Marathi/etc.) | Up to 3 languages with toggle |
| **Hosting URL** | `studio.com/yourname` (subpath) | `yourname.studio.com` (subdomain) | Custom `.com` domain (yr 1 included) |
| **Animations** | None | Subtle scroll fades | Animated intro splash, parallax |
| **Post-wedding** | Live for 6 months | **Eternal Memory Mode** — site auto-transforms into a wedding photo album the day after; send us your photos and we add them (1 batch update included). Live for 1 yr. | **Eternal Memory Mode** with **unlimited photo updates** for the life of hosting (2 yrs included, renewable at ₹1,500/yr). Auto digital thank-you cards. |
| **Edits included** | 1 round | 2 rounds | 5 rounds |
| **Delivery** | 48 hours | 4-5 days | 7-10 days |
| **Support** | Email, 24-hr response | WhatsApp during business hrs | Priority WhatsApp + 1 video walkthrough |

**Add-ons** (any tier):
- Extra edit round: **+₹500/round**
- Custom illustrations: **+₹3,000** for one piece (see styles below)
- Illustration suite (3 pieces): **+₹7,500** (save ₹1,500)
- Full bespoke wedding identity: **+₹12,000** (everything custom + reusable
  assets for save-the-date, signage, menu cards)
- Companion printed cards (outsourced): cost-plus
- Multi-language beyond what's included: +₹500/language

**No "live day-of features"** (live photo feed, real-time event status
toggle, interactive guest map, etc.) — these need a backend and ongoing
infrastructure cost. Out of scope for a freelance studio. Removed from
all canon descriptions.

### Eternal Memory Mode (Standard + Premium)

The day after the wedding date, every Standard and Premium microsite
auto-transforms into a memory archive. The countdown disappears, the
RSVP form is hidden, and the page leads with a wedding photo album.

**How it works:**
- The site lives on at the same URL — guests bookmark it, parents share
  it with relatives who couldn't attend, the couple sends it to their
  own children one day. It is meant to be permanent.
- The couple emails or WhatsApps us their wedding photos within 60 days.
  We sort, optimise, and upload them.
- Standard tier includes **one batch update** (up to 50 photos). Further
  updates: ₹1,000 each.
- Premium tier includes **unlimited updates** for the life of hosting.
  Couples often add anniversary photos, baby announcements, etc. — the
  site grows with the family.

**Hosting renewal:** when the included hosting expires (1 yr Standard,
2 yrs Premium), couples can renew at ₹1,500/year to keep the memory
archive live indefinitely. Roughly 60-70% of couples are expected to
renew once they have actual photos on the site.

**Marketing positioning:** "Your wedding website doesn't end on your
wedding day." This is the single biggest emotional differentiator vs.
WhatsApp-forwarded JPGs and printed cards — neither can grow with the
couple's life.

**Implementation:** front-end JS conditional on `new Date()` vs the
wedding date. No backend required for the auto-transform — couple just
emails photos, we update the static gallery and re-deploy.

### Custom illustrations — styles available (₹3,000 add-on)

Customer picks **one** of these for the base add-on:

**Couple portraits**
1. **Watercolor** — soft, romantic, traditional. Best for elegant /
   classical weddings.
2. **Line-art minimalist** — clean, modern, monochrome. Best for urban /
   contemporary couples.
3. **Cartoon (Pixar-style)** — playful, expressive, vibrant. Best for
   younger / casual couples.
4. **Caricature** — humorous, exaggerated features. Best for fun / quirky
   weddings.
5. **Indian classical** (Madhubani, Pichwai, Kalamkari, or Warli style) —
   traditional Indian art forms. Best for heritage-themed weddings.
6. **Vintage botanical** — couple in a garden-illustration setting with
   hand-drawn flowers. Best for outdoor / garden weddings.

**Decorative motifs**
7. **Custom mandala** — circular composition with elements meaningful to
   the couple (peacock feathers, lotus, meeting place, etc.).
8. **Regional pattern** — peacock (Rajasthani), banana-leaf (South Indian),
   kantha (Bengali), Kashmiri shawl, Punjabi phulkari, etc.
9. **City-skyline silhouette** — couple silhouette with iconic location
   backdrop (Mumbai, Bangalore, Kerala backwaters, Hampi, Taj Mahal).

**Story timeline graphics**
10. **Hand-drawn objects** — set of 4 small icons of meaningful items from
    the couple's journey (the cafe where they met, the dog, the bike, the
    hill they got engaged on).

**Invite header art**
11. **Bespoke header** — large piece of artwork at the top of the microsite
    that becomes the wedding's visual identity (reusable for save-the-dates,
    signage, menu cards if you upgrade to the bespoke suite).

Production cost to studio: ₹500-3,000 per piece (Fiverr illustrator,
AI+manual refine, or art-school commission) + 2-5 hrs of integration
time. Margin on the ₹3,000 add-on is ₹0-2,500 — tight, but it creates
a clean upsell ladder and most couples buying illustrations will spend
on multiple.

## Revenue math (sanity check, post-pricing-update)

- 2 Standard closures/week @ ₹6k = **₹48k/month** part-time
- 1 Premium + 2 Standard/week = **₹88k/month**
- 1 Premium with full illustration suite + 2 Standard/week = **₹95k/month**
- Each deliverable: 2-4 hrs once templates exist (Basic), 3-5 hrs (Standard),
  6-8 hrs (Premium without illustrations). Bulk of week = sales + partner DMs.

## What's in this folder

- `README.md` — this file (orientation)
- `CONTEXT.md` — orientation for fresh Claude sessions
- `TODO.md` — build queue with statuses
- `channels.md` — concrete acquisition channels with confidence levels and
  step-by-step playbook
- `outreach-templates.md` — copy-paste DM / email scripts for each partner type
- `samples/aanya-rohan/` — first sample wedding microsite (Standard tier demo)
- `partner-deck/` — printable A4 pitch for B2B walk-ins (planners, venues, jewellers)
- `couple-deck/` — printable A4 proposal sent to enquiring couples
- `landing/` — your service's own landing page (where couples land after
  a referral or marketplace click). Includes the Eternal Memory Mode
  flagship section and a WhatsApp-handoff enquiry form.

## Build status

See `TODO.md` for live tracking.

✅ Strategy docs · sample microsite · partner deck · couple proposal deck · landing page
⬜ 2-3 more sample templates · Eternal Memory Mode auto-transform JS

## Constraints / honest caveats

- **Seasonality.** Indian wedding peak is Nov-Feb and Apr-Jul (muhurat
  dates). Lean months: Aug, Sep, monsoon. Plan for 60% of revenue in 6
  peak months.
- **Edit-round creep.** Couples and (especially) parents will request
  endless changes. The package limit on edit rounds is the only thing
  protecting your hourly rate. Charge ₹500/round beyond the included.
- **Refund expectations.** Indian customers often expect refunds on
  digital deliverables. Take 50% upfront, 50% on delivery; don't refund
  the 50% upfront once design starts.
- **Marketplace listings (WedMeGood etc.) cost money.** Free tier exists
  but paid promotion is what generates volume. Budget ₹15-30k/year if
  you commit.
