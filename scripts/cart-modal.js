(() => {
  const cartButtons = document.querySelectorAll(
    '.header-nav-buttons a[href="#"]'
  );
  const modalOverlay = document.getElementById("cartModal");
  const backToMenuButton = modalOverlay.querySelector(".back-to-menu");
  const body = document.body;

  // Open modal when cart icon is clicked
  cartButtons.forEach((button) => {
    if (button.querySelector('img[alt="shopping"]')) {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        modalOverlay.classList.add("active");
        body.classList.add("modal-open");
      });
    }
  });

  // Close modal when "Back to Menu" is clicked
  backToMenuButton.addEventListener("click", () => {
    modalOverlay.classList.remove("active");
    body.classList.remove("modal-open");
  });

  // Close modal when clicking outside
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove("active");
      body.classList.remove("modal-open");
    }
  });
})();
