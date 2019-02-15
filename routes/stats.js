
/*
 * GET home page.
 */

var projectData = require('../projects.json');

exports.viewIndividual = function(req, res){
    var name = req.params.name;
  res.render('stats', projectData);
};
