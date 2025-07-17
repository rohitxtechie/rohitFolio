// backend.js (for interactivity like dark mode toggle, copy email, etc.)

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("darkModeToggle");
  const body = document.body;
  const emailButton = document.querySelector(".email-btn");

  // Dark Mode Toggle
  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      body.classList.toggle("dark");
    });
  }

  // Copy Email Button
  if (emailButton) {
    emailButton.addEventListener("click", () => {
      const email = "cris@example.com";
      navigator.clipboard.writeText(email).then(() => {
        emailButton.textContent = "Copied!";
        setTimeout(() => {
          emailButton.textContent = "📧 Copy Email";
        }, 1500);
        å;
      });
    });
  }

  // Animate elements on scroll (basic version)
  const animatedItems = document.querySelectorAll(
    ".card, .stats div, .brands img, .testimonial, .award-item"
  );

  const animateOnScroll = () => {
    animatedItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        item.classList.add("show");
      }
    });
  };

  // Initial and scroll trigger
  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll();
});
