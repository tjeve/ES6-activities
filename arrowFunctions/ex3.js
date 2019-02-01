

let getFullName = user => {
    let fullName = user.firstName + user.lastName;
    return fullName
}

// Calling this function will error out if you don't provide input arguments
// Change the function definition above to include default values that won't break code execution
getFullName();