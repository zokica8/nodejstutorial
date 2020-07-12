'use strict';

// create a multiplication table
// a 2d array
let multiplication = [];

for (let i = 1; i <= 10; i++) {
  let row = [];
  for (let j = 1; j <= 10; j++) {
    row.push(i * j);
  }
  multiplication.push(row);
}

for (let i = 0; i < multiplication.length; i++) {
  let row = multiplication[i];
  for (let j = 0; j < row.length; j++) {
    let value = row[j];
    process.stdout.write(value + '\t');
  }
  console.log();
}
