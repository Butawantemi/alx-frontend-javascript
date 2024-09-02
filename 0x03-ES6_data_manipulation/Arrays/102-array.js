const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer);

uint8.set([228, 189, 160, 229, 165, 189]);

const text = new TextDecoder().decode(uint8);

console.log(text);
