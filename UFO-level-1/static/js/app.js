// October 30, 2019
// Jadd Cheng

// Define variable to hold in data.js.
const tableData = data;

// Get reference to table body.
const tbody = d3.select("tbody");

// Render table with the whole data set.
tableData.forEach((ufoReport) => {
    const row = tbody.append("tr");
    for (key in ufoReport){
        const cell = tbody.append("td");
        cell.text(ufoReport[key]);
    }
});

// Display length of data array in console.
console.log("The length of the data array is: " + data.length)

// Select the filter button element.
const filterBtn = d3.select("#filter-btn");

// Event handler for button click.
filterBtn.on("click", function(){
    
    // Prevent page from refreshing with d3.
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node    
    // const inputElement = d3.select("#patient-form-input");
    const inputElement = d3.select("#datetime.form-control");

    // Get the value property of the input element, i.e. date.
    // const inputValue = inputElement.property("value");
    const inputDate = inputElement.property("value");

    // Display value in console.
    console.log('inputDate is ' + inputDate);

    // Filter data for objects with matching date.
    const filteredData = tableData.filter(tableData => tableData.datetime === inputDate);

    // Display filterData array in console.
    console.log(filteredData);
    
    // Clear table.
    d3.select("tbody").html("")
    
    // Re-render table with filtered data.
    filteredData.forEach((ufoReport) => {
        const row = tbody.append("tr");
        for (key in ufoReport){
            const cell = tbody.append("td");
            cell.text(ufoReport[key]);
        }
    });
});