let num1 = null;
let operations = ['+','-','*','/'];
let operator = "";
let num2 = 0;
let screen = document.querySelector(".screen");
const digitDiv = document.querySelector('#digits');
const digits = digitDiv.querySelectorAll('button');

//console.log(buttons);


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

            num1 = Number(button.id) 
            console.log(button.id);
            screen.textContent = num1;          
            
        })
        
    })


}

function setOperator(buttons) {

}

//you have to separate the type of buttons
//if a digit button is clicked then set number
//do not query select all buttons


setDigit(digits);
//setOperator(buttons);

/*

console.log(operate(1,1, "+"));
console.log(operate(1,1, "-"));
console.log(operate(1,1, "*"));
console.log(operate(1,1, "/"));

*/