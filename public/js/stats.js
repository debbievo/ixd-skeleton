'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

window.onload = function drawOverallTotal(){
	CanvasJS.addColorSet("greyShades",
		[//colorSet Array
			//"#f2f2f2",
			"#e6e6e6",
			//"#d9d9d9",
			"#cccccc",
			"#bfbfbf"
		]);

	var chart = new CanvasJS.Chart("totalProjects", {
		//animationEnabled: true,
		colorSet:"greyShades",
		title:{
			text: "Total: 8 Projects",
			horizontalAlign: "center",
			verticalAlign: "center"
		},
		data: [{
			type: "doughnut",
			startAngle: 60,
			//innerRadius: 60,
			indexLabelFontSize: 16,
			indexLabel: "{label}: {y}",
			toolTipContent: "<b>{label}:</b> {y} (#percent%)",
			dataPoints: [
				{ y: 3, label: "Complete" },
				{ y: 5, label: "In Progress" }
			]
		}]
	});
	chart.render();
}

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
    // In an event handler, $(this) refers to 
    // the object that triggered the event 
    $(this).css("background-color", "#7fff00");
    var containingProject = $(this).closest(".individualSection");
    var description = $(containingProject).find(".individual-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='individual-description'><p>Description of the project.</p></div>");
    } else {
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
       $(description).fadeOut();
       $(this).css("background-color", "transparent");
    }
}
