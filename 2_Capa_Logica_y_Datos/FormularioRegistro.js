document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const contrasena = document.getElementById("contrasena").value;

        const usuario = {
            nombre: nombre,
            correo: correo,
            contrasena: contrasena
        };

        localStorage.setItem(correo, JSON.stringify(usuario));

        document.getElementById("nombre").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("contrasena").value = "";

        console.log("Usuario registrado:", usuario);
    });
});
