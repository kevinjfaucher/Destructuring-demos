/*

The JavaScript slice() method is used to extract a portion of
 an array into a new array. It does not modify the original array but returns a
 new one based on the specified start and end indices.



 How slice() Works:

    Syntax: array.slice(start, end)
        start: The index to start slicing from (inclusive).
        end: The index to stop slicing (exclusive). 
        If not provided, slice() will go till the end of the array.
*/

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// Extract a portion of the array from index 1 to index 3 (3 is excluded)
let slicedFruits = fruits.slice(1, 3);

console.log(slicedFruits); // Output: ["banana", "cherry"]
console.log(fruits);       // Original array remains unchanged: ["apple", "banana", "cherry", "date", "elderberry"]


/*
Explanation:

    fruits.slice(1, 3) extracts elements starting from index 1 
    ("banana") up to index 3 ("cherry", but does not include "date").
    The original array fruits remains unchanged.

*/