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
/* ═══════════════════════════════════════════════
   JarVet — Lógica del Contador de Promoción
═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  const timerElement = document.getElementById('timer');
  
  if (timerElement) {
    // 15 minutos en segundos
    let timeInSeconds = 15 * 60; 

    function updateTimer() {
      const minutes = Math.floor(timeInSeconds / 60);
      let seconds = timeInSeconds % 60;

      // Agrega un 0 a la izquierda si son menos de 10 segundos
      seconds = seconds < 10 ? '0' + seconds : seconds;
      
      // Muestra el tiempo en la pantalla
      timerElement.textContent = `${minutes}:${seconds}`;

      if (timeInSeconds > 0) {
        timeInSeconds--;
      } else {
        // Cuando llega a cero, se queda en 00:00 o podrías ocultarlo
        timerElement.textContent = "00:00";
      }
    }

    // Actualiza el contador cada segundo (1000 milisegundos)
    setInterval(updateTimer, 1000);
    updateTimer(); // Llamada inicial para que no se vea vacío el primer segundo
  }
});