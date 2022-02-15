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

// CLASE BASE

class Reserva {
  constructor() {
    this._reserva = [];
    this._VAT = 1.21;
    this._subtotal = 0;
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

// CLASE HIJA PARA CLIENTE PARTICULAR

class Particular extends Reserva {
  // Constructor de la clase Particular
  constructor() {
    // Llamamos al constructor del padre (Reserva) usando super
    // No necesita modificaciones en sus funcionalidades
    super();
  }
}

const reservaParticular = new Particular();
reservaParticular.reserva = reservas;
console.log("------------- RESERVA CLIENTE PARTICULAR -------------");
console.log("Subtotal:", reservaParticular.subtotal);
console.log("Total con IVA", reservaParticular.total);

// CLASE HIJA PARA TOUR OPERADADOR

class TourOperador extends Reserva {
  // Constructor de la clase Particular
  constructor() {
    // Llamamos al constructor del padre (Reserva) usando super
    super();
  }
  // Necesita modificaciones en sus funcionalidades
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

const reservaTourOperador = new TourOperador();
reservaTourOperador.reserva = reservas;
console.log("------------- RESERVA CLIENTE TOUR OPERADOR -------------");
console.log("Subtotal:", reservaTourOperador.subtotal);
console.log("Total con IVA y Descuento", reservaTourOperador.total);
