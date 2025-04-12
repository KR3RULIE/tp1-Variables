/* Escribe un programa que pida una frase y escriba las vocales que aparecen */
let phrase = prompt("Escribe una frase:")
let vowels = "";
for (let i = 0; i < phrase.length; i++) {
    let char = phrase[i].toLowerCase();
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        vowels += char;
    }
}
if (vowels.length > 0) {
    document.writeln(vowels);
} else {
    document.writeln("No se encontraron vocales");
}
