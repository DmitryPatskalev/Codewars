function mygcd(x,y){
    if (y !== 0) {
        const k = x % y;
        return mygcd(y, k);
    }
    return x;
}

console.log(mygcd(30, 12))//,  6)
console.log(mygcd(36, 12))//, 12)
console.log(mygcd( 8,  9))//,  1)
console.log(mygcd( 1,  1))//,  1)