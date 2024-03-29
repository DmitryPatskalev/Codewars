function positiveSum(arr) {
  let numPos = arr.filter(elem => elem > 0)
  return !numPos ? 0 : numPos.reduce((a, b) => a + b, 0)
}

console.log(positiveSum([1, 2, 3, 4, 5]))//,15);
console.log(positiveSum([1, -2, 3, 4, 5]))//,13);
console.log(positiveSum([]))//,0);
console.log(positiveSum([-1, -2, -3, -4, -5]))//,0);
console.log(positiveSum([-1, 2, 3, 4, -5]))//,9);