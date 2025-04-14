/* Calcular el precio con descuento: Crear un algoritmo que permita ingresar 
el precio de un producto y aplicar un descuento del 15% si el precio es mayor 
a 1000. Mostrar el precio final. */
let precio = parseFloat(prompt("Ingrese el precio (se admite decimal):"));
if (precio >= 1000) {
  document.writeln("El precio con 15% de descuento es: ", precio * 0.85);
} else {
  document.writeln("No aplica el descuento, precio final: ", precio);
}
