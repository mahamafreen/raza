/**
 * RAZA ARSHAD ARCHITECTURAL PORTFOLIO — PROJECT SELECTOR LIST
 * Matches Panel 2 (Selected Work) in the reference.
 */

import { projects } from '../data/projects.js';

export function initProjectList(onOpenProject) {
  const mount = document.getElementById("project-selector-list");
  const previewImg = document.getElementById("active-project-img");
  const viewBtn = document.getElementById("btn-view-active-project");

  if (!mount) return;

  let activeIndex = 0;

  function renderList() {
    mount.innerHTML = projects.map((p, idx) => `
      <div class="project-item-row ${idx === activeIndex ? 'active' : ''}" data-index="${idx}">
        <span class="project-item-num">${p.num}</span>
        <div class="project-item-info">
          <span class="project-item-title">${p.title}</span>
          <span class="project-item-meta">${p.category} · ${p.location} · ${p.year}</span>
        </div>
      </div>
    `).join("");

    // Attach click listeners to rows
    mount.querySelectorAll(".project-item-row").forEach((row) => {
      row.addEventListener("click", () => {
        const index = parseInt(row.getAttribute("data-index"), 10);
        setActiveProject(index);
      });
    });
  }

  function setActiveProject(index) {
    activeIndex = index;
    const project = projects[index];

    // Update active row classes
    mount.querySelectorAll(".project-item-row").forEach((row, i) => {
      row.classList.toggle("active", i === index);
    });

    // Update preview image with subtle fade transition
    if (previewImg && project) {
      previewImg.style.opacity = "0.4";
      setTimeout(() => {
        previewImg.src = project.heroImage;
        previewImg.alt = `${project.title} Preview`;
        previewImg.style.opacity = "1";
      }, 150);
    }
  }

  // View Project Button Click Handler
  if (viewBtn) {
    viewBtn.addEventListener("click", () => {
      const project = projects[activeIndex];
      if (project && onOpenProject) {
        onOpenProject(project);
      }
    });
  }

  // Initial render
  renderList();
  setActiveProject(0);
}
