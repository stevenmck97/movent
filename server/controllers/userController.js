const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

exports.registerUser = asyncHandler(async function (req, res) {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({ email, password: hashedPassword, name });
  if (user) {
    res.status(201);
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

exports.loginUser = asyncHandler(async function (req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  const isMatch = await bcrypt.compare(password, user.password);

  if (user && isMatch) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});
