function clearAll(event){
    formula.innerHTML = null;
    output.innerHTML = null;
}
function calculate(event){
    let calculated = eval(formula.innerHTML);
    formula.innerHTML += `=${calculated}`;
    output.innerHTML = calculated;
}
function inputValue(input){
    formula.innerHTML += input;
    output.innerHTML = input;
}
let formula = document.querySelector("#formula");
let output = document.querySelector("#output");
formula.innerHTML = null;
output.innerHTML = null;

let isEqual = document.querySelector("#isEqual").addEventListener("click", calculate);
let clear = document.querySelector("#clear").addEventListener("click", clearAll);
