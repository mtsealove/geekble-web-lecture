// 이건 주석입니다
/*
    이것도 주석인데
    요렇게 쓰면 여러줄 쓸 수 있어요
*/

/**
 * 요건 JS Doc 기능
 * @param 이건 예쁜 변수예요
 */

function printA10() {
    for (let i = 0; i < 10; i++) {
        console.log('A');
    }
}


printA10();

const func = () => {
    console.log('이런 함수도 있고 이게 더 편해요');
}

const sum = (a, b) => {
    return a + b;
}

const c = sum(10, 20);
console.log(c);
func();

const factorial = (n) => {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));

const btn = document.querySelector('#btn');
const hello = () => {
    alert('긱하');
}
const question = () => {
    if(confirm('안녕하세요?')) {
        console.log('안녕하신가봐요');
    }
}