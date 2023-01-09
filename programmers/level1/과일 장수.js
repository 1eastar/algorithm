function solution(k, m, score) {
    var answer = 0;
    const len = score.length
    score.sort(sortFunc)
    for (let i = 0;i < len && i + m <= len;i += m) {
        const box = score.slice(i, i + m)
        answer += box.pop() * m
    }
    return answer;
}

function sortFunc(a, b) {
    if (a > b) return -1
    else return 1
}


/*
  score 에서 나머지 만큼을 미리 없앤 후에 for문을 돌리면 깔끔하게 딱 떨어지게 box를 구할 수 있다.
  그렇게 되면 매 for loop 마다 slice를 사용하지 않고도 결과를 구할 수 있어서 더 효율적이다.
  
  예를 들어 이런 식이다.
  
  const newScore = score.sort(sortFunc).slice(score.length % m);
  for (let i = 0; i < newScore.length; i += m) {
      answer += newScore[i] * m;
  }
  
  * 추가 *
  좀 더 생각해보면 slice를 쓰지 않고도 풀 수 있는 문제였다.
  box 단위로 쪼개는 게 중요한 게 아니라, 결국 box에서 가장 작은 값만 필요한 거라 slice 까지 할 필요가 전혀 없고 'score[i + m - 1] * m' 만 더해주면 됐었다....
*/
