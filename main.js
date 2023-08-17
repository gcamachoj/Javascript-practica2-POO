alert("Este es un mensaje de alerta")
var nombre = "Guillermo Camacho";
var altura = 180;

var concatenacion = nombre + " " + altura;
//document.write(nombre + "<br>") 
//document.write(altura)
//document.write(concatenacion);
//var datos = document.getElementById("datos");
//datos.innerHTML = concatenacion;
/*datos.innerHTML = `
<h1>Hola soy la caja de datos</h1>
<h2>Mi nombre es: ${nombre}</h2>
<h3>mido: ${altura}</h3>
`;
if(altura>=190){
    datos.innerHTML +='<h1>Eres una persona Alta</h1>';
}else{
    datos.innerHTML +='<h1>Eres una persona bajita</h1>';
};

for (let i = 215; i < 2023; i++) {
    datos.innerHTML += "<h2>Estamos en el año "+i;
    
}
*/

/*function Muestra_mi_nombre(nombre,altura){
    var datos = document.getElementById("datos");
    datos.innerHTML =`
        <h1>Hola soy la caja de datos</h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>mido: ${altura}</h3>
    `;
}

Muestra_mi_nombre("Guillermo Camacho", 181);
*/

function MuestraMiNombre(nombre,altura){
    var misDatos =`
    <h1>Soy ${nombre}</h1>
    <h2>Mido ${altura} cm</h2>
    `;
    return misDatos;
}


function imprimir(){
    var datos= document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("Guillermo Camacho", 182);
}

imprimir();



var nombres = ["Guillermo", "David", "Jairo"];

/*
document.write("<h1>Listado de Nombres</h1>");
for(i=0; i<nombres.length; i++){
    document.write(nombres[i] + "Hola. <br>");
}
*/

/*
nombres.forEach(function(nombre){
    document.write(nombre + '<br>');
});
*/

// funciones de flecha:
nombres.forEach((nombre) => {
    document.write(nombre + '<br>');
});


var coche = {
    marca: 'Mercedez Benz Class A',
    modelo: 2023,
    velocMax: 340,
    mostrarDatos(){
        this.marca, this.modelo, this.velocMax
    },
    propiedad1: "Valor aleatorio"
};

document.write("<h1>"+ coche.marca + "</h1>");
coche.mostrarDatos();
console.log(coche);


/************************************************************** */
// P R O M E S A S

var saludar = new Promise((resolver, reject) => {

    setTimeout(() =>{
        let saludo = "Hola muy buenas a todos los amigos";
        //saludo = false
        if(saludo){
            resolver(saludo);
        }else{
            reject('No hay saludo disponible');
        }
    }, 2000);//debe esperar 2 segundos para que cargue el mensaje

});


saludar.then(resultado => {
    alert(resultado);
})
.catch(err => {
    alert(err);
});
