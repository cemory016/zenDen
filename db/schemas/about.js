const mongoose = require('mongoose')
const sodaSchema = require('./sodaSchema')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  location: String,
  current_mood: [ currentMoodSchema ], // This sets up a one to many relationship
  mood_goal: [ moodGoalSchema ],
})

module.exports = userSchema