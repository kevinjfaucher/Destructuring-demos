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

Step 3: When you console.log(firstNumber), it outputs 10. Similarly, console.log(thirdNumber)
outputs 30, as we skipped over 20.


*/