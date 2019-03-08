'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	// overallStats();
	//$(".longestStreak").html(getMax());

	var streakArr = [];
	$(".longestIndStreak").each(function(i){
		var currStreak = $(this).html();
		//console.log(typeof(currStreak));
		//console.log(currStreak);
		var currStrNum = parseInt(currStreak);
		streakArr.push(currStrNum);
		// console.log(currStrNum);
	});
	var maxStreak = Math.max(...streakArr);
	//console.log(maxStreak);
	//console.log(streakArr.toString());
	$(".longestStreak").html(maxStreak + " days");
	$(".projLife").each(function(i) {
		var start = moment($(this).siblings(".startdate").html());
		var due = moment($(this).siblings(".duedate").html());
		var curr = moment();
	//	startDateArr[i] = start;
	//	dueDateArr[i] = due;
		//var momStart = moment(start);
		//var momDue = moment(due);
		var diffDays = start.diff(curr, "day") * -1;
		if(diffDays < 0){
			//console.log(diffDays);
			$(this).css("color", "#dc3545").html(diffDays + " days");
		}
		else{
			//console.log(diffDays);
			$(this).html(diffDays + " days");
		}
	});
})


var initComplete = localStorage.getItem("initComplete");
if (initComplete != "true") {
	initComplete = true;
	localStorage.setItem("initComplete", initComplete);
}

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	var ctxStats = $("#myChart");
	var chartStats = new Chart(ctxStats, {
	    // The type of chart we want to create
	    type: "doughnut",
	    // The data for our dataset
	    data: {
	        labels: ["Complete", "In Progress"],
	        datasets: [{
							data: [$("input:checkbox:checked").length, $("input:checkbox:not(:checked)").length],
				backgroundColor: [ 'rgba(66, 244, 140, 0.8)', 'rgba(238, 238, 238, 0.8)' ]
	        }],
	    },
	    // Configuration options go here
	    options: {
			title: { display: true, text: "Total Projects: " + ($('.statsLayout').length - 1), position: "top", fontSize: 16, fontFamily: "Sniglet"},
			legend: { labels: {display: true, fontFamily: "Sniglet"}},
		}
	});

	if (initComplete != "true") {
		var numInProgress = $(".btn-outline-secondary.active").length;
		var numComplete = $(".btn-outline-primary.active").length;

		// console.log(numInProgress);
		// console.log(numComplete);

		localStorage.setItem("numInProgress", numInProgress);
		localStorage.setItem("numComplete", numComplete);
	}


	$(".complete").each(function(i) {
		$(this).change(function() {
			// console.log($(this));
			var completeCheck = $(this).children("label").hasClass("active");

			if (completeCheck) {
				$(this).children("label").html('<input type="checkbox" checked="" autocomplete="off"> Complete');
				$(this).children("label").removeClass("btn-secondary");
				$(this).children("label").addClass("btn-primary");
			} else {
				$(this).children("label").html('<input type="checkbox" checked="" autocomplete="off"> In progress');
				$(this).children("label").removeClass("btn-primary");
				$(this).children("label").addClass("btn-secondary");
			}

			var numComplete = $(".complete .btn-lg").hasClass("active");
			// console.log(numComplete);
		});
	});

	$("input").each(function(i) {
		var checked = $(this).prop("checked");
		// console.log($(this).parents(".complete-button").siblings(".status").text());

		if (checked) {
			$(this).parents(".complete-button").siblings(".status").text("Status: Complete");
		} else {
			$(this).parents(".complete-button").siblings(".status").text("Status: In progress");
		}

		$(this).change(function() {
			var checked = $(this).prop("checked");
			// console.log($(this).parents(".complete-button").siblings(".status"));
			if (checked) {
				$(this).parents(".complete-button").siblings(".status").text("Status: Complete");
			} else {
				$(this).parents(".complete-button").siblings(".status").text("Status: In progress");
			}

			var chartData = [$("input:checkbox:checked").length, $("input:checkbox:not(:checked)").length];
			//console.log(chartData);
			chartStats.data.datasets[0].data = chartData;
			chartStats.update();
		});
	});

}

function projectClick(e) { 
	console.log("Project Clicked");
    // prevent the page from reloading 
    e.preventDefault();
}

// function overallStats() {
// 	var ctx = $("#myChart");
// 	var chart = new Chart(ctx, {
// 	    // The type of chart we want to create
// 	    type: "doughnut",
// 	    // The data for our dataset
// 	    data: {
// 	        labels: ["In Progress", "Complete"],
// 	        datasets: [{
// 	            data: [$("input:checkbox:checked").length, $("input:checkbox:not(:checked)").length],
// 				backgroundColor: [ 'rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)' ]
// 	        }],
// 	    },
// 	    // Configuration options go here
// 	    options: {
// 			title: { display: true, text: "Total Projects: " + ($('.statsLayout').length - 1), position: "top", fontSize: 16},
// 			legend: { display: true },
// 		}
// 	});
//
// }
