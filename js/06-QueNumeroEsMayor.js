/* Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor */
let numOne = parseInt(prompt("Dime un numero:"))
let numTwo = parseInt(prompt("Dime otro numero:"))
if (numOne > numTwo) {
    document.writeln("El numero mayor es: ", numOne)
} else if (numTwo > numOne) {
    document.writeln("El numero mayor es: ", numTwo)
}else {
    document.writeln("Ambos numero son iguales")
}