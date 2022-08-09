function validate(){

 var logeo=false;
    var userName = document.getElementById("exampleInputEmail").value
    var userPass = document.getElementById("exampleInputPassword").value
    var user = ["vcastro@gmail.com", 123456]
           
    if(userName == user[0] && userPass == user[1]){
        console.log("validado");
        logeo=true;
        
    window.location.href="index.html"
   
          
    }else{
        alert("Nombre de usuario o Contraseña incorrectos")
    }
    console.log(logeo)
return logeo

    
} 
