/* Determinar si un número es par o impar: Crear un algoritmo que permita al 
usuario ingresar un número y determinar si es par o impar. Mostrar el resultado. */
let numOne = parseInt(prompt("Ingrese un numero:"));
if (numOne % 2 == 0) {
  document.writeln("El numero que ingreso ES par");
} else {
  document.writeln("El numero que ingreso NO es par");
}
