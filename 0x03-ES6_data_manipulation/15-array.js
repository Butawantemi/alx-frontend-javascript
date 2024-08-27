// An Arrays.
const brands = ['Apple', 'Samsung', 'Huawei'];

// Copy an array using the spread operator.
const copyBrands = [...brands];

// Copy an array using the slice method.
const copyBrands2 = brands.slice();

// Copy an array using the Array.from method.
const copyBrands3 = Array.from(brands);

// Copy an array using JSON.stringify and JSON.parse.
const copyBrands4 = JSON.parse(JSON.stringify(brands));

// Output
console.log(copyBrands);
console.log(copyBrands2);
console.log(copyBrands3);
console.log(copyBrands4);
