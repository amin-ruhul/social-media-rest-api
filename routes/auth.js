const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const router = express.Router();

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
    console.log(error);
  }
});

module.exports = router;
