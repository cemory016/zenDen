// Needed to read the .env file
require('dotenv').config()

const mongoose = require('mongoose')

// Notice we import the MODELS not the SCHEMA
//const Soda = require('../models/soda')
const user = require('../models/users')
const moodGoalSchema = require('../models/moodGoals')
const currentMoodSchema = require('../models/currentMood')

// remember that this is a standalone file, meaning we will run this
// by writing `node db/seeds.js`
mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection
db.on('open', () => {
  console.log('SEEDS Successfully connected to mongoDB')
})
db.on('error', (err) => {
  console.log(err)
})

// Setting up all of our test data
const carmen = new user({
    username: "Carmen",
    email: { type: "carmen@gmail.com", required: true, unique: true },
    current_mood: [ currentMoodSchema ], // This sets up a one to many relationship
    mood_goal: [ moodGoalSchema ],
    advice: "Don't Worry Be Happy",
  })
  const emilya = new user({
    username: "Emily",
    email: { type: "emory@gmail.com", required: true, unique: true },
    current_mood: [ currentMoodSchema ], // This sets up a one to many relationship
    mood_goal: [ moodGoalSchema ],
    advice: "Don't Worry",
  })
  const sarah = new user({
    username: "Sarah",
    email: { type: "sarah@gmail.com", required: true, unique: true },
    current_mood: [ currentMoodSchema ], // This sets up a one to many relationship
    mood_goal: [ moodGoalSchema ],
    advice: "Be Happy",
  })

// // remove all Sodas
// Soda.remove().then(() => {

//   // THEN remove all Companies
//   return Company.remove()
// }).then(() => {

//   // THEN save multiple companies to the database
//   return Company.insertMany([ coke, pepsi ])
// }).then(() => {

//   // THEN close the database
//   console.log('Saved Successfully')
//   db.close()
// }).catch((err) => {

//   // If there are any errors, log it and then close the DB
//   console.log(err)
//   db.close()
// })