let registros = [{correo: "juan@gmail.com", contrasena: "SecurePassword123"}];

function agregarRegistro() {
    if (typeof registros === "undefined") {
        globalThis.registros = new Array();
    }
    
    var inputs = document.getElementsByTagName("input");
}

function login(){
    const valCorreo = document.getElementById("correo").value; 
    const valPassword = document.getElementById("contrasena").value;
    const valor = document.getElementById('captcha').value;
    let correo;
    let passw;
    if((correo= registros.find(e => e.correo == valCorreo)) && (passw = registros.find(e => e.contrasena == valPassword))){
  
      if(validarCAPTCHA(valor)){
                          
          return true;
       } 
  
    }
    return false;
    
  } 

    function validarCAPTCHA(valor){
        if (valor==1000){
            return true;
        }
        else{
            return false;
        }   
    }
    
    module.exports.login = login;
    module.exports.registros = registros;
    module.exports.validarCAPTCHA = validarCAPTCHA;
    module.exports.agregarRegistro = agregarRegistro;
