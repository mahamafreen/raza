/**
 * RAZA ARSHAD ARCHITECTURAL PORTFOLIO — INTRO DRAFTING GENESIS LOADER
 */

export function initIntroLoader() {
  const introLoader = document.getElementById("intro-loader");
  const enterBtn = document.getElementById("btn-enter-portfolio");
  const dynamicPathsGroup = document.getElementById("intro-dynamic-paths");

  if (!introLoader || !dynamicPathsGroup) return;

  // Create geometric architectural drafting lines
  const paths = [
    // Ground Plane Axis
    "M 160 420 L 640 420",
    "M 200 450 L 600 450",
    // Isometric Pavilion Volumes
    "M 260 420 L 260 220 L 540 220 L 540 420 Z",
    "M 260 220 L 360 140 L 640 140 L 540 220",
    "M 640 140 L 640 340 L 540 420",
    // Cantilever Overhang
    "M 200 240 L 580 240",
    "M 200 240 L 280 180 L 660 180 L 580 240",
    // Internal Columns & Glazing Lines
    "M 340 420 L 340 240",
    "M 440 420 L 440 240",
    // Section Hatching Lines
    "M 260 270 L 340 270",
    "M 260 320 L 340 320",
    "M 260 370 L 340 370"
  ];

  dynamicPathsGroup.innerHTML = "";

  paths.forEach((d, i) => {
    const pathEl = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathEl.setAttribute("d", d);
    pathEl.setAttribute("stroke", "var(--blueprint-primary)");
    pathEl.setAttribute("stroke-width", "1.2");
    pathEl.setAttribute("fill", "none");

    dynamicPathsGroup.appendChild(pathEl);

    // Calculate length for dynamic stroke-dashoffset drafting animation
    const len = pathEl.getTotalLength() || 400;
    pathEl.style.strokeDasharray = `${len} ${len}`;
    pathEl.style.strokeDashoffset = `${len}`;
    pathEl.style.transition = `stroke-dashoffset ${1.4 + i * 0.15}s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s, opacity 0.5s ease`;

    // Trigger stroke animation on next frame
    requestAnimationFrame(() => {
      pathEl.style.strokeDashoffset = "0";
    });
  });

  // Enter experience dismiss handler
  function dismissIntro() {
    introLoader.classList.add("dismissed");
    document.body.style.overflow = "auto";
    setTimeout(() => {
      introLoader.style.display = "none";
    }, 850);
  }

  if (enterBtn) {
    enterBtn.addEventListener("click", dismissIntro);
  }

  // Keypress or touch support
  window.addEventListener("keydown", (e) => {
    if ((e.key === "Enter" || e.key === " ") && !introLoader.classList.contains("dismissed")) {
      dismissIntro();
    }
  });
}
