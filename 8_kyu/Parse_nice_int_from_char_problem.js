function getAge(inputString) {
    let str = inputString.split('')
    return Number(str.slice(0, 1))

}

console.log(getAge("4 years old"))//, 4)