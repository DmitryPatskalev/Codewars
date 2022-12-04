function reverse(str) {
  let newStr = str.trim()
  let newArr = newStr.split(' ').map((elem, index) => index % 2 !== 0 ? elem.split('').reverse().join('') : elem)
  return newArr.join(' ')
}


console.log(reverse("Reverse this string, please!")) //, "Reverse siht string, !esaelp")
console.log(reverse("I really don't like reversing strings!")) //, "I yllaer don't ekil reversing !sgnirts")