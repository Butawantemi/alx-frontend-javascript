const buffer = new ArrayBuffer(16);

if (buffer.byteLength === 16) {
  console.log('ArrayBuffer created with a length of 16 bytes');
} else {
  console.log('Failed to create ArrayBuffer');
}

const Int32View = new Int32Array(buffer);

for (let i = 0; i < Int32View.length; i++) {
  console.log(Int32View[i] = i * 2);
}

const int16View = new Int16Array(buffer);
const int32View = new Int32Array(buffer);

int16View[0] = 32;
console.log(`Entry 0 in the 32-bit array is now ${int32View[0]}`);
