function well(x) {
    if (x.filter(elem => elem === 'good').length === 0) {
        return 'Fail!'
    }
    if (x.filter(elem => elem === 'good').length === 1 || x.filter(elem => elem === 'good').length === 2) {
        return 'Publish!'
    }
    if (x.filter(elem => elem === 'good').length > 2) {
        return 'I smell a series!'
    }
}


console.log(well(['bad', 'bad', 'bad']))//, 'Fail!');
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']))//, 'Publish!');
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']))//, 'I smell a series!');

