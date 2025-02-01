function solution(str1, str2) {
    var answer = '';
    var tmp = '';
    for (let i = 0; i < str1.length; i++ ) {
        tmp = str1[i] + str2[i];
            answer += tmp;
    }
    return answer;
}