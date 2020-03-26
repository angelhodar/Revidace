const express = require('express')
const BaseExercise = require('../models/exercise')
const router = express.Router()

router.get('/', async (req, res) => {
  let exercises = await BaseExercise.find()
  exercises = exercises.map(function(exercise) {return exercise.toObject()})
  res.render('exercises', {exercises: exercises})
})

module.exports = router