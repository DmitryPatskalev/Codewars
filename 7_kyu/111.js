function trim(str, size) {
    if (str.length  <= 3) return str.slice(0, 1) + '...'
    if(str.length >3 && size <= str.length) return str.slice(0, size - 3) + '...'
    if (size > str.length) return str
}

console.log(trim("Creating kata is fun", 14))//,"Creating ka...");
console.log(trim("He", 1))//,"H...");
console.log(trim("Code Wars is pretty rad", 50))//, "Code Wars is pretty rad");
console.log(trim("NddOs", 3))//, "Ndd...");