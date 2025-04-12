/* Escribe un programa que pida un número y nos diga si es divisible 
por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro) */
let numDivisible = parseInt(prompt("Ingrese un numero:"));
if (
  numDivisible % 2 == 0 ||
  numDivisible % 3 == 0 ||
  numDivisible % 5 == 0 ||
  numDivisible % 7 == 0
) {
  document.writeln(
    "El numero que ingreso SI es divisible por alguno de los siguientes numeros: 2, 3, 5 o 7"
  );
} else {
  document.writeln(
    "El numero que ingreso NO es divisible por alguno de los siguientes numeros: 2, 3, 5 o 7"
  );
}
