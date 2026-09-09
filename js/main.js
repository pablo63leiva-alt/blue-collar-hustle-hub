(function () {
  'use strict';

  /* ============================================
     Mobile Navigation Toggle
     ============================================ */
  const navToggle = document.querySelector('.nav-toggle');

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      const isOpen = document.body.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        document.body.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
        document.body.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ============================================
     Trade Category Filtering
     ============================================ */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const tradeCards = document.querySelectorAll('.trade-card[data-category]');

  function filterTrades(category) {
    tradeCards.forEach(function (card) {
      const match = category === 'all' || card.dataset.category === category;
      card.hidden = !match;
    });
  }

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      filterButtons.forEach(function (btn) {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');
      filterTrades(button.dataset.filter);
    });
  });

  /* ============================================
     Newsletter Form (placeholder handler)
     ============================================ */
  const newsletterForm = document.querySelector('.newsletter-form');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('.newsletter-input');
      const email = emailInput ? emailInput.value.trim() : '';

      if (!email || !newsletterForm.checkValidity()) {
        return;
      }

      const button = newsletterForm.querySelector('button[type="submit"]');
      const originalText = button.textContent;
      button.textContent = 'Thanks for subscribing!';
      button.disabled = true;
      newsletterForm.reset();

      setTimeout(function () {
        button.textContent = originalText;
        button.disabled = false;
      }, 3000);
    });
  }
})();