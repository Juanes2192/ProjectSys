document.getElementById('gestionarPedido').addEventListener('click', function() {
    // Lógica para gestionar el pedido
    console.log('Gestionar pedido clickeado');
    window.location.href = "../1_Capa_Presentacion/gestionar_pedidos.html";
});

document.getElementById('gestionarfacturas').addEventListener('click', function() {
    // Lógica para la otra función
    console.log('Otra función clickeada');
    window.location.href = 'gestionar_registros_facturas.html'; // Cambia esto al nombre del archivo destino
});