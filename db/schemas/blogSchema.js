const mongoose = require('mongoose')
const Schema = mongoose.Schema


const BlogSchema = new Schema({
    mood: String,
    define: String,
    created_at: Date,
    updated_at: Date,
})

module.exports = blogSchema