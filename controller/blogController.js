
var express = require('express');
var router = express.Router({ mergeParams: true });
const User = require('../models/users');
var Blog = require('../models/blogs');
const CurrentMood = require('../models/currentMood');
const MoodGoal = require('../models/moodGoals');

var indexController = require('../controller/index');
var blogController = require('../controller/blogController');
var currentMoodController = require('../controller/currentMoodController');
var moodGoalController = require('../controller/moodGoalController');
var userController = require('../controller/userController');

//USER INDEX-------GET//`
router.get('/', (req, res) => {

    Blog.find().then((blogs) => {
      console.log("blog index listening")
        res.render('users/blog/index', {
            blogs: blogs
        })
    })
  
  })
  
  //USER NEW------GET//
  router.get('/user/:id/blog/new', (req, res) => {
  res.render('users/blog/new')
  })
  
  //USER SHOW-----GET//
  router.get('/:id', (req, res) => {
  
    Blog.findById(req.params.id).then((blog) => {
        res.render('users/blog/show', {
            blog: blog,
        })
    })
  
  })
  
  
  // //USER PATCH------PUT/UPDATE//
  // router.patch('/user/:id/blog', (req, res) => {
  //   blog.findByIdAndUpdate(req.params.id, {
  //       title: req.body.title,
  //       words: req.body.words,
  //   }, {new: true}).then((updatedBlog) => {
  //       console.log(updatedBlog);
  //       res.redirect(`blog/users/${updatedUser.id}`)
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // })
  
  // router.delete('blog/:id', (req, res) => {
  //   console.log("trying to delete");
  //   Blog.findByIdAndRemove(req.params.id).then(() => {
  //     console.log("trying to delete");
  //     res.redirect('blog/users')
  //   })
  //   .catch((err)=>{
  //     console.log(err)
  //   })
  // })
  
  // //USER------CREATE/POST//
  // router.post('/', (req, res) => {
  // const newUser = new User({
  //   username: req.body.name,
  //   email: req.body.email,
  //   profile: req.body.profile,
  // })
  
  // newUser.save().then((savedUser) => {
  //   res.redirect(`/users/${savedUser._id}`)
  // })
  // })
  
  // //USER EDIT-----GET//
  // router.get('/:id/edit', (req, res) => {
  
  //   User.findById(req.params.id).then((user) => {
  
  //       res.render('users/edit', {
  //           id: req.params.id,
  //           user: user,
  //           profile: user.profile,
  
  //       })
  //   })
  //   .catch((err) =>{
  //     console.log(err)
  // })
  //})


module.exports = router;