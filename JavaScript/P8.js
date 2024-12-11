
const suma = (a, b) => a + b;

const esPar = (num) => num % 2 === 0;

 function MostrarSuma() {
    const num1 = parseInt(prompt("Ingrese el primer número:"));
    const num2 = parseInt(prompt("Ingrese el segundo número:"));
    alert(`La suma de ${num1} y ${num2} es: ${suma(num1, num2)}`);
}

function verificarPar() {
    const num = parseInt(prompt("Ingrese un número:"));
    if (esPar(num)) {
        alert(`El número ${num} es par.`);
    } else {
        alert(`El número ${num} es impar.`);
    }
}

function EjercicioMap() {
    let numeros = [2, 4, 6, 8, 10];
    let cubos = numeros.map(num => num ** 3);
    alert(`Números originales: ${numeros}\nCubo: ${cubos}`);
}

function extraerNombres() {
    const personas = [
        { nombre: "Adan", edad: 22 },
        { nombre: "Diana", edad: 21 },
        { nombre: "Diego", edad: 20 },
        { nombre: "Jonathan", edad: 20}
    ];
    const obtenerNombres = (arr) => arr.map(persona => persona.nombre);
    const nombres = obtenerNombres(personas);
    alert(`Nombres: ${nombres.join(", ")}`);
}