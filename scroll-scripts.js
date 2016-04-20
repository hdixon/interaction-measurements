jQuery(document).ready(function($) {
  $(".laptop").hide();
  $(".keyboard").hide();
  $(".touch").hide();
  $(".desktop").hide();

  $("#inputDevice").change(function(){
    switch($("#inputDevice option:selected").text()){
      case "Mouse":
        $(".laptop").hide();
        $(".keyboard").hide();
        $(".touch").hide();
        $(".desktop").show();
        $("#altInputMethod").slideUp();
        $(".scrollMethod").slideDown();
        break;
      case "Laptop Trackpad":
        $(".keyboard").hide();
        $(".touch").hide();
        $(".desktop").hide();
        $(".laptop").show();
        $("#altInputMethod").slideUp();
        $(".scrollMethod").slideDown();
        break;
      case "Keyboard":
        $(".touch").hide();
        $(".desktop").hide();
        $(".laptop").hide();
        $(".keyboard").show();
        $("#altInputMethod").slideUp();
        $(".scrollMethod").slideDown();
        break;
      case "Touch-Enabled Device":
        $(".desktop").hide();
        $(".laptop").hide();
        $(".keyboard").hide();
        $(".touch").show();
        $("#altInputMethod").slideUp();
        $(".scrollMethod").slideDown();
        break;
      case "Other":
        $("#altInputMethod").slideDown();
        $(".scrollMethod").slideUp();
        break;
      default:
        $("#altInputMethod").slideUp();
        $(".scrollMethod").slideUp();
    }
  });
  $("#scrollMethod").change(function(){
    switch($("#scrollMethod option:selected").text()){
      case "Other":
        $("#altInputMethod").slideDown();
        break;
      default:
        $("#altInputMethod").slideUp();
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
    window.sessionStorage.setItem("scrollMethod", $("#scrollMethod option:selected").text());
    window.sessionStorage.setItem("altScroll", $("#altScroll").val());
    window.sessionStorage.setItem("model", $("#model").val());
    window.sessionStorage.setItem("os", $("#os").text());
    window.sessionStorage.setItem("browser", $("#browser").text());
    window.sessionStorage.setItem("width", $("#width").text());
    window.sessionStorage.setItem("height", $("#height").text());
//    console.log(window.sessionStorage);
    window.location.href = "/interaction-measurements/tests/1.html"
  });
});
