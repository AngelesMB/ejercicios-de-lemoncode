// AGENDA

// Vamos a implementar una agenda para un equipo de personas, de modo que nos indique que horas tienen libres y que horas están ocupados. Además, vamos a
// generar un algoritmo que haga una búsqueda en un equipo y determine cual es la primera hora en que todos los miembros del equipo están libres, para asi poder
// establecer una reunión. Es decir, que busque el primer hueco disponible en sus agendas.

// Constantes

var WORK_HOURS = [
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "15:00 - 16:00",
  "16:00 - 17:00",
];
// Datos
var myTeam = [
  {
    name: "María",
    availability: new Array(8).fill(true),
  },
  {
    name: "Pedro",
    availability: new Array(8).fill(true),
  },
  {
    name: "Esther",
    availability: new Array(8).fill(true),
  },
  {
    name: "Marcos",
    availability: new Array(8).fill(true),
  },
];

// ALGORITMO

// 1. Generación aleatoria de la disponibilidad: Como primer apartado, vamos a generar aleatoriamente la disponibilidad para todos
// los miembros del equipo. Se trata de recorrer todos los miembros del equipo, y a su vez, para cada miembro, todas las franjas horarias de su disponibilidad, e ir
// asignando aleatoriamente si está disponible o no en dicha franja. De esta forma generamos un equipo con una agenda completamente aleatoria.

var generateAvailability = (team, hours) => {
  var availableSlot = "";
  for (var i = 0; i < team.length; i++) {
    console.log("\n");
    console.log("Disponibilidad de ", team[i].name);
    for (var k = 0; k < hours.length; k++) {
      for (var j = 0; j < team[i].availability.length; j++) {
        availableSlot = Math.random() < 0.5 ? "Sí" : "No";
        if (availableSlot === "Sí") {
          team[i].availability[j] = true;
        } else {
          team[i].availability[j] = false;
        }
      }
      console.log(hours[k], " : ", availableSlot);
    }
  }
  return availableSlot;
};
generateAvailability(myTeam, WORK_HOURS);

console.log(myTeam);

// 2. Buscar hueco libre: Para buscar el primer hueco libre habrá que comprobar la primera franja horaria en la
// que todos los miembros del equipo están disponibles.

var checkAvailableSlot = (team) => {
  // Creamos array donde almacenar índices de franjas disponibles de todos los empleados
  var trueSlots = [];
  for (var i = 0; i < team.length; i++) {
    for (var j = 0; j < team[i].availability.length; j++) {
      if (team[i].availability[j] === true) {
        trueSlots.push(j);
      }
    }
  }
  console.log("Array de huecos true/disponibles", trueSlots);
  // Buscamos dentro del array de índices disponibles cuántas veces se repite cada uno
  var repeatedIndexArr = [];
  trueSlots.forEach((x) => {
    repeatedIndexArr[x] = (repeatedIndexArr[x] || 0) + 1;
  });
  console.log("Listado de índices repetidos", repeatedIndexArr);
  // Buscamos si existe un índice que se repita tantas veces como empleados haya
  var repeatedIndex;
  var fourTimesIndex;
  for (var l = 0; l < repeatedIndexArr.length; l++) {
    repeatedIndex = repeatedIndexArr[l];
    if (repeatedIndex === team.length) {
      fourTimesIndex = repeatedIndex;
      console.log("Índice encontrado", fourTimesIndex);
      // Asignamos franja horaria al índice
      switch (l) {
        case 0: console.log("Hueco encontrado en el horario 08:00 - 09:00"); break;
        case 1: console.log("Hueco encontrado en el horario 09:00 - 10:00"); break;
        case 2: console.log("Hueco encontrado en el horario 10:00 - 11:00"); break;
        case 3: console.log("Hueco encontrado en el horario 11:00 - 12:00"); break;
        case 4: console.log("Hueco encontrado en el horario 12:00 - 13:00"); break;
        case 5: console.log("Hueco encontrado en el horario 13:00 - 14:00"); break;
        case 6: console.log("Hueco encontrado en el horario 15:00 - 16:00"); break;
        case 7: console.log("Hueco encontrado en el horario 16:00 - 17:00"); break;
      }
    } 
  }
  // Qué pasa si ningún índice se repite tantas veces
  if (fourTimesIndex !== team.length) {
    console.log("Lo siento. No hay hueco disponible en el equipo.");
}
};

checkAvailableSlot(myTeam);

// --------------------------------------------------------------------------------------------------------------------------------------------

// CALCULADORA de cambio óptimo de billetes y monedas
// Vamos a implementar una calculadora de cambio óptimo en base a un importe de compra y la cantidad entregada por el cliente.

// Fondo de caja
var fondoCaja = [
  200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01,
];
var importeTotal;
var importeEntregado;
var diferencia;

// Función para recoger en variable importe total
var getImporteTotal = () => {
  importeTotal = document.getElementById("input-a").value;
  return importeTotal;
};

// Función para recoger en variable importe entregado
var getImporteEntregado = () => {
  var importeEntregado = document.getElementById("input-b").value;
  return importeEntregado;
};

// Ahora que tenemos los importes, calculamos la diferencia para saber cuánto debemos devolver:
var calcularDiferencia = (importeTotal, importeEntregado) => {
  var diferencia = (importeEntregado - importeTotal).toFixed(2);
  console.log("Importe a devolver: ", diferencia, "euros");
  comprobarVuelta(diferencia, fondoCaja);
  return diferencia;
};

// Ahora, comprobamos cómo podemos dar la vuelta según nuestro fondo de caja
var comprobarVuelta = (diferencia, fondo) => {
  for (var i = 0; i < fondo.length; i++) {
    var vuelta = diferencia / fondo[i];
    if (vuelta >= 1) {
      console.log(
        "Necesito",
        Math.floor(vuelta),
        "unidades de",
        fondo[i],
        "euros"
      );
    }
    diferencia = diferencia - Math.floor(vuelta) * fondo[i];
  }
  return vuelta;
};

// Función de validación de los dos importes y cálculo
var mostrarVuelta = () => {
  if (isNaN(getImporteTotal()) || isNaN(getImporteEntregado())) {
    document.getElementById("result").innerText =
      "No has introducido alguno de los importes";
  } else {
    document.getElementById("result").innerText = calcularDiferencia(
      getImporteTotal(),
      getImporteEntregado()
    );
  }
};

// Registro de función al botón
document.getElementById("calculate").addEventListener("click", mostrarVuelta);
