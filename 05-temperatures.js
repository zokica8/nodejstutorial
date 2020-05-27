// Converting Celsius to Fahrenheit
'use strict';

let celsiusTemperature = Number(process.argv[2]);

console.log('Fahrenheit Temperature: ', celsiusTemperature * 1.8 + 32);

let fahrenheit = parseInt(process.argv[3]);
console.log('Celsius Temperature: ', (fahrenheit - 32) / 1.8);
