// You're already used to "packing" things into new arrays and objects, like so:
let array = [ 1, 2, "foo"];
let object = {
    key1: "hello",
    key2: "goodbye"
}

// With ES6 destructuring, you're now able to "unpack" arrays and objects into separate variables:
let [ first, second, third ] = array;
first === 1;
second === 2;
third === "foo";

let { key1, key2 } = object;
key1 === "hello";
key2 === "goodbye";


// It's still possible to "unpack" arrays and objects without 
// destructuring, but you would need a new line for each unpacked variable:
let first = array[0];
let second = array[1];
let third = array[2];

let key1 = object.key1;
let key2 = object.key2;