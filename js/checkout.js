const tableBody = document.querySelector('tbody')
const inputSearch = document.querySelector('input#inputSearch')

const armarFilaDestinos = (destino)=> {
    return `<tr>
                <td class="class-table-number">${destino.codigo}</td>
                <td>${destino.paquete}</td>
                <td>$ ${destino.importe}</td>
                <td><button id="${destino.codigo}" class="button button-outline button-big-emoji">🤍</button></td>
            </tr>`
}