//
// Programa de ejemplo - Hola mundo!
//

console.log('Hola mundo!');

//
// inicilicio valirables
//
let tamano = parseFloat(prompt('Digite el tamaño de triangulo'));
let linea = 1;

let simbolo = '*';

while (linea <= tamano) {
    while (linea <= tamano) {
        console.log(simbolo);
        simbolo = simbolo + ' *';
        linea++;
    }
    linea++;
}