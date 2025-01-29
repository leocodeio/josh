(() => {
  const requestButton = document.querySelector(".request-button");
  const modalOverlay = document.getElementById("requestModal");
  const cancelButton = modalOverlay.querySelector(".cancel-button");
  const requestForm = document.getElementById("request-form");
  const body = document.body;

  // Open modal when request button is clicked
  requestButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Request button clicked");
    window.scrollTo(0, 0);
    modalOverlay.classList.add("active");
    body.classList.add("modal-open");
  });

  // Close modal when "Cancel" is clicked
  cancelButton.addEventListener("click", () => {
    modalOverlay.classList.remove("active");
    body.classList.remove("modal-open");
    requestForm.reset();
  });

  // Close modal when clicking outside
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove("active");
      body.classList.remove("modal-open");
      requestForm.reset();
    }
  });

  // Handle form submission
  requestForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form submitted");
    modalOverlay.classList.remove("active");
    body.classList.remove("modal-open");
    requestForm.reset();
  });
})();
