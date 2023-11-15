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

function solicitarInicioSesion(callback) {
    const formulario = document.createElement("form");
    formulario.innerHTML = `
        <label for="usuario">Usuario:</label>
        <input type="text" id="usuario" name="usuario" required>
        <br>
        <label for="contrasena">Contraseña:</label>
        <input type="password" id="contrasena" name="contrasena" required>
        <br>
        <button type="submit">Iniciar Sesión</button>
    `;

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        const usuario = document.getElementById("usuario").value;
        const contrasena = document.getElementById("contrasena").value;
        callback(usuario, contrasena);
        formulario.remove();
    });

    document.body.appendChild(formulario);
}

function solicitarDatosPersonales() {
    const formulario = document.createElement("form");
    formulario.innerHTML = `
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required>
        <br>
        <label for="direccion">Dirección:</label>
        <input type="text" id="direccion" name="direccion" required>
        <br>
        <label for="telefono">Teléfono:</label>
        <input type="text" id="telefono" name="telefono" required>
        <br>
        <label for="medioPago">Medio de Pago:</label>
        <input type="text" id="medioPago" name="medioPago" required>
        <br>
        <button type="submit">Confirmar Datos</button>
    `;

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const direccion = document.getElementById("direccion").value;
        const telefono = document.getElementById("telefono").value;
        const medioPago = document.getElementById("medioPago").value;

        // Mostrar mensaje de pedido exitoso
        const mensajePedido = `Pedido realizado con éxito. ¡Gracias por tu compra, ${nombre}!`;

        // Mostrar mensajes
        alert(`${mensajePedido}`);

        carrito = []; // Limpiar el carrito después del pedido
        mostrarCarrito();

        formulario.remove();
    });

    document.body.appendChild(formulario);
}

function realizarPedido() {
    solicitarInicioSesion(function (usuario, contrasena) {
        // Validar el inicio de sesión (puede ser simplemente mostrar un mensaje en una demostración)
        alert(`Inicio de sesión exitoso. Usuario: ${usuario}`);

        // Solicitar información del cliente después de iniciar sesión
        solicitarDatosPersonales();
    });
}

// ... (tu código existente) ...

function abrirFormulario() {
    // Abrir una nueva ventana con el formulario
    const nuevaVentana = window.open("", "formulario", "width=400,height=400");

    // Escribir el contenido del formulario en la nueva ventana
    nuevaVentana.document.write(`
        <html>
            <head>
                <title>Formulario</title>
            </head>
            <body>
                <h1>Formulario</h1>
                <form id="formulario">
                    <!-- Contenido del formulario aquí -->
                    <!-- ... (puedes usar el código del formulario existente) ... -->
                </form>
            </body>
        </html>
    `);

    // Agregar el script a la nueva ventana para manejar el formulario
    nuevaVentana.document.write('<script src="script_nueva_ventana.js"></script>');
    nuevaVentana.document.close(); // Cerrar el documento actual para que se cargue el nuevo contenido
}
