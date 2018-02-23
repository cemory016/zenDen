const mongoose = require('mongoose')
const userSchema = require('../db/schemas/userSchema')


const Users = mongoose.model('users', userSchema)

module.exports = Users