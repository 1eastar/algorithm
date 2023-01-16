function solution(babbling) {
    var answer = 0;
    babbling
        .map(word => {
            return word
                .replace(/aya/g, '1')
                .replace(/ye/g, '2')
                .replace(/woo/g, '3')
                .replace(/ma/g, '4')
        })
        .forEach(word => {
            for (let i = 1; i < word.length; i++) {
                if (word[i-1] === word[i]) return
            }
            if (!Number.isNaN(+word)) answer++
        })

    return answer;
}


/*
  !Number.isNaN(+word) 대신 처음에는 typeof +word !== 'number' 조건을 사용했었는데, 찾아보니 NaN은 Number type이었다.
  NaN은 모든 숫자, 다른 NaN, 심지어 자기 자신과도 같지 않다. NaN !== NaN.
  
  참고
  https://stackoverflow.com/questions/2801601/why-does-typeof-nan-return-number
*/
