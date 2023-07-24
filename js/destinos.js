function recuperarInformacionLocalStorage() {
    return (localStorage.getItem("carrito")) ?  JSON.parse(localStorage.getItem("carrito")) : []
}
let carritoDestinos = recuperarInformacionLocalStorage()
const URL = "js/destinos.json"

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
},
{
    codigo: 6,
    imagen: "imagenes/mendoza.jpg",
    paquete: "Mendoza + Hotel",
    descripcion: "Ven a disfrutar de Mendoza y su exquisito vino. Esta oferta incluye vuelos de ida y vuelta y 5 noches en el hotel Vinoteca Suites, ubicado en pleno centro. Costo válido por pasajero.",
    importe: 245000
},
{
    codigo: 7,
    imagen: "imagenes/ushuaia.jpg",
    paquete: "Ushuaia + Hotel",
    descripcion: "Descubre el fin del mundo en Ushuaia. Ofrecemos vuelos de ida y vuelta y 7 noches en el hotel Fin del Mundo Resort, con vista al canal de Beagle. Costo válido por pasajero.",
    importe: 410500
},
{
    codigo: 8,
    imagen: "imagenes/sanjuan.jpg",
    paquete: "San Juan + Hotel",
    descripcion: "Conoce la hermosa provincia de San Juan. Incluye vuelos de ida y vuelta y 4 noches en el hotel Oasis del Valle, rodeado de naturaleza. Costo válido por pasajero.",
    importe: 189800
},
{
    codigo: 10,
    imagen: "imagenes/puertomadryn.jpg",
    paquete: "Puerto Madryn + Hotel",
    descripcion: "Embárcate en una aventura marina en Puerto Madryn. Incluye vuelos de ida y vuelta y 4 noches en el hotel Mar y Naturaleza, con vista al mar. Costo válido por pasajero.",
    importe: 298700
},
{
    codigo: 11,
    imagen: "imagenes/merlo.jpg",
    paquete: "Merlo + Hotel",
    descripcion: "Disfruta del aire puro de Merlo, San Luis. Ofrecemos vuelos de ida y vuelta y 3 noches en el hotel Sierra Tranquila, en plena naturaleza. Costo válido por pasajero.",
    importe: 178900
},
{
    codigo: 12,
    imagen: "imagenes/cafayate.jpg",
    paquete: "Cafayate + Hotel",
    descripcion: "Conoce el encanto de Cafayate en Salta. Incluye vuelos de ida y vuelta y 4 noches en el hotel Vinos y Montañas, en medio de los viñedos. Costo válido por pasajero.",
    importe: 312400
},
{
    codigo: 13,
    imagen: "imagenes/sanluis.jpg",
    paquete: "San Luis + Hotel",
    descripcion: "Descubre la belleza natural de San Luis. Ofrecemos vuelos de ida y vuelta y 5 noches en el hotel Sierra Aventura, en medio de las sierras. Costo válido por pasajero.",
    importe: 236500
},
{
    codigo: 14,
    imagen: "imagenes/jujuy.jpg",
    paquete: "Jujuy + Hotel",
    descripcion: "Explora los colores de Jujuy. Incluye vuelos de ida y vuelta y 4 noches en el hotel Pacha Inti, en el corazón de la Quebrada de Humahuaca. Costo válido por pasajero.",
    importe: 289800
},
{
    codigo: 15,
    imagen: "imagenes/iguazu.jpg",
    paquete: "Cataratas del Iguazú + Hotel",
    descripcion: "Asómbrate con las Cataratas del Iguazú. Ofrecemos vuelos de ida y vuelta y 3 noches en el hotel Selva Misionera, en medio de la selva. Costo válido por pasajero.",
    importe: 398200
}];