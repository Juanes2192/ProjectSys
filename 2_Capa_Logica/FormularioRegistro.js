document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const contrasena = document.getElementById("contrasena").value;

        // Aquí puedes agregar la lógica para guardar el usuario en la base de datos o realizar otras operaciones necesarias.

        alert(Usuario registrado:
        Nombre: ${nombre}
        Correo: ${correo}
        Contraseña: ${contrasena});
    });
});