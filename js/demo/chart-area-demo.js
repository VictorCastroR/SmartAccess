var dayData = []


/*   Creating a Chart */


async function lineChart(){
await getIngresses()

  const data = {
    labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
    datasets: [{
      label: 'Ingresos Semanales',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: dayData,
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {}
  };


/* Rendering the chart */
const myChart = new Chart(
  document.getElementById('myAreaChart'),
  config
);
}
lineChart()

/* Gerring info from API */
async function getIngresses(){
    const apiUrl = "https://node-api-iot.herokuapp.com/ingress"
    //const apiUrl = "https://api.datos.gob.mx/v1/precio.gasolina.publico"
    const response = await fetch(apiUrl)
    const barChartData = await response.json()

    /* Getting just the values needed  */
    const dates = barChartData.map( (x) => x.date)

    /*Getting just the months*/
    var x = 0
    let dias = []
    let diasResult = []
    let mesComparacion = []
    
    for(dia in dates){
    dias[x] = new Date(dates[dia])
    
    diasResult[x] = dias[x].getUTCDay()
    mesComparacion[x] = dias[x].getUTCMonth()
    
    x++
    }
    /* initialize totalxDia */
    let totalxDia = [7]
    for(let x = 0; x<7; x++ ){
        totalxDia[x]=0
    }
    
    for(let i = 0; i < dias.length; i++){
      if(mesComparacion[i] == 2 ){
      switch(diasResult[i]){
        case 0:
            totalxDia[0]++
          break;
          case 1:
            totalxDia[1]++
          break;
          case 2:
            totalxDia[2]++
          break;
          case 3:
            totalxDia[3]++
          break;
          case 4:
            totalxDia[4]++
          break;
          case 5:
            totalxDia[5]++
          break;
          case 6:
            totalxDia[6]++
          break;
          default:
            break;
      }
    }
    }
dayData = totalxDia

}