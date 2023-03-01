function solve(s){
    let word =  s.split('').filter(s=>s === s.toLowerCase()).join('')
    return word.length >= Math.floor(s.length / 2) ? s.toLowerCase() : s.toUpperCase()
}

console.log(solve("code"))//,"code");
console.log(solve("CODe"))//,"CODE");
console.log(solve("COde"))//,"code");
console.log(solve("Code"))//,"code");