function count(string) {
    let arr = string.split('')
    let obj = {}
    for (let elem of arr) {
        if (obj[elem] === undefined) {
            obj[elem] = 1
        } else {
            obj[elem]++
        }
    }
    return obj;
}

console.log(count("aba"))//, { a: 2, b: 1 });
console.log(count(""))//, {});