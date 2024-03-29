function squares(x, n) {
  let arr = []
  for (let i = 0; i < n; i++) {
    arr.push(x)
    x *= x
  }
  return arr
}

console.log(squares(2, 5)) //, [2, 4, 16, 256, 65536]);
console.log(squares(3, 3)) //, [3, 9, 81]);
console.log(squares(5, 3)) //, [5, 25, 625]);
console.log(squares(10, 4)) //, [10, 100, 10000, 100000000]);