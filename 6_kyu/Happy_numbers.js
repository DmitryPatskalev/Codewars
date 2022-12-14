function isHappy(n) {
  if (n === 4) return false;
  const u = n.toString().split('').reduce((ac, cv) => ac + Math.pow(cv, 2), 0);
  if (u === 1) return true;
  else return isHappy(u);
}

console.log(isHappy(1))//, true);
console.log(isHappy(7))//, true);
console.log(isHappy(16))//, false);