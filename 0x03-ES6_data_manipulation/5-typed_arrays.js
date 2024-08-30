export default function createInt8TypedArray(length, postion, value) {
  if (length >= postion) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const int8View = new Int8Array(buffer);
  int8View[postion] = value;
  return int8View;
}
