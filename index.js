const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

PORT = 5000;

dotenv.config();
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to MongoDB");
  }
);

app.listen(PORT, () => {
  console.log(`server running at: http://localhost:${PORT}`);
});
