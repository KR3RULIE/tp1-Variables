/* Calcular el perímetro y área de un rectángulo: Crear un algoritmo que permita al usuario 
ingresar el largo y el ancho de un rectángulo, y calcular su perímetro y área. Las fórmulas son:
Perímetro: P = 2*(largo+ancho)
Área: A=largo×ancho */
let largo = parseInt(prompt("Ingrese el largo del rectangulo:"))
let ancho = parseInt(prompt("Ingrese el ancho del rectangulo:"))
document.writeln("Perimetro: ", 2*(largo+ancho), "cm")
document.writeln("<br>Area: ", largo*ancho, "cm")