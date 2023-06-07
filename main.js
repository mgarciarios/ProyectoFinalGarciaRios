class Destino {
    constructor(codigo, lugar, precio) {
        this.codigo = parseInt(codigo);
        this.lugar = lugar;
        this.precio = parseFloat(precio);
    }
    precioConRecargo() {
        this.precio = this.precio * 1.92;
    }
    calcularCosto(cantidadDePersonas, cantidadDeVuelos, ingresarCuotas){
        this.precioConRecargo();
        return ((this.precio * cantidadDePersonas * cantidadDeVuelos) / ingresarCuotas); 
    }
}

let cordoba = new Destino(1, "cordoba", 20000);
let bariloche = new Destino(2, "bariloche", 25000);
let salta = new Destino(3, "salta", 40000);
let santaCruz = new Destino(4, "santaCruz", 30000);;
let tucuman = new Destino(5, "tucuman", 35000)

const destinosDisponibles = [cordoba, bariloche, salta, santaCruz, tucuman];

let destinoSeleccionado = {} 

function corroborarDestino() {
    destinoSeleccionado = destinosDisponibles.find((element) => element.codigo === parseInt(codigo));
    if (destinoSeleccionado === undefined){
        alert(ingresarNombre + ", NO SE ENCONTRÓ EL DESTINO INDICADO.");
        return;
    } else{
        let montoFinal = destinoSeleccionado.calcularCosto(cantidadDePersonas, cantidadDeVuelos, ingresarCuotas) 
        alert(ingresarNombre + " DEBERÁ PAGAR " + ingresarCuotas + " CUOTAS DE $ " + montoFinal + " CADA UNA.")
    }
}

let ingresarNombre = prompt("¿Como es tu nombre completo?").toUpperCase();
let cantidadDePersonas = parseInt(prompt("¿Cual es el número de pasajeros que viajan?"));
let ingresarCuotas = parseInt(prompt("¿En cuantas cuotas desearía sacar el vuelo? Se puede realizar hasta 36 cuotas"));
if ((ingresarCuotas>=1) && (ingresarCuotas<=36)){
    let idaVuelta = confirm("¿Desea sacar pasajes para la ida y vuelta?");
        if (idaVuelta) {
            cantidadDeVuelos = 2;
            codigo = parseInt(prompt("¿Cuál el código del destino al que desea viajar: (1) Ciudad de Córdoba, (2) San Carlos de Bariloche, (3) Salta, (4) Santa Cruz, (5) Tucumán?"));
            corroborarDestino();
        }
        else if (confirm("¿Desea sacar solo pasaje/s de ida?")) {
            cantidadDeVuelos = 1;
            codigo = parseInt(prompt("¿Cuál el código del destino al que desea viajar: (1) Ciudad de Córdoba, (2) San Carlos de Bariloche, (3) Salta, (4) Santa Cruz, (5) Tucumán?"));
            corroborarDestino();
        } 
        else {
            alert("¡" + ingresarNombre.trim() + " GRACIAS POR VISITAR LA PÁGINA WEB DE FlyArgentina!");
        }
    }
else{
    alert(ingresarNombre.trim() + " HAS SUPERADO EL TOTAL DE CUOTAS POSIBLES.");
}