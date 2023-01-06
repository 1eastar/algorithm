function solution(a, b, n) {
    let answer = 0;
    let quotient = 0    // 몫
    let division = 0    // 나머지
    while(n >= a) {
        quotient = parseInt(n / a)
        division = n % a
        answer += quotient * b
        n = division + quotient * b
    }
    return answer;
}
