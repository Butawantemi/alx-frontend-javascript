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
var obj = { x: 0 };
obj.foo = 100;
obj.bar = "hello";
obj.array = [1, 2, 3];
console.log(obj);
var user = new UserAccount("Japhet", 3);
console.log(user.name);
