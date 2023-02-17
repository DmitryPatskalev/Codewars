function multiply(number) {
    return number > 0 ? number * (5 ** number.toString().split('').length)
        : number  * (5 ** number.toString().split('').slice(1).length)
    //your code here
}

console.log(multiply(10))//,250);
console.log(multiply(3))//,15);
console.log(multiply(5))//,25);
console.log(multiply(200))//,25000);
console.log(multiply(0))//,0);
console.log(multiply(-2))//,-10);
console.log(multiply(-3))//,-15);
console.log(multiply(-6289371))//,-491357109375);