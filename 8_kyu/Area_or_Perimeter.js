var areaOrPerimeter = function (l, w) {
    if (l === w) {
        return l * w
    }
    if (l !== w) {
        return l * 2 + w * 2
    }
};

console.log(areaOrPerimeter(4, 4))// , 16);
console.log(areaOrPerimeter(6, 10))// , 32);
