// Constantes. Tipos de IVA
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada. Lista de productos
const products = [
  {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
];

// 2. Implementa un algoritmo que genere desde Javascript los elementos HTML necesarios para mostrar una lista de
// productos con su descripción, precio unitario y un input de unidades para cada uno.

var productContainer = document.getElementById("productContainer");

var createDescription = (product) => {
  // Create HTML span for description and price
  var span = document.createElement("span");
  span.innerText = product.description + " - " + product.price + "€/ud";
  span.setAttribute("class", "productDescription");
  span.setAttribute("id", "productDescription");
  productContainer.appendChild(span);
  return span;
};

var createDescriptionCount = (product) => {
  // Create HTML input type number for product count
  var count = document.createElement("input");
  count.setAttribute("class", "select");
  count.setAttribute("id", "select");
  count.setAttribute("type", "number");
  count.setAttribute("value", product.units);
  count.setAttribute("max", product.stock);
  count.setAttribute("min", 0);
  count.setAttribute("onKeyDown", "return false");
  count.addEventListener("change", (event) => {
    product.units = event.target.valueAsNumber;
    console.log(product.description + " " + product.units + " ud");
    // Registrar función de habilitar o deshabilitar botón al evento change del count
    document.getElementById("button").disabled = disableButton(products);
;
  });
  // Append count child inside description span
  var productDescription = createDescription(product);
  productDescription.appendChild(count);
  return count;
};

var showProducts = (productList) => {
  for (var product of productList) {
    createDescriptionCount(product);
  }
};

// Llamar función de imprimir productos
showProducts(products);
// Llamar función de habilitar o deshabilitar botón
document.getElementById("button").disabled = disableButton(products);

// 3. Prepara un algoritmo que calcule la factura cuando pulsemos el botón calcular y muestre el resultado en los campos
// subtotal , impuestos y total .

var subtotal = 0;

function calcularSubtotal(products) {
  subtotal += products[i].price * products[i].units;
}

var VAT = 0;

function calcularVAT(products) {
  VAT += products[i].price * (products[i].tax / 100) * products[i].units;
}

var total = 0;

function calcularTotal(products) {
  for (i = 0; i < products.length; i++) {
    calcularSubtotal(products);
    calcularVAT(products);
  }
  total += subtotal + VAT;
}

function showTotal() {
  total = 0;
  subtotal = 0;
  VAT = 0;
  calcularTotal(products);
  var subtotalContainer = document.getElementById("subtotal");
  subtotalContainer.innerHTML = ": " + subtotal + "€";
  var VATContainer = document.getElementById("VAT");
  VATContainer.innerHTML = ": " + VAT + "€";
  var totalContainer = document.getElementById("total");
  totalContainer.innerHTML = ": " + total + "€";
}

// Registrar función al botón de calcular

document.getElementById("button").addEventListener("click", showTotal);

// Habilitar y deshabilitar botón calcular en función de unidades seleccionadas

function disableButton(productList) {
  for (var product of productList) {
    if (product.units > 0) {
      return false;
    }
  }
  return true;
}