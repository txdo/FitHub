const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema(
  {
    name: String,
    workout: [{}],
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  },
  { timestamps: true }
);

const Workout = mongoose.model("workouts", WorkoutSchema);

module.exports = Workout;
