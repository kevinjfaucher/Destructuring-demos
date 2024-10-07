// Example array
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// Destructuring with the rest operator to "slice"
const [firstFruit, ...remainingFruits] = fruits;

console.log(firstFruit);        // Output: "apple"
console.log(remainingFruits);   // Output: ["banana", "cherry", "date", "elderberry"]

/*
Explanation:

    Step 1: We have an array fruits with five strings: 
    
    "apple", "banana", "cherry", "date", "elderberry".

    Step 2: The destructuring pattern here is [firstFruit, ...remainingFruits]:
        firstFruit captures the first value in the array, which is "apple".
        The ... (spread or rest operator) captures the remaining values in 
        the array into a new array called remainingFruits.
        remainingFruits will now hold all the values except the 
        first one: ["banana", "cherry", "date", "elderberry"].

    Step 3: When you console.log(firstFruit), it outputs "apple".
        console.log(remainingFruits) outputs ["banana", "cherry", "date", "elderberry"], showing all the remaining items after "apple".

This pattern is handy for scenarios where you want to capture the 

first few items and then gather the remaining items into a new array.
 It’s like taking a slice of the original array, 
but using destructuring syntax instead.


*/