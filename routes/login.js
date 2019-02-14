
/*
 * GET home page.
 */

 var data = require('../login_data.json');

exports.view = function(req, res){
  res.render('login');
};
