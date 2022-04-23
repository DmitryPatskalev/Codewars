function filter_list(l) {
    let newarr = []
    for (let i = 0; i < l.length; i++) {
        if (typeof (l[i]) === 'number') {
            (l[i] % 2 === 0 || l[i] % 2 === 1 || l[i] % 0 === NaN)
            newarr.push(Number(l[i]))
        }
    }
    return newarr
}

console.log(filter_list([1, 2, 'a', 'b']))//,[1,2], 'For input [1,2,"a","b"]');
console.log(filter_list([1, 'a', 'b', 0, 15]))//,[1,0,15], 'For input [1,"a","b",0,15]');
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]))//,[1,2,123], 'For input [1,2,"aasf","1","123",123]');