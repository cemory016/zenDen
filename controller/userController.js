
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


/* GET users listing. once listening delete or there will be a conflict. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource: USER');
// });








//tried this below
/* GET Index/home page. */
// router.get('/', (req, res) => {

// //   // Find the company by route params defined in app.js
// User.findById(req.params.userID).then((username) => {

//     // Pass all sodas and the company to a view specifically for showing all sodas
//     const user = user.CurrentMood
//     res.render('user/index', {
//       currentMood: currentMood,
//       user: user
//     })
//   })
// })

// NEW
// GET
// router.get('/new', (req, res) => {

//   // We only need to pass the company ID to this new view
//   res.render('user/new', {
//     companyId: req.params.userId
//   })
// })

// // CREATE
// // POST
// router.post('/', (req, res) => {

//   // Get company we need to save soda to
//   user.findById(req.params.companyId).then((company) => {

//     // THEN once we have the company, take req.body and make a new Soda
//     const newUser = new User({
//       name: req.body.name,
//       about: req.body.about,
//       currentMood: req.body.currentMood,
//       moodGoal: req.body.moodGoal,
//       blog: req.body.blog
//     })

// //     // Push Soda to company.sodas
// //     company.sodas.push(newSoda)

// //     // Save Company
// //     return company.save()
// //   }).then((updatedCompany) => {

// //     // Redirect to all sodas
// //     res.redirect(`/companies/${req.params.companyId}/sodas`)
// //   })
// // })


// // SHOW
// // router.get('/:id', (req, res) => {

// //   // Find company from companyId route param
// //   Company.findById(req.params.companyId).then((company) => {

// //     // Use the .id method to extract a single soda from company.sodas
// //     const soda = company.sodas.id(req.params.id)

// //     // connect it to a soda/show view
// //     res.render('soda/show', {
// //       companyId: req.params.companyId,
// //       soda: soda
// //     })
// //   })
// // })

// // EDIT
// // // GET
// // router.get('/:id/edit', (req, res) => {

// //   // Make sure to take a look at the soda/edit file. It will show you a lot concerning how 
// //   // to connect the initial values to this edit page
// //   Company.findById(req.params.companyId).then((company) => {
// //     const soda = company.sodas.id(req.params.id)
// //     res.render('soda/edit', {
// //       companyId: req.params.companyId,
// //       soda: soda
// //     })
// //   })
// // })

// // UPDATE
// // PUT/PATCH
// router.patch('/:id', (req, res) => {
//   Company.findById(req.params.companyId).then((company) => {

//     // We don't have a nice method like findByIdAndUpdate here
//     // so instead we need to manually change the sodas values
//     const soda = company.sodas.id(req.params.id)
//     soda.name = req.body.name
//     soda.price = req.body.price
//     soda.packaging = req.body.packaging
//     soda.quantitySold = req.body.quantitySold

//     // Then Save the company
//     return company.save()
//   }).then((updatedCompany) => {
//     res.redirect(`/companies/${updatedCompany._id}/sodas/${req.params.id}`)
//   })
// })

// // DESTROY
// // DELETE
// router.delete('/:id', (req, res) => {
//   Company.findById(req.params.companyId).then((company) => {
//     const soda = company.sodas.id(req.params.id)
//     soda.remove()
//     return company.save()
//   }).then(() => {
//     res.redirect(`/companies/${req.params.companyId}/sodas`)
//   })
// })
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
          user: user
      })
  })

})
//USER------CREATE/POST//
router.post('/', (req, res) => {
const newUser = new User({
  name: req.body.name,
})

newUser.save().then((savedUser) => {
  res.redirect('/users')
})
})

//USER EDIT-----GET//
router.get('/:id/edit', (req, res) => {

  User.findById(req.params.id).then((user) => {

      res.render('users/edit', {
          id: req.params.id,
          user:user
      })
  })
})

//USER PATCH------PUT/UPDATE//
router.patch('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, {
    name: req.body.username,
   // img: req.body.img,
  }, {new: true}).then((updatedUser) => {
      res.redirect(`/users/${updatedUser._id}`)
  })
})

//USER DELETE-------DESTROY//

router.delete('/:id', (req, res) => {
User.findByIdAndRemove(req.params.id).then(() => {
  res.redirect('/users')
})
})

module.exports = router