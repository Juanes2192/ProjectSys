document.getElementById('home').addEventListener('click', function() {
    // Lógica para gestionar el pedido
    console.log('Gestionar pedido clickeado');
    window.location.href = "../1_Capa_Presentacion/menu.html";
});

document.getElementById('otraFuncion').addEventListener('click', function() {
    // Lógica para la otra función
    console.log('Otra función clickeada');
    window.location.href = 'otra_funcion.html'; // Cambia esto al nombre del archivo destino
});