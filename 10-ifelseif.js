'use strict';

let temperature = process.argv[2];

if (temperature < 15.0) {
  console.log('Too cold.');
} else if (temperature > 15.0 && temperature < 35.0) {
  console.log('Too hot.');
} else if (temperature >= 35.0) {
  console.log('Dangerously hot!!');
} else {
  console.log('Exactly 15 degress C.');
}
