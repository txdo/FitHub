const mongoose = require("mongoose");

const SharedWorkoutSchema = new mongoose.Schema({
  name: String,
  workout: [{}],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});
const SharedWorkout = mongoose.model("shared-workout", SharedWorkoutSchema);

module.exports = SharedWorkout;
