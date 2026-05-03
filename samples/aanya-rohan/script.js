/* =========================================================
   Aanya & Rohan microsite — interaction script
   ========================================================= */

(() => {
  'use strict';

  // ---------- Wedding date (IST) ----------
  // 14 February 2027, 11:00 AM IST = 05:30 UTC
  const WEDDING_DATE = new Date(Date.UTC(2027, 1, 14, 5, 30, 0));

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
  setInterval(updateCountdown, 1000);

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
