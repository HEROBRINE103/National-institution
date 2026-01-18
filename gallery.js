/* GALLERY PAGE INTERACTIONS */

const galleryItems = document.querySelectorAll(".gallery-item img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector("img");

galleryItems.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.classList.add("show");
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("show");
});

/* Extra glow on hover */
document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("mouseenter", () => {
    item.style.boxShadow = "0 35px 90px rgba(255,20,147,.45)";
  });

  item.addEventListener("mouseleave", () => {
    item.style.boxShadow = "0 25px 70px rgba(0,0,0,.5)";
  });
});
