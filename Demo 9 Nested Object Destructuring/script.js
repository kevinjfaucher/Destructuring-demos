const employee = {
    name: "Jane",
    position: "Developer",
    details: {
      office: "New York",
      team: "Frontend",
    },
  };
  
  // Destructuring nested properties
  const {
    name,
    details: { office, team },
  } = employee;
  
  console.log(name);   // Output: "Jane"
  console.log(office); // Output: "New York"
  console.log(team);   // Output: "Frontend"
  
/*
Explanation:

    { details: { office, team } } pulls out office and 
     team from the nested details object inside employee.

    Note that details itself is not created as a separate 
    variable; only office and team are created.


*/

// -----------------------------------------------------------------------------------

const car = { brand: "Toyota", model: "Camry", year: 2020, color: "blue" };

// Destructuring with rest operator
const { brand, model, ...otherDetails } = car;

console.log(brand);        // Output: "Toyota"
console.log(model);        // Output: "Camry"
console.log(otherDetails); // Output: { year: 2020, color: "blue" }
