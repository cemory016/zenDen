// Needed to read the .env file
require('dotenv').config()

const mongoose = require('mongoose')

// Notice we import the MODELS not the SCHEMA
const user = require('../models/users')
const moodGoalSchema = require('../models/moodGoals')
const currentMoodSchema = require('../models/currentMood')
const blogSchema = require('../models/blog')

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
  email: "carmen@gmail.com",
  current_mood: [currentMoodSchema], // This sets up a one to many relationship
  mood_goal: [moodGoalSchema],
  tagLine: "Don't Worry Be Happy",
  img: "images/charles-deluvio-540415-unsplash.jpg"
})
const emily = new user({
  username: "Emily",
  email: "emory@gmail.com",
  current_mood: [currentMoodSchema], // This sets up a one to many relationship
  mood_goal: [moodGoalSchema],
  tagLine: "Don't Worry",
  img: "images/charles-deluvio-540415-unsplash.jpg"
})
const sarah = new user({
  username: "Sarah",
  email: "sarah@gmail.com",
  current_mood: [currentMoodSchema], // This sets up a one to many relationship
  mood_goal: [moodGoalSchema],
  tagLine: "Be Happy",
  img: "images/charles-deluvio-540415-unsplash.jpg"
})

// remove all usernames


// THEN remove all users
user.remove()
  .then(() => {

    // THEN save multiple users to the database
    return user.insertMany([sarah, emily, carmen])
  }).then(() => {

    // THEN close the database
    console.log('Saved Successfully')
    db.close()
  }).catch((err) => {

    // If there are any errors, log it and then close the DB
    console.log(err)
    db.close()
  })