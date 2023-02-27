function search(budget, prices) {
    return prices.sort((a, b) => a - b).filter(num => num <= budget).join(',')

// return array of prices that are within budget

}

console.log(search(3, [6, 1, 2, 9, 2]))//, "1,2,2")
console.log(search(14, [7, 3, 23, 9, 14, 20, 7]))//, "3,7,7,9,14")
console.log(search(0, [6, 1, 2, 9, 2]))//, "")