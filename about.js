/* ABOUT PAGE EXTRA EFFECTS */

document.querySelectorAll(".owner-card, .mv-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 30px 80px rgba(255,20,147,.5)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 20px 60px rgba(0,0,0,.4)";
  });
});
