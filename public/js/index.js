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
	$("#currentDay").html(moment().format("MMM D YYYY"));

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
//	$("#submit-project").click(addProject);
	$("#cancel-add").click(hideAddProject);
	$(".editScreen").click(showEditProject);
	$("#cancel-edit").click(hideEditProject);
	$("#loginScreen").click(showLogin);
	$("#cancel-login").click(hideLogin);
	$("#submit-login").click(afterLogin);
	$("#logout").click(loginContentClick)
	$("#logout").css("display", "none");
	$("#logout").click(logout);
	$(".startPick").datepicker('setValue', moment());
	$(".duePick").datepicker();
	//$("#loginScreen").addEventListener("click", showLogout);
	//$("#calendar-top")[0].style.WebkitFilter = 'blur(4px)';
	//$("#calendar-top")[0].style.filter= 'blur(4px)';


	$('#calendar').fullCalendar({
        defaultView: 'month',
		themeSystem: "bootstrap4",
		eventLimit: true,
		contentHeight: "auto",
		titleFormat: "MMM YYYY",

		dayClick: function(date, jsEvent, view) {
			// console.log('Clicked on: ' + date.format());
			// console.log(date.isSameOrBefore());

			// $(".fc-day").css("background-color", "white");
			// $(this).css("border-box", "black");
			// $(this).css('background-color', "rgba(255, 99, 132, 0.8)");
			// $(".fc-past").not(this).css("background-color", "#eeeeee");
			// $(this).siblings(".fc-day-top").css('background-color', "rgba(255, 99, 132, 0.8)");
			// console.log(this);

			var selectedDate = date.format("MMM D YYYY");

			if(date.isSameOrBefore()) {
			  $("#currentDay").html(selectedDate);
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
				// console.log("start: " + startDate.format("MMM D"));
				// console.log("selected: " + selectedDate.format("MMM D"));
			});
        }
    });

	$(".pName").each(function(i) {
		var projectName = $.trim($(this).text());
		var eventStart = moment($("#currentDay").text());
		var eventID = "event-" + eventStart.format("YYYY-MM-YY") + "-" + i;
		var checked = $(this).children().prop("checked");
		// var dueDate = $(this).siblings(".duedate").html();
		// var dueDate = "2019-02-22";
		// var eventStart = moment();

		if(checked) {
			$("#calendar").fullCalendar("renderEvent", {
				id: eventID,
				title: projectName,
				start: eventStart,
				allDay: true
			}, true);
			// console.log(eventID);
		}
		// console.log(checked);
		// console.log(projectName + " " + dueDate);
	});

	$('.pName input').each(function(i) {
		$(this).change(function() {
			var projectName = $.trim($(this).parent().text());
			var eventStart = moment($("#currentDay").text());
			var eventID = "event-" + eventStart.format("YYYY-MM-YY") + "-" + i;
			var checked = $(this).prop("checked");
			// var counter = parseInt($(".streakCounter").html());

			var counterSelect = $(this).parent().siblings(".streakCounter");
			var counter = parseInt(counterSelect.html());

			// console.log(typeof(counter));
			// console.log(eventStart);
			// console.log(counter);

			if(checked) {
				$("#calendar").fullCalendar("renderEvent", {
					id: eventID,
					title: projectName,
					start: eventStart,
					allDay: true,
				}, true);
				counter += 1;
				counterSelect.html(counter);
				// console.log(eventID);
			} else {
				$("#calendar").fullCalendar("removeEvents", eventID);
				counter -= 1;
				counterSelect.html(counter);
				// console.log(eventID);
			}
		});
		// console.log($.trim($(this).parent().text()));
	});

	$(".projLife").each(function(i) {
		var start = moment($(this).siblings(".startdate").html());
		var due = moment($(this).siblings(".duedate").html());
		//var momStart = moment(start);
		//var momDue = moment(due);
		var diffDays = start.diff(due, "day") * -1;
		console.log(diffDays);
		$(this).html(diffDays + " days");
	});
	//$(".longestStreak").each(calcLongStr);

	$(".remainingDays").each(function(i) {
		var current = moment().startOf('day');
		var given = moment($(this).siblings(".duedate").html());
		var temp = moment.duration(given.diff(current)).asDays();
		$(this).html(Math.round(temp) + " days");
	});

}

// function calcLongStr(){
//
// }

// function calcProjLife(){
// 	var start = moment($(this).siblings(".startdate").html());
// 	var due = moment($(this).siblings(".duedate").html());
// 	//var momStart = moment(start);
// 	//var momDue = moment(due);
// 	var diffDays = start.diff(due, "day") * -1;
// 	console.log(start, due, diffDays);
// 	$(".projLife").text(diffDays + " days");
// }

// function calcDaysRemaining(){
// 	var current = moment().startOf('day');
// 	var given = moment($(this).siblings(".duedate").html());
// 	var temp = moment.duration(given.diff(current)).asDays();
// 	$(".remainingDays").text(Math.round(temp) + " days");
// }


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
	$("#calendar-top")[0].style.WebkitFilter = 'blur(4px)';
	$("#calendar-top")[0].style.filter= 'blur(4px)';
	$("#login-top")[0].style.WebkitFilter = 'blur(4px)';
	$("#login-top")[0].style.filter= 'blur(4px)';
	$("#project-bottom")[0].style.WebkitFilter = 'blur(4px)';
	$("#project-bottom")[0].style.filter= 'blur(4px)';
}

/*
function addProject(e) {
	e.preventDefault();
	$("#add-form").css("display", "none");
	$("#calendar-top")[0].style.WebkitFilter = 'blur(0px)';
	$("#calendar-top")[0].style.filter= 'blur(0px)';
}
*/

function hideAddProject(e) {
	e.preventDefault();
	$("#add-form").css("display", "none");
	$("#calendar-top")[0].style.WebkitFilter = 'blur(0px)';
	$("#calendar-top")[0].style.filter= 'blur(0px)';
	$("#login-top")[0].style.WebkitFilter = 'blur(0px)';
	$("#login-top")[0].style.filter= 'blur(0px)';
	$("#project-bottom")[0].style.WebkitFilter = 'blur(0px)';
	$("#project-bottom")[0].style.filter= 'blur(0px)';
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
		$("#loginScreen").css("color","black");
		$("logout").hide();
}

function showLogin(e) {
	e.preventDefault();
	$("#login-form").css("display", "block");
	$("logout").hide();
	$("#calendar-top")[0].style.WebkitFilter = 'blur(4px)';
	$("#calendar-top")[0].style.filter= 'blur(4px)';
	$("#login-top")[0].style.WebkitFilter = 'blur(4px)';
	$("#login-top")[0].style.filter= 'blur(4px)';
	$("#project-bottom")[0].style.WebkitFilter = 'blur(4px)';
	$("#project-bottom")[0].style.filter= 'blur(4px)';
}

function hideLogin(e) {
	e.preventDefault();
	$("#login-form").css("display", "none");
	$("logout").hide();
	$("#calendar-top")[0].style.WebkitFilter = 'blur(0px)';
	$("#calendar-top")[0].style.filter= 'blur(0px)';
	$("#login-top")[0].style.WebkitFilter = 'blur(0px)';
	$("#login-top")[0].style.filter= 'blur(0px)';
	$("#project-bottom")[0].style.WebkitFilter = 'blur(0px)';
	$("#project-bottom")[0].style.filter= 'blur(0px)';
}

function afterLogin(e) {
	e.preventDefault();
	$("#logout").css("display", "block");
	$("#loginScreen").css("display", "none");
	$("#login-form").css("display", "none");
	$("#calendar-top")[0].style.WebkitFilter = 'blur(0px)';
	$("#calendar-top")[0].style.filter= 'blur(0px)';
	$("#login-top")[0].style.WebkitFilter = 'blur(0px)';
	$("#login-top")[0].style.filter= 'blur(0px)';
	$("#project-bottom")[0].style.WebkitFilter = 'blur(0px)';
	$("#project-bottom")[0].style.filter= 'blur(0px)';
}

function logout(e) {
	e.preventDefault();
	$("#loginScreen").css("display", "block");
	$("#logout").css("display", "none");
}
