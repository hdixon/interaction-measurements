// The amount of points in the path:
var points = 5;

// The distance between the points:
var length = 40;

var rectangle = new Shape.Rectangle(new Point(200, 200), new Size(600, 600));
var path = new Path.Rectangle(rectangle);
path.strokeColor = "#FEFFFFF";
path.strokeWidth = 30;
var start = view.center / [10, 1];

for (var i = 0; i < points; i++)
	// path.add(start + new Point(i * length, 0));
    var p = new Shape.Rectangle(i * length, Math.random() * 90);
    path.add(start + p);


function onFrame(event) {
	path.firstSegment.point += new Point(Math.random(), Math.random());
	for (var i = 0; i < points - 1; i++) {
		var segment = path.segments[i];
        console.log(segment.point);
		var nextSegment = segment.next;
		var vector = segment.point - nextSegment.point;
		vector.length = length;
		nextSegment.point = segment.point - vector;
	}
	path.smooth({ type: 'continuous' });
}

function onMouseUp(event) {
	path.fullySelected = false;
	path.strokeColor = '#e4141b';
}
