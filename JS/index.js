document.getElementById('date').innerHTML = new Date().toDateString();
// this tells the html file to create a variable called date and sets it to the current date


let gridWidth = 500; // screen pixels
let gridHeight = 500; // screen pixels
let gridX = 100; // in grid pixel count x
let gridY = 100; // in grid pixel count y

class Vertex {
    constructor(_x, _y, _z) {
        this.x = _x;
        this.y = _y;
        this.z = _z;
    }
}

//var grid = [];
//grid[0] = Vertex(- 0.5, 0, -0.5, 1);




let vertexShader = false;
function drawGrid() {
    for (var i = 0; i < 44; i++) {

    }
    if (vertexShader) {

    }

}

function VertexShader() {

}

function Parametric(x1, y1, x2, y2, color) {
    var cX = Math.abs(x2 - x1);
    var cY = Math.abs(y2 - y1);

    var tP = 0;
    if (cX > cY) {
        tP = cX;
    }
    else {
        tP = cY;
    }

    for (var i = 0; i < tP; i++) {
        var R = i / tP;
        var Rx = x1 + R * (x2 - x1);
        var Ry = y1 + R * (y2 - y1);
        var testX = Rx + .5;
        var testY = Ry + .5;
        if (testX < gridWidth && testX > 0 && testY < gridHeight && testY > 0) {
            fillPixel(Math.round(Rx + .5), Math.round(Ry + .5), color)
        }
    }
}

function DrawTriangle() {

}





let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}



var localRaster = document.getElementById("raster");
var localContext = localRaster.getContext("2d");
 
function clearRaster() {
    localContext.fillStyle = "black";
    localContext.fillRect(0, 0, 300, 169)
}
clearRaster();



// x location in raster, y location in raster, color to fill pixel
function fillPixel(x,y,color) {
    localContext.fillStyle = color;
    localContext.fillRect(x, y, 1, 1)
}



let deltaTime = 0
function update() {
    clearRaster();
    deltaTime = deltaTime + 100;
    Parametric(0, 0, 50, deltaTime/ 50, "green");
    setTimeout(update, 100); 
}
update();

