'use strict';

// the if statement
let fahrenheit = process.argv[2];
let celsius = (fahrenheit - 32) / 1.8;

if (celsius < 20) {
  console.log('Too cold');
} else {
  console.log('Too hot');
}
