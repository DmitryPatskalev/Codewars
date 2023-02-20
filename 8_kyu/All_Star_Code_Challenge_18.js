function strCount(str, letter) {
    return str.split('').filter(elem => elem === letter).length
    //code here
}

console.log(strCount('Hello', 'o'))//, 1);
console.log(strCount('Hello', 'l'))//, 2);
console.log(strCount('', 'z'))//, 0);