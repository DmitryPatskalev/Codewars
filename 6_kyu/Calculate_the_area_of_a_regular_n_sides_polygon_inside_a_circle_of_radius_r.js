function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
  const sqrt = (1 / 2 * (circleRadius * circleRadius) * numberOfSides * Math.sin(360 / numberOfSides * (Math.PI / 180)))
  return Number(sqrt.toFixed(3))
}

console.log(areaOfPolygonInsideCircle(3, 3)) //, 11.691);
console.log(areaOfPolygonInsideCircle(2, 4)) //, 8);
console.log(areaOfPolygonInsideCircle(2.5, 5)) //, 14.86);