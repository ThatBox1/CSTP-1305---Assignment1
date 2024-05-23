let foodData = '';

// Fetch data from data.JSON and assign to foodData
fetch('./data.JSON')
    .then(res => res.json())
    .then(data => {
        foodData = data;

        // Call functions to create table headers and populate table
        createTableHeaders();
        populateTable(foodData);
    })


function createTableHeaders() {
    const table = document.getElementById("food-table");
    const headerRow = table.querySelector("thead tr");

    headerRow.innerHTML = '<th>Name</th><th>Price</th><th>Description</th>';
}


function populateTable(data) {
    const tableBody = document.getElementById("food-table").querySelector("tbody");
    tableBody.innerHTML = '';

    let rowsHtml = '';
    data.forEach(item => {
        rowsHtml += `
            <tr>
                <td>${item.name}</td>
                <td>${formatMoney(item.price)}</td>
                <td>${item.description}</td>
            </tr>
        `;
    });

    tableBody.innerHTML = rowsHtml;
}

// cast data to money format
function formatMoney(numData) {
    return "$" + numData.toFixed(2);
}

function sort() {
    // Sort the array by name
    foodData.sort((a, b) => a.name.localeCompare(b.name));

    // Repopulate the table after sorting
    populateTable(foodData);
}
