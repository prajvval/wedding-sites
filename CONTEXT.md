# CONTEXT — for fresh Claude sessions

If you're a Claude session being asked to help with this folder and you
have no prior memory of it, read this file first.

## Owner

Prajwal (`prajwalrao1108@gmail.com`). Indian, building a side income.
Originally tried `notes-lab` (Class XI Physics study notes site, see
`../notes-lab/`) but it requires too much social-media marketing for
the time available. This folder is the second attempt: a B2B-distributed
wedding-microsite service for the Indian market.

## What this business is

Sell digital wedding invitations / wedding microsites to Indian couples.
Each deliverable is a small website (1-5 pages) with the couple's story,
event schedule, RSVP form, photo gallery, venue map, and travel info.
The URL gets shared on WhatsApp instead of (or alongside) a printed
card.

Pricing tiers (canon — locked in):
- **Basic ₹3,000** — 1-page scroll, 1 template + 3 preset palettes, 5 photos,
  basic RSVP, English only, 48 hr delivery, 1 edit round
- **Standard ₹6,000** — 1-page with 8 sections (the Aanya & Rohan sample
  is this tier), 3 templates + custom palette, 25 photos, full RSVP, 1
  background music track, English + 1 regional language, 4-5 day delivery,
  2 edit rounds. **Eternal Memory Mode**: site auto-transforms into a
  wedding photo album the day after the wedding; couple sends us photos,
  we add them (1 batch update of up to 50 photos included). Live for 1 yr.
- **Premium ₹10,000** — multi-page (separate page per event), bespoke
  layout, unlimited photos, advanced RSVP (CSV import, password-protected,
  auto confirmations, live dashboard), curated music playlist, custom
  domain (yr 1 included), animated intro splash, up to 3 languages, 5
  edit rounds, 7-10 day delivery. **Eternal Memory Mode with unlimited
  photo updates** for the life of hosting (2 yrs included). Auto digital
  thank-you cards. Hosting renewable at ₹1,500/yr to keep the memory
  archive live indefinitely.

**Add-ons** (any tier):
- Custom illustrations: +₹3,000 for one piece (couple portrait /
  decorative motif / timeline graphics / invite header)
- Illustration suite (3 pieces): +₹7,500
- Full bespoke wedding identity package: +₹12,000 (everything custom +
  reusable assets for save-the-date, signage, menu)
- Extra edit round: +₹500
- Companion printed cards: cost-plus

**Live day-of features removed.** No backend, no real-time photo feed, no
event-status toggle. Out of scope for a freelance studio.

**Eternal Memory Mode (Standard + Premium).** The day after the wedding
date, the site auto-transforms into a wedding photo album. Front-end JS
checks `new Date()` against the wedding date; no backend needed. The
couple emails or WhatsApps photos to us; we sort, optimise, and re-deploy.
Standard includes 1 batch update; Premium is unlimited. Hosting is
renewable at ₹1,500/yr after the included period. This is the single
biggest emotional differentiator — the website grows with the family
instead of dying the day after the wedding. See README "Eternal Memory
Mode" section for details and pitch copy.

Realistic income target: ₹48-95k/month part-time by month 3 (math in README).

## Why B2B distribution, not social media

Owner's hard constraint: no months-long organic Instagram grind. So
acquisition is built on:

1. **WedMeGood marketplace listing** (free + paid tiers)
2. **Cold-DM partnerships** with wedding planners and photographers
   (15% commission per closed referral)
3. **Walk-in partnerships** with banquet halls / 3-4★ hotels (10%
   commission, every site embeds the venue's Google Map → free
   advertising for them)
4. **Counter-card partnerships** at bridal-wear & jewellery shops
   (flat ₹1,000 per closed referral to the recommending staff member)
5. **Built-in virality** — every wedding microsite has 200-500 guests
   open it; footer credit "made by [studio]" turns guests into leads.
   Becomes 20-30% of inbound by month 6.

Full channel detail in `channels.md`. Cold-outreach scripts in
`outreach-templates.md`.

## Folder layout

```
wedding-sites/
├── CONTEXT.md             ← this file
├── README.md              ← overview, packages, revenue math, caveats
├── TODO.md                ← build checklist with statuses
├── channels.md            ← 10 ranked channels + first-week action plan
├── outreach-templates.md  ← 7 copy-paste DM/email/walk-in scripts
├── samples/               ← demo wedding sites for showing prospects
│   └── aanya-rohan/       ← first sample (Standard tier example)
├── partner-deck/          ← printable A4 pitch for partner walk-ins (B2B)
├── couple-deck/           ← printable A4 proposal sent to enquiring couples
└── landing/               ← public-facing service landing page
                            (where couples land after a referral / marketplace click)
```

## Strategic decisions already made

- **Distinct from notes-lab brand.** This is a separate product line.
  Brand name **Knot & Ink** is locked in (decided 2026-05-03 after a
  collision check rejected the previous working canon "Jodi Studio" —
  it overlapped with Jodi Clickers, an established Indian wedding
  photography studio on the same marketplaces). Knot & Ink is canon
  across every sample, deck, and the landing page.
- **Live URL — needs Netlify rename.** The deploy folder still points at
  `knotandink.netlify.app` in code, but the *actually-claimed* Netlify
  subdomain is still `jodistudio.netlify.app` (claimed under the old
  name). Until the rename happens (Netlify dashboard → Site config →
  Change site name → `knotandink`, then re-deploy `wedding-sites/deploy/`),
  the printed decks and QR codes will 404. **This is a hard blocker for
  outreach.** Eventual custom domain target: `knotandink.in` (not yet
  registered, ~₹600-1500/yr at any Indian registrar).
- **Contact channels:**
  - **WhatsApp** `+91 89569 29726` (real, owner's number — hardcoded in
    `landing/script.js` form-submit handler so the enquiry form opens
    a wa.me link to the right phone). wa.me URL form: `918956929726`.
  - **Email** — removed entirely. Site routes everyone to WhatsApp.
    Decision rationale: no domain owned yet (so `hello@knotandink.in`
    would be broken), and a Gmail address looks unprofessional for the
    studio brand. WhatsApp-only is simpler and matches how Indian
    couples already prefer to talk to vendors.
  - **Instagram — handle TBD.** `@knotandink` is taken (verified
    2026-05-03 — active macrame & prints craft account, not a
    wedding competitor). The codebase still references `@knotandink`
    everywhere; this is a known issue and needs a global swap once
    a variant is claimed. Variants to try in order: `@knotandink.studio`
    (preferred), `@knotandink.in`, `@knotandink.co`, `@knot.and.ink`,
    `@knotandinkstudio`. See TODO.md outreach-readiness section for
    the full action item.
- **Target city: Pune** (locked 2026-05-03). Owner is physically based in
  Pune, which makes the in-person walk-in channels (banquet halls,
  jewellers, bridal-wear) viable. Pune is also one of the recommended
  Tier 2 cities in `channels.md` — less gatekeeping than Mumbai/Bangalore.
- **Warm-intro asset: maangal.com (mom's cousin).** Owner's mom's cousin
  runs maangal.com, a Garhwali/Kumaoni matrimonial matchmaking site
  founded 2008, based in Dehradun, ~16k profiles, ~5 employees. Real
  partnership opportunity, but smaller than it sounds.

  **The funnel logic:** every successful maangal match becomes an
  engaged couple within 6-18 months who needs wedding vendors. So
  maangal users are *future* Knot & Ink customers, not current ones —
  the question is how to reach them at the right moment without
  violating their privacy.

  **Realistic math:** 16k profiles lifetime → ~1.5-2.5k actively-
  matching/year → ~150-300 marrying within 12 months → ~30-80 willing
  to pay ₹6k+ for digital invites → **5-15 closures/year via this
  channel** (~₹30-90k/year revenue). Useful but not a Tier 1 channel.
  Don't reorganise strategy around it; treat it as a parallel low-
  effort kicker to the Pune planner/photographer outreach.

  **The two-tier ask (one call):**
  1. *Platform partnership* — a banner, footer link, or "recommended
     vendors" widget on maangal.com that points to Knot & Ink's
     landing page with a tracking URL. Pay 15% commission on closed
     sales, OR a flat monthly placement fee. No data ever leaves his
     platform.
  2. *Personal network* — warm intros to wedding planners, photographers,
     and venue managers he's met in 16 years of running a wedding-
     adjacent business. One vouched intro converts ~10x better than a
     cold DM.

  **DPDP 2023 hard rules — never violate:**
  - ❌ Don't ask for or accept user data, profile exports, contact
    lists, or "the engaged people from your platform."
  - ❌ Don't cold-message maangal users.
  - ✅ A banner placement, a tracking link, an opt-in newsletter
    mention from maangal itself — all fine, no data leaves the platform.
  - ✅ Direct introductions where the couple opts into the conversation
    — fine.

  **Don't over-invest:** building a Garhwali/Kumaoni-specific sample
  template just for maangal is not justified at 5-15 closures/year.
  The existing Aanya & Rohan sample (Pune-Udaipur, modern Indian) works
  for this audience too.
- **Mobile-first design.** Most guests open the URL on phone via
  WhatsApp. Desktop is secondary.
- **No paid ads in month 1-3.** CPL for wedding services in India is
  ₹300-1500. Don't burn cash until conversion funnel is proven.
- **Target city not yet locked in.** Tier 2/3 cities have less
  competition than metros. Owner will pick before outreach starts.
- **English-Hinglish for partner outreach.** Regional language for
  couple-facing content if relevant.
- **Take 50% upfront, 50% on delivery.** Indian customers expect
  refunds on digital deliverables; the 50% upfront is non-refundable
  once design starts.
- **Edit rounds capped per package.** ₹500/round beyond the included.
  Without this cap, hourly rate collapses.

## Honest caveats / known risks

- **Seasonality.** Indian wedding peak is Nov-Feb and Apr-Jul (muhurat
  dates). Lean: Aug, Sep. Plan for 60% of revenue in 6 peak months.
- **Marketplace listings cost money.** WedMeGood paid tier ₹15-30k/year.
- **Edit-round creep is the #1 margin killer.** Parents will request
  endless changes. Hold the line on the cap.
- **Studio name & legal entity not set up.** Razorpay needs a registered
  business or sole-prop with PAN. GST registration kicks in at ₹20L
  turnover (₹40L for goods).

## What's been built so far

See `TODO.md` for live status. As of latest update:

- ✅ Strategy docs (README, channels, outreach templates)
- ✅ One sample wedding microsite (`samples/aanya-rohan/`) — Standard tier
- ✅ Partner pitch deck (`partner-deck/`) — printable A4, B2B-facing
- ✅ Couple-facing proposal deck (`couple-deck/`) — printable A4,
  persuasive sales document for enquiring couples
- ✅ Service landing page (`landing/`) — public site where couples
  land after a referral / marketplace click. Includes Eternal Memory
  Mode flagship section and WhatsApp-handoff enquiry form.
- ⬜ 2-3 more sample templates for couple choice
- ⬜ Implement Eternal Memory Mode auto-transform JS in sample microsite

## Where to start if the user asks "what's next"

The build phase is essentially complete. The next phase is **outreach
readiness**. See the **⚡ Outreach readiness** section at the top of
`TODO.md` for the gating items — there are 4 hard blockers (studio name
lock, target city lock, Instagram handle claim, Eternal Memory Mode JS)
and 3 operational prep items (printed deck, WedMeGood profile, prospect
list) that stand between the current state and the first partner DM /
walk-in. If the user asks "what's left before I start outreach" or "what
do I do next," that section is the answer.

## How to help when the user comes back

Common asks you might get:
- *"Add another sample template"* → mirror the structure of
  `samples/aanya-rohan/` but with a different aesthetic (modern
  minimalist / South Indian classical / royal Rajasthani / coastal
  Goan etc.). Keep the same section list (hero / story / countdown /
  events / gallery / RSVP / travel / FAQ / footer).
- *"Build the service landing page"* → think of this as the equivalent
  of `notes-lab/index.html`. Couple lands here from a referral, sees
  packages, sees samples, fills enquiry form. Mirror the design tone
  of the chosen sample template family.
- *"Translate the partner DM to Hindi/Marathi/Tamil"* → keep the
  structure of `outreach-templates.md` template #1 but localise.
- *"Set up Razorpay / payment integration"* → owner needs PAN +
  registered business name first. Razorpay test mode works without it
  for development.
- *"What city should I start in"* → push back: Tier 2 cities (Pune,
  Jaipur, Ahmedabad, Lucknow, Kochi, Chandigarh) usually beat metros
  for first-time vendors. Where does the user already have on-the-ground
  contacts?

When in doubt, prefer pushing back on under-specified asks over
generating speculative content. The owner prefers thorough work, not
token-saving (per memory), but also values honest "this won't work
because" pushback over compliant fluff.
