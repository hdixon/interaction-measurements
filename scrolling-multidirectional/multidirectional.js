$("#background").mousewheel(function(event) {
  event.preventDefault();
  var mousePosition, newZoom, offset, ref, viewPosition;
  view.center = changeCenter(view.center, event.deltaX, event.deltaY, event.deltaFactor);
  return event.preventDefault();
});

function drawGrid(width, height) {
  var i, j, line, lineStyle, ref, ref1, results, x, y;
  new paper.Path.Rectangle({
    from: [0, 0],
    to: [width, height],
    fillColor: 'white'
  });
  lineStyle = function(coord) {
    if (coord % 50 === 0) {
      return {
        strokeColor: 'lightblue',
        strokeWidth: 2
      };
    } else {
      return {
        strokeColor: 'lightblue',
        strokeWidth: 1
      };
    }
  };
  for (x = i = 0, ref = width; i <= ref; x = i += 35) {
    line = new paper.Path.Line({
      segments: [[x, 0], [x, height]]
    });
    line.set(lineStyle(x));
  }
  results = [];
  for (y = j = 0, ref1 = height; j <= ref1; y = j += 35) {
    line = new paper.Path.Line({
      segments: [[0, y], [width, y]]
    });
    results.push(line.set(lineStyle(y)));
  }
  return results;
};

drawGrid(view.bounds.width, view.bounds.height)
var targetContainer = new Shape.Circle(view.center.x, view.center.y, 100);
targetContainer.fillColor = 'rgba(2, 2, 2, 0.4)';



function changeCenter(oldCenter, deltaX, deltaY, factor) {
   var offset;
   offset = new paper.Point(deltaX, -deltaY);
   offset = offset.multiply(factor);
   return oldCenter.add(offset);
 }
