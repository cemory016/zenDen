
var express = require('express');
var router = express.Router({mergeParams: true});
const User = require('../models/users')

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
          user: user,
      })
  })

})
//USER PATCH------PUT/UPDATE//
router.post('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, {
    username: req.body.name,
    email: req.body.email,
    profile: req.body.profile,
  }, {new: true}).then((updatedUser) => {
      console.log(updatedUser);
      res.redirect(`/users/${updatedUser.id}`)
  })
})

//USER------CREATE/POST//
router.post('/', (req, res) => {
const newUser = new User({
  username: req.body.name,
  email: req.body.email,
  profile: req.body.profile,
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
          profile: profile,

      })
  })
})


//USER DELETE-------DESTROY//

router.delete('/:id', (req, res) => {
User.findByIdAndRemove(req.params.id).then(() => {
  res.redirect('/users')
})
})

module.exports = router