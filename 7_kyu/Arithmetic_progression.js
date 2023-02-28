function arithmeticSequenceElements(a, d, n) {
    let count = 0
    const arr = []
    for (let i = a; count < n; i += d) {
        count++
        arr.push(i)
    }
    return arr.join(', ')
}

console.log(arithmeticSequenceElements(1, 2, 5))//, "1, 3, 5, 7, 9");
console.log(arithmeticSequenceElements(1, 0, 5))//, "1, 1, 1, 1, 1");
console.log(arithmeticSequenceElements(1, -3, 10))//, "1, -2, -5, -8, -11, -14, -17, -20, -23, -26");
console.log(arithmeticSequenceElements(100, -10, 10))//, "100, 90, 80, 70, 60, 50, 40, 30, 20, 10");