/* Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres. */
let numOne = parseInt(prompt("Dime un nomero:"))
let numTwo = parseInt(prompt("Dime otro nomero:"))
let numThree = parseInt(prompt("Dime otro mas:"))
if (numOne > numTwo && numOne > numThree) {
    document.writeln("El numero mayor es: ", numOne)
} else if (numTwo > numOne && numTwo > numThree) {
    document.writeln("El numero mayor es: ", numTwo)
} else if (numThree > numOne && numThree > numTwo) {
    document.writeln("El numero mayor es: ", numThree)
} else {
    document.writeln("Los tres numeros son iguales")
}