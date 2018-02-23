const mongoose = require('mongoose')
const moodGoalSchema = require('../db/schemas/moodGoalSchema')


const MoodGoals = mongoose.model('moodGoals', moodGoalSchema)

module.exports = MoodGoals