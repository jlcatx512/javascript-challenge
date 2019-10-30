# javascript-challenge
* October 28, 2019
* https://utmcbdatapt07-jxr4493.slack.com/files/UL3B0JR2P/FPJGFQCCR/activity_9_app.js?origin_team=TL645CUB0
    * Really helpful.

## pseudocode ##
* Define button object.
* Define **event handler** to do something on click of button object.
* Read in json data with `d3.json()`
* Filter data with filter() and return a array.
* Add rows and populate with data based on filter array.

## Define button object ##
* What is `id` attribute of the button?
    * `id="filter-btn"`

[Free D3 book](https://leanpub.com/D3-Tips-and-Tricks)

Level 1: Automatic Table and Date Search (Required)
Create a basic HTML web page or use the index.html file provided (we recommend building your own custom page!).



Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.
Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.

[JavaScript Array filter() Method](https://www.w3schools.com/jsref/jsref_filter.asp)

[JavaScript | Array filter()](https://www.geeksforgeeks.org/javascript-array-filter/)

[Learn map, filter and reduce in Javascript](https://medium.com/@joomiguelcunha/learn-map-filter-and-reduce-in-javascript-ea59009593c4)
> The perfect toolset for your venture in Functional Programming

## Read in d3 json string ##
* [Data Loading in D3](https://www.tutorialsteacher.com/d3js/loading-data-from-file-in-d3js)
> Sends http request to the specified url to load .json file or data and executes callback function with parsed json data objects.

## filter() ##
* [MDN on filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* `const filterData`
* Suppress default reload of form reload.

## Create table rows with d3 ##
* td