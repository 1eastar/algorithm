function solution(n) {
    var answer = 0;
    const dp = Array(n+1).fill(0)
    dp[1] = 1
    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i-1] % 1234567) + (dp[i-2] % 1234567)
    }
    return dp[n]
}

/*
  굳이 dp로 안 풀어도 되는 문제이긴 하다.
  그리고 int 자릿수 최대값을 넘어가면 오버플로우가 발생해 정확한 값 계산이 안 되니 매 계산마다 (% 1234567) 처리를 해줘야 한다.
*/
