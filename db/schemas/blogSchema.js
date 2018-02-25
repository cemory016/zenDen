const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moodGoalSchema = require('./moodGoalSchema')
const currentMoodSchema = require('./currentMoodSchema')

mongoose.Promise = global.Promise

const blogSchema = new Schema({
    current_mood: [ currentMoodSchema ],
    mood_goal: [ moodGoalSchema ],
    words: String,
    created_at: Date,
    updated_at: Date,
})

module.exports = blogSchema