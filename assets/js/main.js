/**
 * AI PM Course Landing Page — main.js
 *
 * Progressive enhancement only. All content and navigation work
 * without JavaScript. This file adds:
 *
 *   1. Storyline URL sync       — reads a single data attribute and
 *                                  patches all launch buttons at once
 *   2. Active nav highlighting  — IntersectionObserver updates the
 *                                  active nav link as the user scrolls
 *   3. Sticky nav shadow        — adds a shadow class on scroll
 *   4. Smooth scroll polyfill   — for browsers that ignore CSS
 *                                  scroll-behavior (pre-2020 Safari)
 *   5. Footer year              — fills in the current year
 */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     1. STORYLINE URL SYNC
     Set the data-storyline-url attribute on <body> to your
     published Storyline URL. This function copies it to every
     element that has [data-storyline-target], so all launch
     buttons stay in sync from a single find-and-replace.
  ---------------------------------------------------------- */
  function syncStorylineUrls() {
    var url = document.body.getAttribute('data-storyline-url');

    // Only apply if the placeholder has been replaced
    if (!url || url.indexOf('REPLACE_WITH') !== -1) {
      return;
    }

    var targets = document.querySelectorAll('[data-storyline-target]');
    targets.forEach(function (el) {
      el.setAttribute('href', url);
    });
  }


  /* ----------------------------------------------------------
     2. ACTIVE NAV LINK HIGHLIGHTING
     Uses IntersectionObserver to track which section is at the
     vertical midpoint of the viewport and marks the matching
     nav link as active.
  ---------------------------------------------------------- */
  function initActiveNav() {
    var sections = document.querySelectorAll('main section[id]');
    var navLinks = document.querySelectorAll('.site-nav a.nav-link[href^="#"]');

    if (!sections.length || !navLinks.length) return;
    if (!('IntersectionObserver' in window)) return; // graceful skip

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;

          var activeId = entry.target.getAttribute('id');

          navLinks.forEach(function (link) {
            var linkTarget = link.getAttribute('href').slice(1); // remove '#'
            if (linkTarget === activeId) {
              link.classList.add('nav-link--active');
            } else {
              link.classList.remove('nav-link--active');
            }
          });
        });
      },
      {
        // Fires when a section crosses the vertical midpoint of the viewport
        rootMargin: '-50% 0px -50% 0px'
      }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }


  /* ----------------------------------------------------------
     3. STICKY NAV SHADOW ON SCROLL
     Adds `.site-header--scrolled` when the page is scrolled
     past the top, which CSS uses to apply a drop shadow.
  ---------------------------------------------------------- */
  function initNavShadow() {
    var header = document.querySelector('.site-header');
    if (!header) return;

    function updateShadow() {
      if (window.scrollY > 10) {
        header.classList.add('site-header--scrolled');
      } else {
        header.classList.remove('site-header--scrolled');
      }
    }

    window.addEventListener('scroll', updateShadow, { passive: true });
    updateShadow(); // run once on load in case page is pre-scrolled
  }


  /* ----------------------------------------------------------
     4. SMOOTH SCROLL POLYFILL
     CSS `scroll-behavior: smooth` on <html> handles modern
     browsers. This polyfill fires only for browsers that don't
     support that property (primarily pre-2020 Safari).
  ---------------------------------------------------------- */
  function initSmoothScroll() {
    // If the browser supports native smooth scrolling, do nothing
    if ('scrollBehavior' in document.documentElement.style) return;

    var anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href');
        if (targetId === '#') return;

        var target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }


  /* ----------------------------------------------------------
     5. FOOTER YEAR
     Keeps the copyright year current without manual edits.
  ---------------------------------------------------------- */
  function setFooterYear() {
    var el = document.getElementById('footer-year');
    if (el) {
      el.textContent = new Date().getFullYear();
    }
  }


  /* ----------------------------------------------------------
     INIT — run all enhancements on DOMContentLoaded
  ---------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    syncStorylineUrls();
    initActiveNav();
    initNavShadow();
    initSmoothScroll();
    setFooterYear();
  });

})();
