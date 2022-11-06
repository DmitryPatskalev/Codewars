const isSquare = function (arr) {
  if (!arr.length) return undefined
  else {
    return arr.every(elem => {
      return Number.isInteger(Math.sqrt(elem))
    })
  }
}

console.log(isSquare([1, 4, 9, 16, 25, 36])) //, true);
console.log(isSquare([1, 2, 3, 4, 5, 6])) //, false);
console.log(isSquare([])) //, undefined);
console.log(isSquare([1, 2, 4, 15])) //, false);