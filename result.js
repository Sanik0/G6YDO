
// 
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Early Pregnancy',     11],
    ['Gaming Addiction',      2],
    ['Sexual Violence',  2],
    ['HIV Awareness', 2],
    ['LGBTQ Empowerment',    7]
  ]);

  var options = {
    title: 'Questionnaire Scores',
    is3D: true,
    width: '100%',
      height: '100%',
      chartArea: {
        width: '100%', // Adjust to allow padding inside the container
        height: '80%' // Adjust for the legend or title
      }
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
  chart.draw(data, options);
}