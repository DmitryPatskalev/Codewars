function grow(x){
    let sum = 1
    for(let elem of x){
        sum *= elem
    }
    return sum
}

console.log(grow([1, 2, 3]))//, 6);
console.log(grow([4, 1, 1, 1, 4]))//, 16);