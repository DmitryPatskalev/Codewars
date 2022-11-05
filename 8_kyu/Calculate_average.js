function findAverage(array) {

  return !array.length ? 0 : array.reduce((a, b) => a + b, 0) / array.length
}

console.log(findAverage([1, 1, 1]))//, 1);
console.log(findAverage([1, 2, 3]))//(), 2);
console.log(findAverage([1, 2, 3, 4]))//(), 2.5);
console.log(findAverage([]))//(), 0);