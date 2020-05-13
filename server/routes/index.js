const express = require("express");
const Exercise = require("../db/models/exercise");
const router = express.Router();

router.get("/", async (req, res) => {
  let exercises = await Exercise.find().limit(6).lean();
  res.render("index", { exercises: exercises });
});

module.exports = router;
