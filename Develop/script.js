// Current hour in dayjs form
var currentHour = dayjs().hour();
console.log(`Current Hour: ${currentHour}`);

var nineAM = document.getElementById('hour-9');
nineAM = 9;

var tenAM = document.getElementById('hour-10');
tenAM = 10;

const timeBlocks = [nineAM, tenAM];


// Code that interacts with DOM nested in jQuery call to ensure proper rendering
$(document).ready(function() {
  // Displays the formatted current day
    var today = dayjs();
    $("#currentDay").text(today.format('dddd, MMMM DD'));

    if (currentHour > nineAM) {
      $("#hour-9").addClass("past");
    } else if (currentHour < nineAM) {
      $("#hour-9").addClass("future");
    } else {
      $("#hour-9").addClass("present");
    }

    if (currentHour > tenAM) {
      $("#hour-10").addClass("past");
    } else if (currentHour < tenAM) {
      $("#hour-10").addClass("future");
    } else {
      $("#hour-10").addClass("present");
    }

})

// DAYJS .isSame(), .isBefore(), .isAfter, compare current time with parsed js time

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //MBI: Give each hour a dayjs(); time representation and then have the function compare that time
  //MBI: ...with the current time and add the past/present/future classes accordingly
  
  // console.log(`Current Hour: ${currentHour}`);
  // if (time represented by the time block is in the past) {
  //   any div that is in the past: $(".past");
  // } else if (time in block is at present) {
  //     any div that meets this condition: $(".present");

  // } else {
  //     any div that is in the future, apply: $(".future");
  // }
  


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

// Completed stuff
// --------------------------------------------------------------------------//
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.