let currentInput = '0';
let operator = '';
let previousInput = '';
function updateDisplay() {
    document.getElementById('display').textContent = currentInput;
}
function appendNumber(number) {
    if (currentInput === '0') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function setOperator(op) {
    previousInput = currentInput;
    operator = op;
    currentInput = '0';
}

function calculateResult() {
    let result;
    let num1 = parseFloat(previousInput);
    let num2 = parseFloat(currentInput);

    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay();
}
function clearDisplay() {
    currentInput = '0';
    operator = '';
    previousInput = '';
    updateDisplay();
}
document.querySelectorAll('.button-grid button').forEach(button => {
    button.addEventListener('click', function () {
        const buttonText = this.textContent;

        if (buttonText === 'C') {
            clearDisplay();
        } else if (buttonText === '=') {
            calculateResult();
        } else if ('+-*/'.includes(buttonText)) {
            setOperator(buttonText);
        } else {
            appendNumber(buttonText);
        }
    });
});