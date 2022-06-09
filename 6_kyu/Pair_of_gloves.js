function numberOfPairs(gloves) {
  let sum = 0
  let obj = {}
  for (let elem of gloves) {
    if (obj[elem] === undefined) {
      obj[elem] = 1
    } else {
      obj[elem]++
    }
  }
  for (let key in obj) {
    if (obj[key] % 2 === 0) {
      sum += obj[key]
    }
    if (obj[key] > 2 && obj[key] % 2 !== 0) {
      sum += (obj[key] - 1)
    }
  }
  return sum / 2
}

console.log(numberOfPairs(['red', 'red'])) //1
console.log(numberOfPairs(['red', 'green', 'blue'])) //0
console.log(numberOfPairs(['gray', 'black', 'purple', 'purple', 'gray', 'black'])) //3