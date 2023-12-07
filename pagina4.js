let displayValue = '';
let operator = '';
let firstOperand = '';

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function setOperator(op) {
    if (operator !== '') {
        calculateResult();
    }
    operator = op;
    firstOperand = displayValue;
    displayValue = '';
}

function clearDisplay() {
    displayValue = '';
    operator = '';
    firstOperand = '';
    updateDisplay();
}

function calculateResult() {
    if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
        displayValue = String(eval(`${firstOperand} ${operator} ${displayValue}`));
        operator = '';
        firstOperand = '';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
