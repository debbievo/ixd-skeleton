'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})
var data = {
    datasets: [{
        data: [10, 20, 30]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
};
var overalDonutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});
/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
		//$("tr.individualSection").click(projectClick);
        $("#overallDonutChart").text(overalDonutChart);
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
