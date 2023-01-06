function solution(number) {
    let answer = 0;
    const len = number.length
    for (let i=0;i<len;i++) {
        for (let j=i+1;j<len;j++) {
            for (let k=j+1;k<len;k++) {
                if (number[i] + number[j] + number[k] == 0) {
                    answer++
                }
            }
        }
    }
    return answer;
}

/*
 for (let i=0;i<len-2;i++) {
        for (let j=i+1;j<len-1;j++) {
            for (let k=j+1;k<len;k++) {
 
 i<len-2, j<len-1 로 해주면 조금이라도 연산을 덜 할 수 있다.
*/
