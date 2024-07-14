//the string
const Greet = "Hello World";

// convert the string to an array
/* const GreetArray = [...Greet];

console.log(GreetArray); */
let newArray = [];
for (let x of Greet){
    newArray.push(x)
}
console.log(newArray);





/* // Array of strings 
const cars = ['BMW', 'Benz', 'Toyota', 'Ford'];

for (const x of cars){
    console.log(x);
} */



/* const numbers = [1, 2, 3, 4, 5, 67]

const maxValue = Math.max(...numbers);

console.log(maxValue); */


/* const Names = ['John', 'Doe'];

// join all names Names array
const fullName = [...Names].join(' ');

console.log(`My name is ${fullName}`) */


/* const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

const [ first, second ] = fruits;

console.log(`My favorite fruits are ${first} and ${second}`) */ // My favorite fruits are apple and banana

