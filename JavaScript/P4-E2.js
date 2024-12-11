let horario = {
    Materia1: {
      nombre: "Arquitectura de Computadoras",
      hora: "Lunes a Viernes de 01:00 - 02:00",
      calificacion: 0
    },
    Materia2: {
      nombre: "Programacion Front-end",
      hora: "Lunes a Viernes de 02:00 - 03:00",
      calificacion: 0
    },
    Materia3: {
      nombre: "Metodos Numericos",
      hora: "Lunes a Jueves de 04:00 - 05:00",
      calificacion: 0
    },
    Materia4: {
      nombre: "Programación Web",
      hora: "Lunes a Viernes de 05:00 - 06:00",
      calificacion: 0
    },
    Materia5: {
      nombre: "Lenguajes y Autómatas",
      hora: "Lunes a Viernes de 06:00 - 07:00",
      calificacion: 0
    },
    Materia6: {
      nombre: "Taller de base de datow",
      hora: "Lunes a Jueves de 07:00 - 08:00",
      calificacion: 0
    },
  

   
    ingresarCalificaciones: function () {
        for (let key in this) {
            if (typeof this[key] === "object" && this[key].calificacion !== undefined) {
                let calificacion = parseFloat(prompt(`Ingresa la calificación de ${this[key].nombre}:`));
                if (!isNaN(calificacion)) {
                    this[key].calificacion = calificacion;
                } else {
                    alert("Calificación no válida. Se asignará 0.");
                    this[key].calificacion = 0;
                }
            }
        }
    },


    calcularSuma: function () {
        let suma = 0;
        for (let key in this) {
            if (typeof this[key] === "object" && this[key].calificacion !== undefined) {
                suma += this[key].calificacion;
            }
        }
        return suma;
    },


    calcularPromedio: function () {
        let suma = this.calcularSuma();
        let numeroMaterias = 0;
        for (let key in this) {
            if (typeof this[key] === "object" && this[key].calificacion !== undefined) {
                numeroMaterias++;
            }
        }
        return (numeroMaterias > 0) ? (suma / numeroMaterias).toFixed(2) : 0;
    }
};

function ejecutarPrograma() {
    let ejecutar = confirm("¿Deseas ingresar calificaciones y ver la suma y el promedio?");
    if (ejecutar) {
        materia.ingresarCalificaciones();
        let suma = materia.calcularSuma();
        let promedio = materia.calcularPromedio();
        console.log("La suma de las calificaciones es: " + suma);
        console.log("El promedio de las calificaciones es: " + promedio);
    } else {
        console.log("El programa no se ejecutó.");
    }
}


ejecutarPrograma();
