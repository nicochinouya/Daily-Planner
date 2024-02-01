// Moment.js
const currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
const currentHour = moment().format('h:mm:ss a');

// Text hour variables
const nineAm = $("#9am");
const tenAm = $("#10am");
const elevenAm = $("#11am");
const twelvePm = $("#12pm");
const onePm = $("#13pm");
const twoPm = $("#14pm");
const threePm = $("#15pm");
const fourPm = $("#16pm");
const fivePm = $("#17pm");
const sixPm = $("#18pm");
const sevenPm = $("#19pm");

let hour = moment().hours();
let userInput;
let hourSpan;

const interval = setInterval(function() {
  const momentNow = moment();
  $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
}, 100);

function initPage() {
  console.log("Current Hour " + hour);

  nineAm.val(JSON.parse(localStorage.getItem("09:00 am")));
  tenAm.val(JSON.parse(localStorage.getItem("10:00 am")));
  elevenAm.val(JSON.parse(localStorage.getItem("11:00 am")));
  twelvePm.val(JSON.parse(localStorage.getItem("12:00 pm")));
  onePm.val(JSON.parse(localStorage.getItem("01:00 pm")));
  twoPm.val(JSON.parse(localStorage.getItem("02:00 pm")));
  threePm.val(JSON.parse(localStorage.getItem("03:00 pm")));
  fourPm.val(JSON.parse(localStorage.getItem("04:00 pm")));
  fivePm.val(JSON.parse(localStorage.getItem("05:00 pm")));
  sixPm.val(JSON.parse(localStorage.getItem("06:00 pm")));
  sevenPm.val(JSON.parse(localStorage.getItem("07:00 pm")));
} 

function background() {
  $(".form-control").each(function () {
    const timeTest = parseInt($(this).attr("id"));
    console.log(timeTest);
    console.log(hour);

    if (hour > timeTest) {
      $(this).addClass("past");
    } else if (hour < timeTest) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });
}

$(document).ready(function(){
  initPage();
  background();

  // Buttons (save to Local Storage)
  $(".saveBtn").on("click", function(){
    userInput = $(this).siblings(".form-control").val().trim();
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    localStorage.setItem(hourSpan, JSON.stringify(userInput));
  });

  // Button for clear the day
  $("#clearDay").on("click", function(){
    localStorage.clear();
    initPage();
  }); 
});
