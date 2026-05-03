============================================================
KNOT & INK — Netlify deploy folder
============================================================

This folder is the public-ready bundle of the Knot & Ink site.
Currently deployed at: https://knotandink.netlify.app

Drop this folder onto Netlify Drop again to redeploy after
making changes.

------------------------------------------------------------
WHAT'S IN HERE
------------------------------------------------------------

  index.html               Landing page (couple-facing)
  styles.css               Landing page styles
  script.js                Landing page interactivity
  samples/aanya-rohan/     Live demo wedding microsite
  robots.txt               Tells search engines they can index
  _headers                 Security + caching for Netlify
  README.txt               This file (Netlify ignores it)

The internal docs (couple-deck, partner-deck, channels.md,
outreach-templates.md, README.md, CONTEXT.md, TODO.md) are
NOT in this folder. They contain pricing math and partner
commission rates that should not be public.

------------------------------------------------------------
HOW TO DEPLOY (first time, no signup needed)
------------------------------------------------------------

  1. Open https://app.netlify.com/drop in your browser.
  2. Drag this entire "deploy" folder onto the drop zone.
  3. Wait ~20 seconds. Netlify gives you a URL like
     https://radiant-puppy-12345.netlify.app
  4. Open that URL on your phone to confirm it works.
  5. Optional: claim the deploy by signing up with email or
     Google. That gives you a Netlify dashboard where you
     can rename the site (e.g. knotandink.netlify.app),
     redeploy by drag-drop, view traffic, etc.

------------------------------------------------------------
HOW TO REDEPLOY AFTER YOU CHANGE FILES
------------------------------------------------------------

  Source files live ONE FOLDER UP in:
    ../landing/             (landing page source)
    ../samples/aanya-rohan/ (sample microsite source)

  When you edit those, you need to RE-COPY them into this
  folder (and re-fix the cross-folder paths). The simplest
  way is to ask Claude in this project to "rebuild the
  deploy folder" — it knows the exact edits to make.

  Then drag this deploy folder back onto Netlify Drop. If
  you signed up, Netlify keeps the same URL.

------------------------------------------------------------
CONTACT INFO
------------------------------------------------------------

  WhatsApp:  +91 89569 29726  (real, hardcoded in script.js
             form handler and footer)
  Email:     removed — site routes everyone to WhatsApp
  Instagram: @knotandink  (still placeholder, claim or
             change before serious sharing)
  Studio:    Knot & Ink  (still tentative — easy global
             find-and-replace if you pick a different name)

------------------------------------------------------------
WANT A CUSTOM DOMAIN LATER?
------------------------------------------------------------

  1. Buy knotandink.in (or another name) at Namecheap,
     GoDaddy, Hostinger, or Google Domains. ~₹600-1500/yr.
  2. In Netlify dashboard → Site settings → Domain
     management → Add custom domain.
  3. Netlify gives you DNS records (A + CNAME). Paste them
     into your registrar's DNS settings.
  4. Wait 1-24 hours for DNS propagation. Site is live at
     your custom URL with auto-renewing SSL.

============================================================
