"use strict";

// Wait for all images to load before starting slideshow 
window.addEventListener('load', (e) => {
  console.log('Loaded');
  document.querySelector("body").classList.remove("preload");
  slideShow();
});

function slideShow() {
  const slideImages = Array.from(document.querySelectorAll(".image-slider__img"));

  slideImages.forEach((img, index) => {
    if (index > 0) img.style.display = "none";
  });

  setInterval(function () {
    const img = slideImages.shift();
    img.style.zIndex = 0
    slideImages.push(img);
    slideImages[0].style.zIndex = 10;
    slideImages[0].style.display = "block";

    // Static image not required to be visible once slide images are loaded in
    document.querySelector(".no-slide").style.opacity = 0;

    fadeOut(img);
  }, 5000);
}

function fadeOut(img) {
  setTimeout(function () { img.style.display = "none" }, 3000);
}
