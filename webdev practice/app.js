// Select all slides
const slides = document.querySelectorAll(".slide");

// Get the number of slides
const numSlides = slides.length;

// Set the current slide counter
let curSlide = 0;

// Select next slide button
const nextSlide = document.querySelector(".btn-next");

// Add event listener and next slide functionality
nextSlide.addEventListener("click", function () {
  curSlide = (curSlide + 1) % numSlides; // Use modulo to cycle back to the first slide

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// Select prev slide button
const prevSlide = document.querySelector(".btn-prev");

// Add event listener and previous slide functionality
prevSlide.addEventListener("click", function () {
  curSlide = (curSlide - 1 + numSlides) % numSlides; // Use modulo to cycle back to the last slide

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
