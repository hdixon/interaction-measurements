function init() {
    drawCircles();
}

function onFrame(event) {
    // drawCircles();
}

function drawCircles() {
    drawCircle(100, 100);
}

function drawCircle(x, y) {
    var SIZE = 30;
    var s = new Shape.Circle(x, y, SIZE);
    s.fillColor = "red";
}
