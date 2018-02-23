const mongoose = require('mongoose')
const blogSchema = require('../db/schemas/blogSchema')


const Blog = mongoose.model('blog', blogSchema)

module.exports = Blog