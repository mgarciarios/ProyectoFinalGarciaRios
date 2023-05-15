const recargoFijo = 1.92;
const cordoba = 20000;
const bariloche = 25000;
const salta = 40000;
const santaCruz = 30000;
const tucuman = 35000;

function calculadoraDelCosto(ingresoDestino, cantidadDePersonas, recargoFijo, ingresoCuotas) {
    return (((ingresoDestino * cantidadDePersonas) * recargoFijo) / ingresoCuotas);
}

function opcionesDestino(ingresoDestino, cantidadDeVuelos) {
    let montoTotal 
    switch (parseInt(ingresoDestino)) {
        case 1:
            montoTotal = calculadoraDelCosto(cordoba * cantidadDeVuelos, cantidadDePersonas, recargoFijo, ingresoCuotas);
            break;

        case 2:
            montoTotal = calculadoraDelCosto(bariloche * cantidadDeVuelos, cantidadDePersonas, recargoFijo, ingresoCuotas);
            break;

        case 3:
            montoTotal = calculadoraDelCosto(salta * cantidadDeVuelos, cantidadDePersonas, recargoFijo, ingresoCuotas);
            break;

        case 4:
            montoTotal = calculadoraDelCosto(santaCruz * cantidadDeVuelos, cantidadDePersonas, recargoFijo, ingresoCuotas);
            break;

        case 5:
            montoTotal = calculadoraDelCosto(tucuman * cantidadDeVuelos, cantidadDePersonas, recargoFijo, ingresoCuotas);
            break;
    
        default:
            alert("No se ha comprendido el valor ingresado.");
    }
    return montoTotal;
}

let ingresoNombre = prompt("¿Como es tu nombre completo?");
let cantidadDePersonas = parseInt(prompt("¿Cual es el número de pasajeros que viajan?"));
let ingresoCuotas = parseInt(prompt("¿En cuantas cuotas desearía sacar el vuelo? Se puede realizar hasta 36 cuotas"));
if ((ingresoCuotas>=1) && (ingresoCuotas<=36)){
    let idaVuelta = confirm("¿Desea sacar pasajes para la ida y vuelta?");
    if (idaVuelta) {
        let ingresoDestino = prompt("¿Cuál el código del destino al que desea viajar: (1) Ciudad de Córdoba, (2) San Carlos de Bariloche, (3) Salta, (4) Santa Cruz, (5) Tucumán?");
        let cantidadDeVuelos = 2;
        let montoFinal = (opcionesDestino(ingresoDestino, cantidadDeVuelos));
        for (let i=0; i<ingresoCuotas; i++) {
             alert(ingresoNombre.trim() + " en la cuota " + (i+1) + " usted pagará: " + montoFinal.toFixed(2));
    }
}
        else if (confirm("¿Desea sacar solo pasaje/s de ida?")) {
            let ingresoDestino = prompt("¿Cuál es su lugar de destino: Ciudad de Córdoba, San Carlos de Bariloche, Salta, Santa Cruzo Tucumán?");
            let cantidadDeVuelos = 1;
            opcionesDestino(ingresoDestino, cantidadDeVuelos);
            let montoFinal = (opcionesDestino(ingresoDestino, cantidadDeVuelos));
            for (let i=0; i<ingresoCuotas; i++) {
                alert(ingresoNombre.trim() + " en la cuota " + (i+1) + " usted pagará: " + montoFinal.toFixed(2));
       }
    
        } else {
            alert("¡" + ingresoNombre.trim() + " gracias por visitar la página web de FlyArgentina!");
        }
}else{
    alert(ingresoNombre.trim() + " has superado el total de cuotas posibles.");
}