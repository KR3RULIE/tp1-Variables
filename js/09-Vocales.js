/* Escribe un programa que pida una frase y escriba las vocales que aparecen */
let phrase = prompt("Ingrese una frase de 5(cinco) caracteres:");
let vowels = "";
if (phrase.length <= 5) {
  if (
    phrase.charAt(0) === "a" ||
    phrase.charAt(0) === "A" ||
    phrase.charAt(0) === "e" ||
    phrase.charAt(0) === "E" ||
    phrase.charAt(0) === "i" ||
    phrase.charAt(0) === "I" ||
    phrase.charAt(0) === "o" ||
    phrase.charAt(0) === "O" ||
    phrase.charAt(0) === "u" ||
    phrase.charAt(0) === "U"
  ) {
    vowels += phrase.charAt(0);
  }
  if (
    phrase.charAt(1) === "a" ||
    phrase.charAt(1) === "A" ||
    phrase.charAt(1) === "e" ||
    phrase.charAt(1) === "E" ||
    phrase.charAt(1) === "i" ||
    phrase.charAt(1) === "I" ||
    phrase.charAt(1) === "o" ||
    phrase.charAt(1) === "O" ||
    phrase.charAt(1) === "u" ||
    phrase.charAt(1) === "U"
  ) {
    vowels += phrase.charAt(1);
  }
  if (
    phrase.charAt(2) === "a" ||
    phrase.charAt(2) === "A" ||
    phrase.charAt(2) === "e" ||
    phrase.charAt(2) === "E" ||
    phrase.charAt(2) === "i" ||
    phrase.charAt(2) === "I" ||
    phrase.charAt(2) === "o" ||
    phrase.charAt(2) === "O" ||
    phrase.charAt(2) === "u" ||
    phrase.charAt(2) === "U"
  ) {
    vowels += phrase.charAt(2);
  }
  if (
    phrase.charAt(3) === "a" ||
    phrase.charAt(3) === "A" ||
    phrase.charAt(3) === "e" ||
    phrase.charAt(3) === "E" ||
    phrase.charAt(3) === "i" ||
    phrase.charAt(3) === "I" ||
    phrase.charAt(3) === "o" ||
    phrase.charAt(3) === "O" ||
    phrase.charAt(3) === "u" ||
    phrase.charAt(3) === "U"
  ) {
    vowels += phrase.charAt(3);
  }
  if (
    phrase.charAt(4) === "a" ||
    phrase.charAt(4) === "A" ||
    phrase.charAt(4) === "e" ||
    phrase.charAt(4) === "E" ||
    phrase.charAt(4) === "i" ||
    phrase.charAt(4) === "I" ||
    phrase.charAt(4) === "o" ||
    phrase.charAt(4) === "O" ||
    phrase.charAt(4) === "u" ||
    phrase.charAt(4) === "U"
  ) {
    vowels += phrase.charAt(4);
  }
  if (vowels.length > 0) {
    document.writeln("Estas son las vocales encontradas: " + vowels);
  } else {
    document.writeln("No se encontraron vocales en tu oración.");
  }
} else {
  alert("¡EXEDISTE LA CANTIDAD MAXIMA DE CARACTERES!");
}