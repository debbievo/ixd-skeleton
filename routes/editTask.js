
/*
 * GET home page.
 */
var data = require('../projects.json');

/*exports.view = function(req, res){
  res.render('editTask');
};
*/
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}

exports.editProject = function(req, res) {
	console.log(req);
	var name = req.query.editProject;
	var dueDate = req.query.editDueDate;
	var today = new Date();
	var startDate = mm +'/'+ dd +'/'+ yyyy;
<<<<<<< HEAD
	var project = {"name":name, "startDate":startDate, "dueDate": dueDate};
=======

    var name2 = name.replace(req);
    var dueDate2 = dueDate.replace(req);
	var project = {"name":name2, "startDate":startDate, "dueDate": dueDate2};
>>>>>>> 6edcf797879a12947ac34e702d1568a88a2e9aee
	//if we want to do a trash button
    //data.projectList.pop(project);

	// console.log(name, startDate, dueDate);
    // console.log(data["projectList"].length);
	res.render('index', data);
};
