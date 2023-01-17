function solution(ingredient) {
    var answer = 0;
    let set = []
    for (let i = 0; i < ingredient.length; i++) {
        if (set.length === 0) {
            if (ingredient[i] === 1) set.push('1')
        } else {
            const cur = set[set.length - 1]
            if (ingredient[i] === 1) {
                if (cur === '123') {
                    set.pop()
                    answer++
                } else {
                    set.push('1')
                }
            } else if (ingredient[i] === 2) {
                if (cur === '1') set[set.length - 1] = '12'
                else set = []
            } else if (ingredient[i] === 3) {
                if (cur === '12') set[set.length - 1] = '123'
                else set = []
            }
        }
    }
    return answer;
}

/*
  개인적으로 느끼기에 햄버거를 만든다는 상황을 부여해서 문제를 설명하다보니 설명이 너무 애매모호했다고 본다.
  [1, 3, 2, 3, 1] 순으로 들어올 때, 두번째 나오는 3을 버리고 1231이 완성되니까 하나가 만들어지는 줄 알았다.
  테스트케이스 몇번 돌려보니 1231이 무조건 붙어있어야 만들어지는 거더라..
  처음부터 이런 줄 알았으면 코드를 절대 이렇게 작성하지 않았을 것 같다. slice, splice 를 쓰면 훨씬 더 가독성 좋은 코드가 나올 것 같다.
*/
