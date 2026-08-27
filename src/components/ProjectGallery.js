/**
 * RAZA ARSHAD ARCHITECTURAL PORTFOLIO — PROJECT GALLERY SHOWCASE
 */

import { projects } from '../data/projects.js';

export function initProjectGallery(onOpenModal) {
  const mount = document.getElementById("projects-gallery-mount");
  if (!mount) return;

  mount.innerHTML = projects.map((project, index) => {
    const isReverse = index % 2 !== 0;

    let mediaContent = "";

    if (project.hasComparison) {
      // Interactive Before/After Split Comparison (Drafting/Blueprint vs Photorealistic Render)
      mediaContent = `
        <div class="comparison-slider-container" data-project-id="${project.id}" data-cursor="DRAG / COMPARE">
          <div class="comparison-before">
            <img src="${project.heroImage}" alt="${project.title} — Visualization" loading="lazy">
            <div class="comparison-badge-left">ATMOSPHERIC RENDER</div>
          </div>
          <div class="comparison-after" style="width: 50%;">
            <div style="background-color: var(--bg-card); width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; position: relative;">
              ${project.technical.drawingSvg}
            </div>
            <div class="comparison-badge-right">CAD DRAFTING // ${project.technical.scaleRef}</div>
          </div>
          <div class="comparison-handle" style="left: 50%;">
            <span>↔</span>
          </div>
        </div>
      `;
    } else {
      // Editorial Architectural Photography Showcase
      mediaContent = `
        <div class="project-media-col" data-cursor="VIEW CASE STUDY">
          <img src="${project.heroImage}" alt="${project.title} — Raza Arshad" class="project-hero-img" loading="lazy">
        </div>
      `;
    }

    return `
      <article class="project-showcase-item" id="project-${project.id}">
        <div class="project-header-row">
          <span class="project-seq-tag">PROJECT // ${project.seq} — ${project.sheetId}</span>
          <span class="project-type-tag">${project.category.toUpperCase()}</span>
        </div>

        <div class="project-content-grid ${isReverse ? 'layout-reverse' : ''}">
          <div class="project-info-col">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-narrative">${project.tagline}</p>

            <div class="project-specs-grid">
              <div class="spec-item">
                <span class="spec-k">LOCATION</span>
                <span class="spec-v">${project.location}</span>
              </div>
              <div class="spec-item">
                <span class="spec-k">YEAR</span>
                <span class="spec-v">${project.year}</span>
              </div>
              <div class="spec-item">
                <span class="spec-k">ROLE & SCOPE</span>
                <span class="spec-v">${project.role}</span>
              </div>
              <div class="spec-item">
                <span class="spec-k">SCALE & AREA</span>
                <span class="spec-v">${project.scale}</span>
              </div>
              <div class="spec-item" style="grid-column: 1 / -1;">
                <span class="spec-k">SOFTWARE STACK</span>
                <span class="spec-v">${project.software}</span>
              </div>
            </div>

            <div class="project-actions-row">
              <button class="btn-inspect-casestudy" data-project-id="${project.id}" data-cursor="INSPECT">
                <span>OPEN FULL CASE STUDY</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

          <div class="project-media-wrapper">
            ${mediaContent}
          </div>
        </div>
      </article>
    `;
  }).join("");

  // Attach Case Study Modal Click Handlers
  mount.querySelectorAll(".btn-inspect-casestudy, .project-media-col").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const card = btn.closest(".project-showcase-item");
      if (card) {
        const id = card.id.replace("project-", "");
        const project = projects.find((p) => p.id === id);
        if (project && onOpenModal) {
          onOpenModal(project);
        }
      }
    });
  });

  // Attach Before/After Split Comparison Slider Drag Logic
  mount.querySelectorAll(".comparison-slider-container").forEach((slider) => {
    const afterEl = slider.querySelector(".comparison-after");
    const handleEl = slider.querySelector(".comparison-handle");
    let isDragging = false;

    function setPosition(x) {
      const rect = slider.getBoundingClientRect();
      let pos = (x - rect.left) / rect.width;
      pos = Math.max(0.05, Math.min(0.95, pos));
      const pct = `${pos * 100}%`;
      if (afterEl) afterEl.style.width = pct;
      if (handleEl) handleEl.style.left = pct;
    }

    slider.addEventListener("mousedown", (e) => {
      isDragging = true;
      setPosition(e.clientX);
    });

    window.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      setPosition(e.clientX);
    });

    window.addEventListener("mouseup", () => {
      isDragging = false;
    });

    // Touch support for mobile
    slider.addEventListener("touchstart", (e) => {
      isDragging = true;
      if (e.touches[0]) setPosition(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener("touchmove", (e) => {
      if (!isDragging) return;
      if (e.touches[0]) setPosition(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener("touchend", () => {
      isDragging = false;
    });
  });
}
