const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const { validateData } = require("../utils/authValidator");
require("dotenv").config();

exports.isLoggedIn = async (req, res) => {
  if (req.user) {
    return res.status(200).send({ isLoggedIn: true });
  }

  res.status(401).send({ isLoggedIn: false });
};

exports.logout = async (req, res) => {
  if (!req.user) {
    return res.status(400).send({ errors: ["User not logged in"] });
  }

  res
    .clearCookie("accessToken", { sameSite: "lax" })
    .status(200)
    .send({ message: "User logged out successfully" });
};

exports.register = async (req, res) => {
  if (req.user) {
    return res.status(400).send({ errors: ["User already logged in"] });
  }

  const errors = validateData(req.body);

  if (errors.length > 0 && req.file) {
    const profilePicturePath = req.file.path;
    fs.unlinkSync(profilePicturePath);

    return res.status(400).send({ errors });
  }

  if (await User.findOne({ username: req.body.username })) {
    const profilePicturePath = req.file.path;
    fs.unlinkSync(profilePicturePath);
    return res.status(400).send({ errors: ["Username already exists"] });
  }

  const passwordHash = await bcrypt.hash(req.body.password, 10);

  const user = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: passwordHash,
    profilePicture: req.file.filename,
  });

  const token = jwt.sign(
    { _id: user._id, firstName: user.firstName, lastName: user.lastName },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  return res
    .status(201)
    .cookie("accessToken", token, { sameSite: "lax" })
    .send({ message: "User created successfully" });
};

exports.login = async (req, res) => {
  if (req.user) {
    return res.status(400).send({ errors: ["User already logged in"] });
  }

  const user = await User.findOne({ username: req.body.username });

  if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(400).send({ errors: ["Invalid credentials"] });
  }

  const token = jwt.sign(
    { _id: user._id, firstName: user.firstName, lastName: user.lastName },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  res
    .status(200)
    .cookie("accessToken", token, { sameSite: "lax" })
    .send({ message: "Logged in successfully" });
};
