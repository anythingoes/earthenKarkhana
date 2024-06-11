"use strict";

const regEx = /"(.*?)"/
const images = Array.from(document.querySelectorAll(".galleryImg"))
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg")
const modalCloseImg = document.getElementById("modal-close")
const modalNextImg = document.getElementById("modal-next")
const modalPreviousImg = document.getElementById("modal-previous")
const numberOfImages = images.length - 1
let currentImg;

images.forEach((imgDiv, index) => imgDiv.addEventListener('click', () => openModal(imgDiv, index)))

modalCloseImg.addEventListener('click', closeModal)
modalNextImg.addEventListener('click', nextImg)
modalPreviousImg.addEventListener('click', previousImg)
window.document.onkeydown = checkKey;
window.document.onkeydown = checkKey;
window.document.onkeydown = checkKey;

function checkKey(e) {
    if (e.keyCode == '37') {
        previousImg()
    } else if (e.keyCode == '39') {
        nextImg()
    } else if (e.keyCode == '27') {
        closeModal()
    }
}


function openModal(imgDiv, index) {
    currentImg = index
    const style = imgDiv.currentStyle || window.getComputedStyle(imgDiv, false);
    const url = style.backgroundImage.match(regEx)[1]
    modalImg.src = url
    modal.style.display = "block"
    document.body.style.overflow = "hidden"
}

function closeModal() {
    modalImg.src = "" 
    modal.style.display = "none"
    document.body.style.overflow = "auto"
}

function nextImg() {
    let nextIndex = currentImg + 1 > numberOfImages ? 0 : currentImg + 1
    openModal(images[nextIndex], nextIndex)
}

function previousImg() {
    let previousIndex = currentImg - 1 < 0 ? numberOfImages - 1 : currentImg - 1
    openModal(images[previousIndex], previousIndex)
}
