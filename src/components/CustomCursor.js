/**
 * RAZA ARSHAD ARCHITECTURAL PORTFOLIO — CUSTOM DRAFTING CURSOR
 */

export function initCustomCursor() {
  const cursor = document.getElementById("custom-cursor");
  const label = document.getElementById("cursor-label");
  if (!cursor) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;
  let isMoving = false;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isMoving) {
      cursor.style.display = "block";
      isMoving = true;
    }
  });

  // Smooth interpolation loop for silky cursor physics
  function updateCursor() {
    cursorX += (mouseX - cursorX) * 0.35;
    cursorY += (mouseY - cursorY) * 0.35;

    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    requestAnimationFrame(updateCursor);
  }
  requestAnimationFrame(updateCursor);

  // Dynamic context tags on hoverable elements
  document.addEventListener("mouseover", (e) => {
    const target = e.target.closest("[data-cursor]");
    if (target) {
      const cursorText = target.getAttribute("data-cursor");
      if (cursorText && label) {
        label.textContent = cursorText;
        cursor.classList.add("has-label");
      }
    }
  });

  document.addEventListener("mouseout", (e) => {
    const target = e.target.closest("[data-cursor]");
    if (target) {
      cursor.classList.remove("has-label");
    }
  });
}
