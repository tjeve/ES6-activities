// file2.js
import { myVar } from './file1.js';
console.log(myVar);


// import { myVar, PI } from './file1.js'; // Almost looks like destructuring, doesn't it?
// console.log( myVar, PI )

// // You can rename variables that you import using the "as" keyword;

// import { myVar, PI as pie } from './file1.js';
// console.log(pie);

// import hi from './file1.js';
// hi();