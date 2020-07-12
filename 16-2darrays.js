'use strict';

// a 2d array
let animalTable = [
  ['dog', 'cat'],
  ['giraffe', 'elephant', 'rhino'],
];

console.log(animalTable[0]);
console.log(animalTable[1]);
console.log(animalTable[0][1]);
console.log(animalTable[1][1]);

animalTable[1][2] = 'lion'; // setting the element of the 2d array (possible with 1d array too).

console.log(animalTable[1][2]);
