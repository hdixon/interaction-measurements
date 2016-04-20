/* ######################### */
/* ######## Globals ######## */
/* ######################### */

// store trial
trial = 0;

// store all errors
errors = [];

// constant list of points to move the cursor to
var p1 = [1/4, 1/4]; // top left
var p2 = [3/4, 1/4]; // top right
var p3 = [1/4, 3/4]; // bottom left
var p4 = [3/4, 3/4]; // bottom right
var p5 = [1/2, 1/2]; // center
points = [p1, p2, p3, p4, p5];

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
    doCrosshair();
}

init();

function doCrosshair() {
    var crosshairPoint = getCurrentPoint(trial);
    console.log("trial: " + trial);
    console.log("points[trial]: " + points[trial])
    console.log(crosshairPoint);

    drawCrosshair(crosshairPoint.x, crosshairPoint.y);
}

function getCurrentPoint(trial) {
    // else, calculate point
    var cw = view.bounds.width;
    var ch = view.bounds.height;
    var px = points[trial][0] * cw;
    var py = points[trial][1] * ch;
    var p = new Point(px, py);
    return p;
}

/* ######################### */
/* ######### View ########## */
/* ######################### */

function clearCanvas() {
    project.activeLayer.children = [];
}

function drawCrosshair(x, y) {
    clearCanvas();
    var cw = view.bounds.width;
    var ch = view.bounds.height;

    var black = "rgba(2, 2, 2, 1)";
    var strokeWidth = 1;
    var circleRadius = 15;

    var h1 = new Point(0, y);
    var h2 = new Point(cw, y);
    var horizontal = new Path.Line(h1, h2);
    horizontal.strokeColor = black;
    horizontal.strokeWidth = strokeWidth;

    var v1 = new Point(x, 0);
    var v2 = new Point(x, ch);
    var vertical = new Path.Line(v1, v2);
    vertical.strokeColor = 'black';
    vertical.strokeWidth = strokeWidth;

    var innerCircle = new Shape.Circle(x, y, circleRadius);
    innerCircle.fillColor = 'rgba(2, 2, 2, 0.4)';

    var middleCircle = new Shape.Circle(x, y, circleRadius * 2);
    middleCircle.fillColor = 'rgba(2, 2, 2, 0.1)';

    var outerCircle = new Shape.Circle(x, y, circleRadius * 4);
    outerCircle.fillColor = 'rgba(2, 2, 2, 0.05)';
}


/* ######################### */
/* ###### Controller ####### */
/* ######################### */

function onMouseDown(event) {
    var clickPoint = event.point;
    var crosshairPoint = getCurrentPoint(trial);
    var x1 = event.point.x;
    var y1 = event.point.y;
    var x2 = crosshairPoint.x;
    var y2 = crosshairPoint.y;
    var distance = getDistance(x1, x2, y1, y2);
    console.log(distance);

    if (trial < points.length - 1) {
        trial += 1;
        doCrosshair();
    } else {
        console.log("DONE!");
    }

}
