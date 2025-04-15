/* Pedir la edad y decir si es mayor de edad: Crear un algoritmo que 
pida la edad del usuario y determine si es mayor de edad (18 años o más). */
let age = parseInt(prompt("Dime tu edad:"));
if (age >= 18) {
  document.writeln("Eres mayor de edad");
} else {
  document.writeln("No eres mayor de edad");
}