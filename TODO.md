# TODO — wedding-sites build queue

Build order is intentional. #1 is required before any partner outreach
(you have nothing to show without a sample). #3 is required before any
walk-in (#1 + #3 unlock the entire Tier 1 sales channel).

---

## ⚡ Outreach readiness — gating items before calling customers

The build deliverables (sample, landing, partner deck, couple deck) are
all shipped and live at `knotandink.netlify.app`. What's still blocking
the first partner DM / walk-in:

### Hard blockers — do before contacting anyone

- [x] **Lock the studio name.** ✅ **Knot & Ink** is locked in (decided
      2026-05-03). Collision-checked against Indian wedding industry
      and global design studios — clean. Previous working canon "Jodi
      Studio" was rejected because of name overlap with Jodi Clickers
      (established Mumbai/London wedding photography studio, listed on
      the same marketplaces we plan to use). Global find-and-replace
      executed across all 13 files in the project.
- [ ] **Rename the Netlify site subdomain.** The live URL is currently
      `jodistudio.netlify.app` (claimed under the old name) but every
      file now references `knotandink.netlify.app`. Until this is
      renamed, the URL on every printed deck and the QR codes will
      404. Fix: Netlify dashboard → Site config → Change site name →
      `knotandink`. Then re-deploy the `deploy/` folder. Free, instant.
- [x] **Lock the target city.** ✅ **Pune** is locked in (decided
      2026-05-03). Owner is physically based in Pune, so walk-ins to
      banquet halls and counter-card placements at jewellers (channels
      #4 and #5) are fully unlockable. Pune is also one of the
      recommended Tier 2 cities in `channels.md` — less competition
      than Bangalore/Mumbai, higher DM response rates.
      Warm-intro asset: owner's mom's cousin runs **maangal.com** (a
      Garhwali/Kumaoni matrimonial site, Dehradun-based, founded 2008).
      Not a direct wedding-services partnership, but his **personal
      network** in the broader wedding-adjacent industry is the real
      asset — see "Owner network / warm intros" section below.
- [ ] **Claim a working Instagram handle.** ⚠️ `@knotandink` is **TAKEN**
      (verified 2026-05-03) by an active macrame & prints craft account
      ("knot & ink | macrame and prints"). Not a competitor, but the
      exact handle is unavailable.

      **Codebase risk:** every customer-facing file currently links to
      `instagram.com/knotandink`, which now points at a stranger's
      account. Hand a printed deck to a planner today and they'll click
      through to macrame photos. Either swap the references to a
      claimed variant, OR strip the IG link entirely until claimed.

      **Variants to try in order (pick first available):**
      1. `@knotandink.studio` ⭐ recommended
      2. `@knotandink.in`
      3. `@knotandink.co`
      4. `@knot.and.ink`
      5. `@knotandinkstudio`

      Once claimed, run a global find-and-replace from `knotandink` →
      `<chosen-handle>` across landing/index.html, deploy/index.html,
      partner-deck/deck.html, couple-deck/proposal.html, CONTEXT.md,
      and TODO.md. Same playbook as the brand-name swap.

      Why this is a hard blocker: Tier 1 channels #2 and #3 (cold-DM
      planners + photographers) *are* Instagram. Cannot run them without
      an account that looks live — profile photo, bio with WhatsApp +
      landing URL, 3-6 posts (sample screenshots) so it doesn't read
      as a sock puppet.
- [x] **Build Eternal Memory Mode auto-transform JS.** ✅ Shipped
      2026-05-03 in both `samples/aanya-rohan/` (source) and
      `deploy/samples/aanya-rohan/` (deploy bundle).

      **What was built:**
      - `MEMORY_MODE_DATE` constant in `script.js` set to 15 Feb 2027
        00:00 IST (= the day after Aanya & Rohan's wedding). On page
        load, JS compares `new Date()` against this constant; if past,
        adds `.is-post-wedding` class to `<body>`.
      - CSS in `styles.css` hides countdown / RSVP / travel / FAQ /
        floating CTA when `.is-post-wedding` is present, and swaps
        between `.pre-wedding-only` / `.post-wedding-only` elements
        (hero eyebrow, hero CTA, gallery memory note).
      - Hero eyebrow swaps "Together with their families" →
        "Forever, since". Hero CTA swaps "RSVP by 15 January" → "View
        our wedding album" (anchor to gallery). Gallery memory note
        swaps the upsell copy → "Thank you for celebrating with us"
        with permanent-album framing.
      - **Demo toggle** (bottom-left floating button) for showing both
        modes to planners without time-travelling. Wrapped in HTML
        comments marking it as DEMO-ONLY — for real client sites,
        delete the toggle HTML in `index.html` AND the
        `demoToggle` binding in `script.js`. The auto-transform
        keeps working without it.

      **To test:** open `samples/aanya-rohan/index.html` in a browser.
      You should see the pre-wedding view by default. Click the gold
      "DEMO · Preview post-wedding view" button bottom-left to flip.
      Countdown / RSVP / travel / FAQ should disappear; gallery memory
      note should change copy.

### Operational prep — afternoon of work, don't skip

- [ ] **Print the partner deck** — A4, colour, ~10 copies for walk-ins
      to banquet halls and jewellers. Keep a phone-PDF backup.
- [ ] **WedMeGood free vendor profile** — needs 8-12 portfolio images.
      With only one sample built, upload section/screenshot crops of
      Aanya & Rohan as separate portfolio tiles, OR ship a second sample
      first (see priority #4 below).
- [ ] **Prospect list spreadsheet** — 50 planners + 30 photographers in
      target city, columns for Instagram handle, DM-sent date, reply
      status, follow-up date. Google Sheet is fine.

### Owner network / warm intros — assets to leverage

- [ ] **Mom's cousin (maangal.com) — make a TWO-TIER ask in one call.**
      Family contact who runs maangal.com (Garhwali/Kumaoni matrimonial
      site, est. 2008, ~16k profiles, Dehradun-based — see CONTEXT.md
      for the full assessment + math). Maangal users are *future* Knot &
      Ink customers — every successful match becomes an engaged couple
      shopping for vendors within 6-18 months — so a partnership is
      worth pursuing as a **parallel low-effort channel**, not a Tier 1
      replacement for Pune planner/photographer outreach.

      **Tier 1 ask — platform partnership** (lightweight):
      "Could you add a small 'Recommended Wedding Invite Studio' link
      or banner on maangal.com? I'll give you a tracking URL and pay
      15% of any sale that closes through it." Realistic volume: 5-15
      closures/year (~₹30-90k/year revenue). Implementation: cousin
      pastes an HTML snippet, owner gives him a tracking URL.

      **Tier 2 ask — personal network**:
      "Separately, over 16 years running a wedding-adjacent site, you
      must know planners, photographers, and venue managers across
      Uttarakhand and possibly Maharashtra. Anyone you'd vouch for in
      Pune?" One warm intro from him beats 30 cold DMs.

      **Hard guardrails** (DPDP 2023):
      - ❌ Never ask for or accept user data, profile exports, or
        contact lists from his platform.
      - ❌ Never cold-message maangal users yourself.
      - ✅ A banner / link / opt-in newsletter mention from maangal
        itself is fine — no data leaves their platform.
      - ✅ One-on-one introductions where the couple opts into the
        conversation are fine.

      **What NOT to over-invest:** don't build a Garhwali/Kumaoni-
      specific sample template just for this. Volume doesn't justify
      the work. The existing samples are fine.

### Not blockers for outreach — but blockers for *closing*

- [ ] **Payment flow.** Razorpay needs PAN + registered business; not
      ready yet. Workaround: collect 50% upfront via UPI to personal
      account for the first few closures, formalise once revenue justifies
      registering as sole-prop.
- [ ] **RSVP form backend.** Sample form is UI-only. Promise it delivered
      *with* the paid site (Formspree free tier or Google Form is enough);
      don't try to ship it pre-sale.

---

## Priority queue

- [x] **1. One stunning sample template** — couple-facing demo site for
      a fictional wedding. Showcases the Standard tier (₹6,000)
      capability. Without this, you have nothing to show planners or
      send to enquirers. Built at `samples/aanya-rohan/`.

- [x] **2. Service landing page** — public-facing site at `landing/`.
      Sections: hero, why-us grid, sample showcase (links to
      Aanya & Rohan), 3 package cards, add-ons, **Eternal Memory Mode**
      flagship section, process timeline, testimonials, FAQ, enquiry
      form (submits to WhatsApp). Footer credit on every sample
      template should link here.

- [x] **3. Partner pitch deck** — printable A4 PDF-ready document for
      walk-ins to banquet halls, jewellery shops, and bridal-wear
      stores. One-page front + one-page back, QR code linking to the
      sample. Built at `partner-deck/`.

- [x] **3.5. Couple-facing proposal deck** — printable A4 document
      sent to enquiring couples to convince them to commit. Persuasive,
      detailed, includes full feature matrix, illustration style menu,
      process timeline, payment terms. Built at `couple-deck/`.

- [ ] **4. 2-3 more sample templates** — gives couples actual choice.
      Suggested aesthetic spread:
      - Modern minimalist (tone: contemporary urban couples)
      - Royal Rajasthani (tone: heritage + opulence)
      - Coastal/Goan or South Indian classical (tone: regional pride)
      Each follows the section structure of the first sample but
      different colour palette, typography, and decorative motifs.

## Backlog (not yet prioritised)

- [ ] **Eternal Memory Mode JS** — implement the front-end auto-transform
      on the sample microsite (and template library): conditional on
      `new Date()` vs the wedding date, hide countdown + RSVP, swap hero
      copy from "Save the date" to "Married on [date]", lead with the
      photo gallery. No backend needed.
- [ ] **Landing page enquiry form** — currently submits to WhatsApp via
      `wa.me`. For higher conversion, also POST to Formspree / Google
      Form so enquiries land in inbox even if the couple bails before
      hitting WhatsApp send.
- [ ] Razorpay payment integration (needs registered business + PAN)
- [ ] RSVP form backend (currently the sample form is UI only —
      production needs Formspree, Google Forms, or a tiny backend)
- [ ] Guest-list CSV import for Premium tier (server-side)
- [ ] Illustrator partnerships (line up 2-3 freelance illustrators on
      Fiverr/Behance to fulfil the +₹3,000 illustration add-on)
- [ ] Companion print-card outsourcing partner (caterers ask for both
      digital + physical)
- [ ] Multi-language template variants (Hindi, Tamil, Telugu, Marathi)
- [ ] Studio brand identity (name + logo + colour system)
- [ ] WedMeGood vendor profile setup
- [ ] Partner CRM tracking (Google Sheet template at minimum)

## Pricing — canon

- **Basic ₹3,000** · **Standard ₹6,000** · **Premium ₹10,000**
- Add-on illustrations: +₹3,000 (1 piece) / +₹7,500 (suite of 3) /
  +₹12,000 (full bespoke wedding identity)
- Live day-of features removed — out of scope for freelance studio
- Full feature matrix in `README.md` and `couple-deck/proposal.html`

## Decisions still pending from owner

These overlap with the outreach-readiness blockers above — listed there
with action context, listed here for the strategic/decision lens.

- ~~**Studio name**~~ ✅ **DECIDED 2026-05-03: Knot & Ink.** All 13
  project files updated. Old Netlify subdomain (`jodistudio.netlify.app`)
  still claimed under the previous name — needs to be renamed to
  `knotandink.netlify.app` in Netlify dashboard before any printed deck
  or QR code is shown to a partner. Eventual custom domain target:
  `knotandink.in` (not yet registered, ~₹600-1500/yr at any Indian
  registrar).
- ~~**Target city**~~ ✅ **DECIDED 2026-05-03: Pune.** Owner is
  physically based there. All canon-references updated across landing,
  partner deck, sample microsite, and the deploy bundle. Demo couple
  Aanya & Rohan repositioned as Pune-based for narrative consistency.
- **Instagram handle** — `@knotandink` is placeholder, not yet claimed.
  Required to run cold-DM channels (planners, photographers).
- **Whether to register a business entity now** or run as sole-prop
  until GST threshold (₹20L turnover). Doesn't block outreach; does
  block formal payment integration (Razorpay needs PAN + business name).
- **Custom illustration delivery** — pre-arrange 2-3 freelance
  illustrators on Fiverr/Behance to fulfil the +₹3,000 add-on, OR build
  an AI+manual workflow. Doesn't block outreach; does block fulfilment
  on the first illustration upsell.

## Demo content used across files

These are placeholders that should be swapped before going live:

- **Couple-deck demo couple:** Aanya & Rohan · 14 February 2027 ·
  Udaipur, Rajasthan (matches the sample microsite)
- **Couple-deck demo dates:** sent 1 May 2026 · valid until 31 May 2026
- **Couple-deck testimonials:** Priya & Karthik (Pune), Ishaan & Aditi
  (Delhi-Jaipur), Rhea & Aryan (Goa) — fictional. Replace with real
  ones once you have closed weddings.
