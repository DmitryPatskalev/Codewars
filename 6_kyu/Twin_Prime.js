function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return num >= 2
}

function isTwinPrime(n) {
  return (isPrime(n) && (isPrime(n - 2) || isPrime(n + 2)));
}

console.log(isTwinPrime(5))//,true);
console.log(isTwinPrime(25))//,false);