function noOdds(values) {
   return values.filter(elem => elem % 2 === 0)
   // Return all non-odd values
}

console.log(noOdds([0, 1]))//, [0])
console.log(noOdds([0, 1, 2, 3]))//, [0, 2])