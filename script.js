const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const display = document.querySelector(".display");
const equalBtn = document.getElementById("equal");
const allClearBtn = document.getElementById("all-clear");
const clearBtn = document.getElementById("clear");
const previousOp = document.querySelector(".previous-operand");
const currentOp = document.querySelector(".current-operand");
const operationSign = document.querySelector(".operation-sign");

let lastOperand = "";
let nextOperand = "";
let newString = "";
let operator = undefined;
isOperatorPresent = false;

allClearBtn.addEventListener("click", () => {
  allClear();
});

equalBtn.addEventListener("click", () => {
  operate();
});

clearBtn.addEventListener("click", () => {
  clear();
});

numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    if (isOperatorPresent === false) {
      if (lastOperand.includes(".") && button.textContent === ".") {
        return;
      } else {
        lastOperand += getNumbers(button);
        previousOp.textContent = lastOperand;
      }
    } else if (isOperatorPresent === true) {
      if (nextOperand.includes(".") && button.textContent === ".") {
        return;
      } else {
        nextOperand += getNumbers(button);
        currentOp.textContent = nextOperand;
      }
    }
  });
});

operatorBtns.forEach((button) => {
  button.addEventListener("click", () => {
    if (lastOperand === "" && nextOperand === "") {
      return;
    }
    if (isOperatorPresent === false) {
      isOperatorPresent = true;
    } else if (isOperatorPresent === true && operator !== undefined) {
      operate();
    }
    operationSign.textContent = button.textContent;
    operator = button.textContent;
  });
});

function allClear() {
  previousOp.textContent = 0;
  currentOp.textContent = "";
  lastOperand = "";
  nextOperand = "";
  operator = undefined;
  isOperatorPresent = false;
  operationSign.textContent = "";
}

function clear() {
  if (isOperatorPresent === false) {
    lastOperand = lastOperand.slice(0, -1);
    previousOp.textContent = lastOperand;
  } else {
    nextOperand = nextOperand.slice(0, -1);
    currentOp.textContent = nextOperand;
  }
}

function getNumbers(number) {
  let numbers = number.textContent;
  return numbers;
}

function operate() {
  let prevOperand = parseFloat(lastOperand);
  let currentOperand = parseFloat(nextOperand);
  let total = 0;

  if (operator === undefined) return;
  if (lastOperand === "" || nextOperand === "") {
    return;
  }

  if (operator === "+") {
    total = prevOperand + currentOperand;
    console.log(total);
  } else if (operator === "*") {
    total = prevOperand * currentOperand;
    console.log(total);
  } else if (operator === "/") {
    total = prevOperand / currentOperand;
    console.log(total);
  } else if (operator === "-") {
    total = prevOperand - currentOperand;
    console.log(total);
  }

  previousOp.textContent = total;
  currentOp.textContent = "";

  lastOperand = total;
  operator = undefined;
  nextOperand = "";
  operationSign.textContent = "";
}

allClear();
