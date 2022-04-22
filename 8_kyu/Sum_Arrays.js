function sum (numbers) {
    let sum = 0
    for(let elem of numbers){
        sum += elem
    }
    return sum;
}
sum([1, 5.2, 4, 0, -1]) // 9.2