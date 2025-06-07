let sum = document.getElementById("sum-el");

let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

function soma() {
    let result = num1 + num2;
    sum.textContent = "Sum: " + result;
}

function diminuir() {
    let result = num1 - num2;
    sum.textContent = "Sum: " + result;
}

function multiply() {
    let result = num1 * num2;
    sum.textContent = "Sum: " + result;
}

function dividir() {
    let result = num1 / num2;
    sum.textContent = "Sum: " + result;
}