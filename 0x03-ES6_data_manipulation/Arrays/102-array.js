const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer);

uint8.set([1, 2, 3, 4, 5, 6]);

const text = new TextDecoder().decode(uint8);

console.log(text);
