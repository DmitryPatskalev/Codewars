function first(arr, n) {
    return n === undefined ? arr.slice(0, 1) : arr.slice(0, n)
}

const arr = ['a', 'b', 'c', 'd', 'e'];
console.log(first([...arr]))//,      ['a']);
console.log(first([...arr], 2))//, ['a', 'b']);