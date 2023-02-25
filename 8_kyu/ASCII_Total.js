function uniTotal(string) {
   let arr = []
   const arrStr = string.split('').filter(l => l !== '').join('')
   for (let i = 0; i < arrStr.length; i++) {
      arr.push(arrStr.codePointAt(i))
   }
   return arr.reduce((a, b) => a + b, 0)

// total up dem unicodes!
}

console.log(uniTotal(""))//, 0);)
console.log(uniTotal("a"))//, 97);)
console.log(uniTotal("b"))//, 98);)
console.log(uniTotal("c"))//, 99);)
console.log(uniTotal("d"))//, 100);)
console.log(uniTotal("e"))//, 101);)
console.log(uniTotal("aaa"))//, 291);)
console.log(uniTotal("Mary Had A Little Lamb"))//, 1873);)