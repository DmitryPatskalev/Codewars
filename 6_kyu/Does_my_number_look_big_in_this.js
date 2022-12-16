function narcissistic(value) {
  let arrStr = String(value).split('')
  return arrStr.map(elem => Number(elem) ** arrStr.length).reduce((a, b) => a + b) === value
}

console.log(narcissistic(7)) //, true, "7 is narcissistic" );
console.log(narcissistic(371)) //, true, "371 is narcissistic" );