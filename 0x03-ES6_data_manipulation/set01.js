// Check if a set is a subset of another set.
function isSuperset(set, subset) {
  for (const elem of subset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}

// Union of two Sets
function union(setA, setB) {
  const _union = new Set(setA);
  for (const elem of setB) {
    _union.add(elem);
  }
  return _union;
}

// Intersection of two Sets
function intersetion(setA, setB) {
  const _intersection = new Set();
  for (const elem of setA) {
    if (setB.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
}

// symmetric difference of two sets.
function symmetricDifference(setA, setB) {
  const _difference = new Set(setA);
  for (const elem of setB) {
    if (_difference.has(elem)) {
      _difference.delete(elem);
    } else {
      _difference.add(elem);
    }
  }
  return _difference;
}

// difference of two sets.
function difference(setA, setB) {
  const _difference = new Set(setA);
  for (const elem of setB) {
    _difference.delete(elem);
  }
  return _difference;
}

// Set data Structure.
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

// output
console.log(isSuperset(set1, set2));
console.log(union(set1, set2));
console.log(intersetion(set1, set2));
console.log(symmetricDifference(set1, set2));
