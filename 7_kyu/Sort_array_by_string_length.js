function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length, 0)
  // Return an array containing the same strings, ordered from shortest to longest
}

console.log(sortByLength(["Beg", "Life", "I", "To"]))//,["I", "To", "Beg", "Life"]);
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]))//,["", "Pizza", "Brains", "Moderately"]);
console.log(sortByLength(["Longer", "Longest", "Short"]))//,["Short", "Longer", "Longest"]);