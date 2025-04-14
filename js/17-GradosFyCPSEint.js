/* Convertir grados Fahrenheit a Celsius: Crear un algoritmo que permita al usuario 
ingresar una temperatura en grados Fahrenheit y convertirla a grados Celsius. La 
fórmula para convertir de Fahrenheit a Celsius es: C= (5/9)​*(F−32) */
let F = parseFloat(prompt("Ingrese los grados Fahrenheit"));
let C = (F - 32) * 5/9;
let CRedondeado = C.toFixed(2);
document.writeln("Los ", F, "F° que ingreso serian: ", CRedondeado,"C°")