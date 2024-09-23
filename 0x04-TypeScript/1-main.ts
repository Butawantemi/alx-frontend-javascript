let message: string = "Hello, World!";

interface User {
    name: string;
    id: number;
}

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

function greet(name: string) : string {
    return 'Hello ' + name.toUpperCase() + '!';
}

console.log(greet('Japhet'));

let names = ['Alice', 'Bob', 'Charlie'];

names.forEach((s) => {
    console.log(s.toUpperCase());
})

let obj: any = { x: 0};
obj.foo = 100;
obj.bar = "hello";
obj.array = [1, 2, 3];

console.log(obj);

function printCoord(pt: { x: number; y?: number}) {
    console.log('The coordinate is: x = ' + pt.x + ', y =' + pt.y);
}

printCoord({x: 3});
printCoord({x: 3, y: 7});

const user: User = new UserAccount("Japhet", 3);
console.log(user.name);

