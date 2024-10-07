// Function that returns an array
function getFruitPair() {
    return ["apple", "banana"];
  }
  
  // Destructure the return value of the function
  const [firstFruit, secondFruit] = getFruitPair();
  
  console.log(`First Fruit: ${firstFruit}`);    // Output: "First Fruit: apple"
  console.log(`Second Fruit: ${secondFruit}`);  // Output: "Second Fruit: banana"
  

  /*
    getFruitPair is a function that returns an array ["apple", "banana"].
    When calling the function, we use destructuring to capture the return values into firstFruit and secondFruit.
    firstFruit now holds "apple", and secondFruit holds "banana".

  */

// --------------------------------------------------------------------------------------------------------

// Function that returns an array
function getUserInfo() {
    return ["John", "Doe"];  // Returns first name and last name only
  }
  
  // Destructuring with default values
  const [firstName, lastName, age = 30] = getUserInfo();
  
  console.log(`First Name: ${firstName}`);  // Output: "First Name: John"
  console.log(`Last Name: ${lastName}`);    // Output: "Last Name: Doe"
  console.log(`Age: ${age}`);               // Output: "Age: 30"
  