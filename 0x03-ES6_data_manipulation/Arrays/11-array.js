// An Array
const city = ['Dodoma', 'Dar es Salaam', 'Mwanza', 'Arusha'];
const start = 0;
const deleteCount = 2;

// Replace multiple elements from array.
const removedElements = city.splice(start, deleteCount, 'Mbeya', 'Morogoro');

// Output
console.log(city);
console.log(removedElements);
