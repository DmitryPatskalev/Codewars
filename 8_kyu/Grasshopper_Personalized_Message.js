function greet(name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest'
    // Add code here
}

console.log(greet('Daniel', 'Daniel'))//, 'Hello boss')
console.log(greet('Greg', 'Daniel'))//, 'Hello guest')