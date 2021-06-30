const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const router = express.Router();

// register user
router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hasPassword = await bcrypt.hash(req.body.password, salt);
  const user = await new User({
    username: req.body.username,
    email: req.body.email,
    password: hasPassword,
  });

  try {
    const dbUser = await user.save();
    res.status(200).json(dbUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// login user
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).send("User Not Registered");
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).send("Password not match");

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
