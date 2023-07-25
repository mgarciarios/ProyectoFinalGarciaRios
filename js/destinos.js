function recuperarInformacionLocalStorage() {
    return (localStorage.getItem("carrito")) ?  JSON.parse(localStorage.getItem("carrito")) : []
};

let carritoDestinos = recuperarInformacionLocalStorage();

const URL = "js/destinos.json";

let arrayDestinos = [];