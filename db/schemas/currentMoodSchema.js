const mongoose = require('mongoose')
const Schema = mongoose.Schema


const currentMoodSchema = new Schema({
    mood: String,
    define: String,
})

module.exports = currentMoodSchema