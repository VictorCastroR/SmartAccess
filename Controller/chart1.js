
    const labels = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril'
      ];
  const data = {
    labels: labels,
    datasets: [{
      label: 'Cuatrimestre Enero - Abril',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 6],
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
    //const apiurl = "localhost:5000/ingress/getAll"
    const apiurl = ojala_q_jale
    const response = await fetch(apiurl)
    const lineChartData = await response.json()

    const date =  lineChartData.data.map((x) => x.date)
    let x = 0
    let meses = []
    //Trar los meses en un solo array
    for(mes of date){
      meses[x] = mes.getUTCMonth()
      x++
    }

    for(let i = 0; i < meses.length; i++){
      numeroMes = [0,1,2,3]
      switch(numeroMes){
        case 0:
          meses[0]++
          break;
        case 1:
          meses[1]++
          break;
        case 2:
          meses[2]++
          break;
        case 2:
          meses[3]++
          break;
      }
    }
    
    
    
  }

  getDates()  

/* let d = new Date("2022-07-21T13:20:50.100Z")

console.log(d.getUTCHours()); // Hours
console.log(d.getUTCMinutes());
console.log(d.getUTCSeconds());
console.log(d.getFullYear());
console.log(d.getUTCMonth());
console.log(d.getDate());

 */


ojala_q_jale = [
{"date" : "2022-01-21T13:20:50.100Z"},
{"date" : "2022-01-21T13:20:50.100Z"},
{"date" : "2022-02-21T13:20:50.100Z"},
{"date" : "2022-03-21T13:20:50.100Z"}
]