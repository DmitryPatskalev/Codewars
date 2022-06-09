function race(v1, v2, g) {
  let result = Math.floor(3600 * g) / (v2 - v1)
  if (v2 <= v1) {
    return null
  } else {
    return [Math.floor(result / 3600), Math.floor((result / 60) % 60), Math.floor(result % 60)]
  }
}

console.log(race(720, 850, 70))//, [0, 32, 18])
console.log(race(80, 91, 37))//, [3, 21, 49])
console.log(race(80, 100, 40))//, [2, 0, 0])