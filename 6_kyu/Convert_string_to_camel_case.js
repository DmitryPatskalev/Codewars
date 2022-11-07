function toCamelCase(str) {
  let newArr = []
  let newStr;
  let arr = str.replace(/[^a-z0-9\s]/gi, ' ').split(' ')
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1).toLowerCase())
    newStr = arr[0].concat(newArr).replace(/[^a-z0-9\s]/gi, '')
  }
  return !str ? '' : newStr
}

console.log(toCamelCase('')) //, '', "An empty string was provided but not returned")
console.log(toCamelCase("the_stealth_warrior")) //, "theStealthWarrior",
console.log(toCamelCase("The-Stealth-Warrior")) //, "TheStealthWarrior",
console.log(toCamelCase("A-B-C")) //, "ABC",