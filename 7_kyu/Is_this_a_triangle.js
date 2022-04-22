function isTriangle(a, b, c) {

    return a, b, c > 0 && a < (b + c) && b < (a + c) && c < (a + b);
}

console.log(isTriangle(1,2,2))//, true);
console.log(isTriangle(7,2,2))//, false);