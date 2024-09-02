const buffer = new ArrayBuffer(16);

if (buffer.byteLength === 16) {
  console.log('ArrayBuffer created with a length of 16 bytes');
} else {
  console.log('Failed to create ArrayBuffer');
}
