function fakeBin(x) {
    let newArr = []
    let num = x.split('')
    for (let elem of num) {
        if (Number(elem) >= 5) {
            newArr.push(1)
        } else {
            newArr.push(0)
        }
    }
    return newArr.join('');
}


console.log(fakeBin('45385593107843568'))//, '01011110001100111');
console.log(fakeBin('509321967506747'))//, '101000111101101');