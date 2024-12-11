
let nombre = prompt("Por favor, ingresa tu nombre:");
let edad = prompt("Por favor, ingresa tu edad:");
let pais = prompt("Por favor, ingresa tu país de residencia:");


alert(`Hola ${nombre}, tu registro está completo. Eres de ${pais} y tienes ${edad} años.`);


let confirmacion = prompt("¿Son correctos estos datos? (Escribe 'si' o 'no')");

if (confirmacion.toLowerCase() === "si") {
    console.log(`Registro guardado correctamente: Nombre: ${nombre}, Edad: ${edad}, País: ${pais}`);
} else {
    console.log("Registros borrados");
}

