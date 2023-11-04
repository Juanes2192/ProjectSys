document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    function login() {
        const loginCorreo = document.getElementById("loginCorreo").value;
        const loginContrasena = document.getElementById("loginContrasena").value;

        // Obtener los datos del usuario desde el localStorage
        const userData = JSON.parse(localStorage.getItem(loginCorreo));

        // Mostrar el mensaje en el documento HTML
        const loginMessage = document.getElementById("loginMessage");

        if (userData && userData.contrasena === loginContrasena) {
            loginMessage.textContent = "Inicio de sesión exitoso";
            loginMessage.style.color = "green";
        } else {
            loginMessage.textContent = "Credenciales incorrectas";
            loginMessage.style.color = "red";
        }

        // Limpiar los campos del formulario
        document.getElementById("loginCorreo").value = "";
        document.getElementById("loginContrasena").value = "";
    }

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        login();
    });
});
