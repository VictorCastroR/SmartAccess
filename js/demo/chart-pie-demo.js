var dateData = []


/*   Creating a Chart */


async function lineChart(){
await getIngresses()

  const data = {
    labels: ["Enero", "Febrero", "Marzo", "Abril"],
    datasets: [{
      label: 'Ingresos 1er Cuatrimestre',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: dateData,
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };


/* Rendering the chart */
const myChart = new Chart(
  document.getElementById('myPieChart'),
  config
);
}
lineChart()

/* Gerring info from API */
async function getIngresses(){
    const apiUrl = "https://node-api-iot.herokuapp.com/ingress"
    //const apiUrl = "https://api.datos.gob.mx/v1/precio.gasolina.publico"
    const response = await fetch(apiUrl)
    const lineChartData = await response.json()

    /* Getting just the values needed  */
    const dates = lineChartData.map( (x) => x.date)

    /*Getting just the months*/
    var x = 0
    let meses = []
    let mesesResult = []
    
    for(mes in dates){
    meses[x] = new Date(dates[mes])
    
    mesesResult[x] = meses[x].getUTCMonth()
    
    x++
    }
    /* initialize totalxMes */
    let totalxMes = [4]
    for(let x = 0; x<4; x++ ){
        totalxMes[x]=0
    }
    
    for(let i = 0; i < meses.length; i++){
      
      switch(mesesResult[i]){
        case 0:
            totalxMes[0]++
           
          break;

        case 1:
            totalxMes[1]++
            
          break;

        case 2:
            totalxMes[2]++
            
          break;

        case 3:
            totalxMes[3]++
            
          break;
          default:
            break;
      }
      
    }
    
dateData = totalxMes

}
 