function fibonacci(max) {
  if (max === 0) {
    return 0
  }
  let arr = []
  let a = -1
  let b = 1
  for (let i = 0; i <= max; i++) {
    let c = a + b
    a = b
    b = c
    arr.push(c)
    if (c > max || c === max) {
      break
    }
    let newArr = []
    newArr = arr.slice(0, arr.length)
    var sum = 0
    for (let elem of newArr) {
      if (elem % 2 === 0) {
        sum += elem;
      }
    }
  }
  return sum
}

console.log(fibonacci(2147483647)) //, 1485607536);
console.log(fibonacci(1000000000)) //, 350704366);
console.log(fibonacci(100000000)) //, 82790070);
console.log(fibonacci(1000000)) //, 1089154);
console.log(fibonacci(1000)) //, 798);
console.log(fibonacci(100)) //, 44);
console.log(fibonacci(5)) //, 2);
console.log(fibonacci(8)) //, 2);
console.log(fibonacci(10)) //, 10);
console.log(fibonacci(1)) //, 0);