"use strict";
var texte = document.getElementById("textchange");
var image = document.getElementById("image1");




var changerMonTexte = function() {
    texte.textContent = "Premier texte en italique";
    texte.style.fontStyle = "italic";    
}

var changerMonImage = function(){
    image.src="imgExo1/2.jpg"
}

var remetMontImage = function(){
    image.src="imgExo1/1.jpg"
}



var setupListeners = function(){
    
    texte.addEventListener("click", changerMonTexte);
    image.addEventListener("mouseover", changerMonImage);
    image.addEventListener("mouseout", remetMontImage);
}

window.addEventListener("load", setupListeners);