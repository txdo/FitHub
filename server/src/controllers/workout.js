const SharedWorkout = require("../models/SharedWorkout");
const User = require("../models/User");
const Workout = require("../models/Workout");

exports.saveWorkout = async (req, res) => {
  if (!req.user)
    return res.status(401).send({ errors: ["User not logged in"] });

  const { workout } = req.body;

  await Workout.create({
    workout,
    owner: req.user._id,
  });

  await User.findByIdAndUpdate(req.user._id, {
    $push: {
      prevWorkouts: workout,
    },
  });

  res.status(201).send({ message: "Workout saved successfully" });
};

exports.getAllWorkouts = async (req, res) => {
  if (!req.user)
    return res.status(401).send({ errors: ["User not logged in"] });

  const workouts = await Workout.find({ owner: req.user._id });

  res.status(200).send({ workouts });
};

exports.saveSharedWorkout = async (req, res) => {
  if (!req.user)
    return res.status(401).send({ errors: ["User not logged in"] });

  const { name, workout } = req.body;

  await SharedWorkout.create({
    name,
    workout,
    owner: req.user._id,
  });

  await User.findByIdAndUpdate(req.user._id, {
    $push: {
      sharedWorkouts: workout,
    },
  });

  res.status(201).send({ message: "Shared workout saved successfully" });
};
