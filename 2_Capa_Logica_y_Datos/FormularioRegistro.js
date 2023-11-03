document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
    const usersData = [];

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const contrasena = document.getElementById("contrasena").value;

        // Crear un objeto con los datos del usuario
        const usuario = {
            nombre: nombre,
            correo: correo,
            contrasena: contrasena
        };

        // Agregar el objeto de usuario al arreglo usersData
        usersData.push(usuario);

        // Limpia los campos del formulario
        document.getElementById("nombre").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("contrasena").value = "";

        // Muestra los datos almacenados en el arreglo (solo para demostración)
        console.log("Usuarios registrados:", usersData);
    });
});
