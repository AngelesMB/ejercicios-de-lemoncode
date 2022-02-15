// Módulo 10 - Conceptos Avanzados ES6 - Laboratorio Ángeles Martínez Barrio
// 1. Implementa una función llamada hasId que admita como parámetro un objeto y compruebe si dicho objeto tiene una
// propiedad llamada id (debe devolver booleano true / false )

const myObject1 = {
  firstName: "Juana",
  surname: "Balboa",
  id: 2050,
  location: "Phoenix",
};
const myObject1NoId = {
  firstName: "Juana",
  surname: "Balboa",
  location: "Phoenix",
};
// Valor true si existe propiedad id con valor o con valor 0.
const hasId = ({ id }) => (id !== undefined && id !== null);
console.log("Ejercicio 1: ", hasId(myObject1));
// Valor false si no existe propiedad id o está es undefined o null
console.log("Ejercicio 1bis: ", hasId(myObject1NoId));

// 2. Implementa una función llamada head tal que, dado un array como entrada, devuelva el primer elemento
const myArray2 = ["pear", "peach", "apple", "grape"];
const head = ([primerElemento]) => primerElemento;
console.log("Ejercicio 2: ", head(myArray2));

// 3. Implementa una función llamada tail tal que, dado un array como entrada, devuelva un nuevo array con todos los
// elementos menos el primero
const myArray3 = ["pear", "peach", "apple", "grape"];
// Podríamos no nombrar el firstItem y simplemente dejar el espacio antes de la coma
const tail = ([firstItem, ...everyItemButFirst]) => everyItemButFirst;
console.log("Ejercicio 3: ", tail(myArray3));

// 4. Implementa una función llamada swapFirstToLast tal que, dado un array como entrada, devuelva un nuevo array donde el
// primer elemento ha sido colocado en la última posición
const myArray4 = ["pear", "peach", "apple", "grape"];
const swapFirstToLast = ([firstToLast, ...everythingelse]) => {
  const myArray4Modified = [...everythingelse, firstToLast];
  return myArray4Modified;
};
console.log("Ejercicio 4: ", swapFirstToLast(myArray4));

// 5. Implementa una función llamada excludeId tal que, dado un objeto como entrada, devuelva dicho objeto clonado excepto
// la propiedad id si la hubiera
const myObject5 = {
  firstName: "Juana",
  surname: "Balboa",
  id: 2050,
  location: "Phoenix",
};
const excludeId = ({ id, ...otherProperties }) => otherProperties;
console.log("Ejercicio 5: ", excludeId(myObject5));

// 6. Implementa una función llamada wordsStartingWithA tal que, dado un array de palabras como entrada, devuelva otro array
// filtrado con aquellas palabras que empiecen por a
const myArray6 = ["pear", "peach", "apple", "grape", "apricot"];
const wordsStartingWithA = (arr) => arr.filter((item) => item.startsWith("a"));
console.log("Ejercicio 6: ", wordsStartingWithA(myArray6));

// 7. Implementa una función llamada concat tal que admita múltiples argumentos de tipo string y devuelva otro string con la
// concatenación de todos, separados por |
const concat = (...severalArguments) => {
  return severalArguments.join(" | ");
};
console.log(
  "Ejercicio 7: ",
  concat("Esta", "es", "una", "concatenación", "llena", "de", "barras")
);

// 8. Implementa una función llamada multArray que admita un array de números ( arr ) y otro parámetro que sea un número
// ( x ) y devuelva un nuevo array donde cada elemento ha sido multiplicado por x
const myArray8 = [2, 4, 6, 8, 10];
const myNumber8 = 8;
const multArray = (arr, x) => arr.map((num) => num * x);
console.log("Ejercicio 8: ", multArray(myArray8, myNumber8));

// 9. Implementa una función llamada calcMult que admita múltiples números como argumento y devuelva como resultado el
// producto de todos ellos
const calcMult = (...severalNumbers) => severalNumbers.reduce((a, b) => a * b);
console.log("Ejercicio 9: ", calcMult(2, 4, 6));
// Comprobamos que es independiente del número de argumentos
console.log("Ejercicio 9bis: ", calcMult(2, 4, 6, 10, 2));

// 10. Implementa una función swapFirstSecond tal que dado un array, devuelva un nuevo array donde el primer elemento ha sido
// intercambiado por el segundo
const myArray10 = ["pear", "peach", "apple", "grape"];
const swapFirstSecond = ([firstItem, secondItem, ...everythingelse2]) => {
  const swappedArray = [secondItem, firstItem, ...everythingelse2];
  return swappedArray;
};
console.log("Ejercicio 10: ", swapFirstSecond(myArray10));

// 11. Implementa una función longest tal que admita multiples strings como argumento de entrada así como un carácter
// cualquiera, y devuelva un booleano indicando si todos los strings comienzan por dicho carácter o no
const longest = (x, ...severalStrings) =>
  severalStrings.every((string) => string.startsWith(x));
console.log("Ejercicio 11: ", longest("p", "pan", "pasta", "patata"));
// Comprobamos que no se cumple la condición
console.log(
  "Ejercicio 11bis: ",
  longest("p", "pan", "pasta", "mazorca", "patata")
);

// 12. Implementa una función llamada searchInStringV1 tal que dado un string como parámetro y también un carácter, devuelva
// cuantas veces aparece dicho carácter en el string
const searchInStringV1 = (string, x) => {
  const stringToArray12 = Array.from(string);
  const howManyAs = stringToArray12.reduce((timesX, character) => {
    if (character === x) {
      timesX++;
    }
    return timesX;
  }, 0);
  return howManyAs;
};
console.log(
  "Ejercicio 12: ",
  searchInStringV1("En esta casa se amasa el pan", "a")
);
// Comprobamos con otra letra
console.log(
  "Ejercicio 12bis: ",
  searchInStringV1("En esta casa se amasa el pan", "s")
);

// 13. Implementa el mismo ejercicio de antes, llamando a la función searchInStringV2 , encontrando otra alternativa sin usar
// reduce
const searchInStringV2 = (string, x) => {
  const stringToArray13 = Array.from(string);
  let result = 0;
  stringToArray13.forEach((character) => (character === x ? result++ : result));
  return result;
};
console.log(
  "Ejercicio 13: ",
  searchInStringV2("En esta casa se amasa el pan", "a")
);
// Comprobamos con otra letra
console.log(
  "Ejercicio 13bis: ",
  searchInStringV2("En esta casa se amasa el pan", "s")
);

// 14. Implementa una función llamada sortCharacters tal que dado un string, lo devuelva con sus letras ordenadas
// alfabéticamente

const sortCharacters = (string) => {
  const stringToArray14 = Array.from(string);
  return stringToArray14.sort();
};
console.log(
  "Ejercicio 14: ",
  sortCharacters("ordena estas letras alfabéticamente")
);

// 15. Implementa una función llamada shout tal que, dadas múltiples palabras como entrada, devuelva todas las palabras
// concatenadas en un texto donde aparezcan en mayúsculas y con exclamaciones
const shout = (...severalWords) => {
  const upperCaseText = severalWords
    .map((word) => word.toUpperCase())
    .join("! ");
  return upperCaseText;
};
console.log("Ejercicio 15: ", shout("Por", "favor", "no", "me", "grites"));

// 16. Lista de la compra
// Dada la siguiente lista de la compra:
const shoppingCart = [
  { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
  {
    category: "Carne y Pescado",
    product: "Pechuga pollo",
    price: 3.75,
    units: 2,
  },
  { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
  { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
  { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
  { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
  {
    category: "Carne y Pescado",
    product: "Secreto ibérico",
    price: 5.75,
    units: 2,
  },
];

// 16A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.
// Clonamos la lista haciendo uso de spread
const shoppingCartCopy = shoppingCart.map((obj) => ({
  ...obj,
  VAT: 0.21 * obj.price,
}));
// Comprobamos que la lista original NO ha sido modificada
console.log("Ejercicio 16:");
console.log("Lista original", shoppingCart);
// Comprobamos que se agregó la propiedad IVA a cada item
console.log("16A.Lista clonada con propiedad IVA", shoppingCartCopy);

// 16B. Ordena la lista de más a menos unidades.
// Clonamos la lista haciendo uso de spread
const shoppingCartCopySortedUnits = [...shoppingCartCopy];
const sortByUnits = (items) =>
  items.sort((a, b) => (a.units > b.units ? 1 : -1));
sortByUnits(shoppingCartCopySortedUnits);
console.log(
  "16B.Lista clonada ahora ordenada por número de unidades",
  shoppingCartCopySortedUnits
);

// 16C. Obtén el subtotal gastado en droguería.
const getDrugstoreItemsSubtotal = (items) => {
  // Primero filtramos para obtener items de la droguería
  const drugstoreItemsOnly = items.filter(
    (item) => item.category === "Droguería"
  );
  // Calculamos total sobre ese nuevo array de productos droguería
  const subtotalDrugstore = (items) =>
    items.reduce(
      (subtotal, item) => subtotal + (item.price + item.VAT) * item.units,
      0
    );
  return subtotalDrugstore(drugstoreItemsOnly);
};
console.log(
  "16C.Subtotal sección droguería con IVA incluido: ",
  getDrugstoreItemsSubtotal(shoppingCartCopy)
);

// 16D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.
// Clonamos la lista haciendo uso de spread
console.log(
  "16D.Lista clonada ahora ordenada por categoría y con precio total"
);
const shoppingCartCopySortedCategory = [...shoppingCartCopy];
const printProductPriceByCategory = (items) =>
  items
    // Ordenamos por categoría
    .sort((a, b) => (a.category > b.category ? 1 : -1))
    // Calculamos total sumando subtotal e iva y multiplicando esto por el número de unidades
    .forEach((item) =>
      console.log(
        "Categoría: ",
        item.category,
        " -> Producto: ",
        item.product,
        " -> Precio Total €: ",
        (item.price + item.VAT) * item.units
      )
    );
printProductPriceByCategory(shoppingCartCopySortedCategory);
