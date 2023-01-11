function solution(number, limit, power) {
    var answer = 0
    let soldier = 1
    while (soldier <= number) {
        const sqrt = Math.sqrt(soldier)
        let i = 0
        let divisor_num = 0
        while (i <= sqrt) {
            if (i === sqrt) {
                divisor_num++
                break
            }
            if (soldier % i === 0) divisor_num += 2
            i++
        }
        
        if (divisor_num > limit) answer += power
        else answer += divisor_num
        
        soldier++
    }
    
    return answer;
}


/*
  for 문으로도 풀어봤다.
  
  function solution(number, limit, power) {
    var answer = 0
    for (let i = 1; i <= number; i++) {
        let divisor_num = 0
        for (let j = 1; j * j <= i; j++) {
            if (j * j === i) divisor_num++
            else if (i % j === 0) divisor_num += 2
        }
        
        if (divisor_num > limit) answer += power
        else answer += divisor_num
    }
    return answer;
}
*/
