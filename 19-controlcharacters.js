'use strict';

console.log('Hello\nHello'); // \n - new line control character
console.log('Hello\tHello'); // \t - tab control character

console.log(); // intended for debugging

process.stdout.write('lion');
process.stdout.write('tiger');

let number = 8;
process.stdout.write(number.toString()); // the argument must be a string or a Buffer type!
