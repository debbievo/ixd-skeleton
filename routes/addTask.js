
/*
 * GET home page.
 */
var data = require('../projects.json');

/*exports.view = function(req, res){
  res.render('addTask');
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

exports.addProject = function(req, res) { 
	console.log(req);
	var name = req.query.projectName;
	var dueDate = req.query.dueDate;
	var today = new Date();
	var startDate = mm +'/'+ dd +'/'+ yyyy;
	var newProject = {"name":name, "startDate":startDate, "dueDate": dueDate};
	data.projectList.push(newProject);
	console.log(name, startDate, dueDate);
	res.render('index', data);
 };
