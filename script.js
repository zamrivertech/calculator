let num1 = 0;
let operations = ['+','-','*','/'];
let operator = "";
let num2 = 0;
let screen = document.querySelector(".screen");
const digitDiv = document.querySelector('#digits');
const operationDiv = document.querySelector('#operations');
const digitDisplay = digitDiv.querySelectorAll('button');
const operateButtons = operationDiv.querySelectorAll('button');


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

function displayDigit(buttons) {

    buttons.forEach(button => {
        button.addEventListener('click', () => {

           num1 = screen.textContent = Number(screen.textContent + button.id);
            
        });
        
    });

    

}

function setOperator(buttons) {

    buttons.forEach(button => {
        button.addEventListener('click', () => {

        screen.textContent = 0; 
        
        operator = button.id;

        console.log(button.id);
            
        });
        
    });


}

//you have to separate the type of buttons
//if a digit button is clicked then set number
//do not query select all buttons

displayDigit(digitDisplay);
setOperator(operateButtons);

//setOperator(buttons);

/*

console.log(operate(1,1, "+"));
console.log(operate(1,1, "-"));
console.log(operate(1,1, "*"));
console.log(operate(1,1, "/"));

*/