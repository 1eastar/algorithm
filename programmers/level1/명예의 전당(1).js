function solution(k, score) {
    var answer = [];
    score.reduce((acc, cur) => {
        acc.push(cur)
        if (acc.length > k) {
            acc.sort((a, b) => b - a)
            acc.pop()
        }
        answer.push(Math.min(...acc))
        return acc
    }, [])
    return answer;
}
