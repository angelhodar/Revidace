require("dotenv").config();

const mongoose = require("mongoose");

var MONGO_URI = process.env.MONGO_LOCAL
  ? process.env.MONGO_LOCAL
  : process.env.MONGO_CLUSTER;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error to MongoDB!"));
db.once("open", () => console.log("Connected to MongoDB!"));

module.exports = db;
