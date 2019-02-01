// Let's say we need to coalesce these variables into one object:
let id = "1234";
let firstName = "Sue";
let lastName = "Geller";
let email = "sg@suegeller.com";


// This is how we would do it with ES5 Javascript:
let obj = {
    id: id,
    firstName: firstName,
    lastName: lastName,
    email: email,
    passwordHash: passwordHash
}

// ^^^ Notice how redundant that was! ES6 gives us a short cut:
let obj2 = {
    id, 
    firstName,
    lastName,
    email,
    password
}

// ^^^ We're still creating an object literal with { }. 
// The keys of this new object are the variable names themselves
// The values of the object are the values of those variables

// You're still free to add normal key/value pairs, too:
let obj3 = {
    id,
    firstName,
    preferredEmail: email,
    nickname: "Charlie"
}