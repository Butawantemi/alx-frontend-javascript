const likeArray = {
  0: 'a',
  1: 'b',
  length: 2,
};

console.log(Array.prototype.slice.call(likeArray));
console.log(Array.from(likeArray));
