//Class moldeadora de objetos producto

class Producto{
    constructor(id, nombre, precio, stock, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
    restaStock() {
        this.stock = this.stock - 1
        console.log(`el stock de ${this.nombre} ha sido actualizado`)
    }
}

//Instanciar (Crear) productos objetos

const producto0 = new Producto(0, 'Ilustración', 500, 10, 'ilustración.jpg');
const producto1 = new Producto(1, 'Impresión', 150, 1000, 'impresionVinilo.jpg');
const producto2 = new Producto(2, 'Óleo', 2000, 5, 'CuadroÓleo.jpg');
const producto3 = new Producto(3, 'PinturaAcrilica', 1000, 10, 'CuadroAcrilico.jpg');
const producto4 = new Producto(4, 'Acuarela', 800, 10, 'Acuarela.jpg');

const productos = [producto0, producto1, producto2, producto3, producto4];


//Función para insertar Cards con información DOM
//Card con Boostrap

const cardBoostrap = (listaStock) => {
    for (e of listaStock) {
        let card = document.createElement("div");
        card.innerHTML = `<div class="card text-center  mb-3" style="width: 18rem;">
                            <img class="card-img-top" src="./img/${e.imagen}"  alt="Acá va la imagen de ${e.nombre}">
                            <div class="card-body">
                            <h5 class="card-title">${e.nombre}</h5>
                            <p class="card-text">Llevalo por tan solo ${e.precio}</p>                                
                            <input type="button" onclick="toastCarrito(${e.id})" class="btn btn-dark" data-bs-toggle="button" value="Agrega al carrito">
                            </div>
                        </div>`;
        
        document.body.append(card)
        
    }
}

cardBoostrap(productos)

function toastCarrito(prod) {
Toastify({
    text: `Agregado ${prod} al carrito`,
    duration: 3000,
    gravity: "bottom", // `top` or `bottom`
    position: "right" // `left`, `center` or `right`

}).showToast();
}

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


const arrayProductos = [producto0, producto1, producto2, producto3, producto4]

const guardarLS = (clave, valor) => { localStorage.setItem(clave, valor) }

for (const producto of arrayProductos) {
    guardarLS(producto.id, JSON.stringify(producto))
}
    