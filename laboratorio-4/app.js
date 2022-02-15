// RECOGER EN VARIABLES VALOR DE LOS INPUTS
var importeTotal = () => parseInt(document.getElementById("input-a").value);
var importeEntregado = () => parseInt(document.getElementById("input-b").value);

// FUNCIONES PARA CADA OPERACIÓN
var addition = () => importeTotal() + importeEntregado();
var subtraction = () => importeTotal() - importeEntregado();
var multiplication = () => importeTotal() * importeEntregado();
var division = () => importeTotal() / importeEntregado();

// VALIDAR QUE SE HAN COMPLETADO LOS DOS OPERANDOS Y MOSTRAR RESULTADO
// suma
var showAdditionResult = () => {
  if (isNaN(importeTotal()) || isNaN(importeEntregado())) {
    document.getElementById("result").innerText = "Revisa tus operandos";
  } else {
    document.getElementById("result").innerText = addition();
  }
};
document.getElementById("addition").addEventListener("click", showAdditionResult);

// resta
var showSubtractionResult = () => {
  if (isNaN(importeTotal()) || isNaN(importeEntregado())) {
    document.getElementById("result").innerText = "Revisa tus operandos";
  } else {
    document.getElementById("result").innerText = subtraction();
  }
};
document.getElementById("subtraction").addEventListener("click", showSubtractionResult);

// multiplicación
var showMultiplicationResult = () => {
  if (isNaN(importeTotal()) || isNaN(importeEntregado())) {
    document.getElementById("result").innerText = "Revisa tus operandos";
  } else {
    document.getElementById("result").innerText = multiplication();
  }
};
document.getElementById("multiplication").addEventListener("click", showMultiplicationResult);

// división
var showDivisionResult = () => {
  if (isNaN(importeTotal()) || isNaN(importeEntregado())) {
    document.getElementById("result").innerText = "Revisa tus operandos";
  } else {
    document.getElementById("result").innerText = division();
  }
};
document.getElementById("division").addEventListener("click", showDivisionResult);