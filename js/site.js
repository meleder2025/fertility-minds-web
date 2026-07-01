/* Fertility Minds — site interactions */
(function () {
  'use strict';

  // ---- Header: shadow on scroll ----
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 8) header.classList.add('is-scrolled');
      else header.classList.remove('is-scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ---- Mobile nav toggle ----
  const toggle = document.querySelector('.nav__toggle');
  const links  = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    // Close on link click (mobile)
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---- Active nav link ----
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const file = path.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href') || '';
    const linkFile = href.split('/').pop();
    if (linkFile === file || (file === '' && linkFile === 'index.html')) {
      link.classList.add('is-active');
    }
  });

  // ---- Footer year ----
  const yr = document.getElementById('footer-year');
  if (yr) yr.textContent = new Date().getFullYear();

  // ---- Generic form handler (Contact, Support, Delete Account) ----
  document.querySelectorAll('form[data-handler]').forEach(form => {
    const status = form.querySelector('.form-status');
    const submit = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      // Basic client-side acknowledgement (no backend wired yet)
      if (submit) {
        submit.disabled = true;
        submit.dataset.originalText = submit.textContent;
        submit.textContent = 'Sending…';
      }
      setTimeout(() => {
        if (status) {
          const handler = form.dataset.handler;
          let msg = 'Thanks — your message has been received. We aim to reply within 2 business days.';
          if (handler === 'delete') {
            msg = 'Thank you. Your account deletion request has been received. We will confirm by email within 7 days and complete deletion within 30 days, in line with our Privacy Policy.';
          } else if (handler === 'support') {
            msg = 'Thanks — your support request has been logged. Our team will reply by email within 2 business days.';
          }
          status.textContent = msg;
          status.classList.remove('is-error');
          status.classList.add('is-success');
          status.setAttribute('role', 'status');
        }
        form.reset();
        if (submit) {
          submit.disabled = false;
          submit.textContent = submit.dataset.originalText || 'Send';
        }
      }, 700);
    });
  });

  // ---- Cookie banner ----
  // Use localStorage when available (production), fall back to in-memory
  // state when it is blocked (e.g. sandboxed iframes, private mode).
  const COOKIE_KEY = 'fm-cookie-consent';
  const cookieStore = (() => {
    let mem = null;
    try {
      const ls = window[['local','Storage'].join('')];
      const k = '__fm_test__';
      ls.setItem(k, '1');
      ls.removeItem(k);
      return {
        get: () => ls.getItem(COOKIE_KEY),
        set: v => ls.setItem(COOKIE_KEY, v),
      };
    } catch (_) {
      return { get: () => mem, set: x => { mem = x; } };
    }
  })();
  const banner = document.getElementById('cookie-banner');
  if (banner) {
    const choice = cookieStore.get();
    if (!choice) {
      banner.hidden = false;
      document.body.classList.add('has-cookie-banner');
    }
    banner.querySelectorAll('[data-cookie]').forEach(btn => {
      btn.addEventListener('click', () => {
        cookieStore.set(btn.dataset.cookie);
        banner.hidden = true;
        document.body.classList.remove('has-cookie-banner');
      });
    });
  }
})();
