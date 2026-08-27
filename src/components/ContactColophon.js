/**
 * RAZA ARSHAD ARCHITECTURAL PORTFOLIO — CONTACT & ARCHITECTURAL COLOPHON
 */

export function initContactColophon() {
  const mount = document.getElementById("contact-colophon-mount");
  if (!mount) return;

  mount.innerHTML = `
    <div class="contact-grid">
      
      <!-- Left Column: Editorial Statement & Direct Contact -->
      <div class="contact-statement-col">
        <div class="section-number-tag">05 // COLLABORATION & INQUIRY</div>
        <h2 class="contact-headline">Let's create what doesn't exist yet.</h2>
        <div class="contact-sub">AVAILABLE FOR ARCHITECTURAL COMMISSIONS, STUDIO COLLABORATION & VISUALIZATION</div>

        <p style="font-family: var(--font-sans); font-size: var(--text-base); color: var(--ink-secondary); line-height: 1.7; margin-bottom: var(--space-8); max-width: 520px;">
          Whether you are planning a residential villa, requiring comprehensive CAD/BIM drawing packages, seeking high-fidelity Lumion/Enscape visualization, or exploring research-driven architectural concepts in Pakistan and internationally.
        </p>

        <!-- Direct Contact Cards -->
        <div style="display: flex; flex-direction: column; gap: var(--space-4); margin-bottom: var(--space-8);">
          <div style="display: flex; align-items: center; justify-content: space-between; padding: var(--space-4); background-color: var(--bg-surface); border: 1px solid var(--border-fine);">
            <div>
              <span style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--ink-muted); display: block;">DIRECT INQUIRY EMAIL</span>
              <span style="font-family: var(--font-sans); font-weight: 600; color: var(--ink-primary); font-size: var(--text-sm);" id="contact-email-text">raza.arshad.arch@gmail.com</span>
            </div>
            <button id="btn-copy-email" class="hud-btn" data-cursor="COPY">
              <span id="copy-label">COPY EMAIL</span>
            </button>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; padding: var(--space-4); background-color: var(--bg-surface); border: 1px solid var(--border-fine);">
            <div>
              <span style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--ink-muted); display: block;">STUDIO BASE</span>
              <span style="font-family: var(--font-sans); font-weight: 600; color: var(--ink-primary); font-size: var(--text-sm);">Islamabad, Pakistan</span>
            </div>
            <span style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--blueprint-primary);">33.6844° N, 73.0479° E</span>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; padding: var(--space-4); background-color: var(--bg-surface); border: 1px solid var(--border-fine);">
            <div>
              <span style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--ink-muted); display: block;">PROFESSIONAL NETWORK</span>
              <span style="font-family: var(--font-sans); font-weight: 600; color: var(--ink-primary); font-size: var(--text-sm);">LinkedIn & Architectural Archive</span>
            </div>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="hud-btn" data-cursor="LINKEDIN">
              <span>CONNECT →</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Right Column: Interactive Project Inquiry Form -->
      <div class="contact-form-col">
        <form class="contact-inquiry-form" id="architectural-inquiry-form" data-cursor="FORM">
          <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-fine); padding-bottom: var(--space-3); margin-bottom: var(--space-2); font-family: var(--font-mono); font-size: var(--text-xs); color: var(--blueprint-primary);">
            <span>TRANSMITTAL FORM // PROJECT INQUIRY</span>
            <span>SPEC: RA-COMM-2026</span>
          </div>

          <div class="form-group">
            <label class="form-label" for="inq-name">YOUR NAME / STUDIO NAME *</label>
            <input type="text" id="inq-name" class="form-input" placeholder="e.g. Ar. Tariq / Studio Context" required>
          </div>

          <div class="form-group">
            <label class="form-label" for="inq-email">CONTACT EMAIL *</label>
            <input type="email" id="inq-email" class="form-input" placeholder="name@domain.com" required>
          </div>

          <div class="form-group">
            <label class="form-label" for="inq-type">PROJECT TYPOLOGY / SERVICE REQUIRED</label>
            <select id="inq-type" class="form-select">
              <option value="residential">Residential Villa Design & Planning</option>
              <option value="commercial">Commercial / Mixed-Use Architecture</option>
              <option value="visualization">Architectural Visualization (Lumion / Enscape)</option>
              <option value="drafting">Technical CAD Drafting & MEP Layouts</option>
              <option value="bim">Revit BIM Modeling & Coordination</option>
              <option value="research">Academic & Urban Spatial Research</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" for="inq-msg">PROJECT SCOPE & SITE BRIEF *</label>
            <textarea id="inq-msg" class="form-textarea" rows="4" placeholder="Describe the location, site area, timeline, and architectural requirements..." required></textarea>
          </div>

          <button type="submit" class="btn-submit-inquiry" data-cursor="TRANSMIT">
            <span>TRANSMIT INQUIRY</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>

          <div id="inquiry-status" style="display: none; padding: var(--space-3); background-color: var(--blueprint-light); color: var(--blueprint-primary); font-family: var(--font-mono); font-size: var(--text-xs); border: 1px solid var(--blueprint-border); text-align: center;">
            ✓ INQUIRY TRANSMITTED SUCCESSFULLY. THANK YOU.
          </div>
        </form>
      </div>

    </div>

    <!-- Architectural Sheet Title Block / Colophon -->
    <div class="architectural-sheet-footer">
      <div class="sheet-title-block">
        <div class="sheet-seal">RA</div>
        <div class="sheet-meta">
          <span class="title">RAZA ARSHAD ARCHITECTURAL PORTFOLIO</span>
          <span>DOCUMENT REF: RA-2026-PORTFOLIO-REV04</span>
        </div>
      </div>

      <div>
        <span>COORDINATES: 33.6844° N, 73.0479° E // ISLAMABAD, PK</span>
      </div>

      <div>
        <span>ARCHITECTURE / VISUALIZATION / SPATIAL THINKING</span>
      </div>

      <div>
        <span>© 2026 RAZA ARSHAD. ALL RIGHTS RESERVED.</span>
      </div>
    </div>
  `;

  // Email Copy Action
  const btnCopyEmail = mount.querySelector("#btn-copy-email");
  const copyLabel = mount.querySelector("#copy-label");
  const emailText = "raza.arshad.arch@gmail.com";

  if (btnCopyEmail && copyLabel) {
    btnCopyEmail.addEventListener("click", () => {
      navigator.clipboard.writeText(emailText).then(() => {
        copyLabel.textContent = "COPIED ✓";
        setTimeout(() => {
          copyLabel.textContent = "COPY EMAIL";
        }, 2500);
      });
    });
  }

  // Inquiry Form Submit Handler
  const inquiryForm = mount.querySelector("#architectural-inquiry-form");
  const inquiryStatus = mount.querySelector("#inquiry-status");

  if (inquiryForm && inquiryStatus) {
    inquiryForm.addEventListener("submit", (e) => {
      e.preventDefault();
      inquiryStatus.style.display = "block";
      inquiryForm.reset();
      setTimeout(() => {
        inquiryStatus.style.display = "none";
      }, 5000);
    });
  }
}
