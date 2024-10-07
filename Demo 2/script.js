// Example array
const colors = ["red", "blue", "green"];

// Destructuring to pull values
const [firstColor, secondColor] = colors;

console.log(firstColor); // Output: "red"
console.log(secondColor); // Output: "blue"

/*
Step 1: We have an array called colors that contains three strings: "red", "blue", and "green".

Step 2: The line const [firstColor, secondColor] = colors; is using array destructuring. 

Here’s how it works:

    The left-hand side [firstColor, secondColor] is a pattern that
    specifies how to extract values from the array.
    This pattern matches the first and second items in the array colors.
    As a result, the variable firstColor is assigned the value "red", 
    and secondColor is assigned the value "blue".

Step 3: The variables firstColor and secondColor can then be used 
like regular variables. When we console.log(firstColor), we get "red", 
and console.log(secondColor) gives "blue".
*/

// -------------------------------------------------------------
const numbers = [10, 20, 30, 40, 50];
const [firstNumber, , thirdNumber] = numbers;

console.log(firstNumber);  // Output: 10
console.log(thirdNumber);  // Output: 30

/*
Step 1: We have an array called numbers with five numbers: 10, 20, 30, 40, 50.

Step 2: The destructuring pattern [firstNumber, , thirdNumber] is a bit different:

    Notice the comma between firstNumber and thirdNumber.
    This comma skips the second element in the array (20).
    firstNumber captures the value 10 (the first element), and thirdNumber 
    captures the value 30 (the third element).

Step 3: When you console.log(firstNumber), it outputs 10. Similarly, 
console.log(thirdNumber) outputs 30, as we skipped over 20.

*/


// -------------------------------------------------------------------------------------

