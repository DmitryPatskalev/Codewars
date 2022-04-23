function nthChar(words){
    let str = ''
    let sum = 0
    for (let i = 0; i < words.length; i++){
        str += words[i][sum++]
    }
    return str
}
console.log(nthChar([]))//,'');
console.log(nthChar(['yoda', 'best', 'has']))//, 'yes');