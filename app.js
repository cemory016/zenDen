require('dotenv').config();

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var hbs = require('hbs');
var app = express();

//Controllers (require is pulling a file):
var userController = require('./controller/userController.js');
var currentMoodController = require('./controller/currentMoodController.js')
var moodGoalController = require('./controller/moodGoalController.js')
var aboutController = require('./controller/aboutController.js')
var blog = require('./controller/blogController.js');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

var mongoose = require('mongoose');
//mongoose.connect('process.env.MONGODB_URI');
mongoose.connect('mongodb://localhost/zenden');
var db = mongoose.connection
db.on('open', () => {
  console.log('Successfully connected to mongoDB')
})

db.on('error', (err) => {
  console.log(err)
})
// First argument here is the entry point for the controller
// Second argument is the controller itself
var index = require('./controller/index');
var users = require('./controller/userController');
var currentMood = require('./controller/currentMoodController');
var moodGoals = require('./controller/moodGoalController');
var about = require('./controller/aboutController')
var blog = require('./controller/blogController');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// this is the route being typed in bowser:
app.use('/', index);
app.use('/users', users);
app.use('/about', about);
//app.use('/users/:usersId/blog', blogController)
//app.use(ß'/users/:usersId/currentMood', currentMoodController)
//app.use('/users/:usersId/moodGoal', moodGoalController)


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

// // Will log an error if db can't connect to MongoDB
// db.on('error', function (err) {
//   console.log(err)
// })
// // Will log "database has been connected" if it successfully connects.
// db.once('open', function () {
//   console.log('database has been connected!')
// })


  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
