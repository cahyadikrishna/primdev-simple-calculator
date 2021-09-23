let num1 = "";
let num2 = "";
let operation = "";
let result = 0;

const inputDisplay = document.getElementById("inputDisplay");
const inputArea = document.getElementById("inputArea");

function displayOutput() {
  inputDisplay.value = `${num1} ${operation} ${num2}`;
}

function inputNumber(number) {
  if (operation === "") {
    num1 === "" ? (num1 = String(number)) : (num1 += String(number));
    displayOutput();
  } else {
    num2 === "" ? (num2 = String(number)) : (num2 += String(number));
    displayOutput();
  }
}

function clearDisplay(){
  num1 = "";
  num2 = "";
  operation = "";
  result = 0;
  displayOutput();
}

function deleteInput(){
  if(num2 !== ""){
    num2 = num2.substring(0 , num2.length-1)
  } else if (operation !== ""){
    operation = "";
  } else if (num1 !== ""){
    num1 = num1.substring(0 , num1.length-1)
  }
  displayOutput();
}

function inputOperation(operation1) {
  if (operation1 === "=") {
    calculate();
  } else if (operation1 === "c") {
    operation = operation1;
    clearDisplay();
  } else if (operation1 === "d") {
    deleteInput();
  } else if (num1 !== "") {
    operation = operation1;
    displayOutput();
  }
}

// inputArea.innerHTML = ``;
// for (i = 0; i < 10; i++) {
//   inputArea.innerHTML += `
//     <button onclick="inputNumber(${i})">${i}</button>
//   `;
//   if (i === 9) {
//     inputArea.innerHTML += `<button onclick="inputNumber('.')">.</button>`;
//     inputArea.innerHTML += `<button onclick="inputOperation('+')">+</button>`;
//     inputArea.innerHTML += `<button onclick="inputOperation('-')">-</button>`;
//     inputArea.innerHTML += `<button onclick="inputOperation('x')">x</button>`;
//     inputArea.innerHTML += `<button onclick="inputOperation('/')">/</button>`;
//     inputArea.innerHTML += `<button onclick="inputOperation('=')">=</button>`;
//   }
// }

function calculate() {
  if (num1 !== "" && num2 !== "" && operation !== "") {
    if (operation === "+") {
      result = Number(num1) + Number(num2);
    } else if (operation === "-") {
      result = Number(num1) - Number(num2);
    } else if (operation === "x") {
      result = Number(num1) * Number(num2);
    } else if (operation === "/") {
      result = Number(num1) / Number(num2);
    }
    num1 = String(result);
    num2 = "";
    operation = "";
    displayOutput();
  }
}
