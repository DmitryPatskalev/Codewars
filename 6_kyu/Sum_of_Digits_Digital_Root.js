function digitalRoot(n) {
  if (n === 0) return 0
  let count = String(n).split('').reduce((a, b) => Number(a) + Number(b))
  return String(count).length === 1 ? count : digitalRoot(count)
}

console.log(digitalRoot(16))//, 7 )
console.log(digitalRoot(456))//, 6 )
console.log(digitalRoot(493193))//, 2 )
console.log(digitalRoot(132189))//, 6 )
console.log(digitalRoot(942))//, 6 )
console.log(digitalRoot(0))//, 0 )