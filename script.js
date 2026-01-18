/* ===============================
   SCROLL REVEAL ANIMATIONS
================================ */
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


/* ===============================
   LEFT / RIGHT ENTRY DELAY
================================ */
document
  .querySelectorAll(".card, .service-card, .about-text, .gallery img")
  .forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.08}s`;
  });


/* ===============================
   3D TILT EFFECT (SMOOTH + SAFE)
================================ */
document.querySelectorAll(".tilt").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 18).toFixed(2);
    const rotateY = ((x - centerX) / 18).toFixed(2);

    card.style.transform = `
      perspective(900px)
      rotateX(${-rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.06)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(900px) rotateX(0) rotateY(0) scale(1)";
  });
});


/* ===============================
   BUTTON RIPPLE EFFECT
================================ */
document.querySelectorAll(".ripple").forEach(btn => {
  btn.addEventListener("click", e => {
    const ripple = document.createElement("span");
    ripple.className = "ripple-effect";

    const rect = btn.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;

    btn.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});


/* ===============================
   GALLERY LIGHTBOX (SAFE)
================================ */
const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector(".lightbox");

if (lightbox) {
  const lightboxImg = lightbox.querySelector("img");

  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.classList.add("show");
      lightboxImg.src = img.src;
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("show");
  });
}


/* ===============================
   COUNTER ANIMATION
================================ */
const counters = document.querySelectorAll(".counter");
let counterStarted = false;

const startCounters = () => {
  if (counterStarted) return;

  counters.forEach(counter => {
    const target = +counter.dataset.target;
    let count = 0;

    const update = () => {
      const increment = target / 120;
      count += increment;

      if (count < target) {
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });

  counterStarted = true;
};

window.addEventListener("scroll", () => {
  const stats = document.querySelector(".stats");
  if (!stats) return;

  const statsTop = stats.getBoundingClientRect().top;
  if (statsTop < window.innerHeight - 120) {
    startCounters();
  }
});


/* ===============================
   PARALLAX DEPTH EFFECT (SMOOTH)
================================ */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".parallax").forEach(section => {
    const speed = section.dataset.speed || 0.35;
    section.style.backgroundPositionY =
      window.pageYOffset * speed + "px";
  });
});


/* ===============================
   BACK TO TOP BUTTON (FIXED)
================================ */
const topBtn = document.getElementById("topBtn");

if (topBtn) {
  window.addEventListener("scroll", () => {
    topBtn.style.opacity = window.scrollY > 300 ? "1" : "0";
    topBtn.style.pointerEvents = window.scrollY > 300 ? "auto" : "none";
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}


/* ===============================
   HOVER FLOAT EFFECT
================================ */
document
  .querySelectorAll(".card, .service-card")
  .forEach(box => {
    box.addEventListener("mouseenter", () => {
      box.style.boxShadow =
        "0 25px 55px rgba(255, 20, 147, 0.45)";
      box.style.transform = "translateY(-6px)";
    });

    box.addEventListener("mouseleave", () => {
      box.style.boxShadow =
        "0 10px 30px rgba(255, 20, 147, 0.2)";
      box.style.transform = "translateY(0)";
    });
  });
