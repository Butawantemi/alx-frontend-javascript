const buffer = new ArrayBuffer(16);

if (buffer.byteLength === 16) {
  console.log('ArrayBuffer created with a length of 16 bytes');
} else {
  console.log('Failed to create ArrayBuffer');
}

const Int32View = new Int32Array(buffer);

for (let i = 0; i < Int32View.length; i++) {
  Int32View[i] = i * 2;
}
