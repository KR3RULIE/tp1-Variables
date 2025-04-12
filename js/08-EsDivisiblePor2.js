/* Escribe un programa que pida un número y diga si es divisible por 2 */
let numDivisible = parseInt(prompt("Ingrese un numero:"))
if (numDivisible % 2 == 0) {
    document.writeln("El numero que ingreso SI es divisible por 2")
} else {
    document.writeln("El numero que ingreso NO es divisible por 2")
}