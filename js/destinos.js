function recuperarInformacionLocalStorage() {
    return (localStorage.getItem("carrito")) ?  JSON.parse(localStorage.getItem("carrito")) : []
}

let carritoDestinos = recuperarInformacionLocalStorage()

let arrayDestinos = [
    {
    codigo: 1, 
    imagen: "imagenes/cordoba.jpg", 
    paquete: "Córdoba + Hotel", 
    descripcion: "Oferta imperdible hacia la Ciudad de Córdoba. Incluye los vuelos ida y el hospedaje por 6 noches en el hotel Güemes, ubicado a 200 metros del centro. Costo valido por pasajero.",
    importe:  169053
},
    {
    codigo: 2, 
    imagen: "imagenes/bariloche.jpg", 
    paquete: "Bariloche + Hotel", 
    descripcion: "¿Destino? San Carlos de Bariloche. Esta oferta imperdible incluye los vuelos ida y vuelta. El hospedaje por 6 noches en el hotel Tierra Gaucha, ubicado a 343 metros del centro. Costo valido por pasajero.",
    importe: 222274
},
    {
    codigo: 3, 
    imagen: "imagenes/salta.jpg", 
    paquete: "Salta + Hotel", 
    descripcion: "No te pierdas esta oferta imperdible con destino a Salta capital. Incluye los vuelos ida y vuelta, y el hospedaje por 6 noches en el Salta Suites, ubicado a 226 metros del centro. Costo valido por pasajero.",
    importe: 329319
},
    {
    codigo: 4, 
    imagen: "imagenes/calafate.jpg", 
    paquete: "El Calafate + Hotel", 
    descripcion: "¿Queres conocer Santa Cruz?. Te recomendamos este increible paquete hacia El Calafate. Incluye los vuelos de ida y vuelta el hospedaje por 6 noches en el hotel Lagos Del Calafate ubicado a 1,55 km del centro. Costo valido por pasajero.",
    importe: 365750
},
    {
    codigo: 5, 
    imagen: "imagenes/tucuman.jpg", 
    paquete: "Tucumán + Hotel", 
    descripcion: "Te recomendamos esta oferta imperdible hacia San Miguel de Tucumán. Incluye los vuelos de ida y vuelta, y el hospedaje por 6 noches en el hotel Garden Plaza, ubicado a 287 metros del centro. Costo valido por pasajero.",
    importe: 169000
}]