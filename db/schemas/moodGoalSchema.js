const mongoose = require('mongoose')
const Schema = mongoose.Schema


const moodGoalSchema = new Schema({
    mood: String,
    define: String,
})

module.exports = moodGoalSchema