init();

function init() {
    drawCircles(30);
}

function onMouseDown(event) {
    var clickPoint = event.point;
    var target = getTarget();
    var targetX = target.position.x;
    var targetY = target.position.y;
    var clickedX = clickPoint.x;
    var clickedY = clickPoint.y;
    var error;


    if (target == null) {
        console.log("Target is null and this shouldn't happen.");
    }

    if (target.contains(clickPoint)) {
        console.log("Target hit.");
        error = 0;
    }
    else {
        var r = target.radius;
        error = getDistance(targetX, clickedX, targetY, clickedY) - r;
        console.log("Target missed. Error: " + error);
    }

    drawTarget();

    return error;

}

function onResize(event) {
    drawCircles(30);
}

function getDistance(x1, x2, y1, y2) {
    var a = x1 - x2;
    var b = y1 - y2;

    return Math.sqrt(a*a + b*b);
}

function getTarget() {
    var circles = project.activeLayer.children;

    for (var i = 0; i < circles.length; i++) {
        if (circles[i].fillColor == "#2ECC40") {
            return circles[i];
        }
    }

    return null;
}

function drawTarget() {
    var circles = project.activeLayer.children;

    /* first remove other target */
    for (var i = 0; i < circles.length; i++) {
        circles[i].fillColor = "#FF4136";
    }

    var i = Math.floor(Math.random() * circles.length);
    var target = circles[i];
    target.fillColor = "#2ECC40";

    return target;
}

function drawCircles(size) {
    project.activeLayer.children = []; // delete any circles we might have already
    var pi = Math.PI;
    var cx = view.bounds.width / 2;
    var cy = view.bounds.height / 2;

    for (var i = 0; i < pi * 2; i += pi / 5) {
        var x = cx + Math.cos(i) * 150;
        var y = cy + Math.sin(i) * 150;
        drawCircle(x, y, size);
    }

    drawTarget();
}

function drawCircle(x, y, size) {
    // var SIZE = 30;
    var s = new Shape.Circle(x, y, size);
    s.fillColor = "#FF4136";
}
