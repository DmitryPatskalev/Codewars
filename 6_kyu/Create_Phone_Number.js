function createPhoneNumber(numbers) {
  let str = numbers.join('')
  return `(${str.slice(0, 3)}) ${str.slice(3, 6)}-${str.slice(6, 10)}`
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))//, "(123) 456-7890");
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))//, "(111) 111-1111");
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))//, "(123) 456-7890");