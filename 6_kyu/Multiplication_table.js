const multiplicationTable = function (size) {
   let arr = []
   for (let i = 1; i <= size; i++) {
      let subArr = []
      for (let j = 1; j <= size; j++) {
         subArr.push(i * j)
      }
      arr.push(subArr)
   }
   return arr
}

console.log(multiplicationTable(3))//, [[1,2,3], [2,4,6], [3,6,9]]);