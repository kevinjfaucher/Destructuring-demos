/*
JavaScript Destructuring is a way to unpack values from
arrays or properties from objects into distinct variables. 
It allows you to extract data quickly without writing multiple lines of code. 
This makes your code cleaner and more readable.
*/

// Original array
const fruits = ['Apple', 'Banana', 'Cherry'];

// Destructuring
const [first, second] = fruits;

console.log(first);  // Output: 'Apple'
console.log(second); // Output: 'Banana'

// In the example above, first will have the value 'Apple' 
// and second will have the value 'Banana' from the fruits array.

// Original object
const person = { name: 'John', age: 30 };

// Destructuring
const { name, age } = person;

console.log(name); // Output: 'John'
console.log(age);  // Output: 30


/*
Here, name and age are created as 
separate variables that contain the values from the person object.
*/