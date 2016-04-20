jQuery(document).ready(function($) {
  var time1 = $.parseJSON(window.sessionStorage.getItem("test1"));
  var time2 = $.parseJSON(window.sessionStorage.getItem("test2"));
  var time3 = $.parseJSON(window.sessionStorage.getItem("test3"));
  var time4 = $.parseJSON(window.sessionStorage.getItem("test4"));
  window.sessionStorage.setItem("time1", time1.totalTime);
  window.sessionStorage.setItem("time2", time2.totalTime);
  window.sessionStorage.setItem("time3", time3.totalTime);
  window.sessionStorage.setItem("time4", time4.totalTime);
  window.sessionStorage.setItem("seen1", time1.sinceTargetSeen);
  window.sessionStorage.setItem("seen2", time2.sinceTargetSeen);
  window.sessionStorage.setItem("seen3", time3.sinceTargetSeen);
  window.sessionStorage.setItem("seen4", time4.sinceTargetSeen);
  
  request = $.ajax({
      url: "https://script.google.com/macros/s/AKfycbz6j0HGj0D6E0qiqD8o9XIEW5wzTgkeBvnhQ32PamLoog-wonAu/exec",
      type: "get",
      data: window.sessionStorage
  });


  var lbls = ["Trial 1", "Trial 2", "Trial 3", "Trial 4"];

  var times = [time1.totalTime, time2.totalTime, time3.totalTime, time4.totalTime];
  var sinceTargetSeen = [time1.sinceTargetSeen, time2.sinceTargetSeen, time3.sinceTargetSeen, time4.sinceTargetSeen];
  var data = {
    labels: lbls,
    datasets: [
      {
        label: "Total Time",
        data: times
      },
      {
        label: "Time in Viewport",
        data: sinceTargetSeen
      }
    ]
  };

  var ctx = document.getElementById("resultsChart").getContext("2d");
  var chart = new Chart(ctx, {type:"line", data:data});
  
});