const imgCarrito = document.querySelector("img.carrito#carrito");
imgCarrito.src ="imagenes/carrito.png";
imgCarrito.addEventListener("click", ()=>{
    location.href = "checkout.html";
})
const contenedorDeDestinos = document.querySelector("section#contenedor-destinos.contenedor-destinos");
const inputSearch = document.querySelector("input#inputSearch");

function retornoArticleDestino(destino) {
    return `<article class="article-destino" id="article-destino">
                <img class="imagen" src="${destino.imagen}" id="imgDestino">
                <h3 class="nombre">${destino.paquete}</h3>
                <h5 class="importe">${destino.descripcion}</h5>
                <p class="importe">$${destino.importe}</p>
                <button id="${destino.codigo}" class="boton-agregar">Agregar</button>
            </article>`
}

function activarBotonesAgregar() {
    const botonesAgregar = document.querySelectorAll("button.boton-agregar");
        for (const boton of botonesAgregar) {
            boton.addEventListener("click", (ev) => {
                const promocionElegida = arrayDestinos.find((promocion) => promocion.codigo === parseInt(ev.target.id));
                carritoDestinos.push(promocionElegida);
                localStorage.setItem("carrito", JSON.stringify(carritoDestinos));
                notificarAdquisicion();
            })        
        }
}

function cargarDestinos(destinos) {
    contenedorDeDestinos.innerHTML = "";
    destinos.forEach((destino) => {
        contenedorDeDestinos.innerHTML += retornoArticleDestino(destino);
    })
    activarBotonesAgregar();
}

//ultimas clases
/*
function obtenerDestinosFetch() {
    fetch(URL)
        .then((response) => response.json())
        .then((data) => arrayDestinos.push(...data))
        .then(()=> cargarDestinos(arrayDestinos))
        .catch((error) => console.error("error al obtener los datos", error))
}
obtenerDestinosFetch()

async function obtenerDestinosAsync() {
    const response = await fetch(URL)           //console.log(response)
    const data = await response.json()
    arrayDestinos.push(...data)
    cargarDestinos(arrayDestinos)
}

*/
// hasta aca las funciones
function filtrarDestinos() {
    inputSearch.addEventListener("input", () => {
        let arrayResultante = arrayDestinos.filter((destino)=> destino.paquete.toLowerCase().includes(inputSearch.value.trim().toLowerCase()));
        cargarDestinos(arrayResultante);
    })
}
filtrarDestinos()

function notificarAdquisicion() {
    Toastify({
        text: "El paquete se agregó al carrito",
        duration: 3000,
        close: true,
        gravity: "bottom",
        position: "left",
        stopOnFocus: true, 
        style: {background: "linear-gradient(to right, #00b09b, #96c93d)"},
    }).showToast();
}