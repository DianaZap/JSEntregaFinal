//Class moldeadora de objetos producto

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

const ilustracion = new Producto(000, 'Ilustración', 500, 10, 'ilustración.jpg');
const impresion = new Producto(001, 'Impresión', 150, 1000, 'impresionVinilo.jpg');
const oleo = new Producto(002, 'Óleo', 2000, 5, 'CuadroÓleo.jpg');
const pinturaAcrilica = new Producto(3, 'PinturaAcrilica', 1000, 10, 'CuadroAcrilico.jpg');
const acuarela = new Producto(004, 'Acuarela', 800, 10, 'Acuarela.jpg');

const productos = [ilustracion, impresion, oleo, pinturaAcrilica, acuarela];


//Función para insertar Cards con información DOM
//Card con Boostrap

const cardBoostrap = (listaStock) => {
    document.body.innerHTML = ``

    for (e of listaStock){
        let card = document.createElement("div")
        card.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="./img/${e.imagen}" class="card-img-top" alt="Acá va la imagen de ${e.nombre}">
        <div class="card-body">
        <h5 class="card-title">${e.nombre}</h5>
        <p class="card-text">Llevatelo por tan solo ${e.precio}</p>
        <input type="button" onclick="agregaCarrito(${e.id})" class="btn btn-primary" value="Compra ya, sólo quedan ${e.stock}">
        </div>
    </div>`
        document.body.append(card)
    }
}

cardBoostrap(productos)

 
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
    
    for (item of verCarrito) { //producto=0, cant=1/2/3
        let card = document.createElement("div")
        let datosProd = productos.find(elem => elem.id == item.producto)

        card.innerHTML = `<div class="card" style="widh: 18rem;">
                            <img src="./img/${datosProd.imagen}" class="card-img-top" alt="Acá va la imagen de ${datosProd.nombre}">
                            <div class="card-body">
                                <h5 class="card-title">Lleva ${datosProd.nombre}</h5>
                                <p class="card-text">Te llevas ${item.cantidad}unidades</p>    
                            </div>
                        </div>`
        
        document.body.append(card)
    }
}

const guardarLS = (clave, valor) => { localStorage.setItem(clave, valor) }

for (const producto of arrayProductos) {
    guardarLS(producto.id, JSON.stringify(producto))
}
    

function carrito() {
    const divisa = '$';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
}

const carrito = [divisa, DOMitems, DOMcarrito, DOMtotal,DOMbotonVaciar]

 const itemcarrito= (carrito) => {
    document.body.innerHTML = ``
    for (item of carrito){ //producto : 0, cantidad: 1/2/3
        let card = document.createElement("div")
        let datosProd = productos.find(elem => elem.id == item.producto)
        card.innerHTML = `<div class="container">
                <div class="row">
                <!-- Elementos generados a partir del JSON -->
                <main id="items" class="col-sm-8 row"></main>
                <!-- Carrito -->
                <aside class="col-sm-4">
                    <h2>Carrito</h2>
                    <!-- Elementos del carrito -->
                    <ul id="carrito" class="list-group"></ul>
                    <hr>
                    <!-- Precio total -->
                    <p class="text-right">Total: <span id="total"></span>&dollar;</p>
                    <button id="boton-vaciar" class="btn btn-danger">Vaciar</button>
                </aside>
            </div>
        </div>
        `
        document.body.append(card)

    }
} */

//cardComun(carrito);

/* function verCarrito() {
    // Vaciamos todo el html
    DOMcarrito.textContent = '';
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            // ¿Coincide las id? Solo puede existir un caso
            return itemBaseDatos.id === parseInt(item);
        });
        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
    // Renderizamos el precio total en el HTML
    DOMtotal.textContent = calcularTotal();
}

function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
}

function calcularTotal() {
    // Recorremos el array del carrito 
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}

function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
}

// Eventos
//DOMbotonVaciar.addEventListener('click', vaciarCarrito);

/* function toastCarrito(prod) {
Toastify({
    text: `Se agrego al carrito`,
    duration: 3000,
    gravity: `bottom`, // `top` or `bottom`
    position: `right`, // `left`, center` or `right`
    onClick: function agregaCarrito(prod) {agregaCarrito(`${e.nombre}`)} // Callback after click
}).showToast();
} */

// Inicio
/* Productos();
Carrito(); */ 