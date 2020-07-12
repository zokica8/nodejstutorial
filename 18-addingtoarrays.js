'use strict';

// an empty array
// 1d array
let fruits = [];

// with the index, you can expand the array. The key is that the index is the first index off the end of array.
fruits[0] = 'orange';
fruits[1] = 'apple';

// push method
// array is an object in JavaScript!!! Think of array as a stack data structure.
fruits.push('pear');
fruits.push('peach');
fruits.push('banana');
console.log(fruits);

// 2d array
let animals = [];

//animals.push('dog', 'cat', 'mouse');
animals.push(['dog', 'cat', 'mouse']);
animals.push(['lion', 'jaguar', 'tiger']);

for (let i = 0; i < animals.length; i++) {
  for (let j = 0; j < animals[i].length; j++) {
    console.log(i, j, animals[i][j]);
  }
}
