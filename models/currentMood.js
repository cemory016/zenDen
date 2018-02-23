const mongoose = require('mongoose')
const currentMoodSchema = require('../db/schemas/currentMoodSchema')


const CurrentMood = mongoose.model('currentMood', currentMoodSchema)

module.exports = CurrentMood