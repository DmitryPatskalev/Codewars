function points(games) {
    let sum = 0
    for (let elem of games) {
        if (Number(elem[0]) > Number(elem[2])) {
            sum += 3
        }
        if (Number(elem[0]) === Number(elem[2])) {
            sum += 1
        }
        if (Number(elem[0]) < Number(elem[2])) {
            sum += 0
        }
    }
    return sum
}


console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]))// , 30);
console.log(points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]))// , 10);
console.log(points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"]))//, 0);
console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"]))// , 15);
console.log(points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"]))// , 12);
