function addArrays(array1, array2) {
  if (array1.length === 0 && array2.length === 0) return []
  if (array1.length === 0) return array2
  if (array2.length === 0) return array1
  let arr = (parseInt(array1.join('')) + parseInt(array2.join(''))).toString()
  if (arr[0] === '-') {
    arr = arr.slice(1).split('').map(elem => elem * 1)
    arr[0] = arr[0] * -1
    return arr
  }
  return arr.split('').map(elem => elem * 1)
}


console.log(addArrays([6, 7], [6, 7]))//, [ 1, 3, 4 ])
console.log(addArrays([3, 2, 6, 6], [-7, 2, 2, 8]))// --> [-3,9,6,2]
console.log(addArrays([3, 2, 9], [1, 2]))// --> [3,4,1]// --> [-3,9,6,2]
console.log(addArrays([4, 7, 3], [1, 2, 3]))// --> [5,9,6]))
console.log(addArrays([1], [5, 7, 6]))// --> [5,7,7]))//
