document.getElementById('home').addEventListener('click', function() {
    // Lógica para gestionar el pedido
    console.log('Gestionar pedido clickeado');
    window.location.href = "../1_Capa_Presentacion/menu.html";
});

document.getElementById('gestionarfacturas').addEventListener('click', function() {
    // Lógica para la otra función
    console.log('Otra función clickeada');
    window.location.href = 'gestionar_pedidos.html'; // Cambia esto al nombre del archivo destino
});

var pedidos = [];
        var celdaSeleccionada = null;

        function nuevoPedido() {
            var pedido = {
                producto: prompt("Ingrese el producto"),
                cantidad: prompt("Ingrese la cantidad"),
                fechaEntrega: new Date(prompt("Ingrese la fecha de entrega en formato AAAA-MM-DD")),
                descripcion: prompt("Ingrese la descripción")
            };
            pedidos.push(pedido);
            actualizarTabla();
        }

        function modificarPedido() {
            if (celdaSeleccionada) {
                celdaSeleccionada.textContent = prompt("Ingrese el nuevo valor", celdaSeleccionada.textContent);
            } else {
                alert("Por favor, seleccione una celda para modificar.");
            }
        }

        function cancelarPedido() {
            if (celdaSeleccionada) {
                var fila = celdaSeleccionada.parentNode;
                var index = Array.prototype.indexOf.call(fila.parentNode.children, fila);
                pedidos.splice(index - 1, 1);
                fila.parentNode.removeChild(fila);
            } else {
                alert("Por favor, seleccione una celda para cancelar el pedido.");
            }
        }

        function actualizarTabla() {
            var tabla = document.getElementById("tablaPedidos");
            tabla.innerHTML = "<tr><th>PRODUCTOS</th><th>CANTIDADES</th><th>FECHA DE ENTREGA</th><th>DESCRIPCIÓN</th></tr>";
            var desde = new Date(document.getElementById("desde").value);
            var hasta = new Date(document.getElementById("hasta").value);
            for (var i = 0; i < pedidos.length; i++) {
                var pedido = pedidos[i];
                if ((isNaN(desde) || pedido.fechaEntrega >= desde) && (isNaN(hasta) || pedido.fechaEntrega <= hasta)) {
                    var fila = document.createElement("tr");
                    fila.innerHTML = "<td>" + pedido.producto + "</td><td>" + pedido.cantidad + "</td><td>" + pedido.fechaEntrega.toISOString().split('T')[0] + "</td><td>" + pedido.descripcion + "</td>";
                    fila.onclick = function(e) {
                        celdaSeleccionada = e.target;
                    };
                    tabla.appendChild(fila);
                }
            }
        }