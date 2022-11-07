function countSmileys(arr) {
  let count = 0
  for (let elem of arr) {
    if (elem === ':)' || elem === ';)' || elem === ':-)' || elem === ':~)' || elem === ';~)' || elem === ':~)' || elem === ';-)'
      || elem === ':D' || elem === ';D' || elem === ':-D' || elem === ';-D' || elem === ';~D' || elem === ':~D') {
      count++
    }
  }
  return count
}

console.log(countSmileys([])) //, 0);
console.log(countSmileys([':D', ':~)', ';~D', ':)'])) //, 4);
console.log(countSmileys([':)', ':(', ':D', ':O', ':;'])) //, 2);
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])) //, 1);