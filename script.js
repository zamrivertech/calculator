let num1 = 0;
let num2 = 0;
let tempNum = undefined;
let operator = '';
let result = 0;

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
            clearButton.click();                        
    }

}

function getClickedDigit(digits){

    tempNum = ''

    digits.forEach(digit => {

        digit.addEventListener('click', () => {

                if (digit.id === "clear") {

                    tempNum = '';

                } else if (operator.length === 1) {
                        tempNum += digit.id;
                        num2 = tempNum;
                        displayDigit(Number(num2)); 
                        console.log('num2 ' + num2);                    
                } else {
                        tempNum += digit.id;
                        num1 = Number(tempNum);
                        displayDigit(num1); 
                        console.log("Clicked Digits for num1:" + tempNum);
            
                }

        })
        
    })

}

function clearScreen (clearButton) {

        clearButton.addEventListener('click', () => {

                tempNum = '';
                displayDigit(Number(tempNum));
                num1 = 0;
                num2 = 0;
                operator = '';

        })    

}

function displayDigit(num) {

    num = Math.round(num * 100) / 100; //this fixes that Zero problem 

    if (isNaN(Number(num))) {
        
        digitScreen.textContent;

    } else {

        digitScreen.textContent = num;

    }
    
}

function getDisplayDigit() {

    return Number(digitScreen.textContent);

}

function setClickedOperator(buttons) {
    buttons.forEach(button => {
        button.addEventListener('click', () => {

            //if op is already set

            if (operator.length === 0) {

                operator = button.id;
                console.log("Clicked Operator: " + operator);

            } 

            //okay, now i think its okay
            
            displayDigit(num1);

            tempNum = '';

            //
            //this br

            if(operator.length === 1 && num2 != 0) {
                resultButton.click();
                num2 = 0;
                operator = button.id;
                console.log('new operator ' + operator)
            }
            
        })
    })
}

function operateNumbers(button) {
    button.addEventListener('click', () => {
        tempNum = '';
        displayDigit(tempNum);
        result = operate(Number(num1),Number(num2),operator);
        num1 = result;
        //get new operator
        console.log('num1 ' + num1);
        displayDigit(num1);
        num2 = 0;
    
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