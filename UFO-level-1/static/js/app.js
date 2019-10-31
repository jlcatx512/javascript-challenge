// October 30, 2019
// Jadd Cheng

// Define variable to hold data from data.js.
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

// Create an event handler and function to trigger on button click.
filterBtn.on("click", function(){
    
    // Prevent page from reloading using d3.
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node    
    const inputElement = d3.select("#datetime.form-control");

    // Get the value property of the input element, i.e. date.
    const inputDate = inputElement.property("value");

    // Display inputDate value in console.
    console.log('inputDate is ' + inputDate);

    // Filter data for objects with matching date. Stick to strict equality.
    const filteredData = tableData.filter(tableData => tableData.datetime === inputDate);

    // Display length of filterData array and array itself in console.
    console.log("Length of filteredData is " + filteredData.length)
    console.log(filteredData);

    // If array is less than one one just clear the table to indicate no results.
    // Else, render new table with filtered data.
    if (filteredData.length < 1) {
        //  Clear table.
        d3.select("tbody").html("");
        } else {       
        //  Clear table.
        d3.select("tbody").html("")
        // Render new table with filtered data.
        filteredData.forEach((ufoReport) => {
            const row = tbody.append("tr");
            for (key in ufoReport){
                const cell = tbody.append("td");
                cell.text(ufoReport[key]);
            }
        });
      }
});