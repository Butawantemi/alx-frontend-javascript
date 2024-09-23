var message = "Hello, World!";
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
function greet(name) {
    return 'Hello ' + name.toUpperCase() + '!';
}
console.log(greet('Japhet'));
var names = ['Alice', 'Bob', 'Charlie'];
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
var obj = { x: 0 };
obj.foo = 100;
obj.bar = "hello";
obj.array = [1, 2, 3];
console.log(obj);
function printCoord(pt) {
    if (pt.y !== undefined) {
        console.log('The coordinate is: x = ' + pt.x + ', y =' + pt.y);
    }
    console.log('The coordinate is: x = ' + pt.x + ', y =' + pt.y);
}
function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log('Hello, ' + x.join(' and '));
    }
    else {
        console.log('Welcome lone traveler  ' + x);
    }
}
function doSomething(value) {
    if (value === null) {
        // do nothing
    }
    else {
        console.log('Value is:  ' + value);
    }
}
console.log(doSomething('Japhet'));
welcomePeople(['Alice', 'Bob', 'Charlie']);
welcomePeople('Japhet');
printCoord({ x: 3 });
printCoord({ x: 3, y: 7 });
var user = new UserAccount("Japhet", 3);
console.log(user.name);
