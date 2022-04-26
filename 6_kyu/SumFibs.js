function sumFibs(n) {
  let arr = []
  let a = -1;
  let b = 1;
  for (let i = 0; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
    arr.push(b)
  }
  let result = arr.filter(elem => elem % 2 === 0)
  return result.reduce((a, b) => a + b)
}

console.log(sumFibs(5))//, 2);
console.log(sumFibs(9))//, 44);
console.log(sumFibs(10))//, 44);
console.log(sumFibs(11))//, 44);