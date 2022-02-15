// Imaginemos que tenemos una web de reservas de hotel. Cuando un cliente realiza sus reservas indica los siguientes datos:
// - Qué habitaciones quiere (hay de varios tipos).
// - Para cada habitación, cuántas personas la van a ocupar.
// Nuestro objeto es calcular el subtotal (precio sin IVA) y el total de las reservas que ha hecho un cliente (IVA 21%).

const reservas = [
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    desayuno: true,
    pax: 2,
    noches: 1,
  },
];

// CASO 1 ---------------------------------------------------------------------------------------------------
// En el caso de un cliente particular:
// Crear una clase que reciba la lista de reservas y calcule el subtotal y el total teniendo en cuenta los anteriores requisitos.

class Reserva {
  // Definimos constructor
  constructor() {
    this._reserva = [];
    // Creamos una propiedad para guardar el tipo IVA
    this._VAT = 1.21;
    // Creamos una propiedad para guardar el subtotal
    this._subtotal = 0;
    // Creamos una propiedad para guardar el total
    this._total = 0;
  }
  // Método para calcular precio habitación según tipo
  calculaPrecioHabitacionTipo(tipoHabitacion) {
    switch (tipoHabitacion) {
      case "standard":
        return 100;
      case "suite":
        return 150;
    }
  }
  // Método para calcular extra habitación según número personas
  calculaExtraHabitacionPersonas(pax) {
    return pax > 1 ? (pax - 1) * 40 : 0;
  }
  // Método para calcular extra desayuno
  calculaExtraDesayuno(desayuno, pax, noches) {
    return desayuno ? pax * noches * 15 : 0;
  }
  // Método para calcular subtotal
  calculaSubtotal() {
    this._subtotal = this._reserva.reduce(
      (acumulado, { tipoHabitacion, pax, noches, desayuno }) =>
        acumulado +
        this.calculaPrecioHabitacionTipo(tipoHabitacion) * noches +
        this.calculaExtraHabitacionPersonas(pax) +
        this.calculaExtraDesayuno(desayuno, pax, noches),
      0
    );
  }
  // Método para calcular total
  calculaTotal() {
    // this._total = this._reserva.reduce(
    //   (acumulado, { tipoHabitacion, pax, noches, desayuno }) =>
    //     acumulado +
    //     (this.calculaPrecioHabitacionTipo(tipoHabitacion) * noches +
    //       this.calculaExtraHabitacionPersonas(pax) +
    //       this.calculaExtraDesayuno(desayuno, pax, noches)) *
    //       this._VAT,
    //   0
    // );

    // OPCIÓN más corta
    return (this._total = this._subtotal * this._VAT);
  }
  // Exponemos una propiedad para mostrar hacia afuera el total
  get total() {
    return this._total;
  }
  // Exponemos una propiedad para mostrar el subtotal
  get subtotal() {
    return this._subtotal;
  }
  // Cada vez que la reserva cambie vamos a settearla y recalcular totales
  set reserva(reservaExterna) {
    this._reserva = reservaExterna;
    this.calculaSubtotal();
    this.calculaTotal();
  }
}

// Instanciamos clase
const reservaParticular = new Reserva();
reservaParticular.reserva = reservas;
console.log("------------- RESERVA CLIENTE PARTICULAR -------------");
console.log("Subtotal:", reservaParticular.subtotal);
console.log("Total con IVA", reservaParticular.total);

// CASO 2 ---------------------------------------------------------------------------------------------------
// Cubrimos el caso de un tour operador, al reservar grandes volúmenes, le damos las siguientes condiciones especiales:
// Todas las habitaciones tienen el mismo precio (100 €).
// Adicionalmente se le aplica un 15 % de descuento a los servicios contratados.

// Crear una clase que herede de la primera que cubra el caso del calculo de totales y subtotales para el tour operador
class reservaCondicionesTourOperador extends Reserva {
  // Sobrescribimos el método de la clase padre para cambiar el precio por habitación
  calculaPrecioHabitacionTipo(tipoHabitacion) {
    switch (tipoHabitacion) {
      case "standard":
        return 100;
      case "suite":
        return 100;
    }
    return 1;
  }
  // Sobrescribimos el getter de la clase padre para añadir el descuento del 15%
  get total() {
    return this._total * 0.85;
  }
}

const reservaTourOperador = new reservaCondicionesTourOperador();
reservaTourOperador.reserva = reservas;
console.log("------------- RESERVA CLIENTE TOUR OPERADOR -------------");
console.log("Subtotal:", reservaTourOperador.subtotal);
console.log("Total con IVA y Descuento", reservaTourOperador.total);
