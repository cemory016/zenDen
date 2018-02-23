const mongoose = require('mongoose')
const userSchema = require('../db/schemas/usersSchema')


const Users = mongoose.model('users', userSchema)

module.exports = Users