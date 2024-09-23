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
    return `Hello, ${name}`;
}

console.log(greet('Japhet'));


let obj: any = { x: 0};
obj.foo = 100;
obj.bar = "hello";
obj.array = [1, 2, 3];

console.log(obj);

const user: User = new UserAccount("Japhet", 3);
console.log(user.name);

