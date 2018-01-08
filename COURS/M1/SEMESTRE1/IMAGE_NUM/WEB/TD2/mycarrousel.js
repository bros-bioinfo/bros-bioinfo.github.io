"use strict";
var buttong = document.getElementById("navbg");
var buttond = document.getElementById("navbd");
var image = document.getElementById("image1");
var slides = ["imgCarrousel/1.jpg", "imgCarrousel/2.jpg", "imgCarrousel/3.jpg"];


var slideIndex = 1;
afficherImage(slideIndex);

function incrementImage(n) {
    slideIndex = slideIndex += n
    if (slideIndex > 2) {
        slideIndex = 0
        afficherImage(slideIndex);
    }
    else if (slideIndex < 0) {
        slideIndex = 2
        afficherImage(slideIndex);
    }
    else {
        afficherImage(slideIndex);
    }
}

function afficherImage(n) {
    console.log("SLIDES " + slides[n])
    document.getElementById("image1").src = slides[n];
} 

var slideIndexupListeners = function () {
    buttong.addEventListener("click", function () {
        incrementImage(-1);
    }, false);

    buttond.addEventListener("click", function () {
        incrementImage(1);
    }, false);

}
window.addEventListener("load", slideIndexupListeners)
