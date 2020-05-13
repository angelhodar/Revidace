const express = require("express");
const Exercise = require("../db/models/exercise");
const router = express.Router();

router.get("/", async (req, res) => {
  let exercises = await Exercise.find().lean();
  res.render("dashboard/exercises", {
    user: req.user,
    exercises: exercises,
  });
});

router.get("/new", (req, res) => {
  // TODO: Create the exercise form view and route
});

router.post("/new", (req, res) => {
  // TODO: Submit that new exercise
});

module.exports = router;
