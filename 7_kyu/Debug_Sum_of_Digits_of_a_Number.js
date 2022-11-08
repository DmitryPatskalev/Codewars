function getSumOfDigits(integer) {
  return String(integer).split('').reduce((a, b) => Number(a) + Number(b), 0)
}


console.log(getSumOfDigits(123))//, 6, 'Incorrect answer for integer=123');
console.log(getSumOfDigits(223))//, 7, 'Incorrect answer for integer=223');
console.log(getSumOfDigits(0))//, 0, 'Incorrect answer for integer=0');