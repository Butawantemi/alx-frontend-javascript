const likeArray = {
  1: 'a',
  2: 'b',
  length: 2,
};

console.log(Array.prototype.slice.call(likeArray));
console.log(Array.from(likeArray));
