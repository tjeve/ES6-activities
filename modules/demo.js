// ES6 has its own way of handling modules
// You're already used to NodeJS modules:

// file1.js
let myVar = 2;
module.exports = myVar;

// file2.js
let number = require('./file1.js');
console.log(number) // "2"

// ES6 proposed a new syntax for modules, using the keywords "import", "export", "from", and "as"

// file1.js
export let myVar = 2;

// file2.js
import { myVar } from './file1.js';
console.log(myVar);


// In ES6 you're allowed to export multiple values from one file

// file1.js
export let myVar = 2;
export const PI = 3.14159;

// file2.js
import { myVar, PI } from './file1.js'; // Almost looks like destructuring, doesn't it?
console.log( myVar, PI )

// You can rename variables that you import using the "as" keyword;

import { myVar, PI as pie } from './file1.js';
console.log(pie);

// If you only want to export one value from a file, you can use the "default" keyword:

// file1.js
export default function hi() {
    console.log('hi')
}

// file2.js
import hi from './file1.js';
hi();