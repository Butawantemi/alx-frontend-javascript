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
mySet1.has(1);
mySet1.has(3);
mySet1.has(5);
mySet1.has(Math.sqrt(25));
mySet1.has('Some Text'.toLowerCase());
mySet1.has(o);

// check size of the set
mySet1.size;

// Delete values from the set.
mySet1.delete(5);

console.log(mySet1);

for (const item of mySet1) {
  console.log(item);
}
