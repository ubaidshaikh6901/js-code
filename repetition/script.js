function generateTable() {
    const number = document.getElementById('numberInput').value;
    const tableContainer = document.getElementById('tableContainer');


    tableContainer.innerHTML = '';


    if (number === '') {
        alert('Please enter a number!');
        return;
    }

    else if (number === '0') {
        alert('invald input ! please enter a number greater than 0.');
        return;
    }


    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    const headers = ['Number', 'Multiplier', 'Result'];


    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });


    table.appendChild(headerRow);


    for (let i = 1; i <= 10; i++) {
        const row = document.createElement('tr');

        const numCell = document.createElement('td');
        numCell.textContent = number;

        const multiplierCell = document.createElement('td');
        multiplierCell.textContent = i;

        const resultCell = document.createElement('td');
        resultCell.textContent = number * i;

        row.appendChild(numCell);
        row.appendChild(multiplierCell);
        row.appendChild(resultCell);

        table.appendChild(row);
    }

    tableContainer.appendChild(table);
}