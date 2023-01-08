function solution(s) {
    var answer = [];
    const box = {}  // [letter]: index
    s.split('').forEach((_s, index) => {
        if (box[_s]) {
            answer.push(index + 1 - box[_s])
        } else {
            answer.push(-1)
        }
        box[_s] = index + 1 // index가 0일 경우 box[_s] 가 false 처리됨.
    })
    return answer;
}


/*
  box[_s] = 0일 경우 false가 뜨기 때문에 index + 1을 했는데, 그닥 좋은 방식은 아닌 것 같다.
  차라리 box[_s] === undefined 로 조건을 좀 더 명확하게 걸었으면 훨씬 더 깔끔했을 코드.
  테스트 중 box[_s]가 0이면 false가 뜬다는 걸 알았을 때, 그럼 0이 안 되게 1씩 더해주면 되지? 라고 생각이 바로 들었었다.
  box[_s] 값이 없으면 undefined 라서 false인 건데, 무의식 중에 box[_s] 값이 없으면 -> false 로 생각이 바로 건너뛴 것이 문제인 듯.
*/
