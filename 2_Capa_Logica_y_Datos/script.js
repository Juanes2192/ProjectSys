document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
    const loginForm = document.getElementById("loginForm");
    const usersData = [];

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

        usersData.push(usuario);

        document.getElementById("nombre").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("contrasena").value = "";

        console.log("Usuario registrado:", usuario);
    });

    function login() {
        const loginUsername = document.getElementById("loginUsername").value;
        const loginPassword = document.getElementById("loginPassword").value;

        // Verificar credenciales
        const user = usersData.find(u => u.nombre === loginUsername && u.contrasena === loginPassword);

        // Mostrar el mensaje en el documento HTML
        const loginMessage = document.getElementById("loginMessage");
        
        if (user) {
            loginMessage.textContent = "Inicio de sesión exitoso";
            loginMessage.style.color = "green";
        } else {
            loginMessage.textContent = "Credenciales incorrectas";
            loginMessage.style.color = "red";
        }

        // Limpiar los campos del formulario
        document.getElementById("loginUsername").value = "";
        document.getElementById("loginPassword").value = "";
    }

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        login();
    });
});
