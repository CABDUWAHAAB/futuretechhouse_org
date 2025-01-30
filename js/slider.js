export function setupSliders() {
  const sliders = document.querySelectorAll('.slider');

  sliders.forEach((slider) => {
      let index = 0;
      const slides = slider.querySelectorAll('.slide');
      const nextBtn = slider.querySelector('.next');
      const prevBtn = slider.querySelector('.prev');

      function updateSlides() {
          slides.forEach((slide, i) => {
              slide.style.transform = `translateX(${100 * (i - index)}%)`;
          });
      }

      if (nextBtn && prevBtn) {
          nextBtn.addEventListener('click', () => {
              index = (index + 1) % slides.length;
              updateSlides();
          });

          prevBtn.addEventListener('click', () => {
              index = (index - 1 + slides.length) % slides.length;
              updateSlides();
          });
      }

      updateSlides();
  });
}
