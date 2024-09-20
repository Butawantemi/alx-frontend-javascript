// Set data structure.
const mySet1 = new Set();

// Add values to the set.
mySet1.add(1);
mySet1.add(5);
mySet1.add(5);
mySet1.add('some text');
const o = { a: 1, b: 2 };
mySet1.add(o);

// If the value already exists in the set.
mySet1.has(1); // true
mySet1.has(3); // false, since 3 has not been added to the set
mySet1.has(5); // true
mySet1.has(Math.sqrt(25)); // true
mySet1.has('Some Text'.toLowerCase()); // true
mySet1.has(o);
