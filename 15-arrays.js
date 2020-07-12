'use strict';

// An array is a numbered (indexed) list of items!!!

// Various ways to initialize an array in JavaScript:
let days = ['Monday', 'Tuesday', 2, 'Wednesday'];

// In JavaScript, it is possible to have an array where items are of a different type!!!
// Elements in the array are indexed, starting from 0!!!

// dereferencing the array.
console.log(days[0]); // accesing the 1-st element of the array.
console.log(days[1]); // accessing the 2-nd element of the array.

let numbers = [1, 2, 3, 3, 5, 6, 10];

console.log(numbers.length); // length of the numbers array

for (let i = 0; i < numbers.length; ++i) {
  console.log(i); // index of an array
  console.log(numbers[i]); // getting the element at the specified index!
  console.log('Item', i, 'in numbers array', numbers[i]);
}
