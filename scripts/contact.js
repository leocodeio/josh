(() => {
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    console.log("Form submitted:", data);
    contactForm.reset();
    alert("Thank you! We will contact you within 48 hours.");
  });
})();
