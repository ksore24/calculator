let firstNumber = 0;
let secondNumber = 0;
let mathFunction = 0;
let answer;
let dotCounter = 0;
let dotUsed = false;

const container = document.querySelector(".container");
const display = document.querySelector(".display");

document.addEventListener('keydown', function(event){
    if(isFinite(event.key))
        display.append(event.key);
    else if(event.key == "Backspace")
        backspaceFunction();
    else if(event.key == "Enter" || event.key == "=")
        enterFunction();
    else if(event.key == "/")
        divideFunction();
    else if(event.key == "x")
        multiplyFunction();
    else if(event.key == "-")
        subtractFunction();
    else if(event.key == "/")
        divideFunction();
    else if (event.shiftKey && event.key == "+")
        addFunction();
    else if(event.key = "." && dotUsed == false)
        dotFunction();
    else if (event.key == "Escape")
        clearFunction();
})

const buttonBackspace = document.querySelector(".buttonBackspace");
buttonBackspace.addEventListener("click", backspaceFunction);

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

function backspaceFunction(){
    display.removeChild(display.lastChild);
    dotUsed = false;
    for(i = 0; i < display.textContent.length; i++)
        {
            if(display.textContent.charAt(i) == '.')
                    dotUsed = true;
        }
    if(dotUsed)
        {
            buttonDot.setAttribute('disabled', 'disabled');
        }
    else
        buttonDot.removeAttribute("disabled");
}

function enterFunction(){
    if(mathFunction == 0)
        return;

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

    dotUsed = false;
    for(i = 0; i < display.textContent.length; i++)
        {
            if(display.textContent.charAt(i) == '.')
                    dotUsed = true;
        }
    if(dotUsed)
        {
            buttonDot.setAttribute('disabled', 'disabled');
        }
    else
        buttonDot.removeAttribute("disabled");

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
    dotUsed = false;
}

function dotFunction(){
    display.append(".");
    dotUsed = true;
    buttonDot.setAttribute('disabled', 'disabled');
}

function addFunction(){
    firstNumber = display.textContent;
    clearFunction();
    mathFunction = 4;
}