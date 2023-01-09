function solution(X, Y) {
    var answer = '';
    const X_len = X.length
    const Y_len = Y.length
    const X_desc = X.split('').sort((a, b) => b - a).join('')
    const Y_desc = Y.split('').sort((a, b) => b - a).join('')
    let i=0, j=0
    while(i < X_len && j < Y_len) {
        if (X_desc[i] === Y_desc[j]) {
            answer += X_desc[i]
            i++
            j++
        } 
        else if (X_desc[i] > Y_desc[j]) i++
        else if (X_desc[i] < Y_desc[j]) j++
    }
    
    return (answer === '') ? "-1" : (+answer === 0) ? "0" : answer
}

/*
  처음엔 X for문 안에 includes 등을 사용하는 2중 loop가 바로 생각났었는데, 2중 loop까지 필요 없을 것 같아서 고민을 좀 더 했다.
  index 값들을 내 마음대로 갖고 놀 수 있는 게 while 의 장점인데, 실제 개발할 땐 while 을 거의 안 쓰다보니 이 방법이 바로 안 떠오른 듯.
  
  다른 방법으로는
  Map object 안에 [X 안의 숫자: 개수] 형태로 담아둔 후, Y loop를 돌면서 키 값이 존재하는 경우 하나씩 꺼내쓰는 식으로 하면 2중 loop를 사용하지 않고 해결 가능하다.
*/
