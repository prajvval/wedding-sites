/* =========================================================
   Aanya & Rohan microsite — interaction script
   ========================================================= */

(() => {
  'use strict';

  // ---------- Wedding date (IST) ----------
  // 14 February 2027, 11:00 AM IST = 05:30 UTC
  const WEDDING_DATE = new Date(Date.UTC(2027, 1, 14, 5, 30, 0));

  // Eternal Memory Mode flips the day AFTER the wedding (00:00 IST
  // on 15 Feb 2027 = 18:30 UTC on 14 Feb 2027). Per the brand promise:
  // the site stays in pre-wedding mode through the wedding day itself,
  // then transforms into a memory archive overnight.
  const MEMORY_MODE_DATE = new Date(Date.UTC(2027, 1, 14, 18, 30, 0));

  // ---------- Countdown ----------
  const cells = {
    days:    document.querySelector('[data-unit="days"]'),
    hours:   document.querySelector('[data-unit="hours"]'),
    minutes: document.querySelector('[data-unit="minutes"]'),
    seconds: document.querySelector('[data-unit="seconds"]'),
  };

  function pad(n) { return String(n).padStart(2, '0'); }

  function updateCountdown() {
    const now = new Date();
    let diff = WEDDING_DATE - now;
    if (diff < 0) diff = 0;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    if (cells.days)    cells.days.textContent    = pad(days);
    if (cells.hours)   cells.hours.textContent   = pad(hours);
    if (cells.minutes) cells.minutes.textContent = pad(minutes);
    if (cells.seconds) cells.seconds.textContent = pad(seconds);
  }
  updateCountdown();
  // Capture the timer handle so applyMemoryMode (below) can clear it
  // when the site flips to post-wedding mode — there's no point
  // updating an off-screen DOM every second.
  let countdownTimer = setInterval(updateCountdown, 1000);

  // ---------- Sticky nav state ----------
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 30) nav.classList.add('is-stuck');
    else nav.classList.remove('is-stuck');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- Mobile menu ----------
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  navToggle?.addEventListener('click', () => {
    nav.classList.toggle('is-open');
  });
  mobileMenu?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => nav.classList.remove('is-open'));
  });

  // ---------- RSVP: hide attendance fields if declining ----------
  const form = document.getElementById('rsvpForm');
  const success = document.getElementById('formSuccess');

  if (form) {
    form.querySelectorAll('input[name="attending"]').forEach(radio => {
      radio.addEventListener('change', e => {
        form.classList.toggle('is-declined', e.target.value === 'no');
      });
    });

    form.addEventListener('submit', e => {
      e.preventDefault();
      const data = new FormData(form);

      // PRODUCTION TODO: replace with Formspree / Google Forms / backend POST.
      // For the sample, we just show a confirmation and log the data.
      console.log('RSVP data:', Object.fromEntries(data.entries()));

      form.style.display = 'none';
      if (success) {
        success.hidden = false;
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  // ---------- Eternal Memory Mode ----------
  // After MEMORY_MODE_DATE has passed, transform the site into a
  // post-wedding memory archive:
  //   - .is-post-wedding class on <html> drives section-level hides
  //     (countdown / events / RSVP / travel / FAQ + nav RSVP link).
  //   - [hidden] attribute on .pre-wedding-only / .post-wedding-only
  //     elements drives copy swaps (hero eyebrow + CTA, gallery note).
  //   - countdown setInterval is cleared (no point ticking off-screen).
  //
  // The same date check ALSO runs as an inline <script> in <head> so
  // the post-wedding state is on <html> BEFORE first paint (no flash
  // of pre-wedding view on slow-JS devices). When customising for a
  // real client wedding, update BOTH date constants — here AND in the
  // <head> inline script in index.html.
  function applyMemoryMode(isPost) {
    document.documentElement.classList.toggle('is-post-wedding', isPost);
    document.querySelectorAll('.pre-wedding-only').forEach(el  => { el.hidden =  isPost; });
    document.querySelectorAll('.post-wedding-only').forEach(el => { el.hidden = !isPost; });
    if (isPost && countdownTimer) {
      clearInterval(countdownTimer);
      countdownTimer = null;
    } else if (!isPost && !countdownTimer) {
      countdownTimer = setInterval(updateCountdown, 1000);
    }
  }
  const isPostWedding = new Date() >= MEMORY_MODE_DATE;
  applyMemoryMode(isPostWedding);

  // ---------- Demo toggle ---------------------------------------------
  // SAMPLE MICROSITE ONLY. Lets a planner preview both modes without
  // waiting for the wedding date. For real client sites, delete:
  //   1. This `Demo toggle` block (in script.js).
  //   2. The .demo-toggle <button> + surrounding comment block (in
  //      index.html, just above the <script src="script.js"> tag).
  //   3. The .demo-toggle CSS rules (in styles.css, optional cleanup).
  // The auto-transform above keeps working without any of these.
  const demoToggle = document.getElementById('demoToggle');
  if (demoToggle) {
    let forced = isPostWedding;
    const labelEl = demoToggle.querySelector('.demo-toggle__text');
    const updateLabel = () => {
      labelEl.textContent = forced ? 'Back to pre-wedding view' : 'Preview post-wedding view';
      demoToggle.setAttribute('aria-pressed', forced ? 'true' : 'false');
    };
    updateLabel();
    demoToggle.addEventListener('click', () => {
      forced = !forced;
      applyMemoryMode(forced);
      updateLabel();
      // Layout shifts substantially when sections appear/disappear;
      // ease the user back to the top so they can scroll through the
      // new state intentionally rather than landing mid-page in a
      // section that no longer exists.
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---------- Scroll reveal (IntersectionObserver) ----------
  const revealEls = document.querySelectorAll(
    '.section__header, .story__item, .event-card, .gallery__item, .travel__block, .faq__item'
  );
  revealEls.forEach(el => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }
})();
