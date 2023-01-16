// 1번
for (let i = 1; i < 5; i++) {
    let line = '';
    for (let j = 0; j < i; j++) {
        line += '*';
    }
    console.log(line);
}

// 2번
let sum = 0;
let idx = 0;

while (sum <= 4238343) {
    idx++;
    sum += (3 ** idx);
}
console.log(idx);

const login = () => {
    const emailInput = document.querySelector('#id');
    const pwInput=  document.querySelector('#pw');
    
    if(emailInput.value === 'geekble' && pwInput.value === 'geekble7176')  {
        alert('로그인에 성공하였습니다');
    } else {
        alert('아이디와 비밀번호를 확인해주세요');
    }
}