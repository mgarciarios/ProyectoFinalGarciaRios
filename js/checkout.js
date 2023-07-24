const imgFlecha = document.querySelector("img.flecha");
    imgFlecha.src = "imagenes/flecha.png";
    imgFlecha.addEventListener("click", ()=>{
        location.href = "index.html";
    })

function armarFilaDestinos(carritoDestinos){
    return `<tr>
                <td>${carritoDestinos.paquete}</td>
                <td>$ ${carritoDestinos.importe}</td>
                <td><button id="${carritoDestinos.codigo}" class="button-cross-emoji">❌</button></td>
            </tr>`
}

const tableBody = document.querySelector("tbody#carrito-destinos");

function quitarDestinosCheckout(ev) {
    const index = carritoDestinos.findIndex((promocion) => promocion.codigo === parseInt(ev.target.id));
    if (index !== -1) {
        carritoDestinos.splice(index, 1);
        localStorage.setItem("carrito", JSON.stringify(carritoDestinos));
        location.reload();
    }
}  

function activarBtnQuitar() {
    const btnQuitar = document.querySelectorAll("button.button-cross-emoji");        
    for (const boton of btnQuitar) {
        boton.addEventListener("click", (ev) => {quitarDestinosCheckout(ev)});
    } 
}

function armadoDeCheckout(destinos){
    tableBody.innerHTML = " ";
    if (destinos.length > 0) {
        destinos.forEach(destino => {
            tableBody.innerHTML += armarFilaDestinos(destino); 
            activarBtnQuitar();
        })
    }
}
armadoDeCheckout(carritoDestinos);

const tableFoot = document.querySelector("tfoot#total-a-pagar");

function armadoDeTotalAPagar(destinos) {
    let totalAPagar = 0;
    if (destinos.length > 0) {
        destinos.forEach(destino => {
            totalAPagar += destino.importe;
        });
    return ` <tr>
                <td>TOTAL</td>
                <td>$ ${totalAPagar}</td>            
            </tr>`
    } 
    else {
    return `<p> Cuando realices tu compra verás aqui los destinos y su total </p>`
    }
}

tableFoot.innerHTML = armadoDeTotalAPagar(carritoDestinos);

const sectionBtnCompra = document.querySelector("section#section-pagar");
const animacionImg = "imagenes/animacion-loading.gif"


function agregarBtnsCompra() {
    if (carritoDestinos.length > 0){
        let btnComprar = document.createElement("button");
            btnComprar.id = "btn-confirmar-compra"
            btnComprar.innerText = "Confirmar compra"
        sectionBtnCompra.append(btnComprar);
        const timer = parseInt(Math.random() * 10000)
        btnComprar.addEventListener("click", ()=>{
            btnComprar.innerHTML = `<img src="${animacionImg}" class="img-timer"/>`
            setTimeout(() => {
                consultarCompra()
            }, timer);
        })
    }
}
agregarBtnsCompra();

function vaciarCarrito() {
    localStorage.clear();
    location.reload();
}

function consultarCompra() {
    Swal.fire({
        title: '¿Desea confirmar la compra?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Sí',
        denyButtonText: `Vaciar el carrito`,
        cancelButtonText: `No, seguir comprando`,
    }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Su compra se ha realizado con éxito', '', 'success').then(()=>{
            vaciarCarrito();
        })
        } else if (result.isDenied) {
          Swal.fire('El carrito se ha vaciado', '', 'warning').then(()=>{
            vaciarCarrito();
          }) 
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            location.href = "index.html";
        }
      })
}

//puedo hacer un progress bar de las millas que van sumando (set interval)