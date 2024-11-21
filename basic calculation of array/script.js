function doubleNumber() {
    const numberInput = document.getElementById('numberInput');
    const inputValue = numberInput.value;

    
    if (inputValue === '' || isNaN(inputValue)) {
        alert('Please enter a valid number!');
        return;
    }

    const doubledValue = inputValue * 2;


    const resultList = document.getElementById('resultList');
    const resultItem = document.createElement('div');
    resultItem.className = 'result-item';
    resultItem.textContent = `Original: ${inputValue}, Doubled: ${doubledValue}`;


    resultList.appendChild(resultItem);


    numberInput.value = '';
    numberInput.focus();
}