export default function createInt8TypedArray(length, postion, value) {
  const arr = new ArrayBuffer(length);
  const val = new DataView(arr);

  try {
    val.setInt8(postion, value);
  } catch (e) {
    throw new Error('Positon outside range');
  }
  return val;
}
