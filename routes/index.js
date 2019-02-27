
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
   data['page_B']=false;
   res.render('index',data);
 };

 exports.viewAlt = function(req, res){
   data['page_B']=true;
   res.render('index',data);
 };
