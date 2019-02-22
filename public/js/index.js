'use strict';

/*
 * Function that is called when the document is ready.
 */
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	// console.log(moment().parseZone());
})

var today = new Date();
var currmm = today.getMonth();
var year = today.getFullYear();
//credit to https://coderwall.com/p/yrhbfg/get-full-name-of-a-month-from-a-javascript-date-object
Date.prototype.getMonthName = function() {
	var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
	return months[this.getMonth()];
};
/*
function checkMonth(givenMonth){
	switch(givenMonth) {
	  case 0:
		$('#currentMonth').text("Jan " + year);
		//current.setMonth(0);
		break;
	  case 1:
		$('#currentMonth').text("Feb " + year);
		break;
	  case 2:
		$('#currentMonth').text("Mar " + year);
		break;
	  case 3:
		$('#currentMonth').text("Apr " + year);
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
		$('#currentMonth').text("Aug " + year);
		break;
	  case 8:
		$('#currentMonth').text("Sept " + year);
		break;
	  case 9:
		$('#currentMonth').text("Oct " + year);
		break;
	  case 10:
		$('#currentMonth').text("Nov " + year);
		break;
	  case 11:
		$('#currentMonth').text("Dec " + year);
		break;
	  default:
		$("#backButton").text("...").addClass("active").toggleClass("active");
	}
}
*/
function initializePage() {
	$(".jumbotron p").addClass("active");
// Add any additional listeners here
// example: $("#div-id").click(functionToCall);
	// $('#currentDay').text(today.getMonthName()+ " " + today.getDate());
	$("#currentDay").text(moment().format("MMM D"));

//	$('#currentMonth').text(today.getMonthName() + " " + today.getFullYear());
//	$('#backButton').on("click", backButtonClick);
//	$('#forwardButton').on("click", forwardButtonClick);
//	$('#forwardButton').click(forwardButtonClick).addClass("active").toggleClass("active");
	$('#addContent').click(addContentClick);
	$('#editContent').click(editContentClick);
	$('#loginContent').click(loginContentClick);
//	$('#calendarFillDays').innerHTML = "";

	//$('#calendarFillDays').text(fillCalendar(currmm,year));

	$("#addScreen").click(showAddProject);
	$("#cancel-add").click(hideAddProject);
	$(".editScreen").click(showEditProject);
	$("#cancel-edit").click(hideEditProject);
	$("#loginScreen").click(showLogin);
	$("#cancel-login").click(hideLogin);

	$('#calendar').fullCalendar({
        defaultView: 'month',
		themeSystem: "bootstrap4",
		eventLimit: true,
		contentHeight: "auto",
		titleFormat: "MMM YYYY",

		dayClick: function(date, jsEvent, view) {
			// console.log('Clicked on: ' + date.format());
			// console.log(date.isSameOrBefore());

			if(date.isSameOrBefore()) {
			  $("#currentDay").text(date.format("MMM D"));
			}

			// var startDate = moment($(".project").children(".startdate").text()).format("MMM D");

			$(".project").each(function(i) {
				var startDate = moment($(this).children(".startdate").text());
				var selectedDate = date;
				if(startDate.isAfter(selectedDate)) {
					$(this).hide();
				} else {
					$(this).show();
				}
				console.log("start: " + startDate.format("MMM D"));
				console.log("selected: " + selectedDate.format("MMM D"));
			});
        }
    });

	$(".pName").each(function(i) {
		var projectName = $.trim($(this).text());
		var checked = $(this).children().prop("checked");
		// var dueDate = $(this).siblings(".duedate").html();
		// var dueDate = "2019-02-22";

		if(checked) {
			$("#calendar").fullCalendar("renderEvent", {
				id: "event" + i,
				title: projectName,
				start: moment(),
				allDay: true
			}, true);
		}
		// console.log(checked);
		// console.log(projectName + " " + dueDate);
	});

	$('.pName input').each(function(i) {
		$(this).change(function() {
			var projectName = $.trim($(this).parent().text());
			var checked = $(this).prop("checked");
			var eventID = "event" + i;
			var counter = parseInt($(".streakCounter").html());
			console.log(typeof(counter));

			if(checked) {
				$("#calendar").fullCalendar("renderEvent", {
					id: eventID,
					title: projectName,
					start: moment(),
					allDay: true,
				}, true);
				counter += 1;
				$(".streakCounter").text(counter);
			} else {
				$("#calendar").fullCalendar("removeEvents", eventID);
				counter -= 1;
				$(".streakCounter").text(counter);
			}
		});
		// console.log($.trim($(this).parent().text()));
	});
	$(".projLife").each(calcProjLife);
	//$(".longestStreak").each(calcLongStr);
	$(".remainingDays").each(calcDaysRemaining);

}

function calcLongStr(){

}
function calcProjLife(){
	var start = moment($(this).siblings(".startdate").html());
	var due = moment($(this).siblings(".duedate").html());
	//var momStart = moment(start);
	//var momDue = moment(due);
	var diffDays = start.diff(due, "day") * -1;
	console.log(start, due, diffDays);
	$(".projLife").text(diffDays + " days");
}
function calcDaysRemaining(){
	var current = moment().startOf('day');
	var given = moment($(this).siblings(".duedate").html());
	var temp = moment.duration(given.diff(current)).asDays();
	$(".remainingDays").text(Math.round(temp) + " days");
}


/*
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
*/
function addContentClick(e){
	console.log("Add content clicked");
	e.preventDefault();
}

function showAddProject(e) {
	e.preventDefault();
	$("#add-form").css("display", "block");
}

function hideAddProject(e) {
	e.preventDefault();
	$("#add-form").css("display", "none");
}

function editContentClick(e){
	console.log("Edit content clicked");
	e.preventDefault();
}

function showEditProject(e) {
	e.preventDefault();
	$("#edit-form").css("display", "block");
	var projectID = $(this).closest('tr').attr('id');
}

function hideEditProject(e) {
	e.preventDefault();
	$("#edit-form").css("display", "none");
}

function loginContentClick(e){
	console.log("Login content clicked");
	e.preventDefault();
		$("#loginScreen").css("color","white");
}

function showLogin(e) {
	e.preventDefault();
	$("#login-form").css("display", "block");
}

function hideLogin(e) {
	e.preventDefault();
	$("#login-form").css("display", "none");
}
