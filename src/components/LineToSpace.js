/**
 * RAZA ARSHAD ARCHITECTURAL PORTFOLIO — FROM LINE TO SPACE PROCESS EXPERIENCE
 */

export function initLineToSpace() {
  const mount = document.getElementById("process-visualizer-mount");
  if (!mount) return;

  const stages = [
    {
      num: "01",
      name: "OBSERVE",
      title: "The Initial Datum & Site Grid",
      desc: "Architecture begins not with form, but with the quiet observation of the site: sun path vectors, prevailing wind axes, property boundary constraints, and environmental datum lines.",
      notes: "AutoCAD coordinate registration // CDA bylaws compliance // True North solar alignment +18° azimuth.",
      type: "svg",
      content: `
        <svg viewBox="0 0 600 400" class="stage-svg-visual" stroke="currentColor" fill="none">
          <!-- Site Boundary Grid -->
          <g stroke="var(--blueprint-primary)" stroke-width="0.8" stroke-dasharray="4 4" opacity="0.4">
            <line x1="50" y1="200" x2="550" y2="200" />
            <line x1="300" y1="50" x2="300" y2="350" />
            <circle cx="300" cy="200" r="140" fill="none" stroke-dasharray="2 6" />
          </g>
          <!-- Primary Axis Datum Lines -->
          <line x1="120" y1="260" x2="480" y2="140" stroke="var(--ink-primary)" stroke-width="1.8" />
          <line x1="180" y1="120" x2="420" y2="280" stroke="var(--ink-primary)" stroke-width="1.8" />
          <!-- North Arrow & Compass -->
          <g transform="translate(480, 90)" stroke="var(--blueprint-primary)" stroke-width="1.5">
            <line x1="0" y1="20" x2="0" y2="-20" />
            <polygon points="0,-20 -5,-5 0,-10 5,-5" fill="var(--blueprint-primary)" />
            <text x="8" y="-12" font-family="monospace" font-size="10" fill="var(--blueprint-primary)">N</text>
          </g>
          <!-- Coordinates Stamp -->
          <text x="300" y="365" font-family="monospace" font-size="10" fill="var(--blueprint-primary)" text-anchor="middle">SITE DATUM: 33.6844° N, 73.0479° E</text>
        </svg>
      `
    },
    {
      num: "02",
      name: "EXPLORE",
      title: "Volumetric Massing & Zoning Envelopes",
      desc: "Translating program requirements into volumetric masses. Subtracting core voids to carve out microclimatic central lightwells and cross-ventilation corridors.",
      notes: "3D SketchUp massing iterations // Floor Area Ratio (FAR) optimization // Shading envelope studies.",
      type: "svg",
      content: `
        <svg viewBox="0 0 600 400" class="stage-svg-visual" stroke="currentColor" fill="none">
          <!-- Isometric Ground Grid -->
          <g stroke="var(--border-fine)" stroke-width="0.8" opacity="0.6">
            <line x1="100" y1="280" x2="500" y2="280" />
            <line x1="150" y1="330" x2="450" y2="230" />
          </g>
          <!-- Wireframe Massing Blocks -->
          <polygon points="160,260 380,260 450,210 230,210" stroke="var(--ink-primary)" stroke-width="2" fill="var(--bg-card)" opacity="0.7" />
          <polygon points="200,190 420,190 480,145 260,145" stroke="var(--blueprint-primary)" stroke-width="2" fill="var(--blueprint-light)" opacity="0.6" />
          <!-- Void Indicator -->
          <polygon points="280,240 340,240 360,225 300,225" stroke="#e74c3c" stroke-width="1.5" stroke-dasharray="3 3" />
          <text x="300" y="320" font-family="monospace" font-size="10" fill="var(--ink-secondary)" text-anchor="middle">VOLUMETRIC CARVING & COURTYARD VOID</text>
        </svg>
      `
    },
    {
      num: "03",
      name: "DEFINE",
      title: "Structural Tectonics & Sectional Logic",
      desc: "Establishing the structural hierarchy: reinforced concrete columns, post-tensioned cantilever floor slabs, shear cores, and detailed MEP horizontal distribution paths.",
      notes: "Revit BIM coordination // Structural grid 6000mm × 8000mm // Mechanical riser shafts integrated into shear cores.",
      type: "svg",
      content: `
        <svg viewBox="0 0 600 400" class="stage-svg-visual" stroke="currentColor" fill="none">
          <!-- Structural Section Cut -->
          <rect x="140" y="120" width="320" height="20" fill="var(--ink-primary)" stroke="var(--ink-primary)" />
          <rect x="180" y="240" width="280" height="20" fill="var(--ink-primary)" stroke="var(--ink-primary)" />
          <!-- Reinforced Columns -->
          <rect x="200" y="140" width="16" height="100" fill="var(--blueprint-dark)" stroke="var(--ink-primary)" />
          <rect x="360" y="140" width="16" height="100" fill="var(--blueprint-dark)" stroke="var(--ink-primary)" />
          <rect x="420" y="140" width="16" height="100" fill="var(--blueprint-dark)" stroke="var(--ink-primary)" />
          <!-- Cantilever Marker -->
          <line x1="140" y1="110" x2="200" y2="110" stroke="var(--blueprint-primary)" stroke-width="1.5" />
          <text x="170" y="100" font-family="monospace" font-size="9" fill="var(--blueprint-primary)" text-anchor="middle">3.0M CANTILEVER</text>
          <text x="300" y="340" font-family="monospace" font-size="10" fill="var(--ink-primary)" text-anchor="middle">TRANSVERSE STRUCTURAL SECTION LVL +3.600m</text>
        </svg>
      `
    },
    {
      num: "04",
      name: "VISUALIZE",
      title: "Materiality, Light & Solar Calculation",
      desc: "Simulating physically-based lighting: direct sun angle at equinox, diffuse sky illumination, material reflectance values, and warm interior ambient glow.",
      notes: "Lumion / Enscape physically-based shading // Travertine reflectivity 0.45 // Board-marked concrete roughness 0.85.",
      type: "image",
      src: "/assets/interior-spatial.jpg"
    },
    {
      num: "05",
      name: "EXPERIENCE",
      title: "The Completed Architectural Reality",
      desc: "The culmination of line, volume, structure, and light: a high-fidelity architectural space where people live, work, and interact with landscape.",
      notes: "Final photorealistic exterior perspective // Landscape integration with indigenous Islamabad flora.",
      type: "image",
      src: "/assets/villa-hero.jpg"
    }
  ];

  let currentStageIndex = 0;

  function renderStage(idx) {
    const stage = stages[idx];
    currentStageIndex = idx;

    mount.innerHTML = `
      <!-- Scrubber Stepper Controls -->
      <div class="process-scrubber-bar">
        ${stages.map((s, i) => `
          <button class="scrubber-step-btn ${i === idx ? 'active' : ''}" data-step-idx="${i}" data-cursor="STAGE ${s.num}">
            <span class="step-num">${s.num}</span>
            <span>${s.name}</span>
          </button>
        `).join("")}
      </div>

      <!-- Main Stage Visualizer Grid -->
      <div class="process-display-grid">
        <div class="process-canvas-stage">
          ${stage.type === 'svg' ? stage.content : `
            <img src="${stage.src}" alt="${stage.title}" class="stage-render-img" loading="eager">
          `}
        </div>

        <div class="process-info-col">
          <div class="process-stage-badge">
            <span>STAGE ${stage.num} // ${stage.name}</span>
          </div>
          <h3 class="process-stage-title">${stage.title}</h3>
          <p class="process-stage-desc">${stage.desc}</p>
          <div class="process-technical-notes">
            <strong>TECHNICAL NOTE:</strong> ${stage.notes}
          </div>

          <div class="process-nav-controls">
            <button class="btn-process-nav" id="btn-prev-stage" ${idx === 0 ? 'disabled' : ''} data-cursor="PREV">
              ← PREVIOUS
            </button>
            <button class="btn-process-nav" id="btn-next-stage" ${idx === stages.length - 1 ? 'disabled' : ''} data-cursor="NEXT">
              NEXT STAGE →
            </button>
          </div>
        </div>
      </div>
    `;

    // Attach step click handlers
    mount.querySelectorAll(".scrubber-step-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const stepIdx = parseInt(btn.getAttribute("data-step-idx"), 10);
        renderStage(stepIdx);
      });
    });

    const prevBtn = mount.querySelector("#btn-prev-stage");
    const nextBtn = mount.querySelector("#btn-next-stage");

    if (prevBtn) prevBtn.addEventListener("click", () => {
      if (currentStageIndex > 0) renderStage(currentStageIndex - 1);
    });

    if (nextBtn) nextBtn.addEventListener("click", () => {
      if (currentStageIndex < stages.length - 1) renderStage(currentStageIndex + 1);
    });
  }

  // Initial Render
  renderStage(0);
}
