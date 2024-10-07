const employee = {
    fullName: 'John Doe',
    position: 'Developer',
    contact: {
      email: 'john.doe@example.com',
      phone: '123-456-7890'
    }
  };
  
  // Destructuring with renaming and extracting nested properties
  const { fullName: empName, position, contact: { email } } = employee;
  
  console.log(empName);  // Output: "John Doe"
  console.log(position); // Output: "Developer"
  console.log(email);    // Output: "john.doe@example.com"
  
/*
    Renaming properties:
        fullName: empName → creates a variable empName with the value of fullName ("John Doe").

    Extracting nested properties:
        contact: { email } → accesses contact and extracts email ("john.doe@example.com").

    Output:
        empName: "John Doe"
        position: "Developer"
        email: "john.doe@example.com"

The original object is not modified. This syntax just creates new variables with the specified values.
*/