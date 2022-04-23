function filterLongWords(sentence, n) {
    let newArr = []
    let arr = sentence.split(' ')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > n) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(filterLongWords("The quick brown fox jumps over the lazy dog", 4))//, ['quick', 'brown', 'jumps']);