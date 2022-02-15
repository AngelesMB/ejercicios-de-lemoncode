// VALIDAR UN IBAN
// En este ejercicio vamos a validar la sintáxis de un IBAN, es decir si se han informado con las letras y digitos
// que corresponden (no vamos a hacer un validación del digito de control, eso lo realizaremos en el módulo de algoritmos).

// CASO 1: Validar que se informa con dos letras, y los números correspondientes.
const patternIBAN1 = /^[A-Z]{2}\d{22}$/;
const value1 = "ES6600190020961234567890";
console.log(`RegExp matches with "${value1}"? -> `, patternIBAN1.test(value1));

// CASO 2: Vamos a permitir que se incluyan espacios en ciertas áreas
const patternIBAN2 = /^[A-Z]{2}\d{2}\s?(\d{4}\s?){4}\d{4}$/;
const value2 = ["ES6600190020961234567890", "ES66 0019 0020 9612 3456 7890"];
value2.forEach((value) => {
  console.log(`RegExp matches with "${value}"? -> `, patternIBAN2.test(value));
});

// CASO 3: Vamos a extraer el código de páis y el dígito de control.
const patternIBAN3 = /^([A-Z]{2})(\d{2})\s?(\d{4}\s?){4}\d{4}$/;
const value3 = ["ES6600190020961234567890", "ES66 0019 0020 9612 3456 7890"];
value3.forEach((value) => {
  const result = patternIBAN3.exec(value);
  console.log(result);
});
// ----------------------------------------------------------------------------------------------------------------------------
// VALIDAR MATRÍCULA COCHE
// CASO A: Vamos a validar una matrícula de coche moderna, está compuesta por 4 dígitos y tres letras:
const patternPlate1 = /^\d{4}(\s|-)?[A-Z]{3}$/;
const valueA = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];
valueA.forEach((value) => {
  console.log(`RegExp matches with "${value}"? -> `, patternPlate1.test(value));
});

// CASO B: Vamos a extraer por un lado la parte numérica y por otro las letras.
const patternPlate2 = /^(\d{4})(\s|-)?([A-Z]{3})$/;
valueA.forEach((value) => {
  const result = patternPlate2.exec(value);
  console.log(result);
});
// ----------------------------------------------------------------------------------------------------------------------------
//  EXTRAER IMÁGENES DE UN FICHERO HTML
// Una utilidad divertida es implementar una aspiradora de imagenes, es decir de un HTML extraer de todos los
// tags img el contenido de src.
// CASO A1: de una sola línea
// const patternIMGA1 = /^<img src=(".{1,}\.(png|jpg|jpeg)")\/>$/i;
const patternIMGA1 = /src=(.{1,}"|')/;
const valueA1 = `<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.jpg"/>`;
console.log(
  `RegExp matches with "${valueA1}"? -> `,
  patternIMGA1.test(valueA1)
);
const resultA1 = patternIMGA1.exec(valueA1);
console.log(resultA1);

// CASO A2: de un HTML extraer todos los src de todos los objetos img
// const patternIMGA2 = /<img src=(".{1,}\.(png|jpg|jpeg)")\/>/gim;
const patternIMGA2 = /<img.*? src=(.{1,}"|')/gim
const valueA2 = `<html>
<body>
<img src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"/>
<h1>ejemplo</h1>
<img src="https://github.githubassets.com/images/modules/logos_page/GitHubMark.png"/>
</body>
</html>`;
console.log(
  `RegExp matches with "${valueA2}"? -> `,
  patternIMGA2.test(valueA2)
);
const resultA2 = valueA2.match(patternIMGA2);
console.log(resultA2);

// ----------------------------------------------------------------------------------------------------------------------------
// VALIDAR SINTAXIS TARJETA DE CRÉDITO
// Que una máster card tiene una longitud de 16 caracteres (numeros).
// Que tiene que empezar con 50,51,52,53,54,55.
// Qué lo normal es que se agrupen en conjuntos de 4 digitos.
// CASO B1: Vamos a validar los siguiente formatos:

const patternCreditCard =
  /^(5[1-5]\d{2})(\s|-)?(\d{5})(\s|-)?(\d{3})(\s|-)?(\d{4})$/;
const valueB1 = [
  "5299 64000 000 0000",
  "5299-64000-000-0000",
  "5299640000000000",
];
valueB1.forEach((value) => {
  console.log(
    `RegExp matches with "${value}"? -> `,
    patternCreditCard.test(value)
  );
});

// CASO B2: Vamos a extraer cada grupo de cuatro digitos.
const patternCreditCardB2 =
  /^(5[1-5]\d{2})(\s|-)?(\d{4})((\d{1})(\s|-)?(\d{3}))(\s|-)?(\d{4})$/;
const valueB2 = [
  "5299 64000 000 0000",
  "5299-64000-000-0000",
  "5299640000000000",
];
valueB2.forEach((value) => {
  const resultB2 = patternCreditCardB2.exec(value);
  console.log(resultB2);
});

// BUSCAR Y VALIDAR EXPRESIONES REGULARES
// Comprobar si una clave es fuerte o no.

// A. Complejo: que tenga al menos los siguiente caracteres: una minuscula, una mayuscula, un
// numero y un caracter especial.
const patternPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{4,}$/;

// B. Moderado: Que tenga al menos los siguientes caracteres: una minuscula, una mayuscula, un
// numero y al menos 8 caracteres de longitud.
// const patternPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

const value5 = ["Le5+pupu", "7878BbB@", "Le5+", "7878BbbB", "Lee+pupu"];
value5.forEach((value) => {
  console.log(`RegExp matches with "${value}"? -> `, patternPassword.test(value));
});

// Validar que una URL está bien formada
const patternURL = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
const value6 = ["https://www.lemoncode.net", "lemoncode.net", "www.lemoncode.net", "://www.lemoncode.net", "htt://www.lemoncode.net", "lemoncode"];
value6.forEach((value) => {
  console.log(`RegExp matches with "${value}"? -> `, patternURL.test(value));
});

// Validar que un color en Hexadecimal está bien formado
const patternHexColour = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
const value7 = ["#FF0000", "#0000FF", "#7e7385", "#7e#7e", "1234567"];
value7.forEach((value) => {
  console.log(`RegExp matches with "${value}"? -> `, patternHexColour.test(value));
});