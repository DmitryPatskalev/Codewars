function abbrevName(name){
    let arr = name.split(' ', name.length)
    return arr[0][0].toUpperCase() + '.' + arr[1][0].toUpperCase()

}
console.log(abbrevName("Sam Harris"))//, "S.H");
console.log(abbrevName("Patrick Feenan"))//, "P.F");
console.log(abbrevName("Evan Cole"))//, "E.C");
console.log(abbrevName("P Favuzzi"))//, "P.F");
console.log(abbrevName("David Mendieta"))//, "D.M");