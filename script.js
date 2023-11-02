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
    if (clickedEq === true) {
        newNum = document.createElement('h2');
        newNum.textContent = num;
        body.appendChild(newNum);
        clickedEq = false;
    } else {
        if (h2Exists === true) {
            const existingNum = newNum.textContent;
            newNum.textContent = existingNum + num;
        } else if (h2Exists === false){
            newNum = document.createElement('h2');
            newNum.textContent = num;
            body.appendChild(newNum);
            h2Exists = true;
        } else if (clickedEq === true){
            newNum = document.createElement('h2');
            newNum.textContent = num;
            body.appendChild(newNum);
            clickedEq = false;
        }
    }
}

let num, num1, num2, op, userNum, userOp, sum, newNum;
let isClicked = false;
let isClear = false;
let h2Exists = false;
let clickedEq = false;
let tempArr = [];


let numContainer = document.querySelector('.num');
let opContainer = document.querySelector('.operators')
let numBtn = numContainer.querySelectorAll('button');

numBtn.forEach(event => {
    event.addEventListener('click', e => {
        if (isClear === true) {
            let h2 = document.querySelectorAll("h2");
            h2.forEach( e => {{
                e.remove();
            }});
            isClear = false;
        }
        num = parseInt(e.target.textContent);
        display(num);
        tempArr.push(num);
        userNum = parseInt(tempArr.join(''));
        if (num2 != undefined) {
            num2 = userNum;
        }
    });
});

op = opContainer.querySelectorAll('button');
op.forEach(event => {
    event.addEventListener('click', e => {
        userOp = e.target.textContent;
        if (isClicked === false) {
            num1 = userNum;
            tempArr.length = 0;
            isClicked = true;
        } else {
            if (sum != undefined) {
                num1 = sum;
                tempArr.length = 0;
            }
        }
        if (isClear === false) {
            isClear = true;
            h2Exists = false;
        }
    });
});


let equal = document.querySelector('#equals');
equal.addEventListener('click', () => {
    if (num2 === undefined) {
        num2 = userNum;
        tempArr.length = 0;
    }
    let h2 = document.querySelectorAll("h2");
    h2.forEach( e => e.remove() );
    sum = operate(num1, num2, userOp);
    if (clickedEq === false) {
        clickedEq = true;
    }
    display(sum);

});

let ac = document.querySelector('#clear');

