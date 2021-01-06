var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var website = path.join(__dirname, 'project-html');
var project1 = path.join(__dirname, 'project_1/dist');
var project2 = path.join(__dirname, 'project_2/dist');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// project-html ===================
app.get('/', function(req, res) {
  res.sendFile(path.join(website, 'index.html')); 
});
app.use('/',express.static(website));
// project1 =======================
app.get('/project1/', function(req, res) {
  res.sendFile(path.join(project1, 'index.html')); 
});
app.use('/project1/',express.static(project1));
// project2 =======================
app.get('/project2/', function(req, res) {
  res.sendFile(path.join(project2, 'index.html')); 
});
app.use('/project2/',express.static(project2));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
