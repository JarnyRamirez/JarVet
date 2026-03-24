/* ═══════════════════════════════════════════════
   JarVet — Lógica del Carrusel de Casos Reales
═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.case-card');
  const btnPrev = document.getElementById('prev-case');
  const btnNext = document.getElementById('next-case');
  let currentIndex = 0;

  if (slides.length === 0 || !btnPrev || !btnNext) return;

  function initCarousel() {
    slides.forEach((slide, i) => {
      if (i === 0) {
        slide.style.display = 'flex';
        slide.style.opacity = '1';
      } else {
        slide.style.display = 'none';
        slide.style.opacity = '0';
      }
    });
  }

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = 'flex';
        setTimeout(() => { slide.style.opacity = '1'; }, 20);
      } else {
        slide.style.opacity = '0';
        setTimeout(() => { slide.style.display = 'none'; }, 300);
      }
    });
  }

  initCarousel();

  btnNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  btnPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });
});