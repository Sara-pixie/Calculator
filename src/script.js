function clearAll(event){
    formula.innerHTML = null;
    output.innerHTML = null;
}
function calculate(event){
    let calculated = eval(formula.innerHTML);
    if (calculated === undefined){
        clearAll();
    } else{
        formula.innerHTML += `=${calculated}`;
        output.innerHTML = calculated;
    }
}
function handleInput(event){
    event.preventDefault();
    let input = this.innerHTML;
    formula.innerHTML += input;
    output.innerHTML = input;
}

let formula = document.querySelector("#formula");
let output = document.querySelector("#output");
formula.innerHTML = null;
output.innerHTML = null;

let isEqual = document.querySelector("#isEqual").addEventListener("click", calculate);
let clear = document.querySelector("#clear").addEventListener("click", clearAll);

let inputButtons =["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "decimal", "add", "subtract", "multiply", "divide"];
inputButtons.forEach(function(button){
    let buttonId = `#${button}`;
    document.querySelector(buttonId).addEventListener("click", handleInput);
});