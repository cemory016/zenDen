
var express = require('express');
var router = express.Router({ mergeParams: true });
var User = require('../models/users');
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
    User.findById(req.params.usersId).then((user) =>{
        const blogs = user.blog
        res.render('users/blog/index', {
            user: user,
            blogs: blogs,
            id: req.params.usersId,
        })
    })
  
  })
  
  //USER NEW------GET//
  router.get('/new', (req, res) => {
    
  res.render('users/blog/new', {
    id: req.params.usersId,
  })
  })
  
  //USER SHOW-----GET//
  router.get('/:id', (req, res) => {
    User.findById(req.params.usersId).then((user) =>{
        const blog = user.blog.id(req.params.id)
        res.render('users/blog/show', {
            blogID: req.params.id,
            id: req.params.usersId,
            user: user,
            blog: blog, 
        })
    })
  
  })
  
  
  //USER PATCH------PUT/UPDATE//
  router.patch('/:id/blogs', (req, res) => {
    Blog.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        words: req.body.words,
    }, {new: true}).then((updatedBlog) => {
        console.log(updatedBlog);
        res.redirect(`users/:id/blogs/${updatedBlog.id}`)
    })
    .catch((err) => {
      console.log(err);
    })
  })
  
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
  router.post('/', (req, res) => {
  User.findById(req.params.usersId).then((user) => {
      const newBlog = new Blog({ 
          title: req.body.title,
          words: req.body.words,
      })
      user.blog.push(newBlog)
      return user.save()
    }).then((updatedUser) => {
        res.redirect(`/users/${req.params.usersId}/blogs`)
    })
  })
  
  //USER EDIT-----GET//
  router.get('/:id/edit', (req, res) => {
        User.findById(req.params.usersId).then((user) =>{
        const blog = user.blog.id(req.params.id)
        res.render('users/blog/edit', {
            blogID: req.params.id,
            id: req.params.usersID,
            user: user,
            blog: blog,
        })
    })
    .catch((err) =>{
      console.log(err)
  })
  })


module.exports = router;