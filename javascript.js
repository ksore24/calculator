const container = document.querySelector(".container");

const display = document.createElement("div");
display.className = "display";

const buttonRow1 = document.createElement("div")
buttonRow1.className = "buttonRow1";
const button7 = document.createElement("button");
button7.textContent = "7";
buttonRow1.appendChild(button7);
const button8 = document.createElement("button");
button8.textContent = "8";
buttonRow1.appendChild(button8);
const button9 = document.createElement("button");
button9.textContent = "9";
buttonRow1.appendChild(button9);
const buttonDivide = document.createElement("button");
buttonDivide.textContent = "/";
buttonRow1.appendChild(buttonDivide);


const buttonRow2 = document.createElement("div");
buttonRow2.className = "buttonRow2";
const button4 = document.createElement("button");
button4.textContent = "4";
buttonRow2.appendChild(button4);
const button5 = document.createElement("button");
button5.textContent = "5";
buttonRow2.appendChild(button5);
const button6 = document.createElement("button");
button6.textContent = "6";
buttonRow2.appendChild(button6);
const buttonMultiply = document.createElement("button");
buttonMultiply.textContent = "x";
buttonRow2.appendChild(buttonMultiply);


const buttonRow3 = document.createElement("div");
buttonRow3.className = "buttonRow3";
const button1 = document.createElement("button");
button1.textContent = "1";
buttonRow3.appendChild(button1);
const button2 = document.createElement("button");
button2.textContent = "2";
buttonRow3.appendChild(button2);
const button3 = document.createElement("button");
button3.textContent = "3";
buttonRow3.appendChild(button3);
const buttonSubtract = document.createElement("button");
buttonSubtract.textContent = "-";
buttonRow3.appendChild(buttonSubtract);


const buttonRow4 = document.createElement("div");
buttonRow4.className = "buttonRow4";
const buttonClear = document.createElement("button");
buttonClear.textContent = "clear";
buttonRow4.appendChild(buttonClear);
const button0 = document.createElement("button");
button0.textContent = "0";
buttonRow4.appendChild(button0);
const buttonDot = document.createElement("button");
buttonDot.textContent = ".";
buttonRow4.appendChild(buttonDot);
const buttonEquals = document.createElement("button");
buttonEquals.textContent = "=";
buttonRow4.appendChild(buttonEquals);

container.appendChild(display);
container.appendChild(buttonRow1);
container.appendChild(buttonRow2);
container.appendChild(buttonRow3);
container.appendChild(buttonRow4);