function persistence(num) {
  let count = 0
  if (num < 10) return 0
  while (String(num).length !== 1) {
    num = String(num).split('').reduce((a, b) => Number(a) * Number(b))
    count++
  }
  return count
}

console.log(persistence(39))//,3);
console.log(persistence(4))//,0);
console.log(persistence(25))//,2);