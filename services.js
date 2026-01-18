/* SERVICES PAGE EFFECTS */

const progressBars = document.querySelectorAll(".progress-bar span");

const fillProgress = () => {
  progressBars.forEach(bar => {
    const width = bar.getAttribute("data-width");
    bar.style.width = width;
  });
};

window.addEventListener("scroll", () => {
  const section = document.querySelector(".services-section");
  if (!section) return;

  const top = section.getBoundingClientRect().top;
  if (top < window.innerHeight - 120) {
    fillProgress();
  }
});

/* Review hover glow */
document.querySelectorAll(".review-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 25px 70px rgba(255,20,147,.45)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 20px 50px rgba(0,0,0,.4)";
  });
});
