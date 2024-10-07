const personOne = {
    name: "Sam",
    age: 28,
    address: {
      city: "New York",
      state: "NY"
    }
  };
  
  const personTwo = {
    age: 35,
    favoriteFood: "Pizza",
    address: {
      city: "Los Angeles",
      state: "CA"
    }
  };
  
  // Create a new object by combining personOne and personTwo
  const personThree = { ...personOne, ...personTwo };
  
  console.log("personThree:", personThree);
  
  /*
    The spread operator copies all properties from personOne first.
    Then, properties from personTwo overwrite the ones from personOne if they have the same key.
    age is overwritten to 35 (from personTwo).
    address is overwritten to { city: "Los Angeles", state: "CA" }.

  */