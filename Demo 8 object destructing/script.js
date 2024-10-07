// Example object
const person = { name: "Alice", age: 25, country: "USA" };

// Destructure the object into variables
const { name, age } = person;

console.log(name); // Output: "Alice"
console.log(age);  // Output: 25

/*
The { name, age } pattern pulls out the name and age properties from the person object.
The values "Alice" and 25 are stored in separate variables name and age.

*/

// --------------------------------------------------------------------------------------

// You can rename the variables during destructuring if you want:

const book = { title: "1984", author: "George Orwell", year: 1949 };

// Destructure and rename variables
const { title: bookTitle, author: writer } = book;

console.log(bookTitle); // Output: "1984"
console.log(writer);    // Output: "George Orwell"

/*

Explanation:

    { title: bookTitle, author: writer } renames:
        title to bookTitle
        author to writer
    Now, bookTitle holds the value "1984" and writer holds "George Orwell".

*/

// ------------------------------------------------------------------------------

const user = { username: "john_doe" };

// Destructure with a default value
const { username, role = "user" } = user;

console.log(username); // Output: "john_doe"
console.log(role);     // Output: "user"  (default value used)

