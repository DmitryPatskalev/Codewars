function addLength(str) {
    const result = []
    const arrStr = str.split(' ')
    for(let elem of arrStr){
        result.push(`${elem} ${elem.length}`)
    }
    return result
}

console.log(addLength("apple ban"))// --> ["apple 5", "ban 3"]
console.log(addLength("you will win"))// -->["you 3", "will 4", "win 3"]))

