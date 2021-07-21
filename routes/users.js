const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello from user");
});

router.post("/myprofile", (req, res) => {
  const newUser = new User({
    username: "",
  });
});

router.post("/flow", (req, res) => {});

router.post("/update", (req, res) => {});
module.exports = router;
