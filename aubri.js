google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Position', 'Percentage'],
          ['Women in Tech', 26.7],
          ['Men in Tech', 73.3],
          ['Women in Leadership Positions', 25],
          ['Men in Leadership Positions', 75],
        ]);

        var options = {
          title: 'Women in Tech and Leadership Positions at Major Tech Companies: Amazon'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
