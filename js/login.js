import { validarCorreo, validarPassword } from "./validaciones.js";

const Contraseña = document.getElementById("contraseña");
const checkboxMostrar = document.getElementById("mostrar-contraseña");

checkboxMostrar.addEventListener("change", () => {
    if (checkboxMostrar.checked) {
        Contraseña.type = "text";
    } else {
        Contraseña.type = "password";
    }
});

function validar() 
{
    const formulario = document.querySelector("form");
    const inputCorreo = document.getElementById("correo");
    const inputContraseña = document.getElementById("contraseña");

    const reglasValidacion = [
        { input: inputCorreo, validar: validarCorreo, error: "Por favor ingresa un correo con formato válido (ej. usuario@mail.com)." },
        { input: inputContraseña, validar: validarPassword, error: "Debe tener mín 8 caracteres, 1 mayúscula, 1 minúscula, 1 número y 1 símbolo." }
    ];

    reglasValidacion.forEach(regla => {
        regla.input.setCustomValidity("");
        if (regla.input.value !== "" && !regla.validar(regla.input.value)) {
            regla.input.setCustomValidity(regla.error);
        }
    });

    if (!formulario.reportValidity()) 
    {
        document.getElementById("resultado").value = "Ingreso No Valido";
        return;
    }

    document.getElementById("resultado").value = "Ingreso Valido";

    const datosLogin = 
    {
        correo: inputCorreo.value,
        contraseña: inputContraseña.value
    };
    console.log("Intento de inicio de sesión exitoso:", datosLogin);
}

document.getElementById("btn-validar").addEventListener("click", validar);

document.getElementById("btn-registro").addEventListener("click", () => {
    window.location.href = "index.html";
});