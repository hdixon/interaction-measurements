/* ######################### */
/* ######## Globals ######## */
/* ######################### */

// Fitts-Mode toggle
FITTS_MODE = false;
FITTS_RADIUS = 30;

// store trial
trial = 0;

// store all errors
results = {};
results.times = []; // time from mouse movement to click
results.delta = []; // error distance

// constant list of points to move the cursor to
var opt1 = [[1/4, 1/4], [3/4, 1/4], [3/4, 3/4], [1/4, 3/4], [1/4, 1/2], [1/2, 1/2], [1/2, 3/4], [7/8, 3/4]];
var opt2 = [[3/4, 3/4], [3/4, 1/4], [1/4, 1/4], [1/4, 3/4], [1/4, 1/6], [1/6, 1/6], [1/6, 3/4], [5/6, 3/4]];
var opt3 = [[1/2, 1/2], [1/2, 3/8], [2/9, 3/8], [9/10, 3/8], [1/2, 3/8], [1/2, 3/4], [1/9, 3/4], [1/9, 2/10]];
var opt4 = [[8/9, 3/8], [1/30, 3/8], [1/23, 3/8], [1/23, 4/12], [3/5, 4/12], [3/5, 3/4], [3/5, 3/4], [3/4, 3/4]];
var opt5 = [[6/9, 5/6], [3/4, 5/6], [3/4, 2/3], [1/2, 2/3], [3/8, 2/3], [3/8, 1/2], [1/12, 1/2], [1/12, 3/7]];
var opt6 = [[1/3, 2/3], [2/3, 2/3], [2/3, 3/14], [3/14, 3/14], [3/14, 1/5], [3/4, 1/5], [3/4, 3/4], [3/4, 1/3]];
var options = [opt1, opt2, opt3, opt4, opt5, opt6];

points = shuffle(options)[0];

/* ######################### */
/* ######## Helpers ######## */
/* ######################### */

function getDistance(x1, x2, y1, y2) {
    var a = x1 - x2;
    var b = y1 - y2;

    return Math.sqrt(a*a + b*b);
}

function shuffle(array) {
  // http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/* ######################### */
/* ######### Model ######### */
/* ######################### */

function init() {
    if (!FITTS_MODE) {
        doCrosshair();
    } else {
        doFitts();
    }
}

function doCrosshair() {
    var crosshairPoint = getCurrentPoint(trial);
    drawCrosshair(crosshairPoint.x, crosshairPoint.y);
}

function doFitts() {
    var fittsPoint = getCurrentPoint(trial);
    drawFitts(fittsPoint.x, fittsPoint.y);
}

function getCurrentPoint(trial) {
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
    // clears canvas, draws a crosshair at x, y
    // stores the time we draw the crosshairs

    clearCanvas();

    var cw = view.bounds.width;
    var ch = view.bounds.height;

    var black = "rgba(2, 2, 2, 1)";
    var strokeWidth = 1;
    var circleRadius = 10;

    // draw horizontal line
    var h1 = new Point(0, y);
    var h2 = new Point(cw, y);
    var horizontal = new Path.Line(h1, h2);
    horizontal.strokeColor = black;
    horizontal.strokeWidth = strokeWidth;

    // draw vertical line
    var v1 = new Point(x, 0);
    var v2 = new Point(x, ch);
    var vertical = new Path.Line(v1, v2);
    vertical.strokeColor = black;
    vertical.strokeWidth = strokeWidth;

    // draw circles
    var innerCircle = new Shape.Circle(x, y, circleRadius);
    innerCircle.fillColor = 'rgba(2, 2, 2, 0.4)';
    var middleCircle = new Shape.Circle(x, y, circleRadius * 3);
    middleCircle.fillColor = 'rgba(2, 2, 2, 0.1)';
    var outerCircle = new Shape.Circle(x, y, circleRadius * 5);
    outerCircle.fillColor = 'rgba(2, 2, 2, 0.05)';

    drawnTime = new Date();
}

function drawFitts(x, y) {
    // clears canvas, draws fitts target at x, y
    // stores the time we draw the target

    clearCanvas();

    var cw = view.bounds.width;
    var ch = view.bounds.height;

    var targetColor = "#2ECC40";
    var targetRadius = FITTS_RADIUS;
    var target = new Shape.Circle(x, y, targetRadius);
    target.fillColor = targetColor;

    drawnTime = new Date();
}


/* ######################### */
/* ###### Controller ####### */
/* ######################### */

function onMouseDown(event) {
    /* TODO:
        FLASH BACKGROUND */
    var clickedTime = new Date();
    var clickPoint = event.point;
    var crosshairPoint = getCurrentPoint(trial);
    var x1 = event.point.x;
    var y1 = event.point.y;
    var x2 = crosshairPoint.x;
    var y2 = crosshairPoint.y;
    var distance = getDistance(x1, x2, y1, y2);

    // CASE: we're doing fitts law so the error can be 0
    if (FITTS_MODE) {
        distance -= FITTS_RADIUS;
        if (distance < 0) {
            distance = 0;
        }
    }

    results.delta.push(distance);
    results.times.push(clickedTime.getTime() - drawnTime.getTime());
    console.log(results);

    if (trial < points.length - 1) {
        trial += 1;
        if (!FITTS_MODE) {
            doCrosshair();
        } else {
            doFitts();
        }
    } else {
      window.sessionStorage.setItem("distanceResults", results.delta);
      window.sessionStorage.setItem("timeResults", results.time);
      window.location.href = "http://hdixon.io/interaction-measurements/scroll-results.html"
    }

}


init();
