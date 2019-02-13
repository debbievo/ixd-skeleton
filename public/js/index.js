'use strict';

/*
 * Function that is called when the document is ready.
 */
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})
var today = new Date();
var currmm = today.getMonth();
var year = today.getFullYear();
//credit to https://coderwall.com/p/yrhbfg/get-full-name-of-a-month-from-a-javascript-date-object
Date.prototype.getMonthName = function() {
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	return months[this.getMonth()];
};

function checkMonth(givenMonth){
	switch(givenMonth) {
	  case 0:
		$('#currentMonth').text("January " + year);
		//current.setMonth(0);
		break;
	  case 1:
		$('#currentMonth').text("February " + year);
		break;
	  case 2:
		$('#currentMonth').text("March " + year);
		break;
	  case 3:
		$('#currentMonth').text("April " + year);
		break;
	  case 4:
		$('#currentMonth').text("May " + year);
		break;
	  case 5:
		$('#currentMonth').text("June " + year);
		break;
	  case 6:
		$('#currentMonth').text("July " + year);
		break;
	  case 7:
		$('#currentMonth').text("August " + year);
		break;
	  case 8:
		$('#currentMonth').text("September " + year);
		break;
	  case 9:
		$('#currentMonth').text("October " + year);
		break;
	  case 10:
		$('#currentMonth').text("November " + year);
		break;
	  case 11:
		$('#currentMonth').text("December " + year);
		break;
	  default:
		$("#backButton").text("...").addClass("active").toggleClass("active");
	}
}

function initializePage() {
	$(".jumbotron p").addClass("active");
// Add any additional listeners here
// example: $("#div-id").click(functionToCall);
	$('#currentDay').text(today.getMonthName()+ " " + today.getDate());
	$('#currentMonth').text(today.getMonthName() + " " + today.getFullYear());
	$('#backButton').on("click", backButtonClick);
	$('#forwardButton').on("click", forwardButtonClick);
//	$('#forwardButton').click(forwardButtonClick).addClass("active").toggleClass("active");
	$('#addContent').click(addContentClick);
//	$('#calendarFillDays').innerHTML = "";

	//$('#calendarFillDays').text(fillCalendar(currmm,year));

	$("#addScreen").click(showAddProject);
	$("#cancel-add").click(hideAddProject);
}

function backButtonClick(e){
	e.preventDefault();
	if (currmm-1 < 0) {
		currmm+=12;
		year--;
	}
	currmm = (currmm-1) % 12;
	checkMonth(currmm);
}

function forwardButtonClick(e){
	e.preventDefault();
	if(currmm+1 == 12){
		year++;
	}
	currmm = (currmm+1) % 12;
	checkMonth(currmm);
}

function addContentClick(e){
	console.log("Add content clicked");
	e.preventDefault();
}

function showAddProject(e) {
	e.preventDefault();
	$("#add-form").show();
}

function hideAddProject(e) {
	e.preventDefault();
	$("#add-form").hide();
}
