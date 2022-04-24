function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

function gap(g, m, n) {
    let result = []
    let res = []
    for (let j = m; j < n; j++) {
        if (isPrime(j)) {
            result.push(j)
            let currentNum = result[0];
            for (let k = 1; k < result.length; k++) {
                if (result[k] - currentNum === g) {
                    res.push(currentNum, result[k]);
                    return res;
                } else {
                    currentNum = result[k];
                }
            }
        }
    }
    return null
}

console.log(gap(2, 100, 110))//, [101, 103]);
console.log(gap(4, 100, 110))//, [103, 107]);
console.log(gap(6, 100, 110))//, null);
console.log(gap(8, 300, 400))//, [359, 367]);
console.log(gap(10, 300, 400))//, [337, 347]);