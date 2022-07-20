//Variables
const url = "https://jsonplaceholder.typicode.com/posts";

//Evento
document.addEventListener("DOMContentLoaded", llamarApi);

//Funcion
function llamarApi(){
    fetch(url)
    .then(resp =>resp.json())
    .then((data) => console.log(data))

}
function graficar1(){
    var ctx = document.getElementById('grafica1').getContext('2d');
    var chart1 = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
          datasets: [{
            label: "Ingresos / Egresos los ultimos 7 dias", 
            data: [10,9,5,5,6,9,5]
          }]
        }
    }) 
    window.onload();
}

