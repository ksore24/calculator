let firstNumber = 0;
let secondNumber = 0;
let mathFunction = 0;
let answer;

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
        answer = firstNumber / secondNumber;
        display.append(answer);
    }

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

    mathFunction
}

function subtractFunction(){

}

function clearFunction(){
    while(display.firstChild)
    {
        display.removeChild(display.firstChild);
    }
}

function dotFunction(){
    
}

function addFunction(){

}