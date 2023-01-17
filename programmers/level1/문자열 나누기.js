function solution(s) {
    var answer = 0;
    let x = ''
    let x_count = 0
    let non_x_count = 0
    let i = 0
    while (i < s.length) {
        if (x.length === 0) {
            x = s[i]
            x_count++
            i++
            continue
        }
        
        if (s[i] === x) {
            x_count++
        } else {
            non_x_count++
            if (x_count === non_x_count) {
                answer++
                x_count = 0
                non_x_count = 0
                x = ''
            }
        }
        i++
    }
    return (x_count !== 0  || non_x_count !== 0) ? ++answer : answer
}

/*
  다른 사람들 풀이 중 인상적이었던 풀이
  
  function solution(s) {
    let answer = 0;
    let current;
    let count = 0;

    for(let i = 0; i < s.length; i++) {
        if(count === 0) {
            answer++;
            current = s[i]
            count = 1
        } else {
            if(current !== s[i]) count--;
            else count++;
        }
    }

    return answer;
  }
  
  x_count, non_x_count 변수 2개로 각각의 갯수를 카운팅하면서 둘이 같은지 비교하는 게 아니라
  count라는 하나의 변수에서 1씩 더하고 빼고 해서 0이 되는 경우를 카운팅 하는 방식이 꽤 신선하고 기억에 남는다.
*/
