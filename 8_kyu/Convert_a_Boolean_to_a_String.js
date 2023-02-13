function booleanToString(b){
    return b ? JSON.stringify(b) : JSON.stringify(!!b)
    //your code here
}

console.log(booleanToString(true))//, "true", 'When we pass in true, we want the string "true" as output');
console.log(booleanToString(false))//, "false", 'When we pass in false, we want the string "false" as output
