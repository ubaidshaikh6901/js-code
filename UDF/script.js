
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function convertTemperature() {
    const inputTemp = document.getElementById('temperature').value;
    const resultDisplay = document.getElementById('result');

    if (!inputTemp) {
        resultDisplay.textContent = "Please enter a temperature.";
        return;
    }

    const celsius = parseFloat(inputTemp);
    const fahrenheit = celsiusToFahrenheit(celsius);
    const celsiusConverted = fahrenheitToCelsius(celsius);

    resultDisplay.innerHTML = `
        ${celsius}°C = ${fahrenheit.toFixed(2)}°F<br>
        ${celsius}°F = ${celsiusConverted.toFixed(2)}°C
    `;
}