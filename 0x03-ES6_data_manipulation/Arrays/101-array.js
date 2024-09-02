const typeArray = new Uint8Array([1, 2, 3, 4, 5]);

const normalArray = Array.from(typeArray);
const normalArray2 = [...typeArray];
console.log(normalArray);
console.log(normalArray2);
