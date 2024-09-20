// Map
const myMap = new Map();

// Add some key-value pairs.
myMap.set(1, 'one');
myMap.set(2, 'two');

// iterate over the map.
for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}
