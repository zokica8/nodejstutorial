/* Best practices when using and declaring variables:
 1. use the 'use strict'; command at the top. This forces you to use keywords for your variables! 
 You can make mistakes when you don't define keywords for your variables!
 2. This also will force you to use different variable names, because it will not allow you to declare variables with the same name.
 3. var and let keywords for declaring variables. You use let 97% of the time today.
 4. You should declare a variable ONCE in your program.
*/

'use strict';

let message = 'Message';

console.log(message);

message = 'New Message'; // you are re-declaring the existing variable here.

console.log(message);
