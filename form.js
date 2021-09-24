module.exports.checkTelefono = function (valor) {

    if (!valor) {
        return false;
    } 
    
    if (valor.length != 7 ) {
        return false;
    }
    
    if (isNaN(valor)) {
        return false;
    }
    return true;
} 

module.exports.checkNombre = function (valor) {

    if (!valor) {
        return false;
    } 

    if (valor.length <4 || valor.length >30) {
        return false;
    }

    for (let i = 0; i < valor.length; i++) {
        if (!isNaN(valor[i])) {
            return false;
        }   
    }
    return true;
}

module.exports.checkApellido = function (valor){
    if (!valor) {
        return false;
    } 

    if (valor.length <4 || valor.length >30) {
        return false;
    }

    for (let i = 0; i < valor.length; i++) {
        if (!isNaN(valor[i])) {
            return false;
        }   
    }
    return true;
}


module.exports.checkCorreo = function (valor) { 
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var valid = re.test(String(valor).toLowerCase());
    return valid;
}

module.exports.ccheckContrasena = function (valor) {

    if (!valor) {
        return false;
    } 

    if (valor.length <8) {
        return false;
    }

    var tieneMayus;
    var tieneMinusc;
    var tieneNum;
    for (let i = 0; i < valor.length;i++ ) {
        var code = valor.charCodeAt(i); //  97=a
        
        if  (code>=65 && code <=90){      /*mayusculas  */
            tieneMayus=true;
        }

        if (code>=97 && code <=122){        /*minusculas  */
            tieneMinusc=true;
        
        }
        if (code>=48 && code <=57){         /*numeros  */
            tieneNum=true;
        }

    }
    var valido = !!tieneMayus && !!tieneMinusc && !!tieneNum;
    return valido; 
}