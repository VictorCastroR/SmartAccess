

async function getIngresses3() {
  const apiUrl = "https://node-api-iot.herokuapp.com/ingress";
  //const apiUrl = "https://api.datos.gob.mx/v1/precio.gasolina.publico"
  const response = await fetch(apiUrl);
  const lineChartData = await response.json();

  /* Getting just the values needed  */
  const dates = lineChartData.map((x) => x.date);

  /*Counting the total info*/
  var x = 0;
  for (mes in dates) {
    x++;
  }

  const formatterDolar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  document.getElementById("ingresos-totales").innerHTML = x;
  document.getElementById("total-Uni").innerHTML = formatterDolar.format(
    x * 250
  );
  
}
setInterval("getIngresses3()",5000);
