//Array Carrito de compras
const carrito = []

const ordenarMenorMayor = () => {
    productos.sort((a,b) => a.precio - b.precio)
    mostrarListaOrdenada()
};

const ordenarMayorMenor = () => {
    productos.sort((a,b) => b.precio - a.precio)
    mostrarListaOrdenada()
};

const mostrarListaOrdenada = () => {
    const listaDeProductos = productos.map(producto => {
        return "- "+ producto.nombre + " $" + producto.precio
    })
    alert("Lista de precios: " + " \n\n "+ listaDeProductos.join (" \n "))
    comprarProductos(listaDeProductos)
};





const comprarProductos = (listaDeProductos) => {
    let productoNombre = ''
    let productoCantidad = 0
    let otroProducto = false

    do {
        productoNombre = prompt("¿Cuáles de estas figuras quiere comprar?"+"\n\n"+listaDeProductos.join("\n"))
        productoCantidad = parseInt(prompt("¿Que cantidad le gustaría comprar?"))

        const producto = productos.find(producto => producto.nombre.toLowerCase() === productoNombre.toLowerCase())

        if (producto) {
            agregarAlCarrito(producto, producto.id, productoCantidad)
        } else {
            alert("El producto no se encuentra en nuestro catálogo.")
        }

        otroProducto = confirm("¿Quiere adquirir otro producto?")
    } while (otroProducto);

    confirmarCompra()
};

const agregarAlCarrito = (producto, productoId, productoCantidad) => {
    const productoRepetido = carrito.find(producto => producto.id === productoId)
    if (!productoRepetido) {
        producto.cantidad += productoCantidad
        carrito.push(producto)
    } else {
        productoRepetido.cantidad += productoCantidad
    }
};

const eliminarProductoCarrito = (nombreProductoAEliminar) => {
    carrito.forEach((producto, index) => {
        if (producto.nombre.toLowerCase() === nombreProductoAEliminar.toLowerCase()) {
            if (producto.cantidad > 1) {
                producto.cantidad--
            } else {
                carrito.splice(index, 1)
            }
        }
    })
    confirmarCompra()
};

const confirmarCompra = () => {
    const listaProductos = carrito.map(producto => {
        return "- "+producto.nombre+" - Cantidad: "+producto.cantidad
    })

    const isCheckout = confirm("Check List: "
        +"\n\n"+listaProductos.join("\n")
        +'\n\nSi desea confirmar presione "Aceptar" de lo contrario "Cancelar" para eliminar o modificar su compra'
    )

    if (isCheckout) {
        finalizarCompra(listaProductos)
    } else {
        const nombreProductoAEliminar = prompt("¿Que producto desea eliminar?:")
        eliminarProductoCarrito(nombreProductoAEliminar)
    }
};

const finalizarCompra = (listaProductos) => {
    const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0)
    const precioTotal = carrito.reduce((acc, item) => acc + (item.cantidad * item.precio), 0)
    alert("El detalle de su compra es el siguente: "
        +"\n\n"+listaProductos.join("\n")
        +"\n\nCantidad total de productos: "+cantidadTotal
        +"\n\nEl importe total de su compra es: $"+precioTotal
        +"\n\nDisfrute de su compra y gracias, vuelva pronto!"
    )
};

const comprar = () => {
    const productosDeMenorAMayor = confirm("Bienvenido a la Tienda Oficial de CDProject, The Witcher 3.¿Desea ordenar los productos de menor a mayor según su precio?")

    if (productosDeMenorAMayor) {
        ordenarMenorMayor()
    } else {
        ordenarMayorMenor()
    }
};


comprar()




//Confirmación de E-Mail
let userEmail = " " ;
let confirmUserEmail = " " ;
let askAgain = true ;
do{
    userEmail = prompt ("Ingrese su correo") ;
    confirmUserEmail = prompt ("Confirme su correo") ;
    if (userEmail === confirmUserEmail) {
        alert ("El correo " + userEmail + " ha sido guardado con éxito. En breve recibirá un mail con detalles de la compra.") ;
    console.log("Finalizaste los procedimientos de compra, que lo disfrutes!. Vuelve pronto.");
    askAgain = false ;
    } else { 
        alert ("Los correos deben coincidir. Por favor, intente nuevamente.") ;
    }
} while (askAgain)