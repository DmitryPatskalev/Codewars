function missingWord(nums, str) {
    let newStr = str.split('').filter(l => l !== ' ').join('').toLowerCase().split('')
    let arr = nums.sort((a, b) => a - b)
    const newArr = []
    for (let elem of arr) {
        newArr.push(newStr[elem])
    }
    return newArr.join('').length === 3 ? newArr.join('') : "No mission today"
}

console.log(missingWord([5, 0, 3], "I love you"))//, "ivy")
console.log(missingWord([29, 31, 8], "The quick brown fox jumps over the lazy dog"))//, "bay")
console.log(missingWord([12, 4, 6], "Good Morning"))//, "No mission today")