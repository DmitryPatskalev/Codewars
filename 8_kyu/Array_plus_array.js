function arrayPlusArray(arr1, arr2) {
    let sum1 = 0
    let sum2 = 0
    arr1.forEach(function(elem) {
        sum1 += elem
    })
    arr2.forEach(function(elem) {
        sum2 += elem
    })
    return sum1 + sum2
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))//, 21);
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]))//, -21);