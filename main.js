const productosTiendaAlimentos = []

function agregarDatosProducto(nombre, cantidad, precio) {
    const producto = {
        nombre: nombre,
        cantidad: cantidad,
        precio: precio
    }
    productosTiendaAlimentos.push(producto)

}

function eliminarDatosProducto() {
    console.log("producto eliminado")
}

function modificarDatosProducto() {
    console.log("producto modificado")
}

function verDatosProductos() {
    for (const producto of productosTiendaAlimentos) {
        alert("nombre: " + producto.nombre + "cantidad: " + producto.cantidad + "precio: " + producto.precio)
    }
}

function verDatosProducto() {
    for (const producto of productosTiendaAlimentos) {
        if (producto.nombre == nombre) {
            alert("nombre: " + producto.nombre + "cantidad: " + producto.cantidad + "precio: " + producto.precio)
        }
    }
}

function main() {
    let continuar = confirm("¿Quiere realizar una accion?")
    while (continuar){
        const accion = prompt("ingresar accion (crear,verTodos,ver)")
        if (accion == "crear") {
            const nombreIngresa = prompt("Ingrese nombre del nuevo producto")
            const cantidadIngresa = prompt("Ingrese cantidad del nuevo producto")
            const precioIngresa = prompt("Ingrese precio del nuevo producto")
            agregarDatosProducto(nombreIngresa, cantidadIngresa, precioIngresa)
        } else if (accion == verTodos) {
            verDatosProductos()
        } else if (accion == ver) {
            const nombreIngresa = prompt("ingrese nombre del producto")
            verDatosProducto(nombreIngresa)
        } else {
            alert("accion no valida")
        }
        continuar = confirm("¿Quiere realizar otra accion?")
    }
}


main() 