function nthFibo(n) {
    let arr = []
    let a = -1;
    let b = 1;
    for (let i = 1; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
        arr.push(b)
    }
    return arr[arr.length - 1]
}

console.log(nthFibo(1))//, 0,"1-st Fibo");
console.log(nthFibo(2))//, 1,"2-nd Fibo");
console.log(nthFibo(3))//, 1,"3-rd Fibo");
console.log(nthFibo(4))//, 2,"4-th Fibo");