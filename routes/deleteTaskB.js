
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

//Checks countries.result for an object with a property of 'id' whose value is 'AF'
//Then removes it ;p

exports.deleteProjectB = function(req, res) {
	// console.log(req);
	var name = req.query.deleteProjName;
	console.log(name);
    //data.projectList.splice(,1);
	findAndRemove(data.projectList, 'name', name);
	//delete data.
	// console.log(name, startDate, dueDate);
    // console.log(data["projectList"].length);
	res.redirect('/page_B');
	res.render('index', data);
};
