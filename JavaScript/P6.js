function cambiarDiseño() {
    let titulo = document.getElementById("titulo");
    titulo.innerText = "Manipulacion del dom";
    titulo.style.color = "#3f51b5";

    let nombrePractica = document.getElementById("nombrePractica");
    nombrePractica.innerText = "Practica 6";
    nombrePractica.style.color = "#00aaff";

    let Descripcion = document.getElementById("Descripcion");
    Descripcion.innerText = " Botón al final de la pagina centrado. Cuando se le de click al Boton debera de Cambiar la mayoría de las características.";
    Descripcion.style.color = "#000000";

    const body = document.querySelector('body');
    body.style.backgroundColor = "#ffffff";
}