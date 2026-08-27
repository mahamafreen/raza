/**
 * RAZA ARSHAD ARCHITECTURAL PORTFOLIO — PROFILE, EXPERIENCE & PEDAGOGY
 */

import { experienceData } from '../data/experience.js';

export function initProfileExperience() {
  const mount = document.getElementById("profile-experience-mount");
  if (!mount) return;

  const { profile, experience, education, certifications } = experienceData;

  mount.innerHTML = `
    <div class="profile-grid">
      
      <!-- Left Column: Editorial Portrait -->
      <div class="profile-portrait-col">
        <div class="profile-portrait-frame">
          <img src="/assets/architect-portrait.jpg" alt="Raza Arshad — Architecture Professional" class="profile-portrait-img" loading="lazy">
          
          <div class="portrait-datum-stamp">
            <span class="stamp-title">RAZA ARSHAD</span>
            <span>DISCIPLINE // B.ARCH (2022—2027)</span>
            <span>PRACTICE // ARCHMAN CONSULTANTS</span>
            <span style="color: var(--blueprint-primary); margin-top: 2px;">LAT 33.6844° N, LON 73.0479° E</span>
          </div>
        </div>
      </div>

      <!-- Right Column: Narrative, Experience & Education -->
      <div class="profile-details-col">
        <h3 class="profile-bio-lead">${profile.bioLead}</h3>
        <p class="profile-bio-body">${profile.bioBody}</p>

        <!-- Professional Experience Timeline -->
        <div class="timeline-block">
          <div class="timeline-block-title">
            <span>01 // PROFESSIONAL PRACTICE</span>
          </div>

          ${experience.map((exp) => `
            <div class="timeline-item">
              <div class="timeline-role-title">${exp.role}</div>
              <div class="timeline-org">${exp.organization.toUpperCase()} · ${exp.period} · ${exp.location}</div>
              <p class="timeline-desc">${exp.description}</p>
              
              <ul style="margin-top: var(--space-3); padding-left: var(--space-4); display: flex; flex-direction: column; gap: 4px;">
                ${exp.highlights.map(h => `
                  <li style="list-style-type: circle; font-size: var(--text-xs); color: var(--ink-secondary); line-height: 1.5;">${h}</li>
                `).join("")}
              </ul>

              <div class="timeline-skills-tags">
                ${exp.skills.map(s => `<span class="timeline-tag">${s}</span>`).join("")}
              </div>
            </div>
          `).join("")}
        </div>

        <!-- Academic Pedagogy Timeline -->
        <div class="timeline-block">
          <div class="timeline-block-title">
            <span>02 // ACADEMIC PEDAGOGY</span>
          </div>

          ${education.map((edu) => `
            <div class="timeline-item">
              <div class="timeline-role-title">${edu.degree}</div>
              <div class="timeline-org">${edu.institution.toUpperCase()} · ${edu.period}</div>
              <p class="timeline-desc">${edu.description}</p>

              <div class="timeline-skills-tags" style="margin-top: var(--space-3);">
                ${edu.focusAreas.map(f => `<span class="timeline-tag">${f}</span>`).join("")}
              </div>
            </div>
          `).join("")}
        </div>

        <!-- Certifications -->
        <div class="timeline-block">
          <div class="timeline-block-title">
            <span>03 // ACCREDITATIONS & CERTIFICATIONS</span>
          </div>

          <div class="certifications-row">
            ${certifications.map((c) => `
              <div class="cert-card ${c.featured ? 'featured-autocad' : ''}">
                <div class="cert-title">${c.title}</div>
                <div class="cert-issuer">${c.issuer.toUpperCase()} // ${c.category}</div>
              </div>
            `).join("")}
          </div>
        </div>

      </div>

    </div>
  `;
}
