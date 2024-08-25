// Declare an array.
const colors = ['red', 'green', 'blue', 'yellow', 'black'];

// Add a new element to the array.
colors[6] = 'white';

// Loop through the array and print all the elements.
const iterator = colors.keys();
for (const key of iterator) {
  console.log(`${key} - ${colors[key]}`);
}
