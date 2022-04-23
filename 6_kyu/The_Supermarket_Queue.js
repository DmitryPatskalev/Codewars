function queueTime(customers, n) {
    let que = new Array(n).fill(0);
    for (let t of customers) {
        let idx = que.indexOf(Math.min(...que));
        que[idx] += t;

    }
    return Math.max(...que);
}
console.log(queueTime([], 1))//, 0);
console.log(queueTime([1,2,3,4], 1))//, 10);
console.log(queueTime([2,2,3,3,4,4], 2))//, 9);
console.log(queueTime([1,2,3,4,5], 100))//, 5);