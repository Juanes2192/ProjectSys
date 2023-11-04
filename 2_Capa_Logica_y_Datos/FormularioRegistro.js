document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");

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

        // Almacenar el objeto de usuario en el localStorage
        localStorage.setItem(correo, JSON.stringify(usuario));

        // Limpia los campos del formulario
        document.getElementById("nombre").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("contrasena").value = "";

        // Muestra un mensaje de registro exitoso (puedes eliminar esta parte)
        console.log("Usuario registrado:", usuario);
    });
});
