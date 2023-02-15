function shortcut(string) {
    return string.split('').filter(l => l !== 'a' && l !== 'e' && l !== 'i' && l !== 'o' && l !== 'u').join('')
}

console.log(shortcut('hello'))//, 'hll');
console.log(shortcut('how are you today?'))//, 'hw r y tdy?');
console.log(shortcut('complain'))//, 'cmpln');
console.log(shortcut('never'))//, 'nvr');

//a, e, i, o, u