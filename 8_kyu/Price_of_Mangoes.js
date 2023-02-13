function mango(quantity, price) {
    return Math.ceil(quantity / 3 * 2) * price
}

console.log(mango(5, 3))//, 12)
console.log(mango(3, 3))//, 6)
console.log(mango(9, 5))//, 30)
