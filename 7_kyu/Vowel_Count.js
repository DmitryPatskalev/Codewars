function getCount(str) {
    let vowelsCount = 0;
    let strArr = str.split('')
    let arr = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < strArr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (strArr[i] === arr[j]) {
                vowelsCount ++
            }
        }
    }

    return vowelsCount;
}
console.log(getCount("abracadabra"))//, 5) ;