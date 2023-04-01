const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");


let carrito = [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `<div id="cantidadCarrito" class="card w-100 mb-3 position-relative">
                            <div class="row g-0">
                                <div class=" card-body col-md-4">
                                    <img src="./img/${product.imagen}" class="card-img-top" alt="Acá va la imagen de ${product.nombre}">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body text-center">
                                        <h5 class="card-title">${product.nombre}</h5>
                                        <p class="card-text">Llevalo por tan solo ${product.precio}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.innerHTML = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", (arrayProductos) => {

        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
        if (repeat) {
            carrito.map((prod) => {
                if (prod.id === prod.id) {
                    prod.cantidad++;
                }
            });
        } else {
            carrito.push({
                id: product.id,
                img: product.imagen,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,
            });
        };
        
        console.log(carrito);
        carritoCounter();
    });
});

        
//JSon
const arrayProductos = [ilustracion, impresion, oleo, pinturaAcrilica,acuarela]

const guardarLS = (clave, valor) => { localStorage.setItem(clave, valor) }

for (const producto of arrayProductos) {
    guardarLS(producto.id, JSON.stringify(producto))
}