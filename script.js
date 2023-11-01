function add(a, b) {
    return a + b;
}

function sub(a,b) {
    return a - b;
}

function mul(a,b) {
    return a * b;
}

function div(a,b) {
    return a / b;
}

function operate(num1, num2, op) {
    if (op === '+') {
        return add(num1, num2);
    } else if (op === '-') {
        return sub(num1, num2);
    } else if (op === '*') {
        return mul(num1, num2);
    } else {
        return div(num1,num2);
    }
}

function display(num) {
    const body = document.querySelector('body');
    const newNum = document.createElement('h2');
    newNum.textContent = num;
    body.appendChild(newNum);
        
}

let num, num1, num2, op, userNum, userOp, sum;
let isClicked = false;
let tempArr = [];

let numContainer = document.querySelector('.num');
let opContainer = document.querySelector('.operators')
let numBtn = numContainer.querySelectorAll('button');

numBtn.forEach(event => {
    event.addEventListener('click', e => {
        num = parseInt(e.target.textContent);
        display(num);
        tempArr.push(num);
        //console.log(tempArr)
        userNum = parseInt(tempArr.join(''));
        console.log(`this is the userNum: ${userNum}`);
        if (num2 != undefined) {
            num2 = userNum;
            console.log(`this is the num2 second time: ${num2}`);
        }
    });
});

op = opContainer.querySelectorAll('button');
op.forEach(event => {
    event.addEventListener('click', e => {
        userOp = e.target.textContent;
        if (isClicked === false) {
            num1 = userNum;
            console.log(`this is the num1: ${num1}`);
            tempArr.length = 0;
            console.log('isClicked has been changed to true')
            isClicked = true;
        } else {
            if (sum != undefined) {
                num1 = sum;
                console.log(`this is the sum: ${sum}`);
                tempArr.length = 0;
            }
        }
        
    });
});


let equal = document.querySelector('#equals');
equal.addEventListener('click', () => {
    if (num2 === undefined) {
        num2 = userNum;
        console.log(`this is the num2: ${num2}`);
        tempArr.length = 0;
    }
    sum = operate(num1, num2, userOp);
    display(sum);
    console.log(`this is the total: ${sum}`);
});
