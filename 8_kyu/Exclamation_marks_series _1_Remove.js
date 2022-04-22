function remove(string) {
    return string[string.length - 1] === '!' ? string.slice(0, string.length - 1) : string.slice(0, string.length)
}

console.log(remove("Hi!"))//, "Hi");
console.log(remove("Hi!!!"))//, "Hi!!");
console.log(remove("!Hi"))//, "!Hi");
console.log(remove("!Hi!"))//, "!Hi");
console.log(remove("Hi! Hi!"))//, "Hi! Hi");
console.log(remove("Hi"))//, "Hi");