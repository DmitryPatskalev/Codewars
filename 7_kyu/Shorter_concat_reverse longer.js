function shorter_reverse_longer(a, b) {
  return a.length >= b.length ?
    (b.split('').concat(a.split('').reverse()).concat(b.split(''))).join('') :
    (a.split('').concat(b.split('').reverse()).concat(a.split(''))).join('')
}

console.log(shorter_reverse_longer("first", "abcde")) //, "abcdetsrifabcde");
console.log(shorter_reverse_longer("hello", "bau")) //, "bauollehbau");
console.log(shorter_reverse_longer("fghi", "abcde")) //, "fghiedcbafghi");