"use strict";

let navbar = document.querySelector('header');

// Sticky navbar
window.addEventListener("scroll", e => {
  let scrollPos = window.scrollY;
  console.log(`scrollPos: ${scrollPos}`);

  if (scrollPos > 0) {
    navbar.classList.add("header--sticky");
  } else {
    navbar.classList.remove("header--sticky");
  }
});



// Wait for all images to load before starting slideshow 
window.addEventListener('load', (e) => {
  document.querySelector("body").classList.remove("preload");

  if (document.querySelectorAll(".image-slider__img").length == 0) return;

  // Static image not required to be visible once slide images are loaded in
  setTimeout(() => document.querySelector(".no-slide").style.opacity = 0, 8000);
  slideShow();
});


function slideShow() {
  console.log('start animation');
  const slideImages = Array.from(document.querySelectorAll(".image-slider__img"));

  slideImages.forEach((img, index) => {
    img.style.display = "none";
  });

  setInterval(function () {
    const img = slideImages.shift();
    img.style.zIndex = 0
    slideImages.push(img);
    slideImages[0].style.zIndex = 10;
    slideImages[0].style.display = "block";

    fadeOut(img);
  }, 5000);
  // window.requestAnimationFrame(slideShow);
}

function fadeOut(img) {
  setTimeout(function () { img.style.display = "none" }, 3000);
}
