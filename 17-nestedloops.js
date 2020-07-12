'use strict';

// a nested loop is a loop within a loop

// used to visit each element from a 2d array

let animalTable = [
  ['dog', 'cat'],
  ['giraffe', 'elephant', 'rhino'],
];

/*
for (let i = 0; i < animalTable.length; i++) {
  let row = animalTable[i];

  for (let j = 0; j < row.length; j++) {
    row[j] = 'Hello';
  }
}
*/

for (let i = 0; i < animalTable.length; i++) {
  console.log(animalTable[i]);
}

/*
for (let i = 0; i < animalTable.length; i++) {
  let row = animalTable[i];

  for (let j = 0; j < row.length; j++) {
    console.log(i, j, row[j]);
  }
}
*/

for (let i = 0; i < animalTable.length; i++) {
  for (let j = 0; j < animalTable[i].length; j++) {
    console.log(i, j, animalTable[i][j]);
  }
}
