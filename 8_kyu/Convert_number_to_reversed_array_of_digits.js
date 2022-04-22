function digitize(n) {
    let arr = String(n).split('').reverse()
    return JSON.parse("[" + arr + "]");
}

console.log(digitize(35231))//,[1,3,2,5,3]);
console.log(digitize(0))//,[0]);