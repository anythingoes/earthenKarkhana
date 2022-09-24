"use strict";

const slideImages = Array.from(document.querySelectorAll(".image-slider__img"));
// Wait for page to load before starting slideshow
window.addEventListener('load', (e) => {
  document.querySelector("body").classList.remove("preload");

  // slideshow should only run on index page 
  if (document.querySelectorAll(".image-slider__img").length == 0) return;

  // Static image not required to be visible once slide images are loaded in
  setTimeout(() => document.querySelector(".no-slide").style.opacity = 0, 8000);

  slideShow();
});


function slideShow() {
  slideImages.forEach((img, index) => {
    img.style.display = "none";
  });
  let animationInterval = setInterval(startSlideShow, 5000);
}

function startSlideShow() {
  const img = slideImages.shift();
  img.style.zIndex = 0
  slideImages.push(img);
  slideImages[0].style.zIndex = 10;
  slideImages[0].style.display = "block";

  removePreviousImage(img);
}

function removePreviousImage(img) {
  setTimeout(function () { img.style.display = "none" }, 3000);
}
