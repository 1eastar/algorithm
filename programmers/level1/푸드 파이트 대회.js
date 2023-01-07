function solution(food) {
    var answer = '';
    food.forEach((f, i) => {
        const each = Math.floor(f / 2)
        if (each >= 1) answer += i.toString().repeat(each)
    })
    const reverse = answer.split('').reverse().join('')
    answer += '0' + reverse
    return answer;
}

/*
  food.forEach((f, i) => {
    const each = Math.floor(f / 2)
    if (each >= 1) answer += i.toString().repeat(each)
  })
  
  에서
  
  food.forEach((f, i) => {
    if (f > 1) {
      answer += i.toString().repeat(Math.floor(f / 2))
    }
  })
  
  아래처럼 f > 1 여부를 먼저 확인해주면 매 forEach 마다 변수 each의 계산 및 선언을 무조건 해주지 않아도 된다.
  처음 보자마자 if 조건을 f > 1 로 생각하지 못하고 Math.floor(f / 2) >= 1 로 떠올렸던 게 원인인 것 같다.
  해결 방법이 바로 떠올라도 한번 더 고민해볼 필요가 있을 듯.
*/
