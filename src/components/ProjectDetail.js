/**
 * RAZA ARSHAD ARCHITECTURAL PORTFOLIO — FULL-PAGE PROJECT CASE STUDY VIEW
 * Matches Panel 3 (Top-Right Board) from the reference image.
 */

export function initProjectDetail() {
  const modal = document.getElementById("project-case-study-modal");
  const closeBtn = document.getElementById("btn-close-case-study");
  const contentBody = document.getElementById("case-study-content-body");

  if (!modal || !contentBody) return { openProject: () => {} };

  function renderProject(project) {
    contentBody.innerHTML = `
      <!-- Left Column: Specs & Index -->
      <div class="cs-left-col">
        <span class="cs-project-num">${project.num}</span>
        <h2 class="cs-project-title">${project.title}</h2>
        <span class="cs-project-type">${project.type.toUpperCase()}</span>

        <!-- Technical Metadata Table -->
        <div class="cs-spec-table">
          <div class="cs-spec-row">
            <span class="cs-spec-k">LOCATION</span>
            <span class="cs-spec-v">${project.location}</span>
          </div>
          <div class="cs-spec-row">
            <span class="cs-spec-k">TYPE</span>
            <span class="cs-spec-v">${project.category}</span>
          </div>
          <div class="cs-spec-row">
            <span class="cs-spec-k">YEAR</span>
            <span class="cs-spec-v">${project.year}</span>
          </div>
          <div class="cs-spec-row">
            <span class="cs-spec-k">ROLE</span>
            <span class="cs-spec-v">${project.role}</span>
          </div>
          <div class="cs-spec-row">
            <span class="cs-spec-k">SCOPE</span>
            <span class="cs-spec-v">${project.scope}</span>
          </div>
          <div class="cs-spec-row">
            <span class="cs-spec-k">TOOLS</span>
            <span class="cs-spec-v">${project.tools}</span>
          </div>
        </div>

        <!-- Narrative Index Nav -->
        <div class="cs-index-nav">
          <div class="cs-index-item active">01 CONTEXT</div>
          <div class="cs-index-item">02 CONCEPT</div>
          <div class="cs-index-item">03 EXPLORATION</div>
          <div class="cs-index-item">04 TECHNICAL</div>
          <div class="cs-index-item">05 MATERIAL & ATMOSPHERE</div>
          <div class="cs-index-item">06 FINAL VISUALS</div>
        </div>
      </div>

      <!-- Right Column: Visuals & The Idea -->
      <div class="cs-right-col">
        <!-- Main Render -->
        <div class="cs-main-render-wrap">
          <img id="cs-active-hero-img" src="${project.heroImage}" alt="${project.title} Render" class="cs-main-render-img">
        </div>

        <!-- Thumbnails Strip (CAD Plans, Elevations, Render Angles) -->
        <div class="cs-thumbnails-strip">
          <div class="cs-thumb-box" data-src="${project.heroImage}">
            <svg viewBox="0 0 100 60" class="cs-thumb-svg">
              <g stroke="#ffffff" stroke-width="0.75" fill="none" opacity="0.6">
                <rect x="10" y="10" width="80" height="40" />
                <line x1="30" y1="10" x2="30" y2="50" />
                <line x1="60" y1="10" x2="60" y2="50" />
                <text x="50" y="34" font-size="7" fill="#ffffff" text-anchor="middle" font-family="sans-serif">PLAN</text>
              </g>
            </svg>
          </div>
          <div class="cs-thumb-box" data-src="${project.secondaryImage}">
            <img src="${project.secondaryImage}" alt="Perspective" class="cs-thumb-img">
          </div>
          <div class="cs-thumb-box" data-src="${project.heroImage}">
            <svg viewBox="0 0 100 60" class="cs-thumb-svg">
              <g stroke="#ffffff" stroke-width="0.75" fill="none" opacity="0.6">
                <line x1="5" y1="45" x2="95" y2="45" />
                <polygon points="20,45 20,20 50,15 80,25 80,45" />
                <text x="50" y="38" font-size="7" fill="#ffffff" text-anchor="middle" font-family="sans-serif">ELEVATION</text>
              </g>
            </svg>
          </div>
          <div class="cs-thumb-box" data-src="${project.heroImage}">
            <img src="${project.heroImage}" alt="Exterior" class="cs-thumb-img">
          </div>
        </div>

        <!-- The Idea Editorial Card (Matching Reference Bottom Right) -->
        <div class="cs-idea-card">
          <div class="cs-idea-left">
            <h3 class="cs-idea-title">THE IDEA</h3>
            <p class="cs-idea-text">${project.ideaStatement}</p>
          </div>
          <div class="cs-idea-sketch-wrap">
            <svg viewBox="0 0 280 180" class="cs-idea-sketch-svg">
              <g stroke="currentColor" stroke-width="0.85" fill="none" opacity="0.7">
                <!-- Architectural Perspective Lines -->
                <line x1="20" y1="150" x2="260" y2="150" />
                <polygon points="40,140 160,140 220,105 100,105" stroke-width="1.2" />
                <polygon points="60,95 180,95 240,65 120,65" stroke-width="1.2" />
                <line x1="40" y1="140" x2="60" y2="95" />
                <line x1="160" y1="140" x2="180" y2="95" />
                <line x1="220" y1="105" x2="240" y2="65" />
                <!-- Tree sketch -->
                <path d="M 230,140 Q 225,100 230,80 Q 215,70 230,50 Q 245,70 230,80" stroke-width="0.75" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    `;

    // Thumbnail swap handlers
    contentBody.querySelectorAll(".cs-thumb-box").forEach((thumb) => {
      thumb.addEventListener("click", () => {
        const src = thumb.getAttribute("data-src");
        const mainImg = contentBody.querySelector("#cs-active-hero-img");
        if (src && mainImg) {
          mainImg.src = src;
        }
      });
    });
  }

  function openProject(project) {
    renderProject(project);
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeProject() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "auto";
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeProject);
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeProject();
    }
  });

  return { openProject, closeProject };
}
