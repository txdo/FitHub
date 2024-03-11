const User = require("../models/User");

exports.loadUserInfo = async (req, res) => {
  const id = req.body.id;

  let user;
  let isOwner = false;

  if (!id) {
    try {
      user = await User.findOne({ _id: req.user._id });
      isOwner = true;
    } catch {
      return res.status(400).send({ errors: ["User not found"] });
    }
  } else {
    try {
      user = await User.findOne({ _id: id });
      if (user._id == req.user._id) isOwner = true;
    } catch {
      return res.status(400).send({ errors: ["User not found"] });
    }
  }

  const userData = {
    firstName: user.firstName,
    lastName: user.lastName,
    fitnessLevel: user.fitnessLevel,
    goal: user.goal,
    prevWorkouts: user.prevWorkouts,
    sharedWorkouts: user.sharedWorkouts,
    profilePicture: user.profilePicture,
  };

  return res.status(200).send({ user: userData, isOwner });
};

exports.saveGoal = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user._id, {
      goal: req.body.goal,
    });
    return res.status(200).send({ message: "Goal set successfully" });
  } catch {
    return res.status(400).send({ errors: ["User not found"] });
  }
};
