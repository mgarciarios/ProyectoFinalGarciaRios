const tableBody = document.querySelector('tbody')
const inputSearch = document.querySelector('input#inputSearch')

const armarFilaDestinos = (carritoDestinos)=> {
    return `<tr>
                <td class="class-table-number">${carritoDestinos.codigo}</td>
                <td>${carritoDestinos.paquete}</td>
                <td>$ ${carritoDestinos.importe}</td>
                <td><button id="${carritoDestinos.codigo}" class="button button-outline button-big-emoji">🤍</button></td>
            </tr>`
}

if (carritoDestinos.length > 0) {
    carritoDestinos.forEach(carritoDestinos => {
        tableBody.innerHTML += armarFilaDestinos(carritoDestinos)
    });
}