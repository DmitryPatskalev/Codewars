function perimeter(n) {
  let a = 0
  let b = 1
  let result = []
  for (let i = 0; i < n; i++) {
    let sum;
    let c = a + b
    a = b
    b = c
    result.push(c)
    sum = result.reduce((a, b) => a + b) + 1
  }
  if (n === 0) {
    return 4
  }
  return sum * 4
}

console.log(perimeter(0)) //, 4)
console.log(perimeter(5)) //, 80)
console.log(perimeter(7)) //, 216)
console.log(perimeter(20)) //, 114624)
console.log(perimeter(30)) //, 14098308)