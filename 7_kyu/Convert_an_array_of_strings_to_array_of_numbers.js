function toNumberArray(stringarray) {
  return stringarray.map(elem => Number(elem))

}

console.log(toNumberArray(["1.1", "2.2", "3.3"])) //, [1.1,2.2,3.3]);