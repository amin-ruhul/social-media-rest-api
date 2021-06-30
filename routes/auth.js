const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.get("/register", async (req, res) => {
  const user = await new User({
    username: "ruhul",
    email: "ruhul@gmail.com",
    password: "ruhul123",
  });

  console.log("Before Save");
  console.log(user);

  const Dbuser = await user.save();
  console.log("After Save");
  console.log(Dbuser);

  res.send("register");
});

module.exports = router;
