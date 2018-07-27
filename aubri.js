// google.charts.load('current', {'packages':['corechart']});
//       google.charts.setOnLoadCallback(drawChart);
//
//       function drawChart() {
//
//         var data = google.visualization.arrayToDataTable([
//           ['Position', 'Percentage'],
//           ['Women in Tech', 26.7],
//           ['Men in Tech', 73.3],
//           ['Women in Leadership Positions', 25],
//           ['Men in Leadership Positions', 75],
//         ]);
//
//         var options = {
//           title: 'Women in Tech and Leadership Positions at Major Tech Companies: Amazon'
//         };
//
//         var chart = new google.visualization.PieChart(document.getElementById('piechart'));
//
//         chart.draw(data, options);
//       }

function search() {

   var name = document.getElementById("searchForm").elements["searchItem"].value;
   var pattern = name.toLowerCase();
   var targetId = "";

   var divs = document.getElementsByClassName("col-md-2");
   for (var i = 0; i < divs.length; i++) {
      var para = divs[i].getElementsByTagName("p");
      var index = para[0].innerText.toLowerCase().indexOf(pattern);
      if (index != -1) {
         targetId = divs[i].parentNode.id;
         document.getElementById(targetId).scrollIntoView();
         break;
      }
   }
}
