const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const display = document.querySelector(".display");
const equalBtn = document.getElementById("equal");
const allClearBtn = document.getElementById("all-clear");

let lastOperand = "";
let nextOperand = "";
let operator = undefined;
isOperatorPresent = false;

allClearBtn.addEventListener("click", () => {
  allClear();
});

equalBtn.addEventListener("click", () => {
  operate();
});

numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    // if (display.textContent === "0") {
    //   display.textContent = button.textContent;
    // } else {
    //   display.textContent += button.textContent;
    // }

    if (button.textContent === "." && display.textContent.includes(".")) {
      return;
    }
    if (isOperatorPresent === false) {
      lastOperand += getNumbers(button);
      display.textContent = lastOperand;
      console.log(lastOperand);
    } else if (isOperatorPresent === true) {
      nextOperand += getNumbers(button);
      display.textContent = nextOperand;
      console.log(nextOperand);
    }

    console.log(lastOperand + " " + nextOperand);
  });
});

operatorBtns.forEach((button) => {
  button.addEventListener("click", () => {
    // const op = document.createElement("div");
    // op.textContent = button.textContent;
    // display.appendChild(op);

    if (isOperatorPresent === false) {
      isOperatorPresent = true;
    } else if (isOperatorPresent === true && operator !== undefined) {
      operate();
    }
    operator = button.textContent;
  });
});

function allClear() {
  display.textContent = 0;
  lastOperand = "";
  nextOperand = "";
  operator = undefined;
  isOperatorPresent = false;
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

  console.log(prevOperand);
  console.log(currentOperand);
  console.log(total);
  console.log(operator);
  display.textContent = total;

  lastOperand = total;
  operator = undefined;
  nextOperand = "";
}

allClear();
