function cornerCircle(r) {
  let l = (r * Math.sqrt(2))
  let miniL = l - r
  let gip = Math.sqrt((miniL * miniL + miniL * miniL))
  return Number((gip - miniL).toFixed(2))
}

console.log(cornerCircle(3))//, 0.51)
console.log(cornerCircle(17))//, 2.92)