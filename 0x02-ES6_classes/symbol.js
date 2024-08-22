const userType = Symbol('userType');
const Administrator = Symbol('Administrator');
const Guest = Symbol('Guest');

const currectUser = {
    [userType]: Administrator,
    id: 1,
    name: 'Japhet'
}

console.log(currectUser);
console.log(JSON.stringify(currectUser));