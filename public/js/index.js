'use strict';

/*
 * Function that is called when the document is ready.
 */
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	test();
	// console.log(moment().parseZone());
	// console.log(Object.keys(localStorage));
	// console.log(moment("2019-02-08").isAfter(moment("2019-02-08")));
});

var initChecks = localStorage.getItem("initChecks");
if (initChecks != "true") {
	initChecks = true;
}

var today = new Date();
var currmm = today.getMonth();
var year = today.getFullYear();
//credit to https://coderwall.com/p/yrhbfg/get-full-name-of-a-month-from-a-javascript-date-object
Date.prototype.getMonthName = function() {
	var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
	return months[this.getMonth()];
};

var begin = moment("2019-02-08");
var end = moment("2019-05-22");
var todaysDate = moment();

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
/*	$("#submit-edit").click(function(){
	  var editedContent = $(this).siblings('.projName').html();
	  localStorage.newContent = editedContent;
	  if(localStorage.getItem('newContent')) {
  	  	$('.saveBtn').siblings('.projName').html(localStorage.getItem('newContent'));
	  }
  });*/
	$("#loginScreen").click(showLogin);
	$("#cancel-login").click(hideLogin);
	$("#submit-login").click(afterLogin);
	$("#logout").click(loginContentClick)
	$("#logout").css("display", "none");
	$("#logout").click(logout);
	$(".startPick").datepicker('setValue', moment());
	$(".duePick").datepicker();
	$(".editStartPick").datepicker('setValue', moment());
	//$("#loginScreen").addEventListener("click", showLogout);
	//$("#calendar-top")[0].style.WebkitFilter = 'blur(4px)';
	//$("#calendar-top")[0].style.filter= 'blur(4px)';

	if (!initChecks) {
		for (var i = begin; i.isBefore(end); i.add(1, "days")) {
			var checks = {};
			for (var j = 0; j < 10; j++) {
				var key = "check" + j;
				// checks[key] = "false";
				if (i.isBefore(todaysDate)) {
					checks[key] = (Math.random() >= 0.5);
				} else {
					checks[key] = false;
				}
			}
			localStorage.setItem(i.format("YYYY-MM-DD"), JSON.stringify(checks));
		}
		initChecks = true;
	}

	$('#calendar').fullCalendar({
        defaultView: 'month',
		themeSystem: "bootstrap4",
		eventLimit: true,
		contentHeight: "auto",
		titleFormat: "MMM YYYY",

		dayClick: function(date, jsEvent, view) {
			// console.log('Clicked on: ' + date.format());
			// console.log(date.isSameOrBefore());
			var checks = JSON.parse(localStorage.getItem(date.format("YYYY-MM-DD")));
			// console.log(moment(date));

			$(".fc-day").css("background-color", "white");
			$(this).css("border-box", "black");
			$(this).css('background-color', "rgba(52, 171, 250, 0.5)");
			$(".fc-past").not(this).css("background-color", "#eeeeee");
			$(this).siblings(".fc-day-top").css('background-color', "rgba(255, 99, 132, 0.8)");
			// console.log(this);

			var selectedDate = date.format("MMM D YYYY");
			var todaysDate = moment().format("MMM D YYYY");

			if(date.isSameOrBefore()) {
			  $("#currentDay").html(selectedDate);
		    } else {
			  $("#currentDay").html(todaysDate);
			}

			// var startDate = moment($(".project").children(".startdate").text()).format("MMM D");
			// var todaysDate = moment().format("YYYY-MM-DD");
			// var todaysChecks = JSON.parse(localStorage.getItem(todaysDate));

			$(".project").each(function(i) {
				var checkKey = "check" + i;
				var checkSelect = $(this).children(".pName").children("input");

				if (date.isSameOrAfter(begin)) {
					checkSelect.prop("checked", checks[checkKey]);
				}

				// console.log(checks[checkKey]);
				// console.log($(this).children(".pName").children());

				var startDate = moment($(this).children(".startdate").text());
				var selectedDate = moment(date);
				var selectedDateAdj = moment(date);
				selectedDateAdj.add(1, "days");

				// console.log(startDate.isSameOrBefore(selectedDateAdj));
				if(startDate.isSameOrBefore(selectedDateAdj)) {
					$(this).show();
				} else {
					$(this).hide();
				}

				// console.log("start: " + startDate.format("YYYY-MM-DD"));
				// console.log("selected: " + selectedDate.format("YYYY-MM-DD"));
				// console.log("adjusted: " + selectedDateAdj.format("YYYY-MM-DD"));
			});

        }
    });

	// populate calendar with events
	$(".pName").each(function(i) {
		var projectName = $.trim($(this).text());
		var eventStart = moment($("#currentDay").text());
		// var eventID = "event-" + eventStart.format("YYYY-MM-YY") + "-" + i;
		var checked = $(this).children().prop("checked");
		// var checks = JSON.parse(localStorage.getItem(date.format("YYYY-MM-DD")));
		// var dueDate = $(this).siblings(".duedate").html();
		// var dueDate = "2019-02-22";
		// var eventStart = moment();
		// var dates = Object.keys(localStorage);
		// console.log(storage);
		// console.log(i);

		for (var date in localStorage) {
			var eventStart = moment(date).format("YYYY-MM-DD");
			var eventID = "event-" + eventStart + "-" + i;
			var checkKey = "check" + i;
			// var check = localStorage.getItem(date);
			// var check = localStorage.getItem(date)[checkKey];
			// console.log(check);
			// console.log(eventStart.format("YYYY-MM-DD"));

			if (eventStart != "Invalid date") {
				var checks = JSON.parse(localStorage.getItem(eventStart));
				var pCheck = checks[checkKey];
				// console.log(checks);
				// console.log(pCheck);
				if(pCheck){
					$("#calendar").fullCalendar("renderEvent", {
						id: eventID,
						title: projectName,
						start: eventStart,
						allDay: true
					}, true);
				}
			}
			// console.log(localStorage.getItem(date));
		}

		var todaysDate = moment().format("YYYY-MM-DD");
		var todaysChecks = JSON.parse(localStorage.getItem(todaysDate));
		var checkKey = "check" + i;
		$(this).children().prop("checked", todaysChecks[checkKey]);

		// if(checked) {
		// 	$("#calendar").fullCalendar("renderEvent", {
		// 		id: eventID,
		// 		title: projectName,
		// 		start: eventStart,
		// 		allDay: true
		// 	}, true);
			// console.log(eventID);
		// }
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

			var checks = JSON.parse(localStorage.getItem(eventStart.format("YYYY-MM-DD")));
			var checkKey = "check" + i;

			if(checked) {
				$("#calendar").fullCalendar("renderEvent", {
					id: eventID,
					title: projectName,
					start: eventStart,
					allDay: true,
				}, true);
				checks[checkKey] = true;
				localStorage.setItem(eventStart.format("YYYY-MM-DD"), JSON.stringify(checks));
				counter += 1;
				counterSelect.html(counter);
				// console.log(eventID);
			} else {
				$("#calendar").fullCalendar("removeEvents", eventID);
				checks[checkKey] = false;
				localStorage.setItem(eventStart.format("YYYY-MM-DD"), JSON.stringify(checks));
				counter -= 1;
				counterSelect.html(counter);
				// console.log(eventID);
			}
		});
		// console.log($.trim($(this).parent().text()));
		// console.log(checks);
	});

		var startDateArr = [];
		var dueDateArr = [];
	$(".projLife").each(function(i) {
		var start = moment($(this).siblings(".startdate").html());
		var due = moment($(this).siblings(".duedate").html());
		startDateArr[i] = start;
		dueDateArr[i] = due;
		//var momStart = moment(start);
		//var momDue = moment(due);
		var diffDays = start.diff(due, "day") * -1;
		// console.log(diffDays);
		$(this).html(diffDays + " days");
	});

	console.log(startDateArr[0]);
	//$(".longestStreak").each(calcLongStr);

	$(".remainingDays").each(function(i) {
		var current = moment().startOf('day');
		var given = moment($(this).siblings(".duedate").html());
		var temp = moment.duration(given.diff(current)).asDays();
		$(this).html(Math.round(temp) + " days");
	});

	$(".projName").each(function(i){
	})

	$(".editBtn").click(function(){
		$('.projName').attr('contenteditable','true');
		if ($(".deleteBtn").attr('hidden')) {
			$(this).siblings(".deleteBtn").removeAttr('hidden');
	    } else {
			$(this).siblings(".deleteBtn").attr('hidden');
			$(".editBtn").show();
	    }
		$(this).hide();
		if ($(".saveBtn").attr('hidden')) {
			$(this).siblings(".saveBtn").removeAttr('hidden');
	    } else {
			$(this).siblings(".saveBtn").attr('hidden');
			$(".editBtn").show();
	    }
	});
//	var theContent = $('.projName');

	$('.saveBtn').click(function(){
	  var editedContent = $(this).siblings('.projName').html();
	  localStorage.newContent = editedContent;
	  if(localStorage.getItem('newContent')) {
  	  	$('.saveBtn').siblings('.projName').html(localStorage.getItem('newContent'));
	  }
	});

	$(".deleteBtn").click(function(){
		$(this).closest('.project').remove()
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
	// console.log("Add content clicked");
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
	// console.log("Edit content clicked");
	e.preventDefault();
}

function showEditProject(e) {
	e.preventDefault();
	$("#edit-form").css("display", "block");
	$('.projName').attr('contenteditable','true');
	var projectID = $(this).closest('tr').attr('id');
}

function hideEditProject(e) {
	e.preventDefault();
	$("#edit-form").css("display", "none");
}

function loginContentClick(e){
	// console.log("Login content clicked");
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

function test(){
	var ctx = $("#testChart");
	var chart = new Chart(ctx, {
		// The type of chart we want to create
		type: "doughnut",
		// The data for our dataset
		data: {
			labels: ["Worked on", "No Progress"],
			datasets: [{
				data: [5, 3],
				backgroundColor: [ 'rgba(52, 171, 250, 0.8)', 'rgba(243, 27, 27, 0.8)' ]
			}],
		},
		// Configuration options go here
		options: {
			title: { display: true, text: "Today's Progress:", position: "top", fontSize: 16},
			legend: { display: true },
		}
	});
}

$(".projLife").each(function(i) {
	var start = moment($(this).siblings(".startdate").html());
	var due = moment($(this).siblings(".duedate").html());
	//var momStart = moment(start);
	//var momDue = moment(due);
	var diffDays = start.diff(due, "day") * -1;
	console.log(diffDays);
	$(this).html(diffDays + " days");
});
/*
$(".editStartPick").each(function(i){
	var start = moment($(".projLife").siblings(".startdate").html());
	$(this).datepicker('setValue', start);
});
	datepicker('setValue', moment());
$(".editDuePick").datepicker();

*/
function getStartDate(){

}

function getDueDate(){

}
