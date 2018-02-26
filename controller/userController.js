
var express = require('express');
var router = express.Router();
const User = require('../models/users')
const Blog = require('../models/blogs');
// IMPORTANT: make sure to add merge params
//const router = express.Router({ mergeParams: true })

var indexController = require('../controller/index');
var blogController = require('../controller/blogController');
var currentMoodController = require('../controller/currentMoodController');
var moodGoalController = require('../controller/moodGoalController');
var userController = require('../controller/userController');


//USER INDEX-------GET//`
router.get('/', (req, res) => {

  User.find().then((users) => {
      res.render('users/index', {
          users: users
      })
  })

})

//USER NEW------GET//
router.get('/new', (req, res) => {
res.render('users/new')
})

//USER SHOW-----GET//
router.get('/:id', (req, res) => {

  User.findById(req.params.id).then((user) => {
      res.render('users/show', {
        id: req.params.id,
        user: user,
        profile: user.profile,
        tagLine: user.tagLine,
      })
  })

})

//USER PATCH------PUT/UPDATE//
router.patch('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, {
    username: req.body.name,
    email: req.body.email,
    profile: req.body.profile,
    tagLine: req.body.tagLine,
  }, {new: true}).then((updatedUser) => {
      console.log(updatedUser);
      res.redirect(`/users/${updatedUser.id}`)
  })
  .catch((err) => {
    console.log(err);
  })
})

//USER PATCH MOOD -------- PUT/UPDATE//
router.patch('/:id/mood', (req, res) => {
//advice function
console.log("inside user patch")
  User.findByIdAndUpdate(req.params.id, {
      current_mood: req.body.currentMood,
      mood_goal: req.body.moodGoal,

  }, {new: true}).then((updatedUser) => {
      console.log(updatedUser);
      res.redirect(`/users/${updatedUser.id}`)
  })
  .catch((err) => {
    console.log(err);
  })
})

router.delete('/:id', (req, res) => {
  console.log("trying to delete");
  User.findByIdAndRemove(req.params.id).then(() => {
    console.log("trying to delete");
    res.redirect('/users')
  })
  .catch((err)=>{
    console.log(err)
  })
})

//USER------CREATE/POST//
router.post('/', (req, res) => {
const newUser = new User({
  username: req.body.name,
  email: req.body.email,
  profile: req.body.profile,
  tagLine: req.body.tagLine,
})

newUser.save().then((savedUser) => {
  res.redirect(`/users/${savedUser._id}`)
})
})

//USER EDIT-----GET//
router.get('/:id/edit', (req, res) => {

  User.findById(req.params.id).then((user) => {

      res.render('users/edit', {
          id: req.params.id,
          user: user,
          profile: user.profile,
          tagLine: user.tagLine,

      })
  })
  .catch((err) =>{
    console.log(err)
})
})

//USER DELETE-------DESTROY//




module.exports = router