// An Array.
const city = ['Dodoma', 'Dar es Salaam', 'Mwanza', 'Arusha'];
const start = 0;
const deleteCount = 2;

// Remove maltiple elements from beginning of an array.
const removedElements = city.splice(start, deleteCount);

// Output
console.log(city);
console.log(removedElements);
