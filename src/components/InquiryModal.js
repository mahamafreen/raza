/**
 * RAZA ARSHAD ARCHITECTURAL PORTFOLIO — DIRECT CONVERSATION MODAL
 */

export function initInquiryModal() {
  const openBtn = document.getElementById("btn-start-conversation");
  const modal = document.getElementById("inquiry-modal");
  const closeBtn = document.getElementById("btn-close-inquiry");
  const form = document.getElementById("direct-inquiry-form");
  const successMsg = document.getElementById("inq-success-msg");

  if (!modal) return;

  function openModal() {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "auto";
  }

  if (openBtn) openBtn.addEventListener("click", openModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (successMsg) successMsg.style.display = "block";
      form.reset();
      setTimeout(() => {
        if (successMsg) successMsg.style.display = "none";
        closeModal();
      }, 2800);
    });
  }
}
