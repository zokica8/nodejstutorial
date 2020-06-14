'use strict';

// my solution to the exercise!!!
console.log(Math.PI);

let divider = 1;
let quotient = 1;
let pi = 1;
let sign = 1;
let counter = 0;

while (counter < 1000000) {
  divider += 2;
  quotient = (1 / divider) * sign;
  pi -= quotient;
  sign *= -1;
  counter++;
}

console.log(pi * 4);
