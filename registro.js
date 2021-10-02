let registros = [];

function ordenarArreglo(arreglo) {
    registros = arreglo;
    let ordenar = registros.sort(function (a, b) {
        var firstA = a.apellido.toUpperCase(); 
        var firstB = b.apellido.toUpperCase(); 
        if (firstA < firstB) {
            return -1; 
        }
        if (firstA > firstB) {
            return 1;
        }
        return 0;
    });
    return ordenar;
    console.log(ordenar);
}
    
function filtrarCorreo(arreglo) {

    registros = arreglo;
    let filtrar = registros.filter(v => v.correo.substring(v.correo.lastIndexOf("@") + 1) === "gmail.com");

    return filtrar;
    console.log(filtrar);
}

function agregarRegistro() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var telefono = document.getElementById('telefono').value;
    var correo = document.getElementById('correo').value;
    var contrasena = document.getElementById('contrasena').value;

    var myData = {
        nombre,
        apellido,
        telefono,
        correo,
        contrasena,
    };
    registros.push(myData);
    console.log(agregarRegistro);
}
module.exports.registros = registros;
module.exports.filtrarCorreo = filtrarCorreo;
module.exports.ordenarArreglo = ordenarArreglo;
module.exports.agregarRegistro = agregarRegistro;
