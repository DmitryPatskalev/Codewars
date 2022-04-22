function oddOrEven(array) {
    let  sum = array.reduce(function(sum, elem) {
        return sum + elem;
    }, 0)
    return  sum % 2 =========0 ? 'even' : 'odd'

}

console.log(oddOrEven([0]))//, 'even')
console.log(oddOrEven([1]))//, 'odd')