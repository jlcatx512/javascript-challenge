// October 30, 2019
// Jadd Cheng

// Define variable to hold in data.js.
const tableData = data;

// Get reference to table body.
let tbody = d3.select("tbody");

// Render table with the wholel data set.
data.forEach((ufoReport) => {
    const row = tbody.append("tr");
    for (key in ufoReport){
        const cell = tbody.append("td");
        cell.text(ufoReport[key]);
    }
});

// Select the filter button element.
const filterBtn = d3.select("#filter-btn");

// Event handler
filterBtn.on("click", function(){
    
    // Prevent page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    
    // grab references to the input element and the output div
    // const inputElement = d3.select("#patient-form-input");
    const inputElement = d3.select("#datetime.form-control");

    // Get the value property of the input element, i.e. date.
    // const inputValue = inputElement.property("value");
    const inputDate = inputElement.property("value");

    // console
    console.log(inputDate);

    // Filter data for objects with matching date.
    const filteredData = data.filter(data => data.datetime == inputDate);

    // console display filterData array of objects
    console.log(filteredData);
    
    // Redraw/update table
    
    // remove? --> should be remove everything after tbody.
    filteredData.forEach((ufoReport) => {
        const row = tbody.append("tr");
        for (key in ufoReport){
            const cell = tbody.append("td");
            cell.text(ufoReport[key]);
            // row.append("td").text(weatherReport[key]);
        }
    });
});
