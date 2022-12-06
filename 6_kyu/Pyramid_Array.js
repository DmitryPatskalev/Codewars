function pyramid(n) {
  if (n.length === 0) return []
  let arr = []
  let num = 1
  for (let i = 0; i < n; i++) {
    arr[i] = []
    for (let j = 0; j <= i; j++) {
      arr[i][j] = num
    }
  }
  return arr
}

console.log(pyramid(0))//, []));
console.log(pyramid(1))//, [[1]]));
console.log(pyramid(2))//, [[1], [1, 1]]));
console.log(pyramid(3))//, [[1], [1, 1], [1, 1, 1]]));