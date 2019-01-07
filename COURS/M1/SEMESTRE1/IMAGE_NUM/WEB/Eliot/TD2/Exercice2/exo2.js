let slides = ["ressources/CL.svg", "ressources/IJ.svg", "ressources/microscope.svg"];
let n = 0;
let image = document.getElementById("image");
let previous_button = document.getElementById("precedent");
let next_button = document.getElementById("suivant");

function setNextImage() {
    clearTimeout(timing);
    n = (n + 1) % slides.length;
    image.src = slides[n];
}

function setPreviousImage(event) {
    console.log(this.id);
    clearTimeout(timing);
    if (n > 0) {
        n--;
    } else {
        n = slides.length - 1;
    }
    image.src = slides[n];
}


function timed() {
    timing = setTimeout(timed, 2000);
    if (n < slides.length - 1) {
        n++;
    } else {
        n = 0;
    }
    image.src = slides[n];
}

function setEventListeners() {
    previous_button.addEventListener("click", setPreviousImage);
    next_button.addEventListener("click", setNextImage);
}
window.addEventListener("load", setEventListeners);
timing = setTimeout(timed, 2000);