const product = { count: 3, price: 12.55, type: "ropa" };

var total = 0;

total = product.count <= 0 ? 0 : product.count * product.price;

console.log("El precio por unidad es " + product.price + "eu");
console.log("El precio total es " + total + "eu");

var itemVat = 0;

switch (product.type) {
  case "ropa":
    console.log("El IVA por unidad es " + (itemVat = product.price * 0.21) + "eu"); break;
  case "alimentacion":
    console.log("El IVA por unidad es " + (itemVat = product.price * 0.1) + "eu"); break;
  case "libro":
    console.log("El IVA por unidad es " + (itemVat = product.price * 0.04) + "eu"); break;
  default:
    console.log("Tipo producto no reconocido"); break;
}

// OPCIÓN CON IF
// if (product.type == "ropa") {
//     console.log("El IVA por unidad es " + (itemVat = product.price * 0.21) + "eu");
// }
// if (product.type == "alimentacion") {
//     console.log("El IVA por unidad es " + (itemVat = product.price * 0.1) + "eu");
// }
// if (product.type == "libro") {
//     console.log("El IVA por unidad es " + (itemVat = product.price * 0.04) + "eu");
// }

function getTotalVat(product) {
  return product.count > 0 ? product.count * itemVat : 0;
}
console.log("El IVA total es " + getTotalVat(product) + "eu");
console.log("El precio total de los productos con IVA es " + (total + getTotalVat(product)) + "eu");

// Extra 1: Calcular sueldo neto en nómina

const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14
}

var netoAnual = 0;

if (empleado.bruto <= 12000) {
    console.log("Tu sueldo neto anual con o sin hijos es " + (netoAnual = empleado.bruto) + "eu");
} else if (empleado.bruto > 12000 && empleado.bruto <= 24000 && empleado.hijos == 0 ) {
    console.log("Tu sueldo neto anual es " + (netoAnual = empleado.bruto - (empleado.bruto * 0.08)) + "eu");
} else if (empleado.bruto > 12000 && empleado.bruto <= 24000 && empleado.hijos > 0) {
  console.log("Tu sueldo neto anual con hijos es " + (netoAnual = empleado.bruto - (empleado.bruto * 0.06)) + "eu");
} else if (empleado.bruto > 24000 && empleado.bruto <= 34000 && empleado.hijos == 0) {
    console.log("Tu sueldo neto anual es " + (netoAnual = empleado.bruto - (empleado.bruto * 0.16)) + "eu");
} else if (empleado.bruto > 24000 && empleado.bruto <= 34000 && empleado.hijos > 0) {
  console.log("Tu sueldo neto anual con hijos es " + (netoAnual = empleado.bruto - (empleado.bruto * 0.14)) + "eu");
} else if (empleado.bruto > 34000 && empleado.hijos == 0) {
    console.log("Tu sueldo neto anual es " + (netoAnual = empleado.bruto - (empleado.bruto * 0.3)) + "eu");
} else if (empleado.bruto > 34000 && empleado.hijos > 0) {
  console.log("Tu sueldo neto anual con hijos es " + (netoAnual = empleado.bruto - (empleado.bruto * 0.28)) + "eu");
}

var netoMensual = netoAnual / empleado.pagas;
console.log("Tu sueldo neto mensual es " + netoMensual + "eu");