
let numeros = [5, 10, 15];


let continuar = true;

while (continuar) {
    let entrada = prompt("Ingresa un número para agregar al arreglo (o escribe 'salir' para terminar):");

    if (entrada.toLowerCase() === "salir") {
        continuar = false; 
    } else {
        let numero = parseFloat(entrada); 
        if (!isNaN(numero)) {
            numeros.push(numero); 
        } else {
            alert("Por favor, ingresa un número válido.");
        }
    }
}


alert("Números ingresados: " + numeros.join(", "));


let sumaTotal = numeros.reduce((total, num) => total + num, 0); 
alert("La suma total de los números es: " + sumaTotal);
