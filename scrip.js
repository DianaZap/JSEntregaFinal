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

const producto0 = new Producto(0, 'Ilustración', 500, 1, 'ilustración.jpg');
const producto1 = new Producto(1, 'Impresión', 150, 100, 'impresionVinilo.jpg');
const producto2 = new Producto(2, 'Óleo', 2000, 1, 'CuadroÓleo.jpg');
const producto3 = new Producto(3, 'PinturaAcrilica', 1000, 1, 'CuadroAcrilico.jpg');
const producto4 = new Producto(4, 'Acuarela', 800, 1, 'Acuarela.jpg');

const productos = [producto0, producto1, producto2, producto3]

productos.push(producto4)

//Función para insertar Cards con información DOM

const cardComun = (listaStock) => {
    for (elem of listaStock) {
        let card = document.createElement("div") //<div> </div>
        card.innerHTML = `<h2>Comprá ${elem.nombre}</h2>
                            <input type = "button" value = "comprame" onclick = "elem.restaStock()" >`
        document.body.append(card)                                
    }
}

/* Card sin Boostrap - ver en HTML */

//cardComun(productos)

//Card con Boostrap

const cardBoostrap = (listaStock) => {
    for (e of listaStock) {
        let card = document.createElement("div")
        card.innerHTML=`<div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="./img/${e.imagen}"  alt="Acá va la imagen de ${e.nombre}">
                            <div class="card-body">
                                <h5 class="card-title">${e.nombre}</h5>
                                <p class="card-text">Llevalo por tan solo ${e.precio}</p>                                
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
        this.cantidad = cant
    }
    sumaStock() {
    history.cantidad=this.cantidad + 1
    }
}

function agregaCarrito(producto) {
    
}