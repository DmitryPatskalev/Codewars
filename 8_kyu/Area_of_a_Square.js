function squareArea(A) {
    return parseFloat((((A * 4) / (Math.PI * 2)) ** 2).toFixed(2))
}

console.log(squareArea(2))//, 1.62, 1e-2);
console.log(squareArea(0))//, 0, 1e-2);
console.log(squareArea(14.05))//.05), 80, 1e-2);