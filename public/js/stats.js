'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	overallStats();
})

// window.onload = function drawOverallTotal(){
// 	CanvasJS.addColorSet("greyShades",
// 		[//colorSet Array
// 			//"#f2f2f2",
// 			"#e6e6e6",
// 			//"#d9d9d9",
// 			"#cccccc",
// 			"#bfbfbf"
// 		]);
//
// 	var chart = new CanvasJS.Chart("totalProjects", {
// 		//animationEnabled: true,
// 		colorSet:"greyShades",
// 		title:{
// 			text: "Total: 8 Projects",
// 			horizontalAlign: "center",
// 			verticalAlign: "center"
// 		},
// 		data: [{
// 			type: "doughnut",
// 			startAngle: 60,
// 			//innerRadius: 60,
// 			indexLabelFontSize: 16,
// 			indexLabel: "{label}: {y}",
// 			toolTipContent: "<b>{label}:</b> {y} (#percent%)",
// 			dataPoints: [
// 				{ y: 3, label: "Complete" },
// 				{ y: 5, label: "In Progress" }
// 			]
// 		}]
// 	});
// 	chart.render();
// }

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
		//$("tr.individualSection").click(projectClick);
        //$("#chartContainer").onload(drawOverallDonut());
}

function projectClick(e) { 
	console.log("Project Clicked")
    // prevent the page from reloading 
    e.preventDefault();
}

function overallStats() {
	var ctx = $("#myChart");
	var chart = new Chart(ctx, {
	    // The type of chart we want to create
	    type: "doughnut",
	    // The data for our dataset
	    data: {
	        labels: ["In Progress", "Complete"],
	        datasets: [{
	            data: [$('.statsLayout').length - 1, $('.statsLayout').length],
				backgroundColor: [ 'rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)' ]
	        }],
	    },
	    // Configuration options go here
	    options: {
			title: { display: true, text: "Total Projects: " + ($('.statsLayout').length - 1), position: "top", fontSize: 16},
			legend: { display: false },
		}
	});

}
