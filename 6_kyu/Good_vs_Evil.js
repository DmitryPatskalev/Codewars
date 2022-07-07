function goodVsEvil(good, evil) {
  let arrGood = [1, 2, 3, 3, 4, 10]
  let arrEvil = [1, 2, 2, 2, 3, 5, 10]
  let strGood = good.split(' ')
  let strEvil = evil.split(' ')

  let sum1 = arrGood[0] * Number(strGood[0]) + arrGood[1] * Number(strGood[1]) + arrGood[2] * Number(strGood[2]) + arrGood[3] * Number(strGood[3]) + arrGood[4] * Number(strGood[4]) + arrGood[5] * Number(strGood[5])

  let sum2 = arrEvil[0] * Number(strEvil[0]) + arrEvil[1] * Number(strEvil[1]) + arrEvil[2] * Number(strEvil[2]) + arrEvil[3] * Number(strEvil[3]) + arrEvil[4] * Number(strEvil[4]) + arrEvil[5] * Number(strEvil[5]) + arrEvil[6] * Number(strEvil[6])

  return sum1 > sum2
    ? "Battle Result: Good triumphs over Evil"
    : sum1 === sum2
      ? "Battle Result: No victor on this battle field"
      : "Battle Result: Evil eradicates all trace of Good";
}


console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1')) //, 'Battle Result: Evil eradicates all trace of Good');
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0')) //, 'Battle Result: Good triumphs over Evil');
console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0')) //, 'Battle Result: No victor on this battle field');