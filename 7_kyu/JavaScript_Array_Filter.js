function getEvenNumbers(numbersArray) {
    let arr = []
    for (let i = 0; i <= numbersArray.length; i++) {
        if (numbersArray[i] % 2 === 0) {
            arr.push(numbersArray[i])
        }
    }
    return arr;
}
console.log(getEvenNumbers([1,2,3,6,8,10]))//, [2,6,8,10])
console.log(getEvenNumbers([1,2]))//, [2])
console.log(getEvenNumbers([12,14,15]))//, [12,14])
console.log(getEvenNumbers([13,15]))//, [])