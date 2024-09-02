export default function hasValuesFromArray(setList, arr) {
  for (const value of arr) {
    if (!setList.has(value)) {
      return false;
    }
  }
  return true;
}
