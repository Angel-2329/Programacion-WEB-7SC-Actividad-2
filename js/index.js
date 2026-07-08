import { soloLetras, validarLongitud, calcularEdad, esMayorDeEdad, ocultarTarjeta, generarContraseña, validarPassword, validarCorreo} from "./validaciones.js";

let numero_tarjeta ="";
const tarjeta = document.getElementById("num-tarjeta");

tarjeta.addEventListener("blur", () => {
    if(tarjeta.value != "")
    {
        numero_tarjeta = tarjeta.value;
    }
    tarjeta.value = ocultarTarjeta(numero_tarjeta);
});

tarjeta.addEventListener("focus", () => {
    tarjeta.value = numero_tarjeta;
});

const Contraseña = document.getElementById("contraseña");
const btnGenerar = document.getElementById("btn-generar");
const checkboxMostrar = document.getElementById("mostrar-contraseña");

checkboxMostrar.addEventListener("change", () => {
    if (checkboxMostrar.checked) 
    {
        Contraseña.type = "text";     
    } 
    else 
    {
        Contraseña.type = "password"; 
    }
});

btnGenerar.addEventListener("click", () => {
    const contraseñaSugerida = generarContraseña(8);
    Contraseña.value = contraseñaSugerida;
    Contraseña.type = "text";
    checkboxMostrar.checked = true;
});

const modal = document.getElementById("modal-edad");
const modalMensaje = document.getElementById("modal-mensaje");
const btnCerrarModal = document.getElementById("btn-cerrar-modal");

btnCerrarModal.addEventListener("click", () => {
    modal.className = "modal-oculto";

    document.querySelector("form").reset();
    
    numero_tarjeta = "";
    
    Contraseña.type = "password";
    
    document.getElementById("resultado").value = "";
});

document.getElementById("btn-iniciar-sesion").addEventListener("click", () => {
    window.location.href = "login.html";
});

function registrar()
{
    const formulario = document.querySelector("form");

    tarjeta.value = numero_tarjeta;

    const reglasValidacion = 
    [
        { id: "nombre", validar: soloLetras, error: "El nombre solo debe contener letras y espacios." },
        { id: "ap-paterno", validar: soloLetras, error: "El apellido paterno solo debe contener letras." },
        { id: "ap-materno", validar: soloLetras, error: "El apellido materno solo debe contener letras." },
        { id: "correo", validar: validarCorreo, error: "Por favor ingresa un correo con formato válido (ej. usuario@mail.com)." },
        { id: "telefono", validar: (val) => validarLongitud(val.toString(), 10), error: "El teléfono debe tener exactamente 10 dígitos." },
        { id: "contraseña", validar: validarPassword, error: "Debe tener mín 8 caracteres, 1 mayúscula, 1 minúscula, 1 número y 1 símbolo." },

        { id: "num-tarjeta", validar: () => validarLongitud(numero_tarjeta.replace(/[\s\-]/g, ''), 16), error: "La tarjeta debe tener exactamente 16 números." }
    ];

    reglasValidacion.forEach(regla => {
        const input = document.getElementById(regla.id);
        input.setCustomValidity(""); 
        
        const valor_Validar = (regla.id === "num-tarjeta") ? numero_tarjeta.replace(/[\s\-]/g, '') : input.value;

        if (input.value === "") 
        {
            input.setCustomValidity("Este campo es obligatorio.");
        } 
        else if (!regla.validar(valor_Validar)) 
        {
            input.setCustomValidity(regla.error);
        }
    });

    const esValido = formulario.reportValidity();

    tarjeta.value = ocultarTarjeta(numero_tarjeta);

    if (!esValido) 
    {
        document.getElementById("resultado").value = "No Valido";
        return; 
    }

    const fechaNacimiento = document.getElementById("fecha-nacimiento").value;
    const edadExacta = calcularEdad(fechaNacimiento);
    const esMayor = esMayorDeEdad(fechaNacimiento);

    if (esMayor) 
    {
        modalMensaje.innerText = `Tienes ${edadExacta} años. Eres mayor de edad, ¡tu registro fue exitoso!`;
        document.getElementById("resultado").value = "Valido";

        const datosNuevoUsuario = 
        {
            nombre: document.getElementById("nombre").value,
            apellidoPaterno: document.getElementById("ap-paterno").value,
            apellidoMaterno: document.getElementById("ap-materno").value,
            correo: document.getElementById("correo").value,
            telefono: document.getElementById("telefono").value,
            fechaNacimiento: document.getElementById("fecha-nacimiento").value,
            tarjeta: numero_tarjeta, 
            contraseña: document.getElementById("contraseña").value
        };
        console.log("Nuevo registro completado:", datosNuevoUsuario);
    } 
    else 
    {
        modalMensaje.innerText = `Tienes ${edadExacta} años. Lo sentimos, debes ser mayor de 18 años para registrarte.`;
        document.getElementById("resultado").value = "No Valido";
    }
    
    modal.className = "modal-visible";
}

document.getElementById("btn-registrar").addEventListener("click", registrar);