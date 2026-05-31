let num1 = undefined;
let num2 = undefined;
let tempNum = undefined;
let operator = '';
let result = undefined;

let digitDiv = document.querySelector('#digits');
let digitButtons = digitDiv.querySelectorAll('button');

let clearButton = digitDiv.querySelector('#clear');

let digitScreen = document.querySelector('.screen'); 

let operationDiv = document.querySelector('#operations');
let operationButtons = operationDiv.querySelectorAll('button'); 

let resultButton = document.querySelector('#result');

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

    tempNum = ''

    digits.forEach(digit => {

        digit.addEventListener('click', () => {

                    tempNum += digit.id;
                    displayDigit(tempNum); 

                    //this is set num1 and num2

                    if (num1 == undefined) {
                        num1 = Number(tempNum);
                        console.log(num1)
                        tempNum = '';
                    } else if (operator.length === 1 && num2 == undefined) {
                        num2 = Number(tempNum);
                        console.log(num2)               
                        tempNum = '';
                    } 

        })
        
    })

}

function clearScreen (clearButton) {

        clearButton.addEventListener('click', () => {

                tempNum = '';
                displayDigit(tempNum);

        })    

}

function displayDigit(num) {

    digitScreen.textContent = Number(num); //this fixes that Zero problem 

}

function setClickedOperator(buttons) {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            
            operator = button.id;

            //need to see the problem here
            //Num2 is not being set but displayed


        })
    })
}

function operateNumbers(button) {
    button.addEventListener('click', () => {
        result = operate(Number(num1),Number(num2),operator);
        displayDigit(result);
        console.log(num1 + '' + num2 + '' + operator);
    })
}





getClickedDigit(digitButtons);
setClickedOperator(operationButtons);
clearScreen(clearButton);
operateNumbers(resultButton);

//initialize num1 and num2 with undefined
//if num1 is not undefined, use temp in
//same method for setClickedOperator to
//store num2, how??? check if num2 is undefined
//then equal to operator and when result 
// is displayed, set the result to num1
// and set num2 to undefined
//but if clear button then set both undefined
//in getCLickedDigit in line 57, but tempNUm
//i think it can be zero
//like this it is a continued loop... to fix that

//check prolem below if it happens

//problem if operator is clicked instead of equal sign
//what about if you click operator aggain but without
//operator like 1+1 = 2 + 0 two plus 0 (you did not type a digit)
//should still work, must be 2 again, obsiviously displaying still
//