

//자릿수 더하기

function solution(n) {
    let answer=0;
    let a = String(n);
    for(let i = 0; i < a.length; i++) {
        answer += parseInt(a[i]);
    }

    return answer;
}

//없는 숫자 더하기

function solutino(numbers) {
    var answer = 0;
    for(let i = 0; i <= 9; i++) {
        if(numbers.inculdes(i)===false) {
            answer+=i;
        }
    }
    return answer;
}

//나누어 떨어지는 숫자 배열

function solution(arr, divisor) {
    var answer = [];

    for(let i = 0; i <= arr.length; i++) {
        if(arr[i] % divisor === 0) {
            answer.push(arr[i]);
        }
    }

    if(answer.length === 0) {
        answer.push(-1);
    }

    return answer.sort(((a,b) => a - b));
}