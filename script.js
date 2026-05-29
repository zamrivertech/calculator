let num1 = null;
let operator = null;
let tempNumber = null;
let num2 = null;
let product = 0;

let screen = document.querySelector(".screen");
const digitDiv = document.querySelector('#digits');
const operationDiv = document.querySelector('#operations');
const digitDisplay = digitDiv.querySelectorAll('button');
const operateButtons = operationDiv.querySelectorAll('button');
const result = document.querySelector('#result');


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
            alert('No Operator');                         
    }

}

function displayDigit(buttons) {

    buttons.forEach(button => {
        button.addEventListener('click', () => {

           tempNumber = screen.textContent = Number(screen.textContent + button.id);
            
        });
        
    });

}
function setOperator(buttons) {

    buttons.forEach(button => {
        button.addEventListener('click', () => {

        screen.textContent = 0; 

        if (operator != null) {

            console.log('num1 ' + num1 )
            console.log('num2 ' + num2 )
            
            //catch num2, i saw something

            result.click();

        } else {

        num1 = tempNumber; 
        
        console.log(num1);        
        
        operator = button.id;

        console.log(button.id);

        
}
        
            
        });
        
    });


}

function displayResult(result) {

result.addEventListener('click', () => {

    num2 = tempNumber;

    console.log(num2);

    screen.textContent = operate(num1,num2,operator);

});

}

//you have to separate the type of buttons
//if a digit button is clicked then set number
//do not query select all buttons in the dom

displayDigit(digitDisplay);
setOperator(operateButtons);
displayResult(result);




//setOperator(buttons);

/*

console.log(operate(1,1, "+"));
console.log(operate(1,1, "-"));
console.log(operate(1,1, "*"));
console.log(operate(1,1, "/"));

*/