let countSquares = (n) => {
  let sum = 0
  let arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(i)
  }
  for (let elem of arr) {
    sum += elem * elem;
  }

  return sum
}
console.log(countSquares(5))
console.log(countSquares(15))
console.log(countSquares(55))