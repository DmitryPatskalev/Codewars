function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

function prime(num) {
  let arr = []
  for (let j = 2; j <= num; j++) {
    if (isPrime(j)) {
      arr.push(j)
    }
  }
  return arr
}

console.log(prime(0))//,[]);
console.log(prime(1))//,[]);
console.log(prime(2))//,[2]);
console.log(prime(23))//,[2,3,5,7,11,13,17,19,23]);