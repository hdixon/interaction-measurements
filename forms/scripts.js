function calculateSize(){
  var aspectX = 16;
  var aspectY = 9;
  var aspectDiagonal = pythagorean(aspectX, aspectY);
  var diagonal = 15; //change later
  if (diagonal > 0){
    var factor = diagonal / aspectDiagonal;
    var width = aspectX * factor;
    var height = aspectY * factor;
    // output x
    // output y
  }
}

function pythagorean(x, y){
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

jQuery(document).ready(function($) {
  $("#inputDevice").change(function(){
    console.log($("#inputDevice option:selected").text());
    switch($("#inputDevice option:selected").text()){
      case "Mouse":
        $(".hide").slideUp();
        $("#mouse").slideDown();
        break;
      case "Phone":
        $(".hide").slideUp();
        $("#mouse").slideDown();
        break;
      case "Tablet":
        $(".hide").slideUp();
        $("#mouse").slideDown();
        break;
      case "Stylus":
        $(".hide").slideUp();
        $("#mouse").slideDown();
        break;
      case "Other":
        $(".hide").slideUp();
        $("#mouse").slideDown();
        break;
      default:
        $(".hide").slideUp();
    }
  });
  var parens = /\(([^)]+)\)/;
  var matches = parens.exec(window.navigator.userAgent);
  $("#os").text(matches[1]);
  
  if (navigator.userAgent.search("MSIE") >= 0) {
      $("#browser").text("Internet Explorer");
  }
  else if (navigator.userAgent.search("Chrome") >= 0) {
      $("#browser").text("Chrome");
  }
  else if (navigator.userAgent.search("Firefox") >= 0) {
      $("#browser").text("Firefox");
  }
  else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
      $("#browser").text("Safari");
  }
  else if (navigator.userAgent.search("Opera") >= 0) {
      $("#browser").text("Opera");
  }
  else{
      $("#browser").text("Other");
  }
  
  $("#width").text(screen.width);
  $("#height").text(screen.height);
  
  $("#userInfo").submit(function(){
    
  });
});