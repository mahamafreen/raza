/**
 * RAZA ARSHAD ARCHITECTURAL PORTFOLIO — NAVIGATION & STUDIO HUD CONTROLS
 */

export function initNavigation(spatialSceneInstance) {
  // 1. Live Islamabad Clock (PKT / UTC+5)
  const clockEl = document.getElementById("live-islamabad-time");
  function updateIslamabadClock() {
    if (!clockEl) return;
    try {
      const now = new Date();
      const options = {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      };
      const timeString = new Intl.DateTimeFormat("en-GB", options).format(now);
      clockEl.textContent = `PKT ${timeString}`;
    } catch (e) {
      clockEl.textContent = "PKT 18:30:00";
    }
  }
  updateIslamabadClock();
  setInterval(updateIslamabadClock, 1000);

  // 2. Viewport Rulers Dynamic Dimension Updates
  const dimXEl = document.getElementById("ruler-dim-x");
  const dimYEl = document.getElementById("ruler-dim-y");
  function updateViewportRulers() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    if (dimXEl) dimXEl.textContent = `${w}PX`;
    if (dimYEl) dimYEl.textContent = `${h}PX`;
  }
  updateViewportRulers();
  window.addEventListener("resize", updateViewportRulers);

  // 3. Theme Toggle (Paper Limestone ↔ Studio Obsidian Dark)
  const btnTheme = document.getElementById("btn-toggle-theme");
  const themeLabel = document.getElementById("theme-label");
  const themeIcon = document.getElementById("theme-icon");

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("raza-theme", theme);
    if (themeLabel) themeLabel.textContent = theme.toUpperCase();
    if (themeIcon) themeIcon.textContent = theme === "studio" ? "☼" : "◐";
  }

  // Read saved theme
  const savedTheme = localStorage.getItem("raza-theme") || "paper";
  setTheme(savedTheme);

  if (btnTheme) {
    btnTheme.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "paper";
      const next = current === "paper" ? "studio" : "paper";
      setTheme(next);
    });
  }

  // 4. Drafting Grid HUD Toggle
  const btnGrid = document.getElementById("btn-toggle-grid");
  const gridOverlay = document.getElementById("drafting-grid");

  if (btnGrid && gridOverlay) {
    btnGrid.addEventListener("click", () => {
      const isHidden = gridOverlay.classList.toggle("hidden");
      btnGrid.classList.toggle("active", !isHidden);
    });
  }

  // 5. 3D Spatial Scene Mode Toggle
  const btn3D = document.getElementById("btn-toggle-3d-mode");
  const label3D = document.getElementById("spatial-mode-label");
  const modes = ["3D: WIRE", "3D: MASS", "3D: OFF"];
  let currentModeIndex = 0;

  if (btn3D && spatialSceneInstance) {
    btn3D.addEventListener("click", () => {
      currentModeIndex = (currentModeIndex + 1) % modes.length;
      const selected = modes[currentModeIndex];
      if (label3D) label3D.textContent = selected;

      if (selected === "3D: WIRE") {
        spatialSceneInstance.setMode("wireframe");
      } else if (selected === "3D: MASS") {
        spatialSceneInstance.setMode("solid");
      } else {
        spatialSceneInstance.setMode("off");
      }
    });
  }

  // 6. Section Scroll Spy (Active Navigation Indicator)
  const navLinks = document.querySelectorAll(".site-nav .nav-link");
  const sections = document.querySelectorAll("main section[id]");

  const observerOptions = {
    root: null,
    rootMargin: "-25% 0px -45% 0px",
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          const href = link.getAttribute("href");
          if (href === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((sec) => observer.observe(sec));

  // 7. Mobile Nav Drawer Toggle
  const btnMobileMenu = document.getElementById("btn-mobile-menu");
  const mobileDrawer = document.getElementById("mobile-nav-drawer");
  const mobileItems = document.querySelectorAll(".mobile-nav-item");

  if (btnMobileMenu && mobileDrawer) {
    btnMobileMenu.addEventListener("click", () => {
      const isOpen = mobileDrawer.classList.toggle("open");
      btnMobileMenu.classList.toggle("active", isOpen);
    });

    mobileItems.forEach((item) => {
      item.addEventListener("click", () => {
        mobileDrawer.classList.remove("open");
        btnMobileMenu.classList.remove("active");
      });
    });
  }
}
