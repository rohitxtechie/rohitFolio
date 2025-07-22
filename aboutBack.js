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

  // Hamburger menu for mobile nav
  const hamburger = document.getElementById("hamburgerMenu");
  const navLinks = document.getElementById("navLinks");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
    hamburger.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        navLinks.classList.toggle("open");
      }
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
