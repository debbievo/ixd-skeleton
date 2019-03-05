
/*
 * GET home page.
 */
var data = require('../projects.json');

/*exports.view = function(req, res){
  res.render('deleteTask');
};
*/

function findAndRemove(array, property, value) {
  array.forEach(function(result, index) {
    if(result[property] === value) {
      //Remove from array
      array.splice(index, 1);
      console.log("deleted " + value);
    }
  });
}

exports.deleteProject = function(req, res) {
	// console.log(req);
	var name = req.query.deleteProjName;
	console.log(name);
    //data.projectList.splice(,1);
	findAndRemove(data.projectList, 'name', name);
	//delete data.
	console.log(name);
  console.log(data["projectList"].length);
	res.render('index', data);
};
