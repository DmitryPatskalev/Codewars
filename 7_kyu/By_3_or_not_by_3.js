function divisibleByThree(str) {
    let sum = 0
    let arr = str.split('')
    for (let elem of arr) {
        sum += Number(elem);
    }
    return Number.isInteger(sum / 3) ? true : false

}

console.log(divisibleByThree('123'))//, true, "Should return true if the sum of the given digits is divisible by 3.")
console.log(divisibleByThree('19254'))//, true, "Should return true if the sum of the given digits is divisible by 3.")
console.log(divisibleByThree('88'))//, false, "Should return false if the sum of the given digits is not divisible by 3.")
console.log(divisibleByThree('1'))//, false, "Should return false if the sum of the given digits is not divisible by 3.")