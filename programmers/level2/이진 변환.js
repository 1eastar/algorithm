function solution(s) {
    let zero_removed = 0
    let trans_count = 0
    
    while (s !== "1") {
        s = [...s]
            .map(_s => {
                if (_s === "0") {
                    zero_removed++
                    return ""
                }
                return _s
            })
            .join("")
            .length
            .toString(2)
        
        trans_count++
    }
    return [trans_count, zero_removed];
}


/*
  s.match(/0/g || []).length 하면 0의 개수를 구할 수 있다.
  match 도 생각이 나야한다!
*/
