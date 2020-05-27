'use strict';

let number = 10;

console.log('number == 10', number == '10'); // equality test operator
console.log('number === 10', number === '10'); // identity test operator
// similar, there is a huge difference, though!
/** With ==, you are testing ONLY if the value is same, NOT the type of a value or variable!!!
 * With ===, you are testing BOTH the value AND the type of the value (variable!)
 */

console.log('number < 10', number < 5);
console.log('number > 10', number > 5);
console.log('number <= 10', number <= 10);
console.log('number >= 10', number >= 10);

console.log('number != 10', number != '10'); // not equal
console.log('number !== 10', number !== '10'); // not identical
// like == and === for negation, same rules apply, only vice versa!
