// Mobile menu toggle
document.querySelector("nav").addEventListener("click", function () {
  this.classList.toggle("active");
});

// Simple scroll animation
window.addEventListener("scroll", function () {
  document.querySelectorAll(".project, .skills-grid div").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});

// Initialize elements for animation
document.querySelectorAll(".project, .skills-grid div").forEach((el) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(20px)";
  el.style.transition = "all 0.5s ease";
});
