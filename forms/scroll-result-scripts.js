var lbls = ["Trial 1", "Trial 2", "Trial 3", "Trial 4", "Trial 5", "Trial 6", "Trial 7", "Trial 8", "Trial 9", "Trial 10"];
var times = [13, 15, 14, 17, 12, 15, 18, 14, 7, 10];
var data = {
  labels: lbls,
  datasets: [
      {
          label: "Results",
          data: times
      }
  ]
};

var ctx = document.getElementById("resultsChart").getContext("2d");
var chart = new Chart(ctx, {type:"line", data:data});