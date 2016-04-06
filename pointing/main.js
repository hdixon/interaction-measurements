init();
var errors = [];

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
        drawAnimated(target);
        error = 0;
    }
    else {
        var r = target.radius;
        error = getDistance(targetX, clickedX, targetY, clickedY) - r;
        console.log("Target missed. Error: " + error);
        errors.push(error);
        updateScore();
    }

    switchTarget(target);
}

function updateScore() {
    console.log(arrAvg(errors));
}

function arrAvg(a) {
    var sum = 0;

    for (var i = 0; i < a.length; i++) {
        sum += a[i];
    }

    return sum / a.length;
}

function switchTarget(oldTarget) {
    var circles = project.activeLayer.children;

    // first reset oldTarget back to normal circle
    oldTarget.fillColor = "#f4f4f4"
    oldTarget.data.isTarget = false;

    var targetIndex = Math.floor(Math.random() * circles.length);
    var target = project.activeLayer.children[targetIndex];

    // if the new one is the same as the old one,
    while (target === oldTarget || target.animationCircle == true) {
        var targetIndex = Math.floor(Math.random() * circles.length);
        target = project.activeLayer.children[targetIndex];
    }

    target.data.isTarget = true;
    target.fillColor = "#2ECC40";
}

function drawAnimated(target) {
    // var s = target.clone();
    // s.data.isTarget = false
    var s = new Shape.Circle(target.position.x, target.position.y, target.radius)
    s.fillColor = target.fillColor;
    s.animationCircle = true;
    s.opacity = 1;
}

function onFrame(event) {
    var toRemove = []
    var circles = project.activeLayer.children;
    for (var i = 0; i < circles.length; i++) {
        // check if there's a circle to animate
        if (circles[i].animationCircle) {
            // if the circle is not finished animating
            if (circles[i].opacity > 0.06) {
                circles[i].opacity -= 0.06;
                circles[i].scale(1.02);
            }
            // if the circle is finished animating
            else {
                toRemove.push(circles[i])
            }
        }
    }

    for(var i = 0; i < toRemove.length; i++){
        toRemove[i].remove()
    }

}

function onResize(event) {
    project.activeLayer.children = [];
    init();
}

function getDistance(x1, x2, y1, y2) {
    var a = x1 - x2;
    var b = y1 - y2;

    return Math.sqrt(a*a + b*b);
}

function getTarget() {
    var circles = project.activeLayer.children;

    for (var i = 0; i < circles.length; i++) {
        if (circles[i].data.isTarget) {
            return circles[i];
        }
    }
    return null;
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

    // set one circle to be a target
    var circles = project.activeLayer.children;
    var targetIndex = Math.floor(Math.random() * circles.length);
    var target = project.activeLayer.children[targetIndex];
    target.data.isTarget = true;
    target.fillColor = "#2ECC40";

}

function drawCircle(x, y, size) {
    var s = new Shape.Circle(x, y, size);
    s.fillColor = "#f4f4f4";
    s.data.isTarget = false;
    s.clicked = false;
    s.animationCircle = false;

    return s;
}
