jQuery(document).ready(function($) {
  $("#inputDevice").change(function(){
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
  
  $("#userInfo").submit(function(e){
    e.preventDefault();
    window.sessionStorage.clear();
    window.sessionStorage.setItem("fullName", $("#yourName").val());
    window.sessionStorage.setItem("andrewID", $("#andrewID").val());
    window.sessionStorage.setItem("participant", $("#participant option:selected").text());
    window.sessionStorage.setItem("inputDevice", $("#inputDevice option:selected").text());
    window.sessionStorage.setItem("model", $("#model").val());
    window.sessionStorage.setItem("os", $("#os").text());
    window.sessionStorage.setItem("browser", $("#browser").text());
    window.sessionStorage.setItem("width", $("#width").text());
    window.sessionStorage.setItem("height", $("#height").text());
    console.log(window.sessionStorage);
    request = $.ajax({
      url: "https://script.google.com/macros/s/AKfycbz6j0HGj0D6E0qiqD8o9XIEW5wzTgkeBvnhQ32PamLoog-wonAu/exec",
      type: "get",
      data: window.sessionStorage
    });
//    success(function(){
//      window.location.href = "fitts-results.html";
//    });
  });
});