function findOutlier(integers) {
  let arr1 = []
  let arr2 = []
  for (let elem of integers) {
    if (elem % 2 === 0) {
      arr1.push(elem)
    } else {
      arr2.push(elem)
    }
  }
  let arr3 = [arr1, arr2]
  for (let subArr of arr3) {
    if (subArr.length === 1) {
      return Number(subArr.join(''))
    }
  }
}

console.log(findOutlier([0, 1, 2])) //, 1)
console.log(findOutlier([1, 2, 3])) //, 2)
console.log(findOutlier([2, 6, 8, 10, 3])) //, 3)
console.log(findOutlier([0, 0, 3, 0, 0])) //, 3)
console.log(findOutlier([1, 1, 0, 1, 1])) //, 0)