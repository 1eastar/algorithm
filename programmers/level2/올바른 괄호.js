function solution(s){
    let balance = 0

    if (s[0] === ')') return false

    for (let _s of s) {
        if (_s === '(') {
            balance += 1
        }
        if (_s === ')') {
            balance -= 1
        }

        if (balance < 0) return false
    }
    return balance === 0
}
