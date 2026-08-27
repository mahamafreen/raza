/**
 * RAZA ARSHAD ARCHITECTURAL PORTFOLIO — ARCHITECTURAL TOOLKIT MATRIX
 */

import { experienceData } from '../data/experience.js';

export function initToolkitMatrix() {
  const mount = document.getElementById("toolkit-matrix-mount");
  if (!mount) return;

  const { toolkit } = experienceData;

  mount.innerHTML = `
    <div class="toolkit-grid">
      ${toolkit.map((col) => `
        <div class="toolkit-col-card" data-cursor="${col.category}">
          <div class="toolkit-action-header">
            <h3 class="toolkit-action-title">${col.category}</h3>
            <span class="toolkit-action-num">${col.number} // ${col.tag}</span>
          </div>

          <div class="toolkit-tools-list">
            ${col.tools.map((t) => `
              <div class="toolkit-tool-item">
                <span class="tool-name">${t.name}</span>
                <span class="tool-level">${t.level}</span>
              </div>
            `).join("")}
          </div>

          <div style="margin-top: var(--space-4); padding-top: var(--space-3); border-top: 1px dashed var(--border-fine); font-family: var(--font-mono); font-size: 0.6875rem; color: var(--ink-tertiary); line-height: 1.4;">
            ${col.previewSnippet}
          </div>
        </div>
      `).join("")}
    </div>
  `;
}
