# javascript-challenge
October 28, 2019

## pseudocode ##
* Define button object.
* Define **event handler** to do something on click of button object.
* Read in json data with `d3.json()`
* Filter data with filter() and return a array.
* Add rows and populate with data based on filter array.

## Define button object ##
* What is `id` attribute of the button?
    * `id="filter-btn"`

## Read in d3 json string ##
* [Data Loading in D3](https://www.tutorialsteacher.com/d3js/loading-data-from-file-in-d3js)
> Sends http request to the specified url to load .json file or data and executes callback function with parsed json data objects.

## filter() ##
* [MDN on filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* `const filterData`
* Suppress default reload of form reload.

## Create table rows with d3 ##
* td