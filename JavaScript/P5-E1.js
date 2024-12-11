
let frutas = [];


let continuar = true;

while (continuar) {
    let fruta = prompt("Ingresa el nombre de una fruta (o escribe 'salir' para terminar):");
    
    if (fruta.toLowerCase() === "salir") {
        continuar = false; 
    } else {
        frutas.push(fruta); 
    }
}


alert("Frutas ingresadas: " + frutas.join(", "));
