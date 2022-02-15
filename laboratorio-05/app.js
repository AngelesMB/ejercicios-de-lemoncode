const carrito = [
  {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true,
  },
  {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true,
  },
  {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false,
  },
  {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false,
  },
];

// Imprimir todos los productos.

for (producto of carrito) {
  imprimir(producto);
}

function imprimir(producto) {
  console.log("-----------------------------------------------");
  for (propiedad in producto) {
    console.log(propiedad + ": " + producto[propiedad]);
  }
}

// Eliminar el producto con id 54657 del carrito de la compra.
  // Opción delicada: eliminar el producto en el mismo bucle, modifica el carrito original, no recomendada
  // Opción adecuada: en el bucle identifica la posición a eliminar pero no la borra dentro del bucle.

var indiceProductoEncontrado;
var idEncontrado;

function eliminarProducto(id) {
  for (i = 0; i < carrito.length; i++) {
    if (carrito[i].id === 54657) {
      var indiceProductoEncontrado = i;
      var idEncontrado = carrito[i].id;
      console.log("-----------------------------------------------");
      console.log("Quieres eliminar el producto en posición " + indiceProductoEncontrado + " con ID: " + idEncontrado);
    }
  }
  var productoEliminado = carrito.splice(indiceProductoEncontrado, 1);
  console.log("Ahora quedan en el carro " + carrito.length + " productos");
  console.log("Has eliminado el siguiente producto: "+ productoEliminado[0].name);
}

eliminarProducto(idEncontrado);

// Calcular el total del carrito de la compra (el coste de una línea es precio * cantidad).

var total = 0;

for (i = 0; i < carrito.length; i++) {
  calcularTotal(carrito);
}

function calcularTotal(carrito) {
  total += carrito[i].price * carrito[i].count;
}

console.log("-----------------------------------------------");
console.log("El total del carrito de la compra es: " + total);

// Filtrar por los productos que sean premium.

productosPremium = [];

for (i = 0; i < carrito.length; i++) {
  filtrarPremium(carrito);
}

function filtrarPremium(carrito) {
  if (carrito[i].premium === true) {
    productosPremium.push(carrito[i]);
  }
}

console.log("-----------------------------------------------");
console.log("Estos son los productos premium");

for (producto of productosPremium) {
  imprimir(producto);
}

// Si todos los productos son premium mostrar un mensaje "Pedido sin gastos de envío", si no "Este pedido tiene gastos de envío".

function gastosEnvio(productosPremium, carrito) {
  if (productosPremium.length === carrito.length) {
    console.log("-----------------------------------------------");
    console.log("Pedido sin gastos de envío");
  } else {
    console.log("-----------------------------------------------");
    console.log("Este pedido tiene gastos de envío");
  }
}

gastosEnvio(productosPremium, carrito);

// Mostrar el carrito en un listado de html básico.

document.write("<h2>Tu carrito de la compra</h2>");

for (producto of carrito) {
  imprimirHTML(producto);
}

function imprimirHTML(producto) {
  document.write("-----------------------------------------------");
  for (propiedad in producto) {
    document.write(
      "<ul><li>" + propiedad + ": " + producto[propiedad] + "</li></ul>"
    );
  }
}

// Aplicar un descuento del 5% si la compra es mayor de 100 €.

function descuento(total) {
  if (total > 100) {
    total = total * 0.95;
    console.log("-----------------------------------------------");
    console.log(
      "Tu compra tiene un 5% de descuento, el total actualizado es: " + total
    );
  } else {
    console.log("Tu compra no tiene descuentos");
  }
}

descuento(total);
