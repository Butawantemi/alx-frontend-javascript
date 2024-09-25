// Declare a message variable of type string.
let message: string = "Hello, World!";

// Interface for object of type 'User'
interface User {
    name: string;
    id: number;
}

// Class for object of type 'UserAccount'
class UserAccount {
    name: string;
    id: number;
    // Constructor for the class 'UserAccount'
    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

// Function that greets a user
function greet(name: string) : string {
    return 'Hello ' + name.toUpperCase() + '!';
}

// Output the message
console.log(greet('Japhet'));

// Declare an array of names
let names = ['Alice', 'Bob', 'Charlie'];
// Loop through the array of names and output the names in uppercase 
names.forEach((s) => {
    console.log(s.toUpperCase());
})

// Declare an object with properties and assign values to the properties
let obj: any = { x: 0};
obj.foo = 100;
obj.bar = "hello";
obj.array = [1, 2, 3];
// Output the object
console.log(obj);

// Function that prints the coordinates of a point
function printCoord(pt: { x: number; y?: number}) {
    if (pt.y !== undefined) {
        console.log('The coordinate is: x = ' + pt.x + ', y =' + pt.y);
    }
    console.log('The coordinate is: x = ' + pt.x + ', y =' + pt.y);
}
// Function that welcomes people
function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        console.log('Hello, ' + x.join(' and '));
    } else {
        console.log('Welcome lone traveler  ' + x);
    }
}

// Function that takes an optinal parameter
function doSomething(value?: number | null) {
    console.log(value!);
}

// Output 
console.log(doSomething());
welcomePeople(['Alice', 'Bob', 'Charlie']);
welcomePeople('Japhet');
printCoord({x: 3});
printCoord({x: 3, y: 7});

// Declare a variable of type 'User' and assign a new object of type 'UserAccount' to it.
const user: User = new UserAccount("Japhet", 3);
// Output the name of the user
console.log(user.name);

