const mongoose = require('mongoose')
const userSchema = require('./userSchema')
const Schema = mongoose.Schema

const userSchema = new User({
  username: String,
  email: { type: String, required: true, unique: true },
  current_mood: [ currentMoodSchema ], // This sets up a one to many relationship
  mood_goal: [ moodGoalSchema ],
  created_at: Date,
  updated_at: Date,
  advice: String,
})

module.exports = userSchema

// WHAT IS THIS????? 
//Use native promises
//mongoose.Promise = global.Promise;

UserSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

var UserModel = mongoose.model("User", UserSchema);
var ItemModel = mongoose.model("Item", ItemSchema);

module.exports = {
  User: UserModel,
  Item: ItemModel
};