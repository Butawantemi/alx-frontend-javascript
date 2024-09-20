// Check if a set is 
function isSuperset (set, subset) {
  for (const elem of subset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}

const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

isSuperset(set1, set2);
