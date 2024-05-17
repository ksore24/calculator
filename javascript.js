const display = document.querySelector(".display");
const buttonEnter = document.querySelector(".buttonEnter");
const buttonNumber = document.querySelector(".buttonNumber");
const buttonDivide = document.querySelector(".buttonDivide");
const buttonMultiply = document.querySelector(".buttonMultiply");
const buttonSubtract = document.querySelector(".buttonSubtract");
const buttonClear = document.querySelector(".buttonClear");
const buttonDot = document.querySelector(".buttonDot");
const buttonAdd = document.querySelector(".buttonAdd");

buttonNumber.addEventListener("click", inputNumber);

function inputNumber(){
    console.log(buttonNumber.textContent);
}