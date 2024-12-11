let horario = {
  Materia1: {
    nombre: "Arquitectura de Computadoras",
    hora: "Lunes a Viernes de 01:00 - 02:00"
  },
  Materia2: {
    nombre: "Programacion Front-end",
    hora: "Lunes a Viernes de 02:00 - 03:00"
  },
  Materia3: {
    nombre: "Metodos Numericos",
    hora: "Lunes a Jueves de 04:00 - 05:00"
  },
  Materia4: {
    nombre: "Programación Web",
    hora: "Lunes a Viernes de 05:00 - 06:00"
  },
  Materia5: {
    nombre: "Lenguajes y Autómatas",
    hora: "Lunes a Viernes de 06:00 - 07:00"
  },
  Materia6: {
    nombre: "Taller de base de datow",
    hora: "Lunes a Viernes de 07:00 - 08:00"
  },

  imprimirHorario: function () {
    return this.Materia1.nombre + ": " + this.Materia1.hora + "\n" +
      this.Materia2.nombre + ": " + this.Materia2.hora + "\n" +
      this.Materia3.nombre + ": " + this.Materia3.hora + "\n" +
      this.Materia4.nombre + ": " + this.Materia4.hora + "\n" +
      this.Materia5.nombre + ": " + this.Materia5.hora;
  }
};


function preguntarMostrarHorario() {
  let respuesta = confirm("¿Quieres ver el horario de las materias?");
  if (respuesta) {
    
    console.log(horario.imprimirHorario());
  } else {
    console.log("No se mostraron los horarios.");
  }
}


preguntarMostrarHorario();
