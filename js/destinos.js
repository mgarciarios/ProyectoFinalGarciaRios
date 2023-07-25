function recuperarInformacionLocalStorage() {
    return (localStorage.getItem("carrito")) ?  JSON.parse(localStorage.getItem("carrito")) : []
};
let carritoDestinos = recuperarInformacionLocalStorage();
const URL = "destinos.json";
let arrayDestinos = [];