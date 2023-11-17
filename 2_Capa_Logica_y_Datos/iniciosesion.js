document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    function login() {
        const loginCorreo = document.getElementById("loginCorreo").value;
        const loginContrasena = document.getElementById("loginContrasena").value;

        const userData = JSON.parse(localStorage.getItem(loginCorreo));

        const loginMessage = document.getElementById("loginMessage");

        if (userData && userData.contrasena === loginContrasena) {
            loginMessage.textContent = "Inicio de sesión exitoso";
            loginMessage.style.color = "green";

            // Redirigir a pantallaprincipal.html
            window.location.href = "../1_Capa_Presentacion/menu.html";
        } else {
            loginMessage.textContent = "Credenciales incorrectas";
            loginMessage.style.color = "red";
        }

        document.getElementById("loginCorreo").value = "";
        document.getElementById("loginContrasena").value = "";
    }

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        login();
    });
});
