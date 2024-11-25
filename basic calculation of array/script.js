function doubleNumber() {
    const numberInput = document.getElementById('numberInput');
    const inputValue = numberInput.value;

    // Validate input
    if (inputValue === '' || isNaN(inputValue)) {
        alert('Please enter a valid number!');
        return;
    }

    const doubledValue = inputValue * 2;

    // Clear previous results
    const resultList = document.getElementById('resultList');
    resultList.innerHTML = ''; // Clear all previous results

    // Add new result
    const resultItem = document.createElement('div');
    resultItem.className = 'result-item';
    resultItem.textContent = `Original: ${inputValue}, Doubled: ${doubledValue}`;
    resultList.appendChild(resultItem);

    // Clear and refocus input field
    numberInput.value = '';
    numberInput.focus();
}
