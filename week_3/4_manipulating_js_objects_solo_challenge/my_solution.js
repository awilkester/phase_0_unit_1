// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.

2. Give adam a name property with the value "Adam".

3. Add a spouse property to terah and assign it the value of adam.

4. Change the value of the terah weight property to 125.

5. Remove the eyeColor property from terah.

6. Add a spouse property to adam and assign it the value of terah.

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".

11. Add a children property to adam and assign it the value of terah children.


*/

// __________________________________________
// Write your code below.

// Define a variable Adam using literal notation to assign with no properties
var adam = {};

// #1 Name adam object
adam.name = "Adam";

// #2 Link Adam to Terah via spouse property
terah.spouse = adam;

// #3 Update Terah's weight
terah.weight = 125;

// #4 Remove Terah's eye color (Propery of variable terah)
delete terah.eyeColor;

// #5 Link Terah to Adam via spouse property
adam.spouse = terah;

// #6 Define a variable for Terah's children using literal notation to assign with no properties
terah.children = {};

// #7 Add Carson object to Terah's children property
terah.children.carson = {};
terah.children.carson.name = "Carson";

// #8 Add Carter object to Terah's children property
terah.children.carter = {};
terah.children.carter.name = "Carter";

// #9 Add Colton object to Terah's children property
terah.children.colton = {};
terah.children.colton.name = "Colton";

// #10 Link Adam's children property with the value of Terah's
adam.children = {};
adam.children = terah.children;

// __________________________________________
/* Reflection: Use the reflection guidelines
// Overall I really enjoyed this challenge as it put 
some of the JS readings to good use! I thought this was 
much less tedious than challenge #2 and much more useful. 
I think that the language of some of these activities could 
be improved. I was able to decipher what was intended by 
thinking about it for a while, but it definitely could have 
been more clear! Ex: asking #6 and #7.*/

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
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)