function lovefunc(flower1, flower2) {
    return flower1 % 2 === 0 && flower2 % 2 !== 0 || flower2 % 2 === 0 && flower1 % 2 !== 0
    // moment of truth
}

console.log(lovefunc(1, 4))//, true)
console.log(lovefunc(2, 2))//, false)
console.log(lovefunc(0, 1))//, true)
