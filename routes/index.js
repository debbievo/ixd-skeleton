
/*
 * GET home page.
 */
/*
 *exports.view = function(req, res){
 *  res.render('index');
 *};
 */

var data = require('../projects.json');

 exports.view = function(req, res){
   res.render('index',data);
 }
