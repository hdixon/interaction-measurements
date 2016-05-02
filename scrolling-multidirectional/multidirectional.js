$("#background").mousewheel(function(event) {
  event.preventDefault();
  var mousePosition, newZoom, offset, ref, viewPosition;
  view.center = changeCenter(view.center, event.deltaX, event.deltaY, event.deltaFactor);
  view.draw()
  return event.preventDefault();
});


var targetContainer = new Shape.Circle(view.center.x, view.center.y, 100);
targetContainer.fillColor = 'rgba(2, 2, 2, 0.4)';

function changeCenter(oldCenter, deltaX, deltaY, factor) {
   var offset;
   offset = new paper.Point(deltaX, -deltaY);
   offset = offset.multiply(factor);
   return oldCenter.add(offset);
 }


function pointAt(x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    var angle = Math.atan2(dy, dx);

    var x = Math.cos(angle);
    var y = Math.sin(angle);

    return [x, y];
}
