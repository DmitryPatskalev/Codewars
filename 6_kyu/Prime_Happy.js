function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false
  }
  return true
}

function isPrimeHappy(n) {
  let arr = []
  for (let j = 2; j < n; j++) {
    if (isPrime(j)) {
      arr.push(j)
    }
  }
  return arr.length >= 1 && arr.reduce((a, b) => a + b) % n === 0
}


console.log(isPrimeHappy(5))//,true);
console.log(isPrimeHappy(8))//, false);