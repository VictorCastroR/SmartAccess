var emailJson = []

async function validate(){

    await getData()
    var userName = document.getElementById("exampleInputEmail").value
    var userPass = document.getElementById("exampleInputPassword").value
    console.log(userName)
    console.log(userPass)
    for (i = 0; i < emailJson.length; i++){
        console.log("Entre al for")
        if(userName == emailJson[i] && userPass == emailJson[i]){
            console.log("Entro al if")

           // return location.href = "../../index.html"
        }
    }
    alert("Nombre de usuario o Contraseña incorrectos")
}

async function getData(){
    const apiUrl = "https://node-api-iot.herokuapp.com/users"

    const response = await fetch(apiUrl)
    const userData = await response.json()

    const email = userData.map( (x) => x.email)

    emailJson = email

    console.log("Ya tengo los datos de la API")
    console.log(emailJson)

}
