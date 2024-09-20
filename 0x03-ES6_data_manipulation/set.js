// Set data structure.
const mySet1 = new Set();

// Add values to the set.
mySet1.add(1);
mySet1.add(5);
mySet1.add(5);
mySet1.add('some text');
const o = { a: 1, b: 2 };
mySet1.add(o);

console.log(mySet1);
