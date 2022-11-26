function login(){ 
    console.log("Entro a la funcion js");
    var done=0; 
    var usuario=document.getElementById('usuario').value;
    var password=document.getElementById('password').value; 
    console.log(usuario + "Contraseña: "+password);
    if (usuario=="FELIPE" && password=="FELIPE#2022") { 
    window.location="./Principal.html"; 
    }   
    else{ 
    alert("Usuario y/o contraseña incorrecta"); 
    } 
    } 
