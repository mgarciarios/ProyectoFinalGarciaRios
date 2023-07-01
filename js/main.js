const imgCarrito = document.querySelector("img.carrito#carrito")
imgCarrito.src ="imagenes/carrito.png"


const imgDestino = document.querySelector("img#imgDestino")

const contenedorDeDestinos = document.querySelector("section#contenedor-destinos.contenedor-destinos")

function retornoArticleDestino(destino) {
    return `<article class="article-destino" id=article-destino>
                <div class="imagen"><img src="${destino.imagen}" id="imgDestino"></div>
                <div class="nombre"><h3>${destino.paquete}</h3></div>
                <div class="importe"><h5>${destino.descripcion}</h5></div>
                <div class="importe"><p>$${destino.importe}</p></div>
                <div class="comprar"><button id="${destino.codigo}" class="boton-agregar">Agregar</button></div>
            </article>`
}

function cargarDestinos() {
    contenedorDeDestinos.innerHTML = "";
    arrayDestinos.forEach((destino) => {
        contenedorDeDestinos.innerHTML += retornoArticleDestino(destino);
    })
    activarBotonesAgregar()
}
cargarDestinos()

function activarBotonesAgregar() {
    const botonesAgregar = document.querySelectorAll("button.boton-agregar");
        for (const boton of botonesAgregar) {
            boton.addEventListener("click", (ev) => {
                const promocionElegida = arrayDestinos.find((promocion) => promocion.codigo === parseInt(ev.target.id))
                carritoDestinos.push(promocionElegida);
                localStorage.setItem("carrito", JSON.stringify(carritoDestinos))
                
            })        
        }
}

imgCarrito.addEventListener("click", ()=>{
    location.href = "chechout.html"
})

const nombrePasajero = document.querySelector("input#nombrePasajero")
const botonNombrePasajero = document.querySelector("button#botonNombrePasajero")
