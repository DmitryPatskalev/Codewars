function countSheeps(arrayOfSheep) {
    let count = 0
    for (let elem of arrayOfSheep) {
        if (elem) {
            count++
        }
    }
    return count
}

const array1 = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true];

console.log(countSheeps(array1))//, 17, "There are 17 sheeps in total")

