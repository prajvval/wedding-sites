/* ============================================================
   Knot & Ink — landing page interactivity
   - Mobile menu toggle
   - Scroll reveal for cards / sections
   - Enquiry form: client-side validation + WhatsApp handoff
   ============================================================ */

(function () {
  'use strict';

  /* ---------- mobile menu ---------- */
  var menuBtn = document.getElementById('menuBtn');
  var navLinks = document.querySelector('.nav__links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when a link is tapped (mobile)
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- scroll reveal ---------- */
  var revealTargets = [
    '.why__card',
    '.pkg',
    '.addon',
    '.process__step',
    '.testimonial',
    '.faq__item',
    '.section__header',
    '.sample__phone',
    '.sample__copy',
    '.memory__col'
  ];

  var nodes = document.querySelectorAll(revealTargets.join(','));
  nodes.forEach(function (n) { n.classList.add('reveal'); });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    nodes.forEach(function (n) { io.observe(n); });
  } else {
    // IO not supported — just show everything
    nodes.forEach(function (n) { n.classList.add('is-visible'); });
  }

  /* ---------- enquiry form ---------- */
  var form = document.getElementById('enquireForm');
  var success = document.getElementById('enquireSuccess');

  if (form && success) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Basic required-field check (browser will also validate via `required`)
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var data = new FormData(form);
      var name     = (data.get('name')    || '').toString().trim();
      var partner  = (data.get('partner') || '').toString().trim();
      var phone    = (data.get('phone')   || '').toString().trim();
      var email    = (data.get('email')   || '').toString().trim();
      var date     = (data.get('date')    || '').toString().trim();
      var city     = (data.get('city')    || '').toString().trim();
      var events   = (data.get('events')  || '').toString().trim();
      var guests   = (data.get('guests')  || '').toString().trim();
      var pkg      = (data.get('package') || '').toString().trim();
      var notes    = (data.get('notes')   || '').toString().trim();

      // Build a tidy WhatsApp message Knot & Ink can act on immediately.
      // Note: in production, also POST to Formspree / Google Form / backend.
      var lines = [
        'Hi Knot & Ink — wedding microsite enquiry from your website:',
        '',
        'Couple: ' + name + ' & ' + partner,
        'Phone: ' + phone,
        'Email: ' + email,
        'Wedding date: ' + date,
        'City: ' + city,
        'Events: ' + events,
        'Guests: ' + guests,
        'Package considering: ' + (pkg || 'Not sure'),
        notes ? 'Notes: ' + notes : ''
      ].filter(Boolean);

      var waText = encodeURIComponent(lines.join('\n'));
      var waUrl  = 'https://wa.me/918956929726?text=' + waText;

      // Show success card, hide form
      form.hidden = true;
      success.hidden = false;
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Open WhatsApp in a new tab so the couple can hit send
      window.open(waUrl, '_blank', 'noopener');
    });
  }

  /* ---------- nav: subtle shadow on scroll ---------- */
  var nav = document.getElementById('nav');
  if (nav) {
    var lastScroll = 0;
    var onScroll = function () {
      var y = window.scrollY || window.pageYOffset;
      if (y > 8 && lastScroll <= 8) {
        nav.style.boxShadow = '0 4px 14px rgba(31, 23, 20, 0.06)';
      } else if (y <= 8 && lastScroll > 8) {
        nav.style.boxShadow = '';
      }
      lastScroll = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();
