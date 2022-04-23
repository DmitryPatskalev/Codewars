function battle(x, y) {
    let obj = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6,
        G: 7,
        H: 8,
        I: 9,
        J: 10,
        K: 11,
        L: 12,
        M: 13,
        N: 14,
        O: 15,
        P: 16,
        Q: 17,
        R: 18,
        S: 19,
        T: 20,
        U: 21,
        V: 22,
        W: 23,
        X: 24,
        Y: 25,
        Z: 26
    }
    let sum1 = 0
    let sum2 = 0
    let arr1 = x.split('')
    let arr2 = y.split('')
    for (let key in obj) {
        for (let elem of arr1) {
            if (key === elem) {
                sum1 += obj[key]
            }
        }
        for (let elem of arr2) {
            if (key === elem) {
                sum2 += obj[key]
            }
        }
    }
    return (sum1 > sum2) ? x :
        (sum1 < sum2) ? y : "Tie!"
}

console.log(battle("AAA", "Z"))//, "Z", "Unfair fight!"));
console.log(battle("ONE", "TWO"))//, "TWO", "Unfair fight!"));
console.log(battle("ONE", "NEO"))//, "Tie!", "Unfair fight!"));
console.log(battle("FOUR", "FIVE"))//, "FOUR", "Unfair fight!"));
