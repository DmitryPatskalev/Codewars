function getSize(width, height, depth){
    const square = 2 * (width * height + width * depth + height * depth)
    const volume = width * height * depth
    return [square, volume]
}

console.log(getSize(4, 2, 6))//, [88, 48]);
console.log(getSize(10, 10, 10))//, [600, 1000]);