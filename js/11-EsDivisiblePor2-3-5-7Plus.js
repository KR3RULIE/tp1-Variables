/* Añadir al ejercicio anterior que nos diga por cuál de los cuatro 
es divisible (hay que decir todos por los que es divisible) */
let numDivisible = parseInt(prompt("Ingrese un numero:"));
let divisores = [];

if (numDivisible % 2 === 0) {
  divisores.push(2);
}
if (numDivisible % 3 === 0) {
  divisores.push(3);
}
if (numDivisible % 5 === 0) {
  divisores.push(5);
}
if (numDivisible % 7 === 0) {
  divisores.push(7);
}

if (divisores.length > 0) {
  document.writeln(
    "El número ",
    numDivisible,
    " es divisible por: ",
    divisores.join(", ")
  );
} else {
  document.writeln(
    "El número ",
    numDivisible,
    " no es divisible por 2, 3, 5 o 7"
  );
}