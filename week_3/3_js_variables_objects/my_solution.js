// I paired with my invisible buddy on this challenge. Just kidding. I did this alone :C

// Pseudocode

// __________________________________________
// Write your code below.

  // "The value of secretNumber should be a number."
    var secretNumber = 31;
  // "The value of secretNumber should be 7."
    secretNumber = 7;
  // "The value of password should be a string."
    var password = "I love whales";
  // "The value of password should be 'just open the door'."
    password = "just open the door";
  // "The value of allowedIn should be a boolean."
    var allowedIn = false;  
  // "members instanceof Array / Reference Error:  members is not defined"
    var members = [0, 1, 2, 3, 4];
  // "The first element in the value of members should be 'John'."
    members = ["John", "Paul", "George", "Ringo"];
  // "The fourth element in the value of members should be 'Mary'."
    members = ["John", "Paul", "George", "Mary"];

// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here.

  var secretNumber = 7;
  var password = "just open the door";
  var allowedIn = false;
  var members = ["John", "Paul", "George", "Mary"];

/* I improved this code in the Refactored Version by removing unnecessary steps and changes that were part of the assignment. 
Instead I wrote the code to fulfill the final "asset" asks.*/

// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 

/*I really liked this coding part and thought that it wasn't too bad! 
I really enjoyed this a lot more than the Code Combat assignment which took 
what seemed like forever to accomplish learning 3 different tools in JS.

In terms of feedback I think that DBC should have given specific instructions
on how to run .js files from command line. The instructions mentions "to run it from node.js"
but I found it really hard to find out how to run my .js files. Anyways, it 
would be great to have simple instructions on how to do this for future cohorts.*/
// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)


