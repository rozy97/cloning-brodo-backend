// load module
require("dotenv/config");
const mysql = require("mysql");

// create connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "brodo"
});

//connect to the database
db.connect(err => {
  if (err) throw err;
  console.log("database connected...");
});

module.exports = db;
