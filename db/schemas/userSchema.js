const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moodGoalSchema = require('./moodGoalSchema')
const currentMoodSchema = require('./currentMoodSchema')
const blogSchema = require('./blogSchema')


const userSchema = new Schema({
  username: String,
  email: { type: String, required: true, unique: true },
  profile: String,
  current_mood: [ currentMoodSchema ], // This sets up a one to many relationship
  mood_goal: [ moodGoalSchema ],
  advice: String,
})

module.exports = userSchema

// // WHAT IS THIS????? 
// //Use native promises
// //mongoose.Promise = global.Promise;

// UserSchema.pre('save', function(next){
//   now = new Date();
//   this.updated_at = now;
//   if ( !this.created_at ) {
//     this.created_at = now;
//   }
//   next();
// });

// var UserModel = mongoose.model("User", UserSchema);
// var ItemModel = mongoose.model("Item", ItemSchema);

// module.exports = {
//   User: UserModel,
//   Item: ItemModel
// };