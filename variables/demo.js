// In ES5, we created variables with "var":
var variable1 = "foo";

// ES6 gives us two different ways to create variables:
let variable2 =  "foo again";
const variable3 = "foo once more";


// The "var" keyword defines variables in either "global scope" or "function scope":

// GLOBAL SCOPE EXAMPLE:
var carName = "Volvo";
// code here can use carName
function myFunction() {
    // code here can also use carName 
}

// FUNCTION SCOPE EXAMPLE:
// code here can NOT use carName

function myFunction() {
    var carName = "Volvo";
    // code here CAN use carName
}


// The "let" keyword defines variables in "block scope". Otherwise, it behaves like a normal variable

// BLOCK SCOPE EXAMPLE
if (1 === 1) {
    let carName = "Volvo"
    var otherName = "BMW"
}
// code here can NOT use carName
// but it can use otherName


// the "const" keyword behaves just like "let", but they cannot be reassigned:
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error

