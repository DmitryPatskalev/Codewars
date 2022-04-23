function sumTwoSmallestNumbers(numbers) {
    numbers.sort(function(a, b) {
        return a - b
    })
    return numbers[0] + numbers[1]
}
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))//, 13 , "Sum should be 13");
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))//, 6 , "Sum should be 6");
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]))//, 10 , "Sum should be 10");