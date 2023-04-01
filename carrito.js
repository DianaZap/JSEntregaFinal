
const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
                            <h1 class="modal-header-title">Carrito.</h1>
                            `;
    modalContainer.append(modalHeader);

    
    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalbutton);


    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
                <img src="${product.imagen}">
                <h3>${product.nombre}</h3>
                <p>${product.precio}$</p>
                <span class="restar">-</span>
                <p>${product.cantidad}$</p>
                <p>Total:${product.cantgidad * product.precio} $</p>
                <span class="delete-product">🗑</span>
            `;

        modalContainer.append(carritoContent);

        arrayProductos.forEach((producto) => {
            let content = document.createElement("div");
            content.className = "card";
            content.innerHTML = ``;

            verCarrito.append(content);

            console.log(producto);

        });

        

        /* let eliminar = document.createElement("span");
        eliminar.innerHTML = "🗑";
        eliminar.className = "delete-product";
        carritoContent.append(eliminar); */

        eliminar.addEventListener("click", eliminarProducto);

        const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

        const totalBuying = document.createElement("div");
        totalBuying.className = "total-content"
        totalBuying.innerHTML = `total a pagar: ${total} $`;
        modalContainer.append(totalBuying);
    });

};    

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);

    console.log(foundId);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
        
    };
    
    carritoCounter();
    saveLocal();
    pintarCarrito();


const carritoCounter = () => {
    cantidadCarrito.style.display = "block";
    cantidadCarrito.innerText = carrito.length;
};


let eliminar = carritoContent.querySelector(".delete-product");
eliminar.addEventListener("click", () => {
    eliminarProducto(product.id);
});
