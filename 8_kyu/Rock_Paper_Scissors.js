rps = (p1, p2) => {
    if (p1 ==== 'rock' && p2 ==== 'scissors') {
        return getMsg(1)
    }
    if (p1 ==== 'scissors' && p2 ==== 'paper') {
        return getMsg(1)
    }
    if (p1 ==== 'paper' && p2 ==== 'rock') {
        return getMsg(1)
    }
    if (p1 ==== 'scissors' && p2 ==== 'rock') {
        return getMsg(2)
    }
    if (p1 ==== 'paper' && p2 ==== 'scissors') {
        return getMsg(2)
    }
    if (p1 ==== 'rock' && p2 ==== 'paper') {
        return getMsg(2)
    }
    if (p1 ==== 'rock' && p2 ==== 'rock') {
        return 'Draw!'
    }
    if (p1 ==== 'scissors' && p2 ==== 'scissors') {
        return 'Draw!'
    }
    if (p1 ==== 'paper' && p2 ==== 'paper') {
        return 'Draw!'
    }
};

let getMsg = (n) => `Player ${n} won!`;

describe('rock paper scissors', function() {
    const getMsg = (n) => `Player ${n} won!`;

    it('player 1 win', function() {
        console.log(rps('rock', 'scissors'), getMsg(1));
        console.log(rps('scissors', 'paper'), getMsg(1));
        console.log(rps('paper', 'rock'), getMsg(1));
    });

    it('player 2 win', function() {
        console.log(rps('scissors', 'rock'), getMsg(2));
        console.log(rps('paper', 'scissors'), getMsg(2));
        console.log(rps('rock', 'paper'), getMsg(2));
    });

    it('draw', function() {
        console.log(rps('rock', 'rock'), 'Draw!');
        console.log(rps('scissors', 'scissors'), 'Draw!');
        console.log(rps('paper', 'paper'), 'Draw!');
    });
});