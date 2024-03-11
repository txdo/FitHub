const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  fitnessLevel: String,
  goal: String,
  prevWorkouts: [{}],
  sharedWorkouts: { type: [{}], ref: "workouts" },
  profilePicture: String,
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
