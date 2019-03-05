
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
// Example route
// var user = require('./routes/user');
var stats = require('./routes/stats');
var statsB = require('./routes/statsB');
var login = require('./routes/login');
//var login = require('./routes/signup');

var addTask = require('./routes/addTask');
var addTaskB = require('./routes/addTaskB')
var editTask = require('./routes/editTask');
var deleteTask = require('./routes/deleteTask');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/page_A', index.view);
app.get('/', index.view);
app.get('/page_B', index.page_B);
// app.get('/calendar', index.view);
// Example route
// app.get('/users', user.list);
app.get('/stats', stats.viewIndividual);
app.get('/stats/:name', stats.viewIndividual);
app.get('/statsB', statsB.viewIndividual);
app.get('/statsB/:name', statsB.viewIndividual);
//app.get('/login', login.loginBox);
app.get('/login', login.loginBox);
//app.get('/signup', signup.view);
app.get('/addTask', addTask.addProject);
app.get('/addTaskB', addTaskB.addProjectB)
app.get('/editTask', editTask.editProject);
app.get('/deleteTask', deleteTask.deleteProject);



//app.post('/login',login.loginBox);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
