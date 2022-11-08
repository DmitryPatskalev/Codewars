function duplicateCount(text) {
  let count = text.toLowerCase().split('').reduce((acc, n) => (acc[n] = (acc[n] || 0) + 1, acc), {});
  return Object.values(count).filter(n => n > 1).length
}


console.log(duplicateCount(""))//, 0);
console.log(duplicateCount("abcde"))//, 0);
console.log(duplicateCount("aabbcde"))//, 2);
console.log(duplicateCount("aabBcde"))//, 2, "should ignore case");
console.log(duplicateCount("Indivisibility"))//, 1)
console.log(duplicateCount("Indivisibilities"))//, 2, "characters may not be adjacent")