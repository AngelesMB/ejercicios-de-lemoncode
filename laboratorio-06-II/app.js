// ENIGMA
// Strings con los elementos del alfabeto normal y alfabeto encriptado
var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

// Asignar variable al mensaje del usuario
var userMessagePlain = () => {
  return document.getElementById("plainText").value;
};
var userMessageEncrypted = () => {
  return document.getElementById("encryptedText").value;
};

// Búsqueda secuencial del índice en el alfabeto plano de cada letra del mensaje

// var getIndex = (alphabet, letter) => {
//   for (var i = 0; i < alphabet.length; i++) {
//     if (alphabet[i] === letter) return i;
//   }
//   return -1;
// };

// VERSIÓN con indexof
var getIndex = (alphabet, letter) => {
  return alphabet.indexOf(letter);
};

var transformLetter = (letter, source, target) => {
  // Busco el índice de la letra en el alfabeto
  var letterIndex = getIndex(source, letter);
  if (letterIndex === -1) {
    // Si no ha encontrado la letra devuelvo la misma letra original
    return letter;
  } else {
    // Si ha encontrado la letra, accedo al encryptedAlphabet con el letterIndex
    var transformedLetter = target[letterIndex];
    return transformedLetter;
  }
};

//
var encryptMessage = (message) => {
  var messageLowerCase = message.toLowerCase();
  var result = "";
  for (var letter of messageLowerCase) {
    // Transformación
    // Llamar a una función, a la que le paso la letra y devuelve letra encriptada
    result = result + transformLetter(letter, plainAlphabet, encryptedAlphabet);
  }
  return (document.getElementById("encryptedText").value = result);
};

var decryptMessage = (message) => {
  var messageLowerCase = message.toLowerCase();
  var result = "";
  for (var letter of messageLowerCase) {
    // Transformación
    // Llamar a una función, a la que le paso la letra y devuelve letra encriptada
    result = result + transformLetter(letter, encryptedAlphabet, plainAlphabet);
  }
  return (document.getElementById("plainText").value = result);
};

// Registrar función a botones
document
  .getElementById("encryptButton")
  .addEventListener("click", () => encryptMessage(userMessagePlain()));
document
  .getElementById("decryptButton")
  .addEventListener("click", () => decryptMessage(userMessageEncrypted()));

// ----------------------------------------------------------------------------------------------------------------------------
// GENERADOR ALEATORIO

// Vamos a construir un generador aleatorio que permita escoger, de forma aleatoria,
// una cantidad determinada de números (n) que no se repitan de entre un mínimo (min) y un máximo (max)

var randomPick = (n, min, max) => {
  var myNumbersArray = [];
  while (myNumbersArray.length < n) {
    const range = max - min + 1;
    var myNumber = Math.floor(Math.random() * range) + min;
    if (myNumbersArray.indexOf(myNumber) === -1) myNumbersArray.push(myNumber);
  }
  console.log(myNumbersArray);
};

randomPick(1, 10, 30);
randomPick(10, 50, 100);
randomPick(6, 1, 49); // Apuesta automática de la primitiva
randomPick(15, 1, 15); // Escoge combinación de bolas de billar
randomPick(1, 1, 6); // Tirada aleatoria de un dado
