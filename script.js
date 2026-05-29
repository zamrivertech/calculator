let num1 = null;
let num2 = null;
let tempNum = null;
let operator = null;

let digitDiv = document.querySelector('#digits');
let digitButtons = digitDiv.querySelectorAll('button');

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(num1, num2, operator) {

    switch (operator) {
        case "+":
            return add(num1,num2);
        break;   
        case "-":
            return subtract(num1,num2);
        break;    
        case "*":
            return multiply(num1,num2);
        break;   
        case "/":
            return divide(num1,num2);
        break;  
        default:
            alert('No Operator');                         
    }

}

function getClickedDigit(digits){

    tempNum = '';

    digits.forEach(digit => {

        digit.addEventListener('click', () => {
            tempNum += digit.id;
            console.log(tempNum);
        })
        
    })

}

getClickedDigit(digitButtons);
