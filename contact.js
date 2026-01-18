/* SCROLL REVEAL */
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
});

/* FORM VALIDATION */
const form = document.getElementById('contactForm');
const inputs = form.querySelectorAll('input, textarea');

form.addEventListener('submit', e => {
  e.preventDefault();
  let valid = true;

  inputs.forEach(input => {
    const error = input.nextElementSibling;
    if (input.value.trim() === "") {
      error.textContent = "This field is required";
      valid = false;
    } else {
      error.textContent = "";
    }
  });

  if (valid) {
    alert("Message sent successfully!");
    form.reset();
  }
});

/* SCROLL TO TOP */
document.getElementById('topBtn').onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
