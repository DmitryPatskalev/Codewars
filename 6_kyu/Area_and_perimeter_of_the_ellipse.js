function elipse(a, b) {
  let perimeter = (Math.PI * (1.5 * (a + b) - Math.sqrt(a * b))).toFixed(1)
  let area = (Math.PI * a * b).toFixed(1)
  return `Area: ${area}, perimeter: ${perimeter}`
}


//π * (3/2(a+b) - sqrt(ab))
console.log(elipse(5, 2))//,"Area: 31.4, perimeter: 23.1");