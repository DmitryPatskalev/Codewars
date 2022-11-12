function sumEvenNumbers(input) {
  return input.filter(elem => elem % 2 === 0).reduce((a, b) => a + b, 0)
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))//, 30);