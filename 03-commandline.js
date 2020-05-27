'use strict';

let greeting = 'Hello';
let name = process.argv[2];

console.log(greeting, name);

console.log(process.argv[0]); // the location of the NodeJS program
console.log(process.argv[1]); // the location of the program (file) that you are running
console.log(process.argv[2]); // prints the text that you typed on cmd, as an input. No input === undefined, first cmd argument
console.log(process.argv[3]); // 2nd cmd argument
