let canvas = document.getElementById("myCanvas");
let mode = first_point;

function getMousePos(evt) {
    let canvas = document.getElementById("myCanvas");
    let rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function add_point(event) {
    let canvas = document.getElementById("myCanvas");
    let contexte = canvas.getContext("2d");

    let mouse = getMousePos(event);
    contexte.lineTo(mouse.x, mouse.y);
    contexte.stroke()
}

function first_point(event) {
    let canvas = document.getElementById("myCanvas");
    let contexte = canvas.getContext("2d");

    let mouse = getMousePos(event);
    contexte.beginPath();
    contexte.moveTo(mouse.x, mouse.y);
    canvas.removeEventListener("click", first_point);
    canvas.addEventListener("click", add_point);
    mode = add_point
}

function cercle(event) {
    let canvas = document.getElementById("myCanvas");
    let contexte = canvas.getContext("2d");
    let mouse = getMousePos(event);

    contexte.beginPath();
    contexte.arc(mouse.x, mouse.y, 5, 0, 2 * Math.PI);
    contexte.fillStyle = "red";
    contexte.fill();
}

function rectangle(event) {
    let canvas = document.getElementById("myCanvas");
    let contexte = canvas.getContext("2d");
    let mouse = getMousePos(event);

    contexte.beginPath();
    contexte.rect(mouse.x - 4, mouse.y - 3, 8, 6);
    contexte.fillStyle = "green";
    contexte.fill();
}



function setEventListener() {
    let canvas = document.getElementById("myCanvas");
    let contexte = canvas.getContext("2d");
    document.getElementById("ligne").addEventListener("click", function () {
        canvas.removeEventListener("click", mode);
        canvas.addEventListener("click", first_point);
        mode = first_point
    });
    document.getElementById("cercle").addEventListener("click", function () {
        canvas.removeEventListener("click", mode);
        canvas.addEventListener("mousemove", cercle);
        mode = cercle
    });
    document.getElementById("rectangle").addEventListener("click", function () {
        canvas.removeEventListener("click", mode);
        canvas.addEventListener("mousemove", rectangle);
        mode = rectangle
    });
    document.getElementById("reset").addEventListener("click", function () {
        contexte.clearRect(0, 0, canvas.width, canvas.height);
        contexte.beginPath()
    });
    canvas.addEventListener("click", first_point)
}

window.addEventListener("load", setEventListener);