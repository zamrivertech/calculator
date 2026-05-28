let num1 = 0;
let operator = null;
let tempNumber = 0;
let num2 = 0;
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
            screen.textContent = add(num1,num2);
        break;   
        case "-":
            screen.textContent = subtract(num1,num2);
        break;    
        case "*":
            screen.textContent = multiply(num1,num2);
        break;   
        case "/":
            screen.textContent =  divide(num1,num2);
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

        if (operator != null) {

            result.click();

        } else {

        num1 = tempNumber; 
        
        console.log(num1);        

        screen.textContent = 0; 
        
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

    operate(num1,num2,operator);

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