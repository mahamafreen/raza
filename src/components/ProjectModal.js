/**
 * RAZA ARSHAD ARCHITECTURAL PORTFOLIO — 6-STAGE DEEP DIVE PROJECT MODAL
 */

export function initProjectModal() {
  const modalBackdrop = document.getElementById("project-detail-modal");
  const modalCloseBtn = document.getElementById("btn-close-modal");
  const modalSheetId = document.getElementById("modal-sheet-id");
  const modalProjectCat = document.getElementById("modal-project-category");
  const modalStageNav = document.getElementById("modal-stage-nav");
  const modalBody = document.getElementById("modal-body-content");

  if (!modalBackdrop) return { openProject: () => {} };

  let currentProject = null;

  function renderProjectStages(project) {
    if (!project || !modalBody) return;

    modalBody.innerHTML = `
      <!-- STAGE 01: CONTEXT -->
      <section class="modal-section-card" id="stage-context">
        <h4 class="modal-section-title"><span>01 //</span> Context & Project Brief</h4>
        <div class="project-specs-grid" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
          <div class="spec-item">
            <span class="spec-k">PROJECT TYPOLOGY</span>
            <span class="spec-v">${project.context.type}</span>
          </div>
          <div class="spec-item">
            <span class="spec-k">LOCATION & CONTEXT</span>
            <span class="spec-v">${project.location}</span>
          </div>
          <div class="spec-item">
            <span class="spec-k">CLIMATIC ZONE</span>
            <span class="spec-v">${project.context.climateZone}</span>
          </div>
          <div class="spec-item">
            <span class="spec-k">SOLAR ORIENTATION</span>
            <span class="spec-v">${project.context.orientation}</span>
          </div>
          <div class="spec-item">
            <span class="spec-k">PROJECT STATUS</span>
            <span class="spec-v">${project.context.status}</span>
          </div>
          <div class="spec-item">
            <span class="spec-k">TOTAL BUILT AREA</span>
            <span class="spec-v">${project.scale}</span>
          </div>
        </div>
      </section>

      <!-- STAGE 02: THE CONCEPT -->
      <section class="modal-section-card" id="stage-concept">
        <h4 class="modal-section-title"><span>02 //</span> The Architectural Idea & Spatial Strategy</h4>
        <p style="font-family: var(--font-editorial); font-size: 1.35rem; font-style: italic; color: var(--ink-primary); margin-bottom: var(--space-4); line-height: 1.4;">
          "${project.concept.statement}"
        </p>
        <p style="font-family: var(--font-sans); font-size: var(--text-base); color: var(--ink-secondary); line-height: 1.7; margin-bottom: var(--space-6);">
          ${project.concept.narrative}
        </p>
        <ul style="display: flex; flex-direction: column; gap: var(--space-2); padding-left: var(--space-4);">
          ${project.concept.points.map(p => `
            <li style="list-style-type: square; color: var(--blueprint-primary); font-size: var(--text-sm);">
              <span style="color: var(--ink-secondary);">${p}</span>
            </li>
          `).join("")}
        </ul>
      </section>

      <!-- STAGE 03: MASSING & EXPLORATION -->
      <section class="modal-section-card" id="stage-massing">
        <h4 class="modal-section-title"><span>03 //</span> Massing Exploration & Volumetric Studies</h4>
        <p style="font-family: var(--font-sans); font-size: var(--text-sm); color: var(--ink-secondary); margin-bottom: var(--space-4);">
          ${project.massing.description}
        </p>
        <div style="background-color: var(--bg-card); border: 1px solid var(--border-fine); padding: var(--space-4); display: flex; align-items: center; justify-content: center;">
          ${project.massing.diagramSvg}
        </div>
      </section>

      <!-- STAGE 04: TECHNICAL DEVELOPMENT (CAD DRAWING VIEWER) -->
      <section class="modal-section-card" id="stage-technical">
        <h4 class="modal-section-title"><span>04 //</span> Technical Development & Documentation</h4>
        <div style="display: flex; justify-content: space-between; margin-bottom: var(--space-3); font-family: var(--font-mono); font-size: var(--text-xs); color: var(--blueprint-primary);">
          <span>${project.technical.drawingTitle}</span>
          <span>${project.technical.scaleRef}</span>
        </div>

        <div class="blueprint-viewer-wrapper" id="blueprint-wrapper">
          ${project.technical.drawingSvg}
          <div class="blueprint-controls">
            <button class="blueprint-btn" id="btn-bp-reset" title="Reset View" data-cursor="RESET">⟲</button>
            <button class="blueprint-btn" id="btn-bp-zoom-in" title="Zoom In" data-cursor="ZOOM +">+</button>
            <button class="blueprint-btn" id="btn-bp-zoom-out" title="Zoom Out" data-cursor="ZOOM -">-</button>
          </div>
        </div>
      </section>

      <!-- STAGE 05: MATERIALITY & ATMOSPHERE -->
      <section class="modal-section-card" id="stage-material">
        <h4 class="modal-section-title"><span>05 //</span> Tactile Materiality & Finishes Palette</h4>
        <div class="material-swatches-grid">
          ${project.materials.map(m => `
            <div class="material-swatch-item">
              <div class="swatch-color-box" style="background-color: ${m.color};">
                <span style="position: absolute; bottom: 4px; right: 6px; font-family: var(--font-mono); font-size: 0.6rem; color: #ffffff; background: rgba(0,0,0,0.5); padding: 1px 4px;">SAMPLE</span>
              </div>
              <div class="swatch-name">${m.name}</div>
              <div class="swatch-spec">ORIGIN: ${m.origin}</div>
              <div class="swatch-spec">FINISH: ${m.finish}</div>
              <div class="swatch-spec" style="color: var(--ink-secondary); margin-top: 4px;">${m.desc}</div>
            </div>
          `).join("")}
        </div>
      </section>

      <!-- STAGE 06: FINAL VISUAL EXPERIENCE -->
      <section class="modal-section-card" id="stage-perspective">
        <h4 class="modal-section-title"><span>06 //</span> Final Perspectives & Visualization Gallery</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: var(--space-4);">
          <img src="${project.heroImage}" alt="${project.title} Exterior Render" style="width: 100%; height: 380px; object-fit: cover; border: 1px solid var(--border-fine);" loading="lazy">
          <img src="${project.interiorImage || project.heroImage}" alt="${project.title} Perspective" style="width: 100%; height: 380px; object-fit: cover; border: 1px solid var(--border-fine);" loading="lazy">
        </div>
      </section>
    `;

    // Initialize Pan & Zoom on SVG Blueprint Canvas
    initBlueprintPanZoom();
  }

  function initBlueprintPanZoom() {
    const wrapper = document.getElementById("blueprint-wrapper");
    const svg = wrapper ? wrapper.querySelector("svg") : null;
    const btnIn = document.getElementById("btn-bp-zoom-in");
    const btnOut = document.getElementById("btn-bp-zoom-out");
    const btnReset = document.getElementById("btn-bp-reset");

    if (!svg) return;

    let scale = 1;
    let panX = 0;
    let panY = 0;
    let isPanning = false;
    let startX = 0;
    let startY = 0;

    function applyTransform() {
      svg.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
      svg.style.transformOrigin = "center center";
    }

    if (btnIn) btnIn.onclick = () => { scale = Math.min(3, scale + 0.3); applyTransform(); };
    if (btnOut) btnOut.onclick = () => { scale = Math.max(0.6, scale - 0.3); applyTransform(); };
    if (btnReset) btnReset.onclick = () => { scale = 1; panX = 0; panY = 0; applyTransform(); };

    svg.addEventListener("mousedown", (e) => {
      isPanning = true;
      startX = e.clientX - panX;
      startY = e.clientY - panY;
    });

    window.addEventListener("mousemove", (e) => {
      if (!isPanning) return;
      panX = e.clientX - startX;
      panY = e.clientY - startY;
      applyTransform();
    });

    window.addEventListener("mouseup", () => {
      isPanning = false;
    });
  }

  function openProject(project) {
    currentProject = project;
    if (modalSheetId) modalSheetId.textContent = project.sheetId;
    if (modalProjectCat) modalProjectCat.textContent = project.category.toUpperCase();

    renderProjectStages(project);

    modalBackdrop.classList.add("open");
    modalBackdrop.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modalBackdrop.classList.remove("open");
    modalBackdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "auto";
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeModal);
  }

  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop.classList.contains("open")) {
      closeModal();
    }
  });

  // Stage Navigation Pills
  if (modalStageNav) {
    const stageButtons = modalStageNav.querySelectorAll(".stage-pill");
    const stageIds = ["stage-context", "stage-concept", "stage-massing", "stage-technical", "stage-material", "stage-perspective"];

    stageButtons.forEach((btn, idx) => {
      btn.addEventListener("click", () => {
        stageButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const targetSection = document.getElementById(stageIds[idx]);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }

  return { openProject, closeModal };
}
