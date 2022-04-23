function camelize(str) {
    let low = str.toLowerCase()
    let str2 = low.replace(/[^a-zа-яё0-9\s]/gi, ' ');
    let strNew = str2.split(' ')
    return strNew.map(n => n.replace(/./, m => m.toUpperCase())).join('')
}

console.log(camelize("java script"))//,"JavaScript" );
console.log(camelize("cODE warS"))//,"CodeWars" );