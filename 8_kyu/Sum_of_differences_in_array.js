function sumOfDifferences(arr) {
    if (arr.length <= 1) return 0
    let newArr = arr.sort((a, b) => b - a)
    let sum = 0
    for (let i = 0; i < newArr.length - 1; i++) {
        sum += newArr[i] - newArr[i + 1]
    }
    return sum
}


console.log(sumOfDifferences([1, 2, 10]))//, 9);
console.log(sumOfDifferences([-3, -2, -1]))//, 2);