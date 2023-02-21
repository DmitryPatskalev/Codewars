function squareOrSquareRoot(array) {
    return array.map(elem=>Number.isInteger(Math.sqrt(elem)) ? Math.sqrt(elem) : Math.pow(elem, 2))
}

const input = [ 4, 3, 9, 7, 2, 1 ];
const expected = [ 2, 9, 3, 49, 4, 1 ];
console.log(squareOrSquareRoot(input))//, expected);

const input2 = [ 100, 101, 5, 5, 1, 1 ];
const expected2 = [ 10, 10201, 25, 25, 1, 1 ];
console.log(squareOrSquareRoot(input2))//, expected2);

const input3 = [ 1, 2, 3, 4, 5, 6 ];
const expected3 = [ 1, 4, 9, 2, 25, 36 ];
console.log(squareOrSquareRoot(input3))//, expected3);