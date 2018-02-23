var express = require('express');
var router = express.Router();
const CurrentMood = require('../models/currentMood')
// IMPORTANT: make sure to add merge params
//const router = express.Router({ mergeParams: true })

var indexController = require('../controller/index');
var blogController = require('../controller/blogController');
var currentMoodController = require('../controller/currentMoodController');
var moodGoalController = require('../controller/moodGoalController');
var userController = require('../controller/userController');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource: CURRENTMOOD');
});

module.exports = router;
