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

function drawCrosshair(x, y) {
    var cw = view.bounds.width;
    var ch = view.bounds.height;

    var black = "rgba(2, 2, 2, 0.6)";
    var strokeWidth = 1;

    var h1 = new Point(0, y);
    var h2 = new Point(cw, y);
    var horizontal = new Path.Line(h1, h2);
    horizontal.strokeColor = black;
    horizontal.strokeWidth = strokeWidth;

    var v1 = new Point(x, 0);
    var v2 = new Point(x, ch);
    var vertical = new Path.Line(v1, v2);
    vertical.strokeColor = black;
    vertical.strokeWidth = strokeWidth;

    var circle = new Path.Circle({
    center: new Point(x, y),
    radius: 60
    });

    circle.fillColor = {
        gradient: {
            stops: [[black, 0.1], ['rgba(0,0,0,0.3)', 0.8], ['rgba(0,0,0,0)', 1]],
            radial: true
        },
        origin: circle.position,
        destination: circle.bounds.rightCenter
    };
}

drawCrosshair(200, 200);

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
