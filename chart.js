let middleChart = document.getElementById('myChart');

let chart = new Chart(middleChart, {
  type: 'line',
  data: {
    labels: ['0', '100', '80', '150', '125', '200', '120', '90', '150'],
    datasets: [{
      backgroundColor: "rgba(111, 79, 242, 0.3)",
      borderColor: 'blue',
      data: [0, 100, 80, 150, 125, 200, 120, 90, 150],
      borderWidth: 3,
      fill: true
    }]
  },
  options: {
    responsive: true,
    scales: {
      x: {
        display: false
      },
      y: {
        max: 350,
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
});

// Chart Data
var chartData = {
  labels: ['First Half', 'Second Half'],
  datasets: [
    {
      data: [50, 50],
      backgroundColor: ['#6F4FF2', 'rgba(111, 79, 242, 0.3)'],
    }
  ]
};

// Chart Options
var chartOptions = {
  responsive: true,
  cutout: "80%",
  elements: {
    arc: {
      borderWidth: 2,
      borderColor: '#fff'
    }
  },
  tooltips: {
    enabled: false
  },
  plugins: {
    legend: {
      display: false
    }
  }
};

var ctx = document.getElementById('myChart1');
let chart1 = new Chart(ctx, {
  type: 'doughnut',
  data: chartData,
  options: chartOptions
});