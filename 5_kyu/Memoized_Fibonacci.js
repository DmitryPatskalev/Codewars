function fibonacci(n) {
  let a = 0
  let b = 1
  for (let i = 0; i < n; i++) {
    let c = a + b
    a = b
    b = c
  }
  return a
}


console.log(fibonacci(70))//, 190392490709135);
console.log(fibonacci(60))//, 1548008755920);
console.log(fibonacci(50))//, 12586269025);
