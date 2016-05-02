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
