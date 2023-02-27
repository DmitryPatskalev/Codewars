const number = function (busStops) {
    const arr = [].concat(...busStops)
    const sum1 =  arr.filter((elem,i)=>i % 2 === 0).reduce((a,b)=>a+b,0)
    const sum2 =  arr.filter((elem,i)=>i % 2 !== 0).reduce((a,b)=>a+b,0)
    return sum1 - sum2
}

console.log(number([[10, 0], [3, 5], [5, 8]]))//,5);
console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]))//,17);
console.log(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]))//,21);
console.log(number([[0, 0]]))//,0);