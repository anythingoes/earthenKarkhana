const slideImages = Array.from(document.querySelectorAll(".hero__img"));
slideImages.forEach((img, index) => {
  if (index > 0) img.style.display = "none";
});

setInterval(function () {
  const img = slideImages.shift();
  img.style.display = "none";
  slideImages.push(img);
  slideImages[0].style.display = "block";
  // console.log(slideImages[0]);
}, 5000);

