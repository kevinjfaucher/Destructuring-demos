// Function that accepts an object as parameter
function greetUser({ name, age }) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
  }
  
  // Example object
  const user = { name: "Mark", age: 30 };
  
  // Call the function with the object
  greetUser(user); // Output: "Hello, Mark! You are 30 years old."
  