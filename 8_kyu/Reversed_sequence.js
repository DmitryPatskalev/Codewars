let reverseSeq = n => {
    let arr = []
    for(let i = 1; i <= n; i++){
        arr.push(i)
    }
    return arr.reverse() ;
};
console.log(reverseSeq(5))//, [5, 4, 3, 2, 1]);