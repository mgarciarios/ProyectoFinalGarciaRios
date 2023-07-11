const imgCarrito = document.querySelector("img.carrito#carrito");
imgCarrito.src ="imagenes/carrito.png";
imgCarrito.addEventListener("click", ()=>{
    location.href = "checkout.html";
})

const imgDestino = document.querySelector("img#imgDestino");

const contenedorDeDestinos = document.querySelector("section#contenedor-destinos.contenedor-destinos");

function retornoArticleDestino(destino) {
    return `<article class="article-destino" id=article-destino>
                <div class="imagen"><img src="${destino.imagen}" id="imgDestino"></div>
                <div class="nombre"><h3>${destino.paquete}</h3></div>
                <div class="importe"><h5>${destino.descripcion}</h5></div>
                <div class="importe"><p>$${destino.importe}</p></div>
                <div class="comprar"><button id="${destino.codigo}" class="boton-agregar">Agregar</button></div>
            </article>`
}

function cargarDestinos(destinos) {
    contenedorDeDestinos.innerHTML = "";
    destinos.forEach((destino) => {
        contenedorDeDestinos.innerHTML += retornoArticleDestino(destino);
    })
    activarBotonesAgregar();
}
cargarDestinos(arrayDestinos);

function activarBotonesAgregar() {
    const botonesAgregar = document.querySelectorAll("button.boton-agregar");
        for (const boton of botonesAgregar) {
            boton.addEventListener("click", (ev) => {
                const promocionElegida = arrayDestinos.find((promocion) => promocion.codigo === parseInt(ev.target.id));
                carritoDestinos.push(promocionElegida);
                localStorage.setItem("carrito", JSON.stringify(carritoDestinos));
            })        
        }
}

//armar todo en una función ?

const inputSearch = document.querySelector("input#inputSearch");

function filtrarDestinos() {
    let arrayResultante = arrayDestinos.filter((destino)=> destino.paquete.toLowerCase().includes(inputSearch.value.trim().toLowerCase()));
    if (arrayResultante.length > 0){
        cargarDestinos(arrayResultante);
    }
}
inputSearch.addEventListener("input", filtrarDestinos);




/*
const nombrePasajero = document.querySelector("input#nombrePasajero")
const botonNombrePasajero = document.querySelector("button#botonNombrePasajero")


//el buscador lo paso a la página principal corte BUSCA TU PROXIMO DESTINO!
// puedo agregar tipo un loggeo en el checkout, guardarlo en storage y que lo devuela cuando diga cuanto tiene q pagar


// meter a estos dos en una funcion
botonNombrePasajero.addEventListener("click", ()=>{
    if (nombrePasajero !== ""){
        localStorage.setItmen("userName", nombrePasajero.value)
    }
})
if(localStorage.getItem("userName")){
    nombrePasajero.value = localStorage.getItem("userName")
}
*/


