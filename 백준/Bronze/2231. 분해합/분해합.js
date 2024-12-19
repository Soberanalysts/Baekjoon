const input = require('fs').readFileSync('./dev/stdin').toString().trim();
const inputNum = Number(input);

let result = 0;

for (let i = 1; i < inputNum; i++) {
    const digits = i.toString().split('').map(Number); // i의 각 자리수를 배열로 변환
    const sum = i + digits.reduce((a, b) => a + b, 0); // i와 각 자리수의 합 계산

    if (sum === inputNum) {
        result = i; // 생성자를 찾음
        break;
    }
}

console.log(result);