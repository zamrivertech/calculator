let num1 = 0;
let operator = "";
let num2 = 0;
let screen = document.querySelector(".screen");
const buttons = document.querySelectorAll('button');


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

function operate(num1, num2, operator,) {

    //use case

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
            return alert('No Operator');                         
    }

}

function setDigit(buttons) {

    buttons.forEach(button => {
        button.addEventListener('click', () => {


            num1 = button.id * 1 === Number(button.id) ? button.id : 0;
            screen.textContent = num1;

            //check operator

            
            
        })
        
    })

}

setDigit(buttons);


/*

console.log(operate(1,1, "+"));
console.log(operate(1,1, "-"));
console.log(operate(1,1, "*"));
console.log(operate(1,1, "/"));

*/