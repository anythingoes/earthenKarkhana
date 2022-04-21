window.addEventListener('load', (e) => {
  console.log('Loaded');
  document.querySelector("body").classList.remove("preload");
});


const slideImages = Array.from(document.querySelectorAll(".hero__img"));
slideImages.forEach((img, index) => {
  if (index > 0) img.style.display = "none";
});

setInterval(function () {
  const img = slideImages.shift();
  img.style.zIndex = 0
  slideImages.push(img);
  slideImages[0].style.zIndex = 10;
  slideImages[0].style.display = "block";
  fadeOut(img);
}, 5000);

function fadeOut(img) {
  setTimeout(function () { img.style.display = "none" }, 3000);
}