
/*
 * GET home page.
 */
var data = require('../projects.json');

/*exports.view = function(req, res){
  res.render('deleteTask');
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

function findAndRemove(array, property, value) {
  array.forEach(function(result, index) {
    if(result[property] === value) {
      //Remove from array
      array.splice(index, 1);
    }
  });
}

//Checks countries.result for an object with a property of 'id' whose value is 'AF'
//Then removes it ;p

exports.deleteProject = function(req, res) {
	console.log(req);
	var name = req.query.deleteProject;
	console.log(name);
    //data.projectList.splice(,1);
	findAndRemove(data.projectList, 'name', name);
	//delete data.
	// console.log(name, startDate, dueDate);
    // console.log(data["projectList"].length);
	res.redirect('/page_A');
	res.render('index', data);
};
