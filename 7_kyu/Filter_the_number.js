const filterString = function (value) {
  return Number(value.replace(/[a-z]/gi, ''))
}

console.log(filterString("123"))//, 123, 'Just return the numbers');
console.log(filterString("a1b2c3"))//, 123, 'Just return the numbers');
console.log(filterString("aa1bb2cc3dd"))//, 123, 'Just return the numbers');