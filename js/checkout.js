const tableBody = document.querySelector('tbody#carrito-destinos')
const inputSearch = document.querySelector('input#inputSearch')

function armarFilaDestinos(carritoDestinos){
    return `<tr>
                <td class="class-table-number">${carritoDestinos.codigo}</td>
                <td>${carritoDestinos.paquete}</td>
                <td>$ ${carritoDestinos.importe}</td>
                <td><button id="${carritoDestinos.codigo}" class="button button-outline button-big-emoji">🤍</button></td>
            </tr>`
}

function armadoDeCheckout(destinos){
    tableBody.innerHTML = " "
    if (destinos.length > 0) {
        destinos.forEach(destino => {
            tableBody.innerHTML += armarFilaDestinos(destino)
        });
    }
}

function filtrarDestinos() {
    let arrayResultante = carritoDestinos.filter((destino)=> destino.paquete.toLowerCase().includes(inputSearch.value.trim().toLowerCase()))
    if (arrayResultante.length > 0){
        armadoDeCheckout(arrayResultante)
    }

}

inputSearch.addEventListener("search",filtrarDestinos())

armadoDeCheckout(carritoDestinos)