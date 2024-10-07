function printColors([primaryColor, secondaryColor]) {
    console.log(`Primary Color: ${primaryColor}`);
    console.log(`Secondary Color: ${secondaryColor}`);
  }
  
  // Example array
  const colors = ["red", "blue", "green"];
  
  // Call the function with the array
  printColors(colors);
  
/*
The function printColors expects an array as its parameter.
Inside the parameter list ([primaryColor, secondaryColor]), the array is destructured.

    primaryColor will be assigned "red" and secondaryColor will be assigned "blue".

When you run the function, it prints:

*/