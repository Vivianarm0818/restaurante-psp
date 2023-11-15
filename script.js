// JavaScript para manejar los pedidos
let carrito = [];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    mostrarCarrito();
}

function mostrarCarrito() {
    const listaPedidos = document.getElementById("lista-pedidos");
    const totalElement = document.getElementById("total");

    listaPedidos.innerHTML = "";
    let total = 0;

    carrito.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.nombre} - $${item.precio}`;
        listaPedidos.appendChild(listItem);
        total += item.precio;
    });

    totalElement.textContent = `Total: $${total}`;
}

function realizarPedido() {
    // Aquí iría la lógica para realizar el pedido
    alert("Pedido realizado con éxito. ¡Gracias por tu compra!");
    carrito = []; // Limpiar el carrito después del pedido
    mostrarCarrito();
}
