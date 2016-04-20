// weird that the distances aren't the same; fitts law equation is based on distances
// we can calculate but weird
// differentiate horizontal vs vertical movement
// 2d grid
// 1) establish metrics (time and accuracy & horizontal/vertical & fatigue & ??)
// auto detect systems during onboarding


// scrolling
// to compare between desktop/phone: fixed-sized document vs fixed-size inches
// 2D scrolling -- MAP

var errors = [];

// window.onresize = redoDrawing;
var resizeTimeout = 0;

var score = new PointText(new Point(100, 100));
score.justification = 'left';
score.fillColor = 'black';
score.content = "0";

console.log(score);

function updateScore() {
    var avgErr = Math.round(arrAvg(errors));
    score.content = avgErr;
}

function redoDrawing(event) {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(init, 500);
}

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
        drawFailed(target);
        updateScore();
    }

    switchTarget(target);
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
    var s = new Shape.Circle(target.position.x, target.position.y, target.radius)
    s.fillColor = target.fillColor;
    s.animationCircle = true;
    s.opacity = 1;
}

function drawFailed(target) {
    var s = new Shape.Circle(target.position.x, target.position.y, target.radius)
    s.fillColor = "#FF4136"; // red "failure" color
    s.animationCircle = true;
    s.opacity = 1;
}

function fixResize(event) {
    /* checks to see if we're resizing and then if so we fix it */
    /* runs every frame */

    if (event.count == 0) {
        init();
    } else if (resizeTimeout != 0 && project.activeLayer.opacity > 0.06) {
        console.log(project.activeLayer.opacity);
        project.activeLayer.opacity -= 0.06;
    } else if (resizeTimeout == 0 && project.activeLayer.opacity < 1) {
        console.log(project.activeLayer.opacity);
        project.activeLayer.opacity += 0.5;
    }
}

function drawCircleAnimations() {
    /* animation */
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

function onFrame(event) {

    fixResize(event); // handle any resizing issues dynamically

    drawCircleAnimations();
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

    setTarget(size);

}

function setTarget(size) {
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
