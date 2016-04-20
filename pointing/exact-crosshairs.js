/* ######################### */
/* ######## Globals ######## */
/* ######################### */

// store all errors
errors = [];

// constant list of points to move the cursor to
points = []

/* ######################### */
/* ######## Helpers ######## */
/* ######################### */

function getDistance(x1, x2, y1, y2) {
    var a = x1 - x2;
    var b = y1 - y2;

    return Math.sqrt(a*a + b*b);
}

function arrAvg(a) {
    var sum = 0;

    for (var i = 0; i < a.length; i++) {
        sum += a[i];
    }

    return sum / a.length;
}

/* ######################### */
/* ######### Model ######### */
/* ######################### */

function init() {
    // get the point we're going to draw the crosshair
    var crosshairPoint = getCurrentPoint();
    drawCrosshair(crosshairPoint)
}

function onResize(event) {

}

function getCurrentPoint() {
    // get current point
    // check if there is no more points, then test is done
}

/* ######################### */
/* ######### View ########## */
/* ######################### */

function drawCircle(x, y, size) {
    var s = new Shape.Circle(x, y, size);
    s.fillColor = "#f4f4f4";

    s.data.isTarget = false;
    s.clicked = false;
    s.animationCircle = false;

    return s;
}

function drawCrosshair(crosshairPoint) {
    var x = crosshairPoint.x;
    var y = crosshairPoint.y;

}

function onFrame(event) {

}

/* ######################### */
/* ###### Controller ####### */
/* ######################### */

function onMouseDown(event) {
    var clickPoint = event.point;
    var crosshairPoint = getCurrentPoint();
    var x1 = event.point.x;
    var y1 = event.point.y;
    var x2 = event.point.x;
    var y2 = event.point.y;
    var distance = getDistance(x1, x2, y1, y2);

}
