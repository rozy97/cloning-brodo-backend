// load module
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
require("dotenv/config");

// initial express
const app = express();
const port = 6969;

const middleware = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(middleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));

// server listening
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
