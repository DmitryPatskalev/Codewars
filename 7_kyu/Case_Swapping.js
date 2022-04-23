function swap(str) {
    let result = "";
    for (let elem of str) {
        result += elem === elem.toUpperCase() ? elem.toLowerCase() : elem.toUpperCase();
    }
    return result;
}
console.log(swap('HelloWorld'))//, 'hELLOwORLD'));
console.log(swap('CodeWars'))//, 'cODEwARS'));
console.log(swap('a B1'))//, 'A b1'));