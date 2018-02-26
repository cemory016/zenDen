const mongoose = require('mongoose')
const blogSchema = require('../db/schemas/blogSchema')


const Blog = mongoose.model('blogs', blogSchema)

module.exports = Blog