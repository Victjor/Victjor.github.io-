document.addEventListener('DOMContentLoaded', function() {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.review-slide');
  const totalSlides = slides.length;

  document.querySelector('.next').addEventListener('click', function() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
  });

  document.querySelector('.prev').addEventListener('click', function() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
  });

  slides[currentSlide].classList.add('active');
});
