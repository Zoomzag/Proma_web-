
let calificaciones = [];


let continuar = true;

while (continuar) {
    let entrada = prompt("Ingresa una calificación (o escribe 'salir' para terminar):");
    
    if (entrada.toLowerCase() === "salir") {
        continuar = false; 
    } else {
        let calificacion = parseFloat(entrada); 
        if (!isNaN(calificacion)) {
            calificaciones.push(calificacion); 
        } else {
            alert("Por favor, ingresa un número válido.");
        }
    }
}


if (calificaciones.length > 0) {
    let suma = calificaciones.reduce((total, num) => total + num, 0); 
    let promedio = suma / calificaciones.length; 
    alert("El promedio de las calificaciones es: " + promedio.toFixed(2));
} else {
    alert("No se ingresaron calificaciones.");
}
