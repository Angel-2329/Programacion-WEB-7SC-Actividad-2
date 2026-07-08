# Validaciones para Formularios Web

Esta actividad es una colección de herramientas sencillas que revisan la información que los usuarios escriben en tus páginas web antes de enviarla. Sirve para confirmar que un nombre no tenga números, que un correo esté bien escrito, o para esconder los números de una tarjeta de crédito para que nadie más los vea. Esto ayuda a que tu página funcione mejor y sea más fácil de usar para las personas.

---

## Instalacion

Para usar estas herramientas en tu propia página, no necesitas descargar programas complicados.

1. Guarda el archivo `validaciones.js` en tu carpeta de scripts (por ejemplo, dentro de una carpeta llamada `js`).
2. Cuando unas tu archivo principal de JavaScript con tu página de HTML, asegúrate de agregar la palabra `type="module"`. Esto le dice al navegador web que vas a conectar varios archivos entre sí.

```html
<script type="module" src="js/index.js"></script>
```

---

## Uso y Ejemplos

Para utilizar las herramientas, solo tienes que llamarlas al principio de tu archivo de JavaScript. Aquí te muestro cómo funciona cada una:

### 1. Revisar nombres y correos
Comprueba que un nombre tenga solo letras (incluso si tiene acentos o espacios) y revisa que el correo tenga su arroba y termine bien (como un .com o .mx).

```javascript
import { soloLetras, validarCorreo } from "./validaciones.js";

const nombreCorrecto = soloLetras("Angel de Jesus"); 
const correoCorrecto = validarCorreo("usuario@mail.com");

console.log(nombreCorrecto); // Resultado: true (verdadero)
```

### 2. Crear contraseñas seguras
Genera de forma automática una contraseña nueva que tiene de todo un poco: mayúsculas, minúsculas, números y símbolos, para que sea difícil de adivinar.

```javascript
import { generarContraseña } from "./validaciones.js";

// Pide una contraseña aleatoria que tenga 8 caracteres de largo
const nuevaPassword = generarContraseña(8);
console.log(nuevaPassword); // Resultado de ejemplo: "aB3$xY9!"
```

### 3. Ocultar números de tarjeta
Cambia casi todos los números de una tarjeta por asteriscos, dejando solo los últimos cuatro a la vista, justo como hacen las páginas de los bancos.

```javascript
import { ocultarTarjeta } from "./validaciones.js";

const numeroOriginal = "1234 5678 9012 3456";
const tarjetaProtegida = ocultarTarjeta(numeroOriginal);

console.log(tarjetaProtegida); // Resultado: ************3456
```

### 4. Calcular la edad
Calcula cuántos años tiene una persona basándose en su fecha de nacimiento y te dice de forma rápida si ya es mayor de edad.

```javascript
import { calcularEdad, esMayorDeEdad } from "./validaciones.js";

const edad = calcularEdad("2005-06-15");
const accesoPermitido = esMayorDeEdad("2005-06-15");

console.log(`El usuario tiene ${edad} años.`); // Resultado: El usuario tiene 21 años.
console.log(`¿Es mayor de edad?: ${accesoPermitido}`); // Resultado: true (verdadero)
```

---

## Capturas de Pantalla

Aquí puedes ver cómo se muestra la información en la consola del navegador cuando el usuario llena todos sus datos de forma correcta.

(Registro exitoso mostrando todos los datos listos)
![Consola de Registro exitoso](./assets/consola-registro.png)

(Inicio de sesión capturando el correo y la contraseña)
![Consola de Login exitoso](./assets/consola-login.png)