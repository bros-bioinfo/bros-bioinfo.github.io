"use strict";
var btnLigne = document.getElementById("Ligne");
var btnCercle = document.getElementById("Cercle");
var btnRectangle = document.getElementById("Rectangle");
var btnreset = document.getElementById("Reset");


var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");


function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    return x, y
}

var line = function () {
    x, y = showCoords(on.click);
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x, y);
    context.stroke();
}

var rectangle = function () {
    context.rect(x, y, w, h);
    context.stroke();
}


var circle = function () {
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI);
    context.stroke();
}


var reset = function () {
    var oImg = new Image();
    oImg.onload = function () {
        var canvas = document.getElementById("myCanvas");
        var canvasContext = canvas.getContext("2d");
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
        canvasContext.drawImage(oImg, 0, 0);
    }
}


var slideIndexupListeners = function () {
    btnLigne.addEventListener("click", line);
    btnCercle.addEventListener("click", circle);
    btnRectangle.addEventListener("click", rectangle);
    btnreset.addEventListener("click", reset);


}
window.addEventListener("load", slideIndexupListeners);
