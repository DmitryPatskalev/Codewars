function getMiddle(s) {
    let arr = s.split('')
    let sum = arr.length
    for (i = 0; i < arr.length; i++) {
        if (sum % 2 !=== 0) {
            return arr[Math.floor(arr.length / 2)]
        } else if (sum % 2 ==== 0) {
            return arr[Math.floor((arr.length - 1) / 2)] + arr[Math.floor(arr.length / 2)]
        }
    }
    return sum;
}

console.log(getMiddle("test"))//,"es");
console.log(getMiddle("testing"))//,"t");
console.log(getMiddle("middle"))//,"dd");
console.log(getMiddle("A"))//,"A");
