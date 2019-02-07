
/*
 * GET home page.
 */
exports.viewIndividual = function(req, res){
    var name = req.params.name;
  res.render('stats', {
      'projectName':name
  });
};
