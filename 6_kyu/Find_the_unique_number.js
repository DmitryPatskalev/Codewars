function findUniq(arr) {
    return Number(arr.filter((el, i, num) => num.indexOf(el) === num.lastIndexOf(el)))
}

console.log(findUniq([1, 0, 0]))//, 1);
console.log(findUniq([0, 1, 0]))//, 1);
console.log(findUniq([0, 0, 1]))//, 1);
console.log(findUniq([1, 1, 1, 2, 1, 1]))//, 2);
console.log(findUniq([1, 1, 2, 1, 1]))//, 2);
console.log(findUniq([3, 10, 3, 3, 3]))//, 10);