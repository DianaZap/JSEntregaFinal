
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

//Creo objeto

class Producto{
    constructor(id, nombre, precio, stock, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
}

//Instanciar (Crear) productos objetos

const ilustracion = new Producto(0, 'Ilustración', 500, 10, 'ilustración.jpg');
const impresion = new Producto(1, 'impresión', 150, 1000, 'impresionVinilo.jpg');
const oleo= new Producto(2, 'Óleo', 2000, 5, 'CuadroÓleo.jpg');
const pinturaAcrilica = new Producto(3, 'PinturaAcrilica', 1000, 10, 'CuadroAcrilico.jpg');
const acuarela = new Producto(4, 'Acuarela', 800, 10, 'Acuarela.jpg');

const productos = [ilustracion, impresion, oleo, pinturaAcrilica,acuarela];


//Función para insertar Cards con información DOM
//Card con Boostrap

const cardBoostrap = (product) => {
    for (e of product) {
        let card = document.createElement("div");
        card.innerHTML = `<div class=conteiner position-relative>
                        <div class="card w-100 mb-3 position-relative">
                            <div class="row g-0">
                                <div class=" card-body col-md-4">
                                    <img src="./img/${e.imagen}" class="card-img-top" alt="Acá va la imagen de ${e.nombre}">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body text-center">
                                        <h5 class="card-title">${e.nombre}</h5>
                                        <p class="card-text">Llevalo por tan solo ${e.precio}</p>                              
                                        <button  type="button" class="btn btn-dark" onclick="comprar"${e.id})"  data-bs-toggle="button" >comprar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
        
        document.body.append(card);

        shopContent.append(card);
        
    };
};
    
cardBoostrap(productos)



/* let comprar = document.createElement("button");
comprar.innerText = "comprar";
comprar.innerHTML = "comprar"; */

content.append(comprar);

comprar.addEventListener("click", () => {
    carrito.push({
        id: products.id,
        img: products.img,
        nombre: products.precio,
    });
    console.log(carrito);
});




verCarrito.addEventListener("click", () => {
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
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
        carrito.className = "modal-content"
        carrito.innerHTML = `
                <img src="${product.img}>
                <h3>${product.nombre}</h3>
                <p>${product.precio}$</p>
            `;

        modalContainer.append(carritoContent);
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalBuying = documen.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `total a pagar: ${total}$`;
    modalContainer.append(totalBuying);
});




/* let carrito = [];

productos.forEach((comprar) => {
    let content = document.createElement("div");
    content.innerHTML = `
    `
});



const arrayCarrito = []

class ObjCarrito{
    constructor(producto, cant) {
        this.producto = producto;
        this.cantidad = cant;
    }
    sumaStock() {
    this.cantidad=this.cantidad + 1
    }
}

function agregaCarrito(prod) {
    
    let existeEncarrito = arrayCarrito.find(e => e.producto == prod)//obj producto =1 cant=1
    
    if (existeEncarrito != undefined) {
        //Si entra acá, es porque encontró el objeto en cuestión en el carrito
        let posicion = arrayCarrito.findIndex(elem => elem.producto == existeEncarrito.producto)
        arrayCarrito[posicion].sumaStock()
        console.table(arrayCarrito)

    } else {
        //Si entra acá, es porque el metódo find devolvio undefined por no haber encontrado coincidencia.
        const alCarrito = new ObjCarrito(prod, 1)
        arrayCarrito.push(alCarrito)
        console.table(arrayCarrito)
    }

}

function verCarrito() {
    document.body.innerHTML = ``
    
    for (item of arrayCarrito) { //producto=0, cant=1/2/3
        let card = document.createElement("div")
        let datosProd = productos.find(elem => elem.id === item.producto)

        card.innerHTML = `<div class="card" style="widh: 18rem;">
                            <img src="./img/${datosProd.imagen}" class="card-img-top" alt="Acá va la imagen de ${datosProd.nombre}">
                            <div class="card-body">
                                <h5 class="card-title">Lleva ${datosProd.nombre}</h5>
                                <p class="card-text">Te llevas ${item.cantidad}unidades</p>    
                            </div>
                        </div>`
        
        document.body.append(card)
    }
} */

const arrayProductos = [ilustracion, impresion, oleo, pinturaAcrilica,acuarela]

const guardarLS = (clave, valor) => { localStorage.setItem(clave, valor) }

for (const producto of arrayProductos) {
    guardarLS(producto.id, JSON.stringify(producto))
}

let carrito1 = [];
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');



function toastCarrito (prod) {
Toastify({
    text: `Agregado ${prod} al carrito`,
    duration: 3000,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
}).showToast();
}