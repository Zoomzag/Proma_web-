function solicitarDatos() {
    let nombre = prompt("¿Cuál es tu nombre?");
    alert("¡Bienvenido, " + nombre + "!"); 

  
    let actividad = prompt(nombre + ", ingresa tu actividad favorita:");

    let confirmado = confirmarDatos(nombre, actividad);

    mostrarMensajeFinal(confirmado, nombre, actividad);
}


function confirmarDatos(nombre, actividad) {
    let confirmar = confirm(`¿Es correcto? \nNombre: ${nombre} \nActividad favorita: ${actividad}`);
    return confirmar; 
}


function mostrarMensajeFinal(confirmado, nombre, actividad) {
    if (confirmado) {
        alert("Su información ha sido guardada correctamente.");
        alert(`${nombre}, tu actividad favorita es ${actividad}`);
        despedida(nombre);
    } else {
        alert("Su información ha sido borrada.");
        let reintentar = volverAIntentar(); 
        if (reintentar) {
            solicitarDatos(); 
        } else {
            despedida(nombre);
        }
    }
}


function volverAIntentar() {
    let reintentar = confirm("¿Deseas volver a ingresar los datos?");
    return reintentar; 
}


function despedida(nombre) {
    alert("Esperamos que hayas disfrutado del programa. ¡Hasta pronto! 👋");
}


solicitarDatos();
