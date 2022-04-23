function digitize(n) {
    let str = String(n)
    let arr = str.split('')
    return JSON.parse('[' + arr + ']')

}
console.log(digitize(123))//, [1,2,3])
console.log(digitize(1))//, [1])
console.log(digitize(0))//, [0])
console.log(digitize(1230))//, [1,2,3, 0])