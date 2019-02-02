// async/await is a useful way to write asynchronous code that looks synchronous

// Here's an example of asynchronous code:

let getPublisher = () => {
    return axios.get('/books').then((response) => {
        let firstAuthor = response.data.books[0].author;
        return axios.get(`/authors/${firstAuthor}`)
    }).then((response) => {
        return response.data.publisher;
    })
}

// The code above needed to make two asynchronous calls to the server. 
// It uses promises (i.e. .then()) to get the job done

// The async/await version is easier to read

let getPublisher = async () => {
    let response1 = await axios.get('/books');
    let firstAuthor = response1.data.books[0].author;
    let response2 = await axios.get(`/authors/${firstAuthor}`);
    return response2.data.publisher;
}

// The "async" keyword should be typed right before a function definition.
// This will enhance your function by making it return a promise (behind the scenes, that is)

// The "await" keyword is only allowed to be used in "async" functions
// You can use "await" in front of then-able function calls.
// The code written after your "await" line will wait patiently until the "await" promise is resolved


// Here's an example of error handling with async/await
const getStuffErrorTryCatch = async () => {
    try {
        const response = await fetch('https://google.com');
        const responseData = await response.text()
        console.log(responseData)
    } catch (error) {
        // handle error here
        console.log(error)
    }
 }