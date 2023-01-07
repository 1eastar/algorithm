function solution(t, p) {
    let answer = 0;
    const t_len = t.length
    const p_len = p.length
    for (let i = 0;i <= t_len - p_len;i++) {
        if (+t.slice(i, i + p_len) <= +p) answer++
    }
    return answer;
}


/*
 slice vs. substr
 https://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring
*/
