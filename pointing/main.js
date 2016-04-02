init();

function init() {
    drawCircles();
}

// function onFrame(event) {
//     drawCircles();
// }


function drawCircles() {
    var pi = Math.PI;
    var cx = view.bounds.width / 2;
    var cy = view.bounds.height / 2;

    for (var i = 0; i < pi * 2; i += pi / 5) {
        var x = cx + Math.cos(i) * 150;
        var y = cy + Math.sin(i) * 150;
        drawCircle(x, y);
    }
}

function drawCircle(x, y) {
    var SIZE = 30;
    var s = new Shape.Circle(x, y, SIZE);
    s.fillColor = "red";
}
