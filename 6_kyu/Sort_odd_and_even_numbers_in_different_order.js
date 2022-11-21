function sortArray(array) {
  let numberOdd = array.filter(elem => elem % 2).sort((a, b) => a - b);
  let numberEven = array.filter(elem => elem % 2 === 0).sort((a, b) => b - a);
  return array.map(elem => elem % 2 ? numberOdd.shift() : numberEven.shift());
}

console.log(sortArray([5, 3, 2, 8, 1, 4, 11]))//, [1, 3, 8, 4, 5, 2, 11])
console.log(sortArray([2, 22, 37, 11, 4, 1, 5, 0]))//, [22, 4, 1, 5, 2, 11, 37, 0])
console.log(sortArray([1, 111, 11, 11, 2, 1, 5, 0]))//,[1, 1, 5, 11, 2, 11, 111, 0])
console.log(sortArray([]))//,[])