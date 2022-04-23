function squareDigits(num){
    let number;
    let newArr = []
    let str = String(num)
    let arr = str.split('')
    for(let elem of arr){
        newArr.push(elem * elem)
        let str2 = newArr.join('')
        number = Number(str2)
    }

    return number;
}
console.log(squareDigits(3212))//, 9414);