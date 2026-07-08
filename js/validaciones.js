export function validarCorreo (correo)
{
    const validacion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return validacion.test(correo);
}

export function soloLetras (palabra)
{
    const validacion = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
    return validacion.test(palabra);
}

export function validarLongitud (numero, longitudMax)
{
    return numero.length === longitudMax;
}

export function calcularEdad (fecha_Nacimiento)
{
    const fecha_nac = new Date (fecha_Nacimiento);
    const fecha_hoy = new Date ();

    let edad = fecha_hoy.getFullYear() - fecha_nac.getFullYear();

    if(fecha_hoy.getMonth() < fecha_nac.getMonth())
    {
        edad--;
    }
    if(fecha_nac.getMonth() == fecha_hoy.getMonth() && fecha_hoy.getDate() < fecha_nac.getDate())
    {
        edad--;
    }

    return edad;
}

export function esMayorDeEdad (fecha_Nacimiento)
{
    var edad = calcularEdad(new Date(fecha_Nacimiento));
    if (edad >= 18)
    {
        return true;
    }
    else
    {
        return false;
    }
}

export function validarPassword (password)
{
    const validacion = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;
    if (password.length < 8)
    {
        return false;
    }
    return validacion.test(password);
}

export function ocultarTarjeta (numero)
{
    const num_tarjeta = String(numero).replace(/[\s\-]/g, '');
    const num_mostrar = num_tarjeta.slice(-4);
    const cant_ocultar = num_tarjeta.length - 4;

    return "*".repeat(cant_ocultar) + num_mostrar;
}

export function generarContraseña (longitud)
{
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()_+~|}{[]:;?><,./-=";

    const arreglo = minusculas + mayusculas + numeros + simbolos;
    let contraseña = "";

    contraseña += minusculas[Math.floor(Math.random() * minusculas.length)];
    contraseña += mayusculas[Math.floor(Math.random() * mayusculas.length)];
    contraseña += numeros[Math.floor(Math.random() * numeros.length)];
    contraseña += simbolos[Math.floor(Math.random() * simbolos.length)];

    for (let i = 4; i < longitud; i++) 
    {
        contraseña += arreglo[Math.floor(Math.random() * arreglo.length)];
    }

    return contraseña.split('').sort(() => 0.5 - Math.random()).join('');
}