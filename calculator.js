// This is the JavaScript file for calculator functionality.

// Selecting all calculator buttons
const buttons = document.querySelectorAll("button");

// Selecting the result display area
const paragra = document.querySelector(".result");

// Variables to store the operands and the operator
let operand1 = "";
let operand2 = "";
let currentOperator = null;

// Operators used in the calculator
const operators = ["÷", "-", "x", "+"];

// Function to reset the calculator
function resetCalculator() {
    operand1 = "";
    operand2 = "";
    currentOperator = null;
    updateDisplay("0");
}

// Function to update the display
function updateDisplay(text) {
    paragra.innerText = text;
}

// Function to handle number button clicks
function handleNumberClick(number) {
    if (currentOperator === null) {
        operand1 += number;
        updateDisplay(operand1);
    } else {
        operand2 += number;
        updateDisplay(operand2);
    }
}

// Function to handle operator button clicks
function handleOperatorClick(operator) {
    if (operand1 !== "") {
        currentOperator = operator;
    }
}

// Function to perform the calculation and update the display
function calculate() {
    if (operand1 !== "" && operand2 !== "" && currentOperator !== null) {
        const num1 = parseFloat(operand1);
        const num2 = parseFloat(operand2);

        let result;
        switch (currentOperator) {
            case "÷":
                result = num1 / num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "x":
                result = num1 * num2;
                break;
            case "+":
                result = num1 + num2;
                break;
        }

        updateDisplay(result.toString());
        operand1 = result.toString();
        operand2 = "";
        currentOperator = null;
    }
}

// Adding click event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener("click", function(event) {
        const buttonText = button.textContent;

        if (buttonText === "C") {
            resetCalculator();
        } else if (buttonText === "←") {
            if (currentOperator === null) {
                operand1 = operand1.slice(0, -1);
                updateDisplay(operand1 || "0");
            } else {
                operand2 = operand2.slice(0, -1);
                updateDisplay(operand2 || "0");
            }
        } else if (operators.includes(buttonText)) {
            handleOperatorClick(buttonText);
        } else if (buttonText === "=") {
            calculate();
        } else {
            handleNumberClick(buttonText);
        }
    });
});
