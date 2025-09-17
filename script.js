'use strict';

  // ===================================================
  // スクロールで要素をフェードインさせる機能
  // ===================================================
  const animatedElements = document.querySelectorAll('.section-title, .feature-card, .concept-image, .concept-text');
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, options);
  animatedElements.forEach(element => {
    observer.observe(element);
  });
