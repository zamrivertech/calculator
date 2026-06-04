let num1 = 0;
let num2 = 0;
let tempNum = undefined;
let operator = '';
let result = 0;

let pressed = "";

const calculator = document.querySelector("body");

let digitDiv = document.querySelector('#digits');
let digitButtons = digitDiv.querySelectorAll('button');

let clearButton = digitDiv.querySelector('#clear');

let digitScreen = document.querySelector('.screen'); 

let operationDiv = document.querySelector('#operations');
let operationButtons = operationDiv.querySelectorAll('button'); 

let resultButton = document.querySelector('#result');

let backSpace = document.querySelector('#backspace');

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

               setNum(digit.id);

        })
        
    })

}

function setNum(digit) {

                if (digit === "backspace") {
                    digit = "<";
                    tempNum += digit;
                    console.log(tempNum)
                    displayDigit(tempNum)                   
                }  
                
                if (digit === "clear") {
                    tempNum = '';
                } else if (operator.length === 1) {
                        tempNum += digit;
                        tempNum = cleanDigits(tempNum); 
                        console.log("Cleaned: " + tempNum);                                              
                        num2 = isNaN(Number(tempNum)) ? 0 : Number(tempNum);
                        displayDigit(Number(num2)); 
                        console.log('num2 ' + num2);                    
                } else {
                        tempNum += digit;
                        tempNum = cleanDigits(tempNum); 
                        console.log("Cleaned: " + tempNum);                     
                        num1 = isNaN(Number(tempNum)) ? 0 : Number(tempNum);
                        displayDigit(num1); 
                        console.log("Clicked Digits for num1:" + tempNum);
            
                }

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

    num = Math.round(num * 100) / 100; 

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


            if (operator.length === 0) {

                operator = button.id;
                console.log("Clicked Operator: " + operator);

            } 

            
            displayDigit(num1);

            tempNum = '';

            //
            //this br

            if(operator.length === 1 && num2 != 0) {
                resultButton.click();
                num2 = 0;
                operator = button.id;
                console.log('new operator ' + operator)
            } else {
                
                operator = button.id;
                console.log("Clicked Operator: " + operator);

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
        operator = '';
        displayDigit(num1);
        tempNum = num1;
        num2 = 0;
    
    })
}

function cleanDigits(stringNum) {

    let array = stringNum.split('');
    let countPoint = 0;
    let countRemoveDigit = 0;

    for (let i = 0; i < array.length; i++) {

        if (array[i] === ".") {
            countPoint++;
        }

        if (countPoint >= 2) {
            array.splice(array.indexOf('.'), countPoint - 1);
        }

        if (array[i] === "<") {
            countRemoveDigit++;
            console.log(countRemoveDigit);
        }

        if (countRemoveDigit >= 1) {
            array.splice(array.indexOf('<') - 1, countRemoveDigit + 2);
            console.log(array);
        }

    }

    return array.join('');

} 

function pressedKey() {

    let arrayNum = ["1","2","3","4","5","6","7","8","9","0","."];

    let arrayOperator = ["+","-","/","*"];
    
    let arrayMore = ["Backspace","Enter"];    

    pressed = "";

    calculator.addEventListener('keydown', (e) => {

        for (let i = 0; i < arrayNum.length; i++) {
            if (e.key === arrayNum[i]) {
                pressed = e.key;
                setNum(pressed);
            }
        }

       

    });

}

getClickedDigit(digitButtons);
setClickedOperator(operationButtons);
clearScreen(clearButton);
operateNumbers(resultButton);
pressedKey();
