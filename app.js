'use strict';

// fishy tracker app fill have a form to input data from user for parameters.
// store data to local storage
// send data to table on table.html page
// send data chart
// data wil be returned from user as a float value
// for chart on index just get 1 parameter for now date across the bottom
// ---------------- form -------------------
// feildset/ legend / labels / inputs
// use values from constructor for id tags nitrate, alkalinity, ect
// need submit button
// ---------- For table creation -------------
// create event listener for submit button
// TODO: if table data exist in local storage pull data
// need to get date by calling new Date and parsing month date and year
// find table create row > attach cell with date > continue attaching parameters to date cell > reattach row to table
// push new data to local storage
var tableSection = document.getElementById();
tableSection.addEventListener('submit', handleSubmit);

function handleSubmit(){
  //when clicked submit this function should take the parameters and render the data onto a graph and to a table on the next html page.
  
}
// TODO: create renderTable function
// TODO: create renderGraph function


//---------- for chart --------------------
// add chart.js file to index
// copy and paste version of chart to use
// if data exist in locale storage pull data
// use submit button event listener to grab data entered by user
// populate chart with new data attached
// ------------ object constructor key pair values --------------------
// function Parameters()
// all float values:  html: input value text > js: .parseFloat
// this.date
// this.nitrate
// this.alkalinity
// this.calcium

// stretch:
// this.magnesium
// this.salinity
// this.temp

