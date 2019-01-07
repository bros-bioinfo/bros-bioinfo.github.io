"use strict";
let image = document.getElementById("image");
let texte = document.getElementById("texte");

let otherImage = function () {
    image.src = "http://www.loogun.com/img/hero_bg.jpg";
};

let firstImage = function () {
    image.src = "https://www.planwallpaper.com/static/images/518084-background-hd.jpg";
};

function changeText() {
    texte.textContent = "Nouveau texte en italique";
    texte.style.fontStyle = "italic";
}

let setupListeners = function () {
    image.addEventListener("mouseout", firstImage);
    image.addEventListener("mouseover", otherImage);
    texte.addEventListener("click", changeText)
};

window.addEventListener("load", setupListeners);
