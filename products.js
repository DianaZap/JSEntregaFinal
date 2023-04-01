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

const productos = [ilustracion, impresion, oleo, pinturaAcrilica, acuarela];

