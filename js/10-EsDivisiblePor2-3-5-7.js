/* Escribe un programa que pida un número y nos diga si es divisible 
por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro) */
let numDivisible = parseInt(prompt("Ingrese un numero:"));
if (numDivisible % 2 == 0) {
  document.writeln("El numero ", numDivisible, " es divisible por 2");
} else if (numDivisible % 3 == 0) {
  document.writeln("El numero ", numDivisible, " es divisible por 3");
} else if (numDivisible % 5 == 0) {
  document.writeln("El numero ", numDivisible, " es divisible por 5");
} else if (numDivisible % 7 == 0) {
  document.writeln("El numero ", numDivisible, " es divisible por 7");
} else {
  document.writeln(
    "El numero ",
    numDivisible,
    " no es divisible por 2, 3, 5 o 7"
  );
}