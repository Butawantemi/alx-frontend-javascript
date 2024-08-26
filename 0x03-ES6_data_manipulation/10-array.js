// An Array
const city = ['Dodoma', 'Dar es Salaam', 'Mwanza', 'Arusha'];
const start = city.indexOf('Arusha');
const deleteCount = 1;

// Remove a single element from an array at a specific index.
const removedElement = city.splice(start, deleteCount);

// Output
console.log(city);
console.log(removedElement);
