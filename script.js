// Copy paste teksten inn i en js fil. Lever oppgaven med link til repoet og link til aktiv side


/*
1.

Use string methods on the text variable to do the following:
 1.1 - Replace the word 'hard' with 'fun'
 1.2 - Remove the whitespace from the beginning and end of the string
 1.3 - Split the string into an array where each word is an element

 Console log each method used.
*/
let text = "       Javascript is hard    ";
//! Code 1.1 below
text = text.replace("hard", "fun");
console.log(text);

//! Code 1.2 below
text = text.trim();
console.log(text);

//! Code 1.3 below
text = text.split(" ");
console.log(text);

/*
2.

Use array methods to do the following:
 2.1 - Add a new hero to the end of the array
 2.2 - Remove the first hero of the array (Spider-Man)
 2.3 - Replace "Doctor Strange" with "Thanos"
 2.4 - Use the splice method to remove Thor and Hulk and add "Captain America"
*/
let heroes = ["Spider-Man", "Iron Man", "Doctor Strange", "Thor", "Hulk"];


//! Code 2.1 below
heroes.push("Batman");
console.log(heroes);

//! Code 2.2 below
heroes.shift();
console.log(heroes);

//! Code 2.3 below
heroes[1] = "Thanos";
console.log(heroes);

//! Code 2.4 below
heroes.splice(2, 2, "Captain America");
console.log(heroes);



/*
3.

Write a function that takes in a string as a parameter and returns the string in upper
case with an exclamation mark at the end. Use the non-arrow function syntax (function keyword).

Use a template literal in your return statement.

Example: console.log(yourFunction("this is cool")) should console log THIS IS COOL!
Console log the function a few times to show that it's working.
*/

//! Code here
function upperCase(string) {
  return `${string.toUpperCase()}!`;
}
console.log(upperCase("this is cool"));

/*
4.

Write a function that takes in an array as a parameter, and return the array with the first
and last index removed. Use arrow function syntax.

Example: console.log(yourFunction(["Red", "Green", "Blue", "Yellow"])) should console log
an array with just ["Green", "Blue"]

Console log the function a few times to show that it's working
*/

//! Code here
const removeFirstAndLast = (array) => {
  array.shift();
  array.pop();
  return array
};
console.log(removeFirstAndLast(["Red", "Green", "Blue", "Yellow"]));

/*
5.

EXTRA CHALLENGE:

This one is not mandatory.

Write a function that takes in 2 parameters, 1 array and 1 string.

Inside your function, check if the array received contains the string received. If it does,
remove that element from the array and return it.

If the array does not contain the string, add that string to the end of the array and return it.

Examples:
console.log(yourFunction(["Red", "Green"], "Blue")) --> ["Red", "Green", "Blue"]
console.log(yourFunction(["Red", "Green", "Blue"], "Green")) --> ["Red", "Blue"]
*/

//! Code here
const checkArray = (array, string) => array.includes(string) ? array.filter(item => item !== string) : [...array, string];

console.log(checkArray(["Red", "Green"], "Blue"));
console.log(checkArray(["Red", "Green", "Blue"], "Green"));