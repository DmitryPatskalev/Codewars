function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

function numPrimorial(n) {
  let arr = []
  for (let j = 2; j <= 10000; j++) {
    if (isPrime(j)) {
      arr.push(j)
    }
  }
  return arr.slice(0, n).reduce((a, b) => a * b)
}

console.log(numPrimorial(3))//,30);
console.log(numPrimorial(4))//,210);
console.log(numPrimorial(5))//,2310);
console.log(numPrimorial(8))//,9699690);
console.log(numPrimorial(9))//,223092870);