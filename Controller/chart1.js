
    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
      ];
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

const config = {
    type: 'line',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('grafica-1'),
    config
  );

  //fetch

  async function getDates(){
    const apiurl = "https://dummy.restapiexample.com/api/v1/employees"
    const response = await fetch(apiurl)
    const barChartData = await response.json()

    console.log(barChartData) 
  }

  getDates()



