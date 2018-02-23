const mongoose = require('mongoose')
const UserSchema = require('../db/schemas/usersSchema')


const Users = mongoose.model('users', userSchema)

module.exports = Users