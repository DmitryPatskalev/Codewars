function fibonacci(n) {
  let arr = []
  let a = 0
  let b = 1
  for (let i = 0; i < n; i++) {
    let c = a + b
    a = b
    b = c
    arr.push(a)
  }
  return arr
}


console.log(fibonacci(5)) //.length===5, "Expected 5 elements");
console.log(fibonacci(5)) //[4]===3, "Last element for input 5 should be 3");
console.log(fibonacci(13)) //[12]===144, "Last element for input 13 should be 144");
console.log(fibonacci(-5)) //.length===0, "Expected 0 elements for negative input");
console.log(fibonacci(0)) //.length===0, "Expected 0 elements for 0 input");