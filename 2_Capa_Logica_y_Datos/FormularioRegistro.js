document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
    const loginForm = document.getElementById("loginForm");

    // Obtén los datos almacenados en el localStorage (si existen)
    const usersData = JSON.parse(localStorage.getItem("usersData")) || [];

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

        // Almacenar los datos en localStorage
        localStorage.setItem("usersData", JSON.stringify(usersData));

        // Limpia los campos del formulario
        document.getElementById("nombre").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("contrasena").value = "";

        // Muestra los datos almacenados en el arreglo (solo para demostración)
        console.log("Usuarios registrados:", usersData);
    });

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const loginCorreo = document.getElementById("loginCorreo").value;
        const loginContrasena = document.getElementById("loginContrasena").value;

        // Verificar los datos ingresados para el inicio de sesión
        const usuarioEncontrado = usersData.find(user => user.correo === loginCorreo && user.contrasena === loginContrasena);

        if (usuarioEncontrado) {
            alert("Inicio de sesión exitoso para " + usuarioEncontrado.nombre);
        } else {
            alert("Error en el inicio de sesión. Verifica tu correo y contraseña.");
        }

        // Limpia los campos del formulario de inicio de sesión
        document.getElementById("loginCorreo").value = "";
        document.getElementById("loginContrasena").value = "";
    });
});
