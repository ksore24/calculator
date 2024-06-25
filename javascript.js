let firstNumber = 0;
let secondNumber = 0;
let mathFunction = 0;
let answer;
let dotUsed;

const container = document.querySelector(".container");
const display = document.querySelector(".display");

const buttonEnter = document.querySelector(".buttonEnter");
buttonEnter.addEventListener("click", enterFunction);

const buttonNumberList = document.querySelectorAll(".buttonNumber");
for(i = 0; i < 10; i++)
{
    buttonNumberList[i].addEventListener("click", inputNumber);
}

const buttonDivide = document.querySelector(".buttonDivide");
buttonDivide.addEventListener("click", divideFunction)

const buttonMultiply = document.querySelector(".buttonMultiply");
buttonMultiply.addEventListener("click", multiplyFunction)

const buttonSubtract = document.querySelector(".buttonSubtract");
buttonSubtract.addEventListener("click", subtractFunction);

const buttonClear = document.querySelector(".buttonClear");
buttonClear.addEventListener("click", clearFunction);

const buttonDot = document.querySelector(".buttonDot");
buttonDot.addEventListener("click", dotFunction);

const buttonAdd = document.querySelector(".buttonAdd");
buttonAdd.addEventListener("click", addFunction);


function enterFunction(){
    secondNumber = display.textContent;
    clearFunction();

    if(mathFunction == 1)
    {
        if(secondNumber == 0)
        {
            display.append("ERROR. Cannot divide by 0!");
        }
        else
        {
            answer = firstNumber / secondNumber;
            answer = +answer.toFixed(2);
            display.append(answer);
        }
    }

    if(mathFunction == 2)
    {
        answer = firstNumber * secondNumber;
        answer = +answer.toFixed(2);
        display.append(answer);
    }

    if(mathFunction == 3)
    {
        answer = firstNumber - secondNumber;
        answer = +answer.toFixed(2);
        display.append(answer);
    }

    if(mathFunction == 4)
    {
        answer = +firstNumber + +secondNumber;
        answer = +answer.toFixed(2);
        display.append(answer);
    }

    for(i = 0; i < display.textContent.length; i++)
        {
            if(display.textContent.charAt(i) == '.')
                {
                    dotUsed = true;
                }
        }
    
    if(dotUsed)
        {
            buttonDot.setAttribute('disabled', 'disabled');
        }
    else
        buttonDot.removeAttribute("disabled");

    dotUsed = false;

    mathFunction = 0;
}

function inputNumber(event){
    display.append(event.target.innerText)
}

function divideFunction(){
    firstNumber = display.textContent;
    clearFunction();
    mathFunction = 1;
}

function multiplyFunction(){
    firstNumber = display.textContent;
    clearFunction();
    mathFunction = 2;
}

function subtractFunction(){
    firstNumber = display.textContent;
    clearFunction();
    mathFunction = 3;
}

function clearFunction(){
    while(display.firstChild)
    {
        display.removeChild(display.firstChild);
    }
    buttonDot.removeAttribute('disabled');
}

function dotFunction(){
    display.append(".");
    for(i = 0; i < display.textContent.length; i++)
        {
            if(display.textContent.charAt(i) == '.')
                {
                    dotUsed = true;
                }
        }
    
    if(dotUsed)
        {
            buttonDot.setAttribute('disabled', 'disabled');
        }
    else
        buttonDot.removeAttribute("disabled");

    dotUsed = false;
}

function addFunction(){
    firstNumber = display.textContent;
    clearFunction();
    mathFunction = 4;
}