function highAndLow(numbers){
    let arr = numbers.split(' ')
    let max = String(Math.max.apply(null, arr))
    let min = String(Math.min.apply(null, arr))
    return max + ' ' + min
}
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))//, "42 -9");