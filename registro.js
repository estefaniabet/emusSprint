var arreglo = [];

//función array del formulario
module.exports.agregarRegistro = function() {

    function datos(nombre, apellido, telefono, correo, contrasena) {

    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.correo = correo;
    this.contrasena = contrasena;
    }

    var a = document.getElementById("nombre").value;
    var b = document.getElementById("apellido").value;
    var c = document.getElementById("telefono").value;
    var d = document.getElementById("correo").value;
    var e = document.getElementById("contrasena").value;

    dato = new datos(a,b,c,d,e);
    arreglo.push(dato);
    console.log(arreglo);
}
    

module.exports.ordenarArreglo = function (arreglo) {
// function ordenarArreglo (arreglo) {
    arreglo.sort( (a, b) => (a.apellido > b.apellido) ? 1 : -1);
    console.log(arreglo);
    return arreglo;
}

module.exports.filtrarCorreo = function(arreglo) {

// function filtrarCorreo(arreglo) {
    var result = arreglo.filter(dato => dato.correo.includes('gmail.com'));
    console.log(result);
    return result;
}

// function submitt() {
//     agregarRegistro();
//     ordenarArreglo(arreglo);
//     filtrarCorreo(arreglo);
// }
