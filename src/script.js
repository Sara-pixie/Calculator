function clearAll(event){
    formula.innerHTML = null;
    output.innerHTML = null;
}
function calculate(event){
    let calculated = eval(formula.innerHTML.replace("x", "*"));
    if (calculated === undefined){
        clearAll();
    } else{
        formula.innerHTML += `=${calculated}`;
        output.innerHTML = calculated;
    }
}
function handleInput(event){
    event.preventDefault();
    let splitFormula = formula.innerHTML.split("=");
    let result = splitFormula[1];
    let input = this.innerHTML;
    output.innerHTML = input;
    if (result !== undefined){
        formula.innerHTML = result += input;
    } else {
        formula.innerHTML += input;
    }
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