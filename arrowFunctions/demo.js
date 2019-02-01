// Arrow functions are just like regular functions, but their syntax is more flexible

// Instead of defining functions like this:
let myFunction = function(arg1, arg2) {
    return arg1 + arg2;
}

//... you can use the new ES6 arrow syntax:
let myFunction = (arg1, arg2) => {
    return arg1 + arg2;
}

// if your function only has one input parameter, you can omit the parentheses:
let myFunction = arg1 => {
    return arg1 + 2;
}

// You can even omit the curly braces, but keep in mind:
// 1) An arrow function with no curly braces can only have one line of code
// 2) That line of code will be returned by the function
let myfunction = arg1 => arg1 + 2;


// This syntax is incredibly useful for simple uses of .map() or .filter()
let movieTitles = movies.map(movie => movie.title);

// Without arrow functions, the above would have been written like this:
let movieTitles = movies.map(function(movie) {
    return movie.title;
})


// Arrow functions let you provide default values for parameters that don't get arguments passed in:
let defaults = (name = "noname", age = 0, occupation = "unemployed") => {
    return name + age + occupation
}

// The old way of providing default values is way more verbose:
let defaults = function(name, age, occupation) {
    name = name || "noname";
    age = age || 0;
    occupation = occupation || "unemployed";
    return name + age + occupation
}