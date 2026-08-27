/**
 * RAZA ARSHAD ARCHITECTURAL PORTFOLIO — MAIN BOOTSTRAP
 * Handles modern loader, scroll reveals, project interactions, and modals.
 */

import { initProjectList } from './components/ProjectList.js';
import { initProjectDetail } from './components/ProjectDetail.js';
import { initInquiryModal } from './components/InquiryModal.js';

document.addEventListener("DOMContentLoaded", () => {
  // 1. Modern Editorial Loader Controller
  initModernLoader();

  // 2. Scroll Reveal Animation Engine
  initScrollReveals();

  // 3. Sticky Header Scroll Effect
  initHeaderScrollEffect();

  // 4. Initialize Full-Page Project Case Study View (Panel 3)
  const projectDetail = initProjectDetail();

  // 5. Initialize Interactive Selected Work Project List (Panel 2)
  initProjectList((project) => {
    projectDetail.openProject(project);
  });

  // 6. Initialize Start a Conversation Inquiry Dialog
  initInquiryModal();

  // 7. Smooth Anchor Link Scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href !== '#' && href.startsWith('#')) {
        const targetEl = document.querySelector(href);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });
});

/**
 * Modern Editorial Loader Simulation (0% -> 100%)
 */
function initModernLoader() {
  const loader = document.getElementById("modern-loader");
  const progressFill = document.getElementById("loader-progress-fill");
  const counter = document.getElementById("loader-counter");

  if (!loader) return;

  let progress = 0;
  const startTime = performance.now();
  const duration = 1200; // 1.2s smooth loader

  function updateLoader(currentTime) {
    const elapsed = currentTime - startTime;
    progress = Math.min(100, Math.floor((elapsed / duration) * 100));

    if (progressFill) progressFill.style.width = `${progress}%`;
    if (counter) counter.textContent = `${progress}%`;

    if (progress < 100) {
      requestAnimationFrame(updateLoader);
    } else {
      setTimeout(() => {
        loader.classList.add("is-loaded");
        triggerInitialHeroReveals();
      }, 200);
    }
  }

  requestAnimationFrame(updateLoader);
}

/**
 * Trigger initial hero section animations after loader dismisses
 */
function triggerInitialHeroReveals() {
  const heroReveals = document.querySelectorAll("#hero .reveal-text, #hero .reveal-image, #hero .reveal-fade");
  heroReveals.forEach((el) => {
    el.classList.add("is-revealed");
  });
}

/**
 * Scroll Reveal Engine using IntersectionObserver
 */
function initScrollReveals() {
  const revealElements = document.querySelectorAll(".reveal-text, .reveal-up, .reveal-image, .reveal-fade");

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -12% 0px",
    threshold: 0.08
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => {
    // Only observe elements outside the initial hero (hero is triggered after loader)
    if (!el.closest("#hero")) {
      observer.observe(el);
    }
  });
}

/**
 * Header background blur on scroll
 */
function initHeaderScrollEffect() {
  const header = document.getElementById("site-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });
}
